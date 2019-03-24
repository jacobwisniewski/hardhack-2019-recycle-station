const int RED_PIN = D15;
const int GREEN_PIN = D14;

const char r = 'r';
const char g = 'g';


void setup() {
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
}


void loop() {
  changeColour(r);
  delay(1000);
  changeColour(g);
  delay(1000);
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
  }
}
