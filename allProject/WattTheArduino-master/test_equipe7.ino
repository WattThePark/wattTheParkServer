int value;

void setup(){
  value = 5;
  pinMode(4, OUTPUT);
  pinMode(7, OUTPUT);
  pinMode(8, OUTPUT);
}

void loop() {
  value = analogRead(0);
  Serial.print(value, DEC);
  value = map(value, 0, 1023, 0, 5000); //conversion de la valeur lue en tension en mV
  value = value / 1000; //conversion des mV en V
  value = (int)(value + 0.5);
 
  digitalWrite(4, value&0B1 ? HIGH : LOW);
  digitalWrite(7, value&0B10 ? HIGH : LOW);
  digitalWrite(8, value&0B100 ? HIGH : LOW);
}
