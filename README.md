## **Task 1 – Introduction to ESP32 & Basic Components**


## **Task 1a – Theory: Digital I/O & Interrupts**

![Image](https://camo.githubusercontent.com/960320cf2b337d7dc78f5085aa11ea75688583fb24e0481981a9aa494548a728/68747470733a2f2f65737033322e696d706c727573742e636f6d2f65737033322d696e74726f2f696d616765732f45535033322d4465764b69742d56312d50696e6f75742d4469616772616d2e706e67)

In this task, I studied the fundamentals of GPIO configuration and interrupt handling on the ESP32 microcontroller. The objective was to understand how digital pins are configured as inputs or outputs and how interrupts improve system efficiency.

I learned how to control external components such as LEDs using output pins and how to read signals from pushbuttons using input pins with internal pull-up or pull-down resistors to prevent floating states. I also explored edge-triggered interrupts and how Interrupt Service Routines (ISRs) allow the ESP32 to respond instantly to events without continuous polling. Basic debouncing concepts were also reviewed to ensure reliable button detection.

This task built a strong theoretical foundation in embedded systems and prepared me for practical implementation.



---

## **Task 1b – Simon Says Game using ESP32**

<iframe width="560" height="315" src="https://www.youtube.com/embed/pGiDCpjDK9U?si=sIqMruLVNY6ReStN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In this task, I developed a Simon Says game using the ESP32, LEDs, and pushbuttons to apply GPIO and interrupt concepts practically. The system generated a random sequence of LED flashes, and the user had to replicate the pattern by pressing the corresponding buttons in the correct order. With each successful round, the sequence length increased, making the game progressively more challenging.

LEDs were configured as outputs, and pushbuttons were configured as inputs with proper pull-up settings. Interrupt-based input handling was implemented to ensure quick and accurate response to button presses. The sequence was stored using arrays, and timing delays were added for clear visual feedback.

If the user entered an incorrect sequence, all LEDs flashed to indicate failure, and the game restarted automatically. The Wokwi simulation was adjusted for ESP32 compatibility and correct GPIO mapping.

This task improved my understanding of embedded logic design, real-time interaction, and user feedback mechanisms.



---

## **Task 2 – Temperature-Based Fan Control**

<iframe width="560" height="315" src="https://www.youtube.com/embed/Hgz_aVDzbbk?si=Pr45i7N1A5ES-V65" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![Image](https://github.com/prathu2k4/02Marvel/blob/main/Screenshot%202026-02-24%20171312.png?raw=true)

In this task, I implemented a temperature-controlled fan system using the ESP32, DHT11 sensor, and a DC motor controlled via L298N motor driver. The goal was to demonstrate automation by linking sensor readings to actuator control.

The DHT11 sensor continuously measured ambient temperature, and the readings were displayed on the serial monitor. A predefined temperature threshold was set in the program. When the temperature exceeded this limit, the ESP32 activated the motor driver to turn on the fan. When the temperature dropped below the threshold, the motor turned off automatically.

---

## **Task 3a – IoT Communication Protocols**

![Image](https://assets.emqx.com/images/b9575ac3d6916dc629c12aa2de5ce5c3.png)
![alt text](https://images.openai.com/static-rsc-3/Ej79Xe0LnuHsgCxhVSGMg1VWU8bqWEAWDJD4sZCpSGYxX7PIK2TsWoj--sHRFPyQEWkrPCqSAeFSNdTSuNUXV1k3_tmUSF4TSAlLlpL73Xo?purpose=fullsize&v=1)
![alt text](https://www.analog.com/en/_/media/analog/en/landing-pages/technical-articles/i2c-primer-what-is-i2c-part-1-/36684.png?la=en&rev=1fcb3b771f93448ba234bd5f9bebd6dc)
![alt text](https://www.analog.com/en/_/media/images/analog-dialogue/en/volume-52/number-3/articles/introduction-to-spi-interface/205973_fig_01.svg?la=en&rev=f03bda0b77f94822a05ed2e7e8f8070d&sc_lang=en)

In this task, I studied common IoT and serial communication protocols including MQTT, HTTP, I2C, and SPI. The objective was to understand their working principles, advantages, limitations, and real-world applications.

I explored how **MQTT** operates on a publish–subscribe model, making it lightweight and suitable for low-bandwidth IoT applications. I also reviewed **HTTP**, which follows a request–response model and is widely used for web-based communication and REST APIs. Additionally, I gained theoretical knowledge of serial communication protocols such as **I2C** and **SPI**, understanding how they enable communication between microcontrollers and peripheral devices.

I compared these protocols based on speed, reliability, bandwidth usage, and scalability. This study helped me understand when to use each protocol depending on application requirements such as cloud communication, sensor interfacing, or device-to-device communication.



---

## **Task 3b – Controlling LEDs Using MQTT**

<iframe width="560" height="315" src="https://www.youtube.com/embed/he7f6W51stk?si=m9c738qox4nAmDFc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

In this task, I implemented LED control using the MQTT protocol. The goal was to establish publishing and subscribing functionality using an MQTT platform and apply it to real hardware control.

I configured the ESP32 as an MQTT client that subscribed to specific topics. When a message such as “LED 1 ON” or “LED 1 OFF” was published to the broker, the ESP32 received the message and activated or deactivated the corresponding LED. Similarly, I implemented control for LED 2 and LED 3 using separate topics.

Through this implementation, I gained practical understanding of MQTT brokers, topics, publishers, and subscribers. I learned how real-time communication enables remote hardware control over a network. This task strengthened my understanding of IoT communication and message-based architecture.


---

## **Task 5 – Cloud Communication & Data Logging using ThingSpeak**

![Image](https://www.upesy.com/cdn/shop/files/doc-breadboard-wiring-dht11-esp32-arduino-schematic.png)

In this task, I implemented cloud-based data logging and analysis using the ESP32 and ThingSpeak platform. I sent temperature and soil moisture data collected from a DHT11 sensor and a capacitive soil moisture sensor to ThingSpeak using its API.

The ESP32 continuously read temperature, humidity, and moisture percentage values and posted the data to the cloud at regular intervals. On the ThingSpeak dashboard, I visualized relationships such as Temperature vs. Soil Moisture and Humidity vs. Soil Moisture.

After collecting sufficient data, I retrieved the dataset for analysis and used Python with Matplotlib to plot Temperature vs. Time graphs. I then created a regression model to analyze the relationship between Humidity (independent variable) and Moisture Percentage (dependent variable). The regression graph was plotted with:

* X-axis: Humidity
* Y-axis: Moisture Percentage

This allowed me to observe trends and understand how humidity levels influence soil moisture conditions.

Through this task, I learned how to publish sensor data to a cloud server, retrieve datasets for analysis, visualize trends, and apply basic machine learning techniques for prediction.


---

## **Task 6 – Flashing Morse Code Using ESP32 Web Server**

<iframe width="560" height="315" src="https://www.youtube.com/embed/nRfYfeKsoAM?si=FwZm4TWW0ycl17Sg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I developed a web-based Morse code generator using the ESP32 microcontroller. The objective was to understand how web servers can be hosted on microcontrollers and used for real-time hardware control.

I configured the ESP32 to host a local web server accessible through its IP address. The web page contained an input field where users could type normal text. Once the message was submitted, the ESP32 processed the input, converted each character into its corresponding Morse code representation, and flashed an LED according to Morse timing standards (dots and dashes).

The implementation involved defining a Morse code lookup table within the program and controlling LED blink durations to represent dots (short blink) and dashes (long blink). Proper delays were maintained between symbols, letters, and words to ensure accurate Morse communication. The system successfully translated typed text into LED blink sequences in real time.

Through this project, I gained hands-on experience in creating embedded web servers, handling HTTP requests, processing user input, and integrating software logic with physical output devices. This task demonstrated how web interfaces can be used for device control and communication in embedded systems.

---
## Task 7 – Health Vitals Dashboard

<iframe width="560" height="315" src="https://www.youtube.com/embed/FrVt_seX0Qk?si=LhAVP5HYZDIXeu7o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

I successfully completed the Health Vitals Dashboard task. In this project, I measured heart rate and blood oxygen (SpO₂) levels using a pulse sensor connected to an ESP32 microcontroller. The ESP32 was programmed to read the sensor data and process the values in real time.

I then created a web server hosted on the ESP32 to display the measured values graphically. Using a web-based chart interface, the heart rate (BPM) and SpO₂ (%) readings were plotted and updated continuously without refreshing the page.

Through this task, I learned how to interface biomedical sensors with ESP32, transmit data over Wi-Fi, and visualize real-time health data on a web dashboard. The system worked successfully and displayed accurate real-time vitals.

---


## **Task 9 – Fire Alarm System with SMS Alerts (Using Twilio API)**


In this task, I successfully developed a Fire Alarm System using the ESP32 microcontroller integrated with a flame sensor and the **Twilio API** for SMS notifications. The objective was to understand fire detection mechanisms and learn how to integrate cloud-based messaging services with embedded systems.

The flame sensor was connected to the ESP32 to continuously monitor the presence of heat or fire. A threshold value was defined in the program to determine abnormal heat levels. When the sensor detected flame intensity beyond the set threshold, the ESP32 immediately triggered a local alert (such as a buzzer or LED indicator) to signal potential danger.

Simultaneously, the ESP32 connected to a Wi-Fi network and sent an HTTP request to the Twilio API to deliver an SMS alert to a registered mobile number. The SMS contained a warning message indicating fire detection. This demonstrated successful integration of hardware sensing with cloud-based communication services.

The system was tested under proper supervision with safety precautions, using controlled conditions to simulate flame detection. No real fire hazards were involved during testing.

Through this task, I gained practical experience in flame sensor interfacing, Wi-Fi communication, REST API handling, and real-time SMS alert integration. This project highlighted how IoT systems can be implemented for safety monitoring and emergency notification applications.
