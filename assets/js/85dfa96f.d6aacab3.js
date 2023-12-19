"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5241],{1551:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=i(5893),s=i(1151);const a={slug:"initial",title:"The story behind",author:"Denis Yarkovoy",author_url:"https://github.com/dyarkovoy",tags:["esp32m","source","history","initial","commit"]},n=void 0,r={permalink:"/blog/initial",editUrl:"https://github.com/esp32m/website/edit/master/website/blog/blog/2021-06-01-initial.md",source:"@site/blog/2021-06-01-initial.md",title:"The story behind",description:"It started as a simple home automation project. I was looking for a way to do the most basic things like track temperature/humidity, switch the lights, open water valve in the greenhouse, turn on the fan when it gets too hot, etc. So I looked into some ready-made automation kits and... decided to have some fun building my own!",date:"2021-06-01T00:00:00.000Z",formattedDate:"June 1, 2021",tags:[{label:"esp32m",permalink:"/blog/tags/esp-32-m"},{label:"source",permalink:"/blog/tags/source"},{label:"history",permalink:"/blog/tags/history"},{label:"initial",permalink:"/blog/tags/initial"},{label:"commit",permalink:"/blog/tags/commit"}],readingTime:8.545,hasTruncateMarker:!1,authors:[{name:"Denis Yarkovoy",url:"https://github.com/dyarkovoy"}],frontMatter:{slug:"initial",title:"The story behind",author:"Denis Yarkovoy",author_url:"https://github.com/dyarkovoy",tags:["esp32m","source","history","initial","commit"]},unlisted:!1,prevItem:{title:"Quest for Reliability",permalink:"/blog/reliability-quest"}},l={authorsImageUrls:[void 0]},d=[];function h(e){const t={a:"a",code:"code",em:"em",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:'It started as a simple home automation project. I was looking for a way to do the most basic things like track temperature/humidity, switch the lights, open water valve in the greenhouse, turn on the fan when it gets too hot, etc. So I looked into some ready-made automation kits and... decided to have some fun building my own!\r\nThe idea was to set up WiFi-capable devices all over the place (luckily, my WiFi coverage allows that) and wire them to the switches/relays/sensors etc.\r\nMy first try was Raspberry PI + USB relay module, driven by a python script. Works well for one or two locations, but if you want a dozen - it is an overkill and gets pricey.\r\nThe next thing I tried was STM32 ("Blue Pill") module wired to ESP8266. STM32 is great to read multiple sensors and control several devices, but doesn\'t have any networking features. ESP8266 is a WiFi chip, but has a very limited number of I/O ports. Together they make a great combo, but there are cons. For example, I had to maintain 2 different firmwares, implement a protocol for the chips to talk to each other, put up with reliability issues because all connections were manually soldered and looked like this:'}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.img,{alt:"Manually connected ESP822 and STM32",src:i(9314).Z+"",width:"1073",height:"410"}),"\r\nAnother thing is the amount of available RAM/flash, that is pretty restrictive on both chips."]}),"\n",(0,o.jsx)(t.p,{children:"Finally, I found this beautiful ESP32 module that had everything I could ever think of, and more - in a single tiny module, for a very competitive price (N.B.: no, I'm not paid to advertise ESP32, nor am I affiliated with Espressif in any way. I was just truly fascinated by the chip)."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"ESP32-S module",src:i(2644).Z+"",width:"450",height:"297"})}),"\n",(0,o.jsx)(t.p,{children:"Now I could easily connect 5 different sensors, 2 relays, 2 H-bridges, several LEDs and a buzzer, and make it all accessible over WiFi! The last missing piece of the puzzle was the software. At first, Arduino seemed like a very natural choice. There's support for ESP32, you get access to all the modules that mostly work well, the community is great, learning is easy, and it is a de-facto standard for simple MCU projects.\r\nBut... there's a flipside:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Arduino is too unified. It attempts to cover all sorts of MCUs, with different goals, features, hardware capabilities and design principles. What if I need access to hardware-specific features of ESP32, that aren't available, let's say, in STM32? ESP32 has its own development platform (",(0,o.jsx)(t.a,{href:"//docs.espressif.com/projects/esp-idf/en/latest/esp32/index.html",children:"ESP-IDF"}),"), and if you really want to get the most of the hardware, you have to use ESP-IDF. The problem is, Arduino went its own way. It accesses ",(0,o.jsx)(t.em,{children:"some"})," of the hardware directly, bypassing the ESP-IDF. It runs startup code to initialize Arduino-specific features, which was not desirable in my case. It uses pre-configured (and, possibly, patched) version of ESP-IDF, and if you want to re-configure it for your particular needs (which is a common practice for ESP-IDF application), you're in for another challenge. So what happens if I want to use Arduino and ESP-IDF at the same time, without dirty hacks and workarounds? Seems like mission impossible, but no. There's a wonderful ",(0,o.jsx)(t.a,{href:"//platformio.org/platforms/espressif32",children:"PlatformIO"}),", that's not only a better alternative to Arduino's native IDE, but also allows to use Arduino as a library, on top of ESP-IDF! Now this should be the ",(0,o.jsx)(t.em,{children:"Ultimate Solution"}),", I thought... and faced another handful of issues."]}),"\n",(0,o.jsxs)(t.li,{children:["Arduino wasn't designed for multitasking. No, it is perfectly possible to do multitasking in Arduino, there are scheduling libraries that offer pseudo-multitasking, and if there's native MCU support (which is the case for double-core ESP32) - you can always call native functions directly. At the same time, most of the Arduino libraries don't expect to be run in a multitasking environment, they don't care about synchronization, locking and race conditions, so one has to either patch the source, or apply various hacks to achieve stable performance. One example would be the ",(0,o.jsx)(t.a,{href:"//github.com/PaulStoffregen/OneWire",children:"OneWire library"}),". This is a well-designed and mature library that works perfectly on AVR, STM32 (and I would expect, on other single-core MCUs in a single-thread mode). OneWire protocol depends on proper timing, so the library disables interrupts when sending/receiving data packets, with the naive belief that interrupts are the only possible cause of inaccurate time measurements and prolonged delays. Wrong! ESP32 context switches must be disabled as well, or the code must be re-designed to allow for a context switch to occur safely at the very moment when the protocol expects to see state change on the 1WIRE bus. As a result, this library fails consistently on ESP32 with multiple running tasks. For me, only about 30% of the measurements were successful and the rest were failing. The workaround was suggested and implemented by ",(0,o.jsx)(t.a,{href:"//github.com/stickbreaker",children:"Chuck Todd"})," in ",(0,o.jsx)(t.a,{href:"//github.com/stickbreaker/OneWire",children:"his fork of OneWire library"}),". It is pretty straightforward - disable context switches for the duration of 1WIRE reads/writes, and voila, it works! But what about the rest of the tasks? Now they can't run until 1WIRE has finished its business... Far, far from perfect, IMHO."]}),"\n",(0,o.jsx)(t.li,{children:"As I mentioned above, Arduino sometimes accesses the hardware directly, by reading/writing memory-mapped registers and ports. ESP-IDF does the same. So for the most of common stuff like writing to the serial port, we have 2 similar blocks of code that need to be included in the resulting binary, unnecessarily bloating its size."}),"\n",(0,o.jsx)(t.li,{children:"Using Arduino as a library together with ESP-IDF requires some (heavy - i think) modifications of both cores. Given that this is a community effort, there's a (substantial) time lag to see new ESP-IDF releases ported to PlatformIO's way of using it together with Arduino. For me, this was the last drop and I made a tough decision in favor of ESP-IDF alone, dropping Arduino completely, and never regretted it."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"I don't know about you, but if I read this far, I would be puzzled. Multitasking? Concerns about firmware size? Just to switch a relay or get a temperature reading? The OP must be going nuts! Actually, that could be the case. After a couple of successful ESP32-driven projects, I got greedy. I wanted to see more and more features, and, the most important, I was not constrained by Arduino any longer. Here's what I wanted to achieve:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"True multitasking, so I could poll for a sensor in a simple loop and not worry about blocking other tasks."}),"\n",(0,o.jsxs)(t.li,{children:["Modular architecture - a simple ",(0,o.jsx)(t.code,{children:"#include <XXX>"})," followed by a call to ",(0,o.jsx)(t.code,{children:"useXXX(...);"})," should be enough to make use of an external device attached to ESP32."]}),"\n",(0,o.jsx)(t.li,{children:"Extensible design - adding new devices (or porting from Arduino) should be easy."}),"\n",(0,o.jsx)(t.li,{children:"Unified communication protocol to speak to the outer world - whether to get a sensor reading, or to send a control command to switch a relay - via different communication channels (serial port, MQTT, HTTP, WebSockets, etc). Human-readable. JSON-based."}),"\n",(0,o.jsx)(t.li,{children:"Unified logic for loading, using and storing module-specific settings. Human-readable. JSON-based."}),"\n",(0,o.jsx)(t.li,{children:"Unified asynchronous event dispatching system to tie different modules together, while reducing dependencies between the modules to a minimum."}),"\n",(0,o.jsx)(t.li,{children:"Over-the-air firmware updates with few simple clicks or unattended - when new firmware becomes available on the server."}),"\n",(0,o.jsx)(t.li,{children:"Logging with configurable appenders, for example, to save error logs to the flash memory and retrieve it when needed, or to send the log messages instantly to rsyslog server over UDP - very useful feature for debugging new code without physical access to the chip and/or it's UART0."}),"\n",(0,o.jsxs)(t.li,{children:["Get sensor readings into ",(0,o.jsx)(t.a,{href:"//www.influxdata.com/",children:"influxdb"})," time series database via MQTT and ",(0,o.jsx)(t.a,{href:"//www.influxdata.com/time-series-platform/telegraf/",children:"Telegraf"})," and visualize it with ",(0,o.jsx)(t.a,{href:"//www.influxdata.com/time-series-platform/chronograf/",children:"Chronograf"}),", or any other time-series database/UI."]}),"\n",(0,o.jsx)(t.li,{children:"Allow to configure multiple WiFi APs and select optimal/available one automatically."}),"\n",(0,o.jsx)(t.li,{children:"If no WiFi SSID/password was pre-configured in the firmware, or no connection could be made within configured time frame, launch AP with captive portal, allowing to connect from any smartphone and configure WiFi options."}),"\n",(0,o.jsxs)(t.li,{children:["Comprehensive Web-based User Interface (yes, I'm that crazy)!","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Single page ",(0,o.jsx)(t.a,{href:"//reactjs.org",children:"ReactJS"})," - based app."]}),"\n",(0,o.jsx)(t.li,{children:"WebSockets to read/write state and settings of the running firmware and control attached devices."}),"\n",(0,o.jsx)(t.li,{children:"Modular design - follows backend modules."}),"\n",(0,o.jsx)(t.li,{children:"Served directly from the ESP32's IP address over WiFi, with an option to be served from a different server (to save flash space, for instance)"}),"\n",(0,o.jsx)(t.li,{children:"Displays general system/runtime info, such as RAM/flash usage/fragmentation, uptime, WiFi connection details, per-task info,"}),"\n",(0,o.jsx)(t.li,{children:"Allows to control pin modes from UI (switch between digital/ADC/DAC/PWM/...), read/write pin state, voltage, PWM duty/freq., etc."}),"\n",(0,o.jsx)(t.li,{children:"Allows to scan popular buses for connected devices (I2C and MODBUS - get connected devices' addresses, 1WIRE - get codes of connected devices)."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"All of the above - in the reusable library, with only the needed code to be included into the binary for a particular project."}),"\n",(0,o.jsx)(t.li,{children:"Must fit in the 2MB (actually, a little less) to make OTA updates possible on a standard ESP32 dev module with 4MB SPI Flash."}),"\n",(0,o.jsxs)(t.li,{children:["Supervisor app:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Controls multiple devices via WebSockets API."}),"\n",(0,o.jsx)(t.li,{children:"Provides simple higher-level scripting API with something as simple as Javascript, to run custom scenarios (for example, if the rain is detected by device A, tell device B to close the window)."}),"\n",(0,o.jsxs)(t.li,{children:["Notifications to ",(0,o.jsx)(t.a,{href:"//t.me",children:"Telegram"})," channel or any other messenger."]}),"\n",(0,o.jsxs)(t.li,{children:["No central server - I don't want to pay for a VPS, domain a static IP. Rather, I want to have it on a couple of Raspberries (behind the NAT, dynamic IP) and make it accessible from any part of the world. ",(0,o.jsx)(t.a,{href:"//www.torproject.org/docs/tor-onion-service",children:"TOR hidden services"})," is one way to make it work."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Looking back, it's been about 6 months of part-time engagement, and most of the above (except the supervisor app) was implemented to a (not perfect, but) usable extent. I have 11  setups, driving different devices and feeding sensor data into the Influx server running on a Raspberry. Most of the boards have had an uptime of > 30 days (the rest have hardware issues due to manual soldering, caught by WDTs causing auto-reboot every now and then)."}),"\n",(0,o.jsx)(t.p,{children:"So I thought maybe there are other crazy guys and girls like me out there, who enjoy this stuff as much, and decided to share the source/docs. It may help enthusiasts to build something alike, to learn the MCU or just to have fun! :-)"})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},2644:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/esp32-s-9b595c94e2735ac2f251d27035186b92.jpg"},9314:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/esp8266_stm32_soldered-dfeae5b83b86e5e4d73f313e07bc5880.jpg"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>n});var o=i(7294);const s={},a=o.createContext(s);function n(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);