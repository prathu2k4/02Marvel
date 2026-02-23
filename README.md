# **Project Completion Report**

## **Level 1 – Introduction to ESP32 & Basic Components**

---

## **Task 1a – Theory: Digital I/O & Interrupts**

![Image](https://esp32.implrust.com/esp32-intro/images/ESP32-DevKit-V1-Pinout-Diagram.png)

![Image](https://www.upesy.com/cdn/shop/files/doc-esp32-pinout-reference-wroom-devkit.png)

![Image](https://images.openai.com/static-rsc-3/4HJKkWrOpQjEiYGETAfZddRjyESLPIIs-lGAiKt8Gf8RmJHakG4RfFUJeC4mEbx43LCsaN3I-16GYL7-kvIcvaw-TLz5OFTCgZN_GRY38CA?purpose=fullsize\&v=1)

![Image](https://udevices.io/cdn/shop/files/ESP32-WROOM-32E_top.jpg?v=1721928504\&width=1946)

In this task, I studied the fundamentals of GPIO configuration and interrupt handling on the ESP32 microcontroller. The objective was to understand how digital pins are configured as inputs or outputs and how interrupts improve system efficiency.

I learned how to control external components such as LEDs using output pins and how to read signals from pushbuttons using input pins with internal pull-up or pull-down resistors to prevent floating states. I also explored edge-triggered interrupts and how Interrupt Service Routines (ISRs) allow the ESP32 to respond instantly to events without continuous polling. Basic debouncing concepts were also reviewed to ensure reliable button detection.

This task built a strong theoretical foundation in embedded systems and prepared me for practical implementation.



---

## **Task 1b – Simon Says Game using ESP32**

![Image](https://miro.medium.com/v2/resize%3Afit%3A1152/0%2Au1joqlnG3T03UdAp.png)

![Image](https://content.instructables.com/FH2/E2ZX/M66HL3DF/FH2E2ZXM66HL3DF.png?auto=webp)

![Image](https://thumbs.wokwi.com/projects/397345300543832065/social/1715387330044.png)

![Image](https://thumbs.wokwi.com/projects/391439742511247361/social/1709564878843.png)

In this task, I developed a Simon Says game using the ESP32, LEDs, and pushbuttons to apply GPIO and interrupt concepts practically. The system generated a random sequence of LED flashes, and the user had to replicate the pattern by pressing the corresponding buttons in the correct order. With each successful round, the sequence length increased, making the game progressively more challenging.

LEDs were configured as outputs, and pushbuttons were configured as inputs with proper pull-up settings. Interrupt-based input handling was implemented to ensure quick and accurate response to button presses. The sequence was stored using arrays, and timing delays were added for clear visual feedback.

If the user entered an incorrect sequence, all LEDs flashed to indicate failure, and the game restarted automatically. The Wokwi simulation was adjusted for ESP32 compatibility and correct GPIO mapping.

This task improved my understanding of embedded logic design, real-time interaction, and user feedback mechanisms.



---

## **Task 2 – Temperature-Based Fan Control**

![Image](https://newbiely.com/images/tutorial/arduino-nano-esp32-dht11-relay-wiring-diagram.jpg)

![Image](https://github.com/KlausMu/esp32-fan-controller/wiki/images/fritzingESP32_BME280_fan.png)

![Image](https://www.electronicwings.com/storage/PlatformSection/TopicContent/435/description/ESP32_DHT11_Interface.jpg)

![Image](https://www.upesy.com/cdn/shop/files/doc-breadboard-wiring-dht11-esp32-arduino-schematic.png)

In this task, I implemented a temperature-controlled fan system using the ESP32, DHT11 sensor, and a DC motor controlled via a relay or motor driver. The goal was to demonstrate automation by linking sensor readings to actuator control.

The DHT11 sensor continuously measured ambient temperature, and the readings were displayed on the serial monitor. A predefined temperature threshold was set in the program. When the temperature exceeded this limit, the ESP32 activated the motor driver to turn on the fan. When the temperature dropped below the threshold, the motor turned off automatically.

This project provided hands-on experience in sensor interfacing, serial monitoring, conditional logic, and actuator control. It demonstrated how embedded systems can be applied to real-world environmental automation.



---



# **Project Completion Report**

## **IoT Communication, Wired Protocols & Cloud Data Logging**

---

## **Task 3a – IoT Communication Protocols**

In this task, I studied common IoT and serial communication protocols including MQTT, HTTP, I2C, and SPI. The objective was to understand their working principles, advantages, limitations, and real-world applications.

I explored how **MQTT** operates on a publish–subscribe model, making it lightweight and suitable for low-bandwidth IoT applications. I also reviewed **HTTP**, which follows a request–response model and is widely used for web-based communication and REST APIs. Additionally, I gained theoretical knowledge of serial communication protocols such as **I2C** and **SPI**, understanding how they enable communication between microcontrollers and peripheral devices.

I compared these protocols based on speed, reliability, bandwidth usage, and scalability. This study helped me understand when to use each protocol depending on application requirements such as cloud communication, sensor interfacing, or device-to-device communication.



---

## **Task 3b – Controlling LEDs Using MQTT**

![Image](https://esp32io.com/images/tutorial/esp32-button-led-wiring-diagram.jpg)

![Image](https://www.hivemq.com/sb-assets/f/243938/284x150/2a67a28f71/mqtt-publish-subscribe.svg)

![Image](https://hackster.imgix.net/uploads/attachments/1061896/_lHn0BxLdNc.blob?auto=compress\&fit=min\&fm=jpg\&h=675\&w=900)

![Image](https://esp32io.com/images/tutorial/esp32-multiple-led-wiring-diagram.jpg)

In this task, I implemented LED control using the MQTT protocol. The goal was to establish publishing and subscribing functionality using an MQTT platform and apply it to real hardware control.

I configured the ESP32 as an MQTT client that subscribed to specific topics. When a message such as “LED 1 ON” or “LED 1 OFF” was published to the broker, the ESP32 received the message and activated or deactivated the corresponding LED. Similarly, I implemented control for LED 2 and LED 3 using separate topics.

Through this implementation, I gained practical understanding of MQTT brokers, topics, publishers, and subscribers. I learned how real-time communication enables remote hardware control over a network. This task strengthened my understanding of IoT communication and message-based architecture.



---

## **Task 4 – Communication using I2C Protocol**

![Image](https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/_images/arduino_i2c_master.png)

![Image](https://hackster.imgix.net/uploads/attachments/1831884/wirigngtwoscd41toesp_Yyue15CIcg.png)

![Image](https://www.electronicwings.com/storage/PlatformSection/TopicContent/514/icon/cover%20image.jpg)

![Image](https://www.electronicwings.com/storage/PlatformSection/TopicContent/514/description/LCD16x2%20I2C.jpg)

In this task, I established communication between two ESP32 boards using the I2C protocol. Both ESP32 boards were configured to host web servers, enabling bidirectional communication.

When a message was typed into the web server interface of one ESP32, the message was transmitted via I2C to the second ESP32. The receiving ESP32 displayed the message on an LCD connected through I2C. This setup demonstrated master–slave communication between microcontrollers using wired communication.

Through this implementation, I learned how to configure one ESP32 as an I2C master and the other as an I2C slave. I also understood addressing, data transmission, and synchronization in I2C communication. This task provided hands-on experience in microcontroller-to-microcontroller communication.



---

## **Task 5 – Cloud Communication & Data Logging using ThingSpeak**

![Image](https://www.upesy.com/cdn/shop/files/doc-breadboard-wiring-dht11-esp32-arduino-schematic.png)

![Image](https://www.researchgate.net/publication/383009320/figure/fig3/AS%3A11431281270908799%401723319812890/ThingSpeak-graphic-visualization-of-temperature-humidity-and-air-quality-data-in-Pos-1.png)

![Image](https://docs.sunfounder.com/projects/umsk/en/latest/_images/Lesson_02_Capacitive_Soil_Moisture_Module_esp32_bb.png)

![Image](https://www.electronicwings.com/storage/PlatformSection/TopicContent/442/description/Soil%20Moisture%20Sensor%20Interfacing%20With%20ESP32.jpg)

In this task, I implemented cloud-based data logging and analysis using the ESP32 and ThingSpeak platform. I sent temperature and soil moisture data collected from a DHT11 sensor and a capacitive soil moisture sensor to ThingSpeak using its API.

The ESP32 continuously read temperature, humidity, and moisture percentage values and posted the data to the cloud at regular intervals. On the ThingSpeak dashboard, I visualized relationships such as Temperature vs. Soil Moisture and Humidity vs. Soil Moisture.

After collecting sufficient data, I retrieved the dataset for analysis and used Python with Matplotlib to plot Temperature vs. Time graphs. I then created a regression model to analyze the relationship between Humidity (independent variable) and Moisture Percentage (dependent variable). The regression graph was plotted with:

* X-axis: Humidity
* Y-axis: Moisture Percentage

This allowed me to observe trends and understand how humidity levels influence soil moisture conditions.

Through this task, I learned how to publish sensor data to a cloud server, retrieve datasets for analysis, visualize trends, and apply basic machine learning techniques for prediction.



---

# **Overall Conclusion**

All tasks related to IoT communication, wired protocols, and cloud-based data analysis were successfully completed. I gained strong practical knowledge in MQTT communication, I2C microcontroller communication, cloud data logging using ThingSpeak, and regression modeling for predictive analysis. These tasks enhanced my understanding of real-world IoT systems, remote device control, and data-driven decision making.


# **Conclusion**

All Level 1 tasks were successfully completed. Through these activities, I strengthened my understanding of ESP32 programming, GPIO configuration, interrupt handling, and sensor-based automation systems.




# **Project Completion Report**

## **Web Servers & Local Interfaces**

---

## **Task 6 – Flashing Morse Code Using ESP32 Web Server**

![Image](https://esp32io.com/images/cover/esp32-web-server.jpg)

![Image](https://content.instructables.com/F3D/BY1M/J5V3SCG9/F3DBY1MJ5V3SCG9.jpg?auto=webp)

![Image](https://www.datocms-assets.com/32427/1619702149-l3-sc4-fz3.png)

![Image](https://content.instructables.com/FVP/UBJA/JK8KCCTO/FVPUBJAJK8KCCTO.png?auto=webp)

In this task, I developed a web-based Morse code generator using the ESP32 microcontroller. The objective was to understand how web servers can be hosted on microcontrollers and used for real-time hardware control.

I configured the ESP32 to host a local web server accessible through its IP address. The web page contained an input field where users could type normal text. Once the message was submitted, the ESP32 processed the input, converted each character into its corresponding Morse code representation, and flashed an LED according to Morse timing standards (dots and dashes).

The implementation involved defining a Morse code lookup table within the program and controlling LED blink durations to represent dots (short blink) and dashes (long blink). Proper delays were maintained between symbols, letters, and words to ensure accurate Morse communication. The system successfully translated typed text into LED blink sequences in real time.

Through this project, I gained hands-on experience in creating embedded web servers, handling HTTP requests, processing user input, and integrating software logic with physical output devices. This task demonstrated how web interfaces can be used for device control and communication in embedded systems.

**Status: Successfully Completed**

---

### **Takeaway**

This task enhanced my understanding of local web servers, HTTP-based communication, and real-time interaction between user interfaces and hardware components using the ESP32.

# **Project Completion Report**

## **Task 9 – Fire Alarm System with SMS Alerts (Using Twilio API)**

![Image](https://docs.sunfounder.com/projects/umsk/en/latest/_images/Lesson_03_Flame_Sensor_Module_esp32_bb.png)

![Image](https://docs.keyestudio.com/projects/KS5003-KS5004/en/latest/_images/2c25672935b822ed775e665e05f729801.png)

![Image](https://circuitdigest.com/sites/default/files/projectimage_mic/ESP32-LED-Webserver.jpg)

![Image](https://iotdesignpro.com/sites/default/files/main-image/IoT-Based-ESP32-Wi-Fi-Weather-Station-using-DHT11-and-BMP180-Sensor.jpg)

In this task, I successfully developed a Fire Alarm System using the ESP32 microcontroller integrated with a flame sensor and the **Twilio API** for SMS notifications. The objective was to understand fire detection mechanisms and learn how to integrate cloud-based messaging services with embedded systems.

The flame sensor was connected to the ESP32 to continuously monitor the presence of heat or fire. A threshold value was defined in the program to determine abnormal heat levels. When the sensor detected flame intensity beyond the set threshold, the ESP32 immediately triggered a local alert (such as a buzzer or LED indicator) to signal potential danger.

Simultaneously, the ESP32 connected to a Wi-Fi network and sent an HTTP request to the Twilio API to deliver an SMS alert to a registered mobile number. The SMS contained a warning message indicating fire detection. This demonstrated successful integration of hardware sensing with cloud-based communication services.

The system was tested under proper supervision with safety precautions, using controlled conditions to simulate flame detection. No real fire hazards were involved during testing.

Through this task, I gained practical experience in flame sensor interfacing, Wi-Fi communication, REST API handling, and real-time SMS alert integration. This project highlighted how IoT systems can be implemented for safety monitoring and emergency notification applications.

**Status: Successfully Completed**

---

### **Takeaway**

This task helped me understand fire detection systems and strengthened my ability to integrate microcontrollers with cloud APIs like Twilio to create automated SMS-based emergency alert systems.
