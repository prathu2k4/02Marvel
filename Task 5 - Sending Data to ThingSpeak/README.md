# Task 5 - Sending Data to ThingSpeak and Creating Regression Model


---

1. System Overview

Sensors

DHT11 → Temperature & Humidity

Capacitive Soil Moisture Sensor → Moisture %


Flow

1. ESP32 reads sensors


2. ESP32 uploads data to ThingSpeak


3. Python retrieves data from ThingSpeak


4. Matplotlib plots graphs


5. Regression model:
X = Humidity, Y = Moisture Percentage




---

2. ThingSpeak Channel Setup

Create a channel on ThingSpeak with these fields:

Field	Name

Field 1	Temperature (°C)
Field 2	Humidity (%)
Field 3	Soil Moisture (%)


Note:

Write API Key → used by ESP32

Read API Key → used by Python



---

3. ESP32 Code (Arduino IDE)

Libraries Required
```
WiFi.h

HTTPClient.h

DHT.h
```

Connections

DHT11 → GPIO 4

Soil Moisture Sensor → GPIO 34 (ADC)


ESP32 Code
```
#include <WiFi.h>
#include <HTTPClient.h>
#include "DHT.h"

#define DHTPIN 4
#define DHTTYPE DHT11
#define SOIL_PIN 34

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";
String apiKey = "YOUR_THINGSPEAK_WRITE_API_KEY";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("\nWiFi connected");
  dht.begin();
}

void loop() {
  float temp = dht.readTemperature();
  float humidity = dht.readHumidity();

  int soilRaw = analogRead(SOIL_PIN);
  float soilPercent = map(soilRaw, 4095, 1800, 0, 100);
  soilPercent = constrain(soilPercent, 0, 100);

  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    String url = "http://api.thingspeak.com/update?api_key=" + apiKey +
                 "&field1=" + String(temp) +
                 "&field2=" + String(humidity) +
                 "&field3=" + String(soilPercent);

    http.begin(url);
    int httpCode = http.GET();
    http.end();

    Serial.println("Data sent to ThingSpeak");
  }

  delay(15000); // ThingSpeak minimum interval
}
```

---

4. Retrieving Data from ThingSpeak (Python)

Install Required Libraries
```
pip install pandas matplotlib numpy requests scikit-learn
```
Python Code to Fetch Data
```
import requests
import pandas as pd

CHANNEL_ID = "YOUR_CHANNEL_ID"
READ_API_KEY = "YOUR_READ_API_KEY"

url = f"https://api.thingspeak.com/channels/{CHANNEL_ID}/feeds.json?api_key={READ_API_KEY}&results=100"

response = requests.get(url)
data = response.json()

df = pd.DataFrame(data['feeds'])
df['created_at'] = pd.to_datetime(df['created_at'])

df['temperature'] = pd.to_numeric(df['field1'])
df['humidity'] = pd.to_numeric(df['field2'])
df['moisture'] = pd.to_numeric(df['field3'])

df = df.dropna()
print(df.head())
```

---

5. Plot Graphs Using Matplotlib

Temperature vs Time
```
import matplotlib.pyplot as plt

plt.figure()
plt.plot(df['created_at'], df['temperature'])
plt.xlabel("Time")
plt.ylabel("Temperature (°C)")
plt.title("Temperature vs Time")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()
```
Temperature vs Soil Moisture
```
plt.figure()
plt.scatter(df['temperature'], df['moisture'])
plt.xlabel("Temperature (°C)")
plt.ylabel("Soil Moisture (%)")
plt.title("Temperature vs Soil Moisture")
plt.show()
```
Humidity vs Soil Moisture
```
plt.figure()
plt.scatter(df['humidity'], df['moisture'])
plt.xlabel("Humidity (%)")
plt.ylabel("Soil Moisture (%)")
plt.title("Humidity vs Soil Moisture")
plt.show()
```

---

6. Regression Model (Humidity → Moisture)

Linear Regression Model
```
import numpy as np
from sklearn.linear_model import LinearRegression

X = df[['humidity']]
y = df['moisture']

model = LinearRegression()
model.fit(X, y)

y_pred = model.predict(X)

print("Slope:", model.coef_[0])
print("Intercept:", model.intercept_)
print("R² Score:", model.score(X, y))
```


---

7. Regression Graph (Final Output)

X-axis: Humidity

Y-axis: Moisture Percentage
```
plt.figure()
plt.scatter(df['humidity'], df['moisture'], label="Actual Data")
plt.plot(df['humidity'], y_pred, label="Regression Line")
plt.xlabel("Humidity (%)")
plt.ylabel("Moisture Percentage (%)")
plt.title("Regression: Humidity vs Moisture")
plt.legend()
plt.show()
```

---

8. Interpretation (For Lab / Viva)

Positive slope → Moisture increases with humidity

R² value → Indicates strength of correlation

Regression model helps predict soil moisture using humidity values



---

9. Deliverables Checklist ✅

✔ ESP32 publishes data to ThingSpeak
✔ Data retrieved using Python
✔ Temperature vs Time graph
✔ Temperature vs Soil Moisture graph
✔ Humidity vs Soil Moisture graph
✔ Regression model & regression plot


---
