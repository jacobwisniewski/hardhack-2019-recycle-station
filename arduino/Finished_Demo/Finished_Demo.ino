#include <ESP8266WiFi.h>;
#include <ESP8266HTTPClient.h>;

#include <MFRC522.h>
#include <SPI.h>

#include <Servo.h>

#define SS_PIN D4
#define RST_PIN D8

Servo servo1;
Servo servo2;

// Wifi credentials
const char* ssid = "hardhack";
const char* password = "hardhack";

const String joseph = " 04 39 2e 8a d1 4a 80";
const String eddie = " 04 2c 31 8a cf 3e 80";
const String steven = " 04 6d 27 62 d8 4a 80";
const String jacob = " 95 b8 89 27";

bool userIsLoggedIn = false;
String currentUser = "";
int userLoginTime = 0;

const int RED_PIN = D3;
const int GREEN_PIN = D10;

const char r = 'r';
const char g = 'g';
const char b = 'b';

MFRC522 rfid(SS_PIN, RST_PIN);

void setup() {
  servo1.attach(D2);
  servo1.write(0);

  servo2.attach(D9);
  servo2.write(180);
  
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);

  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.println("Waiting for connection");
  }
  
  
  Serial.begin(9600);
  SPI.begin();
  rfid.PCD_Init();

  Serial.println("READY");

}

void loop() {
  updateUser();
  if (userIsLoggedIn) {
    String response = getResponse("http://192.168.43.143:5000/");
    if (response == "\"Y\"\n") {
      Serial.println("Recycleable object detected");
      changeColour(g);

      Serial.println("Start");

      servo1.write(90);
      servo2.write(90);

      Serial.println(servo1.read());
      Serial.println(servo2.read());
      
      delay(1000);

      servo1.write(0);
      servo2.write(180);

      Serial.println(servo1.read());
      Serial.println(servo2.read());
      
      Serial.println("End");
      
    } else {
      Serial.println(response);
      changeColour(r);
    }
  }
}

void updateUser() {
  if (!userIsLoggedIn || millis() - userLoginTime > 50000) {
    userIsLoggedIn = false;
    changeColour(b);
    String user = readRFID();
    if (user != "") {
  
      if (user == steven) {
        currentUser = "steven";
        userIsLoggedIn = true;
        userLoginTime = millis();
        changeColour(g);
      } else if (user == joseph) {
        currentUser = "joseph";
        userIsLoggedIn = true;
        userLoginTime = millis();
        changeColour(g);
      } else if (user == eddie) {
        currentUser = "eddie";
        userIsLoggedIn = true;
        userLoginTime = millis();
        changeColour(g);
      } else if (user == jacob) {
        currentUser = "jacob";
        userIsLoggedIn = true;
        userLoginTime = millis();
        changeColour(g);
      }
      Serial.println(currentUser);
    }
  }

}

String readRFID() {
      // Look for new cards
  if (rfid.PICC_IsNewCardPresent()) {
    rfid.PICC_ReadCardSerial();
  
    //Show UID on serial monitor
    
    String content= "";
    for (byte i = 0; i < rfid.uid.size; i++) 
    {
       content.concat(String(rfid.uid.uidByte[i] < 0x10 ? " 0" : " "));
       content.concat(String(rfid.uid.uidByte[i], HEX));
    }
    return content;
  }
 return ""; 
}

void changeColour(char colour) {
  switch(colour) {
    case r:
      digitalWrite(RED_PIN, HIGH);
      digitalWrite(GREEN_PIN, LOW);
      break;
    case g:
      digitalWrite(RED_PIN, LOW);
      digitalWrite(GREEN_PIN, HIGH);
      break;
    case b:
      digitalWrite(RED_PIN, LOW);
      digitalWrite(GREEN_PIN, LOW);
      break;
  }
}

String getResponse(String url) {
  HTTPClient http;  //Declare an object of class HTTPClient

  http.begin(url);  //Specify request destination
  int httpCode = http.GET();           //Send the request
   
  if (httpCode > 0) { //Check the returning code
  String payload = http.getString();   //Get the request response payload
  Serial.println("payload" + payload); //Print the response payload
  return payload;
  }
}
