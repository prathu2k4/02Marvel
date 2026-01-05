# Task 9 - Fire Alarm System with SMS Alerts

## 🔥 Project Overview

**When fire/heat is detected → ESP32 sends an SMS alert via Twilio**

**Main components:**

* ESP32
* Fire/heat sensor (Flame sensor or Temperature sensor)
* Wi-Fi
* Twilio SMS API

---

## 🧰 Hardware Requirements

### 1️⃣ ESP32

Any ESP32 Dev Module works.

### 2️⃣ Fire Detection Sensor (choose one)

You can use **either** (or both):

#### Option A: Flame Sensor (recommended for beginners)

* Detects fire/flame using IR
* Digital or analog output

#### Option B: Temperature Sensor

* **DHT11 / DHT22** (temperature-based fire detection)
* Fire detected if temperature exceeds threshold

➡️ **For simplicity**, I’ll explain using a **Flame Sensor**.

### 3️⃣ Other Components

* Breadboard
* Jumper wires
* Micro-USB cable

---

## 🔌 Circuit Connections (Flame Sensor)

| Flame Sensor Pin | ESP32 Pin |
| ---------------- | --------- |
| VCC              | 3.3V      |
| GND              | GND       |
| DO (Digital)     | GPIO 27   |

> If using **Analog output (AO)**, connect it to GPIO 34.

---

## 📱 Twilio Setup (Very Important)

### Step 1: Create Twilio Account

1. Go to **twilio.com**
2. Sign up (free trial works)
3. Get:

   * **Account SID**
   * **Auth Token**
   * **Twilio Phone Number**

---

## 🌐 How ESP32 Sends SMS (Concept)

ESP32:

1. Connects to Wi-Fi
2. Detects fire
3. Sends an **HTTP POST request** to Twilio API
4. Twilio sends SMS to your phone

---

## 🧠 Logic Flow

```
Start
↓
Connect to Wi-Fi
↓
Read Flame Sensor
↓
Is fire detected?
   ├─ NO → Keep monitoring
   └─ YES → Send SMS alert
```

---

## 🧪 Arduino IDE Setup

1. Install **Arduino IDE**
2. Add ESP32 Board:

   * Preferences → Additional Boards Manager URL

     ```
     https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
     ```
3. Board Manager → Install **ESP32**
4. Select:

   * Board: *ESP32 Dev Module*
   * Port: Correct COM port

---

## 💻 ESP32 Code (Flame Sensor + Twilio SMS)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

// Twilio credentials
const char* accountSID = "YOUR_TWILIO_ACCOUNT_SID";
const char* authToken  = "YOUR_TWILIO_AUTH_TOKEN";
const char* fromNumber = "YOUR_TWILIO_PHONE_NUMBER";
const char* toNumber   = "YOUR_PHONE_NUMBER";

// Flame sensor pin
#define FLAME_PIN 27

bool alertSent = false;

void setup() {
  Serial.begin(115200);
  pinMode(FLAME_PIN, INPUT);

  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected");
}

void loop() {
  int flameDetected = digitalRead(FLAME_PIN);

  if (flameDetected == LOW && !alertSent) {
    Serial.println("🔥 Fire detected!");
    sendSMS();
    alertSent = true;
  }

  if (flameDetected == HIGH) {
    alertSent = false;  // Reset when fire is gone
  }

  delay(1000);
}

void sendSMS() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    String url = "https://api.twilio.com/2010-04-01/Accounts/";
    url += accountSID;
    url += "/Messages.json";

    http.begin(url);
    http.setAuthorization(accountSID, authToken);
    http.addHeader("Content-Type", "application/x-www-form-urlencoded");

    String body = "From=" + String(fromNumber) +
                  "&To=" + String(toNumber) +
                  "&Body=🔥 Fire Alert! Fire detected by ESP32.";

    int httpResponseCode = http.POST(body);

    Serial.print("SMS sent, response code: ");
    Serial.println(httpResponseCode);

    http.end();
  }
}
```

---

## 📊 Output

* Serial Monitor:

  ```
  🔥 Fire detected!
  SMS sent, response code: 201
  ```
* Mobile Phone:

  ```
  🔥 Fire Alert! Fire detected by ESP32.
  ```

---

## 🧪 Testing

1. Power ESP32
2. Open Serial Monitor
3. Bring flame near sensor
4. SMS should arrive within seconds

---
