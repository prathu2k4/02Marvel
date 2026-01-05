# Task 2 - Temperature-Based Fan Control

## 🔧 System Overview

* **Sensor:** DHT11 (measures temperature)
* **Controller:** Arduino Uno
* **Actuator:** DC Fan / DC Motor
* **Switching:** Relay Module *or* Motor Driver (L298N)
* **Output:** Serial Monitor display
* **Logic:**

  * If temperature ≥ threshold → Fan ON
  * If temperature < threshold → Fan OFF

---

## 🧩 Required Components

| Component                                   | Quantity  |
| ------------------------------------------- | --------- |
| Arduino Uno                                 | 1         |
| DHT11 Temperature Sensor                    | 1         |
| Relay Module (5V) **OR** L298N Motor Driver | 1         |
| DC Fan / DC Motor                           | 1         |
| External Power Supply (9–12V for motor)     | 1         |
| Jumper Wires                                | As needed |
| Breadboard                                  | Optional  |

---

## 🔌 Wiring Connections

### 🔹 DHT11 to Arduino

| DHT11 Pin | Arduino Pin |
| --------- | ----------- |
| VCC       | 5V          |
| DATA      | D2          |
| GND       | GND         |

---

### 🔹 Relay Module to Arduino

| Relay Pin | Arduino Pin |
| --------- | ----------- |
| VCC       | 5V          |
| GND       | GND         |
| IN        | D8          |

### 🔹 Relay to DC Motor

* **COM** → Motor Power Supply +
* **NO** → Motor +
* Motor − → Power Supply −

---

## 🧠 Circuit Diagram (Reference)

![Image](https://arduinogetstarted.com/images/tutorial/arduino-cooling-fan-system-dht11-wiring-diagram.jpg)

![Image](https://justdoelectronics.com/wp-content/uploads/2024/01/Temperature-Based-Fan-Speed-Controll.jpg)

![Image](https://europe1.discourse-cdn.com/arduino/original/4X/2/1/e/21e792a6512c59d78ed02fa9f15fd92e01f3ea4c.jpeg)

---

## 🧪 Working Principle

1. DHT11 reads ambient temperature
2. Arduino prints temperature to Serial Monitor
3. If temperature exceeds **threshold**, relay turns ON
4. Relay powers the fan
5. Fan turns OFF when temperature drops

---

## 💻 Arduino Code (Complete & Ready)

### 📌 Install Library First

* Open **Arduino IDE**
* Go to **Sketch → Include Library → Manage Libraries**
* Search and install **“DHT sensor library by Adafruit”**

---

### ✅ Final Arduino Code

```cpp
#include <DHT.h>

#define DHTPIN 2        // DHT11 data pin
#define DHTTYPE DHT11  // DHT11 sensor type
#define RELAY_PIN 8    // Relay control pin

DHT dht(DHTPIN, DHTTYPE);

float temperature;
const float threshold = 30.0;  // Temperature threshold (°C)

void setup() {
  Serial.begin(9600);
  dht.begin();

  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW);  // Fan OFF initially

  Serial.println("Temperature Based Fan Control System");
}

void loop() {
  temperature = dht.readTemperature(); // Read temperature in Celsius

  if (isnan(temperature)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  Serial.print("Temperature: ");
  Serial.print(temperature);
  Serial.println(" °C");

  if (temperature >= threshold) {
    digitalWrite(RELAY_PIN, HIGH); // Fan ON
    Serial.println("Fan Status: ON");
  } else {
    digitalWrite(RELAY_PIN, LOW);  // Fan OFF
    Serial.println("Fan Status: OFF");
  }

  Serial.println("------------------------");
  delay(2000);  // Update every 2 seconds
}
```

---

## ▶️ How to Run the Project

1. Make all wiring connections
2. Upload code to Arduino
3. Open **Serial Monitor (9600 baud)**
4. Heat the sensor (hand or hair dryer)
5. Observe fan turning ON automatically 🌡️🌀

