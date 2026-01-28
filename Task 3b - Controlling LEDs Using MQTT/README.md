# Task 3b - Controlling LEDs Using MQTT

#include <WiFi.h>
#include <PubSubClient.h>

/* ---------- WiFi Credentials ---------- */
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

/* ---------- MQTT Broker Details ---------- */
const char* mqtt_server = "broker.hivemq.com";
const int mqtt_port = 1883;
const char* mqtt_topic = "home/led/control";

/* ---------- LED Pins ---------- */
#define LED1 18
#define LED2 19
#define LED3 21

WiFiClient espClient;
PubSubClient client(espClient);

/* ---------- Function Prototypes ---------- */
void setup_wifi();
void reconnect();
void callback(char* topic, byte* payload, unsigned int length);

void setup() {
  Serial.begin(115200);

  pinMode(LED1, OUTPUT);
  pinMode(LED2, OUTPUT);
  pinMode(LED3, OUTPUT);

  digitalWrite(LED1, LOW);
  digitalWrite(LED2, LOW);
  digitalWrite(LED3, LOW);

  setup_wifi();

  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
}

void setup_wifi() {
  delay(10);
  Serial.println();
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected");
  Serial.print("IP address: ");
  Serial.println(WiFi.localIP());
}

void reconnect() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    
    String clientId = "ESP32_LED_";
    clientId += String(random(0xffff), HEX);

    if (client.connect(clientId.c_str())) {
      Serial.println("connected");
      client.subscribe(mqtt_topic);
      Serial.println("Subscribed to topic: home/led/control");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
  String message;

  for (int i = 0; i < length; i++) {
    message += (char)payload[i];
  }

  Serial.print("Message received: ");
  Serial.println(message);

  if (message == "LED1_ON") {
    digitalWrite(LED1, HIGH);
  } 
  else if (message == "LED1_OFF") {
    digitalWrite(LED1, LOW);
  } 
  else if (message == "LED2_ON") {
    digitalWrite(LED2, HIGH);
  } 
  else if (message == "LED2_OFF") {
    digitalWrite(LED2, LOW);
  } 
  else if (message == "LED3_ON") {
    digitalWrite(LED3, HIGH);
  } 
  else if (message == "LED3_OFF") {
    digitalWrite(LED3, LOW);
  }
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();
}
