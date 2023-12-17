"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Introduction","href":"/docs/intro","docId":"intro","unlisted":false},{"type":"link","label":"Quick start","href":"/docs/starting","docId":"starting","unlisted":false},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Create New Project","href":"/docs/tutorial/create-project","docId":"tutorial/create-project","unlisted":false},{"type":"link","label":"Build and Flash","href":"/docs/tutorial/building-flashing","docId":"tutorial/building-flashing","unlisted":false},{"type":"link","label":"MQTT setup","href":"/docs/tutorial/mqtt","docId":"tutorial/mqtt","unlisted":false},{"type":"link","label":"OTA updates","href":"/docs/tutorial/ota","docId":"tutorial/ota","unlisted":false},{"type":"link","label":"Remote Logging","href":"/docs/tutorial/remote-logging","docId":"tutorial/remote-logging","unlisted":false},{"type":"link","label":"Monitoring sensors","href":"/docs/tutorial/sensor-monitoring","docId":"tutorial/sensor-monitoring","unlisted":false}]},{"type":"category","label":"Reference","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Project structure","href":"/docs/reference/project-structure","docId":"reference/project-structure","unlisted":false},{"type":"link","label":"API","href":"/docs/reference/api","docId":"reference/api","unlisted":false},{"type":"link","label":"Components","href":"/docs/reference/components","docId":"reference/components","unlisted":false},{"type":"link","label":"Devices","href":"/docs/reference/devices","docId":"reference/devices","unlisted":false},{"type":"link","label":"User Interface","href":"/docs/reference/ui","docId":"reference/ui","unlisted":false}]},{"type":"link","label":"Services","href":"/docs/services","docId":"services","unlisted":false}]},"docs":{"intro":{"id":"intro","title":"Introduction","description":"ESP32 Manager is a framework on top of Espressif\'s native ESP-IDF development environment,","sidebar":"tutorialSidebar"},"reference/api":{"id":"reference/api","title":"API","description":"ESP32 Manager features built-in event dispatcher with publish/subscribe capabilities, used both for internal communications, and for interacting with the outer world. The latter constitutes the API (Application Programming Interface), that essentially is a method of exchanging messages bearing information about state changes, containing commands, requests, results of command execution, etc.","sidebar":"tutorialSidebar"},"reference/components":{"id":"reference/components","title":"Components","description":"Logger","sidebar":"tutorialSidebar"},"reference/devices":{"id":"reference/devices","title":"Devices","description":"ESP32 Manager supports limited number of peripheral devices out-of-the-box. If you want to connect device that is not currently supported, you have the following options:","sidebar":"tutorialSidebar"},"reference/project-structure":{"id":"reference/project-structure","title":"Project structure","description":"Project directory structure follows that of ESP-IDF build system, with some additions:","sidebar":"tutorialSidebar"},"reference/ui":{"id":"reference/ui","title":"User Interface","description":"By default, UI is bundled with the firmware and is served from the chip at runtime. However, it is possible to move UI bundle off the chip to save space, or completely remove the UI and HTTP server from the firmware.","sidebar":"tutorialSidebar"},"services":{"id":"services","title":"Services","description":"Custom development","sidebar":"tutorialSidebar"},"starting":{"id":"starting","title":"Quick start","description":"Requirements","sidebar":"tutorialSidebar"},"tutorial/building-flashing":{"id":"tutorial/building-flashing","title":"Build and Flash","description":"This is the recommended method, simply run this command in the project directory:","sidebar":"tutorialSidebar"},"tutorial/create-project":{"id":"tutorial/create-project","title":"Create New Project","description":"Set up the environment and prerequisites as explained in the Quick Start article","sidebar":"tutorialSidebar"},"tutorial/mqtt":{"id":"tutorial/mqtt","title":"MQTT setup","description":"MQTT is a lightweight and simple publish-subscribe messaging protocol, ideal for IOT devices. esp32m makes use of MQTT for many purposes, such as:","sidebar":"tutorialSidebar"},"tutorial/ota":{"id":"tutorial/ota","title":"OTA updates","description":"OTA (Over-The-Air) feature allows flashing new applications using a WiFi connection, by downloading the application binary from a remote HTTP server.","sidebar":"tutorialSidebar"},"tutorial/remote-logging":{"id":"tutorial/remote-logging","title":"Remote Logging","description":"ESP32 Manager contains a tiny logger module that is able to send output to multiple independent appenders. esp32m library contains, among others, 2 appenders able to send log messages to remote servers for storage and analysis. This feature may be extremely helpful when debugging applications, especially when no physical access to the ESP32 chip or its UART0 is available.","sidebar":"tutorialSidebar"},"tutorial/sensor-monitoring":{"id":"tutorial/sensor-monitoring","title":"Monitoring sensors","description":"esp32m allows to monitor sensors in real time, and also perform historical analysis by feeding sensor readings into time-series database.","sidebar":"tutorialSidebar"}}}')}}]);