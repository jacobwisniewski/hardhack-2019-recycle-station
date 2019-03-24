#include <Servo.h>
#include <MFRC522.h>
#include <SPI.h>

#define SS_PIN 10
#define RST_PIN 9

MFRC522 rfid(SS_PIN, RST_PIN);

Servo servo;
String uidString;

const String joseph = " 04 39 2e 8a d1 4a 80";
const String eddie = " 04 2c 31 8a cf 3e 80";
const String steven = " 04 6d 27 62 d8 4a 80";
const String jacob = " 95 b8 89 27";


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600); 
  SPI.begin();
  rfid.PCD_Init();
  Serial.print("Hello");
  servo.attach(8);
  servo.write(0);
  delay(2000);
}

void loop() {
  servo.write(90);
  delay(1000);
  servo.write(0);
  delay(1000);
  if(rfid.PICC_IsNewCardPresent())
  {
    Serial.println("SOMETHING IS ACTUALLY HAPPENING");
    Serial.println(readRFID());
  }
}

String readRFID()
{
  uidString = "";
  
  rfid.PICC_ReadCardSerial();
  MFRC522::PICC_Type piccType = rfid.PICC_GetType(rfid.uid.sak);
  for (byte i = 0; i < rfid.uid.size; i++) 
  { 
    uidString += String(rfid.uid.uidByte[i] < 0x10 ? " 0" : " ");
    uidString += String(rfid.uid.uidByte[i], HEX);
  }
  Serial.println(uidString);
  if (uidString == steven) {
    return "steven";
  } else if (uidString == joseph) {
    return "joseph";
  } else if (uidString == eddie) {
    return "eddie";
  } else if (uidString == jacob) {
    return "jacob";
  }
  return "";
}
