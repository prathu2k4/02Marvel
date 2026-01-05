# Task 6 - Flashing Morse Code
Perfect 👍
Below is a **complete, final, viva-ready ESP32 solution** that embeds **the same modern UI** directly into the ESP32 web server and **blinks Morse code on the LED**.

This is **copy → upload → test** level code.

---

# 🔴 ESP32 Web-Based Morse Code Blinker (Final Version)

## 🎯 What This Version Does (End-to-End)

✔ ESP32 hosts a **modern web page**
✔ Same UI you tested on PC
✔ User types message
✔ Clicks **Send**
✔ ESP32 converts text → Morse
✔ **LED blinks Morse code**
✔ Web page does **not break / reload badly**

---

## 🧰 Hardware Required

| Component  | Details    |
| ---------- | ---------- |
| ESP32      | Dev Module |
| LED        | Any color  |
| Resistor   | 220Ω       |
| Breadboard | Optional   |
| USB Cable  | For upload |

---

## 🔌 Circuit Connection

| LED Pin     | ESP32          |
| ----------- | -------------- |
| Anode (+)   | GPIO 2         |
| Cathode (–) | GND (via 220Ω) |

> GPIO 2 is safe and has onboard LED on many ESP32 boards.

---

## ⏱️ Morse Timing Rules Used

| Symbol     | Time      |
| ---------- | --------- |
| Dot `.`    | 200 ms ON |
| Dash `-`   | 600 ms ON |
| Symbol gap | 200 ms    |
| Letter gap | 600 ms    |
| Word gap   | 1400 ms   |

---

## 💻 Arduino IDE Setup

1. Install **ESP32 Board Package**
2. Select:

   * **Board:** ESP32 Dev Module
   * **Baud Rate:** 115200
3. Install libraries (default ESP32 has them):

   * `WiFi.h`
   * `WebServer.h`

---

## 📡 Complete ESP32 Code (FINAL)

### 🔹 Copy Everything Below

```cpp
#include <WiFi.h>
#include <WebServer.h>

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

WebServer server(80);

#define LED_PIN 2

// ---------------- MORSE TABLE ----------------
String morseCode(char c) {
  switch (c) {
    case 'A': return ".-";
    case 'B': return "-...";
    case 'C': return "-.-.";
    case 'D': return "-..";
    case 'E': return ".";
    case 'F': return "..-.";
    case 'G': return "--.";
    case 'H': return "....";
    case 'I': return "..";
    case 'J': return ".---";
    case 'K': return "-.-";
    case 'L': return ".-..";
    case 'M': return "--";
    case 'N': return "-.";
    case 'O': return "---";
    case 'P': return ".--.";
    case 'Q': return "--.-";
    case 'R': return ".-.";
    case 'S': return "...";
    case 'T': return "-";
    case 'U': return "..-";
    case 'V': return "...-";
    case 'W': return ".--";
    case 'X': return "-..-";
    case 'Y': return "-.--";
    case 'Z': return "--..";
    case '0': return "-----";
    case '1': return ".----";
    case '2': return "..---";
    case '3': return "...--";
    case '4': return "....-";
    case '5': return ".....";
    case '6': return "-....";
    case '7': return "--...";
    case '8': return "---..";
    case '9': return "----.";
    default: return "";
  }
}

// ---------------- BLINK FUNCTIONS ----------------
void blinkDot() {
  digitalWrite(LED_PIN, HIGH);
  delay(200);
  digitalWrite(LED_PIN, LOW);
  delay(200);
}

void blinkDash() {
  digitalWrite(LED_PIN, HIGH);
  delay(600);
  digitalWrite(LED_PIN, LOW);
  delay(200);
}

void blinkMessage(String msg) {
  msg.toUpperCase();

  for (int i = 0; i < msg.length(); i++) {
    if (msg[i] == ' ') {
      delay(1400);
    } else {
      String code = morseCode(msg[i]);
      for (int j = 0; j < code.length(); j++) {
        if (code[j] == '.') blinkDot();
        else if (code[j] == '-') blinkDash();
      }
      delay(600);
    }
  }
}

// ---------------- WEB UI ----------------
void handleRoot() {
  String page = R"rawliteral(
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ESP32 Morse Code</title>
<style>
body {
  font-family: Arial;
  background: linear-gradient(135deg,#0f2027,#203a43,#2c5364);
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
.card {
  background:#1e1e1e;
  padding:30px;
  width:350px;
  border-radius:12px;
  box-shadow:0 10px 25px rgba(0,0,0,0.4);
  text-align:center;
}
h2 { color:#00e5ff; }
input {
  width:100%;
  padding:12px;
  margin-top:15px;
  border:none;
  border-radius:6px;
  text-align:center;
}
button {
  margin-top:15px;
  width:100%;
  padding:12px;
  background:#00e5ff;
  border:none;
  border-radius:6px;
  font-size:16px;
  font-weight:bold;
}
.output {
  margin-top:15px;
  background:#111;
  padding:10px;
  border-radius:6px;
  font-family:monospace;
  color:#76ff03;
}
</style>
</head>

<body>
<div class="card">
<h2>🔴 Morse Code Blinker</h2>
<form action="/send">
<input name="msg" type="text" placeholder="Enter message">
<button type="submit">Send</button>
</form>
<div class="output">LED will blink Morse</div>
</div>
</body>
</html>
)rawliteral";

  server.send(200, "text/html", page);
}

// ---------------- HANDLE SEND ----------------
void handleSend() {
  if (server.hasArg("msg")) {
    String msg = server.arg("msg");
    blinkMessage(msg);
  }
  server.sendHeader("Location", "/");
  server.send(303);
}

// ---------------- SETUP ----------------
void setup() {
  pinMode(LED_PIN, OUTPUT);
  digitalWrite(LED_PIN, LOW);

  Serial.begin(115200);
  WiFi.begin(ssid, password);

  Serial.print("Connecting");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nConnected!");
  Serial.print("ESP32 IP: ");
  Serial.println(WiFi.localIP());

  server.on("/", handleRoot);
  server.on("/send", handleSend);
  server.begin();
}

// ---------------- LOOP ----------------
void loop() {
  server.handleClient();
}
```

---

## 🧪 How to Test (Step-by-Step)

1. Upload code
2. Open **Serial Monitor**
3. Note ESP32 IP (example):

   ```
   192.168.1.45
   ```
4. Open browser:

   ```
   http://192.168.1.45
   ```
5. Enter:

   ```
   SOS
   ```
6. LED blinks:

   ```
   ... --- ...
   ```

---