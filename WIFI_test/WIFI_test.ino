#include <ESP8266WiFi.h>;
#include <ESP8266HTTPClient.h>;

const char* ssid = "hardhack";
const char* password = "hardhack";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);   //WiFi connection
 
  while (WiFi.status() != WL_CONNECTED) {
 
    delay(500);
    Serial.println("Waiting for connection");
 
  }

}

void loop() {
  getResponse("http://jsonplaceholder.typicode.com/users/1");

  delay(10000);

}

String getResponse(String url) {
  HTTPClient http;  //Declare an object of class HTTPClient

  http.begin(url);  //Specify request destination
  int httpCode = http.GET();           //Send the request
   
  if (httpCode > 0) { //Check the returning code
  String payload = http.getString();   //Get the request response payload
  Serial.println(payload);                     //Print the response payload
  return payload;
  }
}
