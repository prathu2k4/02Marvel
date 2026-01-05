# **Simon Says game** with an **ESP32**, some **pushbuttons**, and **LEDs**.


## 🛠️ Hardware Setup

* **ESP32** (any dev board)
* **4 LEDs** (different colors recommended: Red, Green, Blue, Yellow)
* **4 Pushbuttons** (each paired with one LED)
* **Resistors**:

  * \~220 Ω for each LED in series
  * \~10 kΩ pull-down resistors for each pushbutton (or use ESP32’s internal pull-ups)
* **Wiring**:

  * Connect LEDs to GPIO pins through resistors
  * Connect pushbuttons to GPIOs with pull-downs (or use `INPUT_PULLUP`)

---

## ⚡ Arduino Code (ESP32 Simon Says)

```cpp
#include <Arduino.h>

// Pin definitions (adjust to your wiring)
const int ledPins[4] = {14, 27, 26, 25};   // LEDs
const int buttonPins[4] = {19, 18, 5, 17}; // Buttons

// Game variables
#define MAX_SEQUENCE 50
int sequence[MAX_SEQUENCE];
int level = 1;
int userIndex = 0;
bool gameOver = false;

void setup() {
  Serial.begin(115200);

  // Initialize pins
  for (int i = 0; i < 4; i++) {
    pinMode(ledPins[i], OUTPUT);
    pinMode(buttonPins[i], INPUT_PULLUP); // Buttons active LOW
  }

  randomSeed(analogRead(0)); // Seed random generator
  startNewGame();
}

void loop() {
  if (gameOver) {
    showGameOver();
    delay(2000);
    startNewGame();
  }

  playSequence();
  getUserInput();
}

void startNewGame() {
  level = 1;
  gameOver = false;
  for (int i = 0; i < MAX_SEQUENCE; i++) {
    sequence[i] = random(0, 4); // random LED index (0-3)
  }
}

void playSequence() {
  Serial.println("Playing sequence...");
  for (int i = 0; i < level; i++) {
    int led = sequence[i];
    digitalWrite(ledPins[led], HIGH);
    delay(500);
    digitalWrite(ledPins[led], LOW);
    delay(300);
  }
  userIndex = 0; // reset user progress
}

void getUserInput() {
  while (userIndex < level && !gameOver) {
    for (int i = 0; i < 4; i++) {
      if (digitalRead(buttonPins[i]) == LOW) { // button pressed
        flashLed(i);
        if (i == sequence[userIndex]) {
          userIndex++;
        } else {
          gameOver = true;
        }
        delay(250); // debounce
      }
    }
  }
  if (!gameOver) {
    level++;
    delay(500);
  }
}

void flashLed(int index) {
  digitalWrite(ledPins[index], HIGH);
  delay(200);
  digitalWrite(ledPins[index], LOW);
}

void showGameOver() {
  Serial.println("Game Over!");
  // Flash all LEDs quickly
  for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 4; j++) {
      digitalWrite(ledPins[j], HIGH);
    }
    delay(200);
    for (int j = 0; j < 4; j++) {
      digitalWrite(ledPins[j], LOW);
    }
    delay(200);
  }
}
```

---

## 🔎 How It Works

1. ESP32 generates a random sequence of LED blinks.
2. The user must repeat the sequence by pressing the corresponding buttons.
3. Each round adds one more step.
4. If the user presses the wrong button → **Game Over** → LEDs flash → game restarts.