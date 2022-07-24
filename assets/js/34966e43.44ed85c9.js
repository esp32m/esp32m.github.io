"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),a=(n(7294),n(3905));const r={slug:"reliability-quest",title:"Quest for Reliability",author:"Denis Yarkovoy",author_url:"https://github.com/dyarkovoy",tags:["esp32m","reliability"]},i=void 0,s={permalink:"/blog/reliability-quest",editUrl:"https://github.com/esp32m/website/edit/master/website/blog/blog/2021-06-21-reliability-quest.md",source:"@site/blog/2021-06-21-reliability-quest.md",title:"Quest for Reliability",description:"So it all has been working nicely for the past couple of weeks, with one exception. Every few days I see unexpected reboots, and about once a month - permanent freeze in at least one of the boards. Luckily, ESP32 has reset reason register, and I have made it available in the UI:",date:"2021-06-21T00:00:00.000Z",formattedDate:"June 21, 2021",tags:[{label:"esp32m",permalink:"/blog/tags/esp-32-m"},{label:"reliability",permalink:"/blog/tags/reliability"}],readingTime:3.425,hasTruncateMarker:!0,authors:[{name:"Denis Yarkovoy",url:"https://github.com/dyarkovoy"}],frontMatter:{slug:"reliability-quest",title:"Quest for Reliability",author:"Denis Yarkovoy",author_url:"https://github.com/dyarkovoy",tags:["esp32m","reliability"]},prevItem:{title:"Going Wireless!",permalink:"/blog/going-wire-less"},nextItem:{title:"The story behind",permalink:"/blog/initial"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"So it all has been working nicely for the past couple of weeks, with one exception. Every few days I see unexpected reboots, and about once a month - permanent freeze in at least one of the boards. Luckily, ESP32 has reset reason register, and I have made it available in the UI:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reset by IntWdt",src:n(9301).Z,width:"843",height:"607"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"//docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/wdts.html#interrupt-watchdog"},"The manual")," explains:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The interrupt watchdog makes sure the FreeRTOS task switching interrupt isn\u2019t blocked for a long time. This is bad because no other tasks, including potentially important ones  like the WiFi task and the idle task, can\u2019t get any CPU runtime. A blocked task switching interrupt can happen because a program runs into an infinite loop with interrupts disabled or hangs in an interrupt.")),(0,a.kt)("p",null,"Great! Now I need to know which task is responsible for this. We know ESP-IDF dumps some useful info to UART0 when the watchdog is triggered . How nice would it be to send this info over to my logger that passes it on to the rsyslog daemon over UDP! Regretfully, not in this case. If context switches are blocked, WiFi/networking isn't going to function properly, so it is unlikely we're going to succeed with UDP transmission. Additionally, upon reviewing ESP-IDF's panic handler, there isn't a way to redirect or capture an output without modifying the source. So I thought the easiest would be setting up another Raspberry nearby, connect it to ESP32's UART0 and capture the output continuously, which I did.\nResults were puzzling, to say the least. Every time I saw ",(0,a.kt)("em",{parentName:"p"},"different")," offending task in the log, and sometimes there was ",(0,a.kt)("em",{parentName:"p"},"nothing"),' in the log at all! I started to suspect this may be a hardware issue. I needed a confirmation, so I set up 2 identical ESP32 modules, one on a dev socket, powered by USB, and the other one - "in the field" with all the manual soldering and a bunch of wires. Uploaded identical binaries, connected identical peripheral devices. In a week, my first module had 0 issues, still up and running, and the second one froze once and auto-rebooted 3 times. Definitely a hardware problem. Could it be a faulty ESP32 chip? No problem, replaced it and ran the test again - nothing changed. My first setup is still up towards the end of the second week, and the second one reboots and freezes fiercely.'),(0,a.kt)("p",null,"Is now the time to RTFM? Yes! Espressif has lots of PDFs on ESP32, and the solution must be there. The only problem is - too much reading and me being too lazy. Let me rather find a Guru and ask him. ",(0,a.kt)("a",{parentName:"p",href:"mailto:sinclair@sdmideas.com"},"Sinclair Macgregor")," was very kind to help me. He suggested that the issue is probably related to the power supply:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'I think you are describing a "brown out" a uc type of reset error that can hang a system, I think you have power or vreg issues. From what I see, I believe your main issue for\nstability MAY be related to regulated voltage supply issues in dynamic switching conditions  (you may not see this without use of oscilloscope to capture the events as they may happen quickly enough to leave the IC in an indeterminate state - ie not enough time OFF to actually reset - or not low enough to actually reset but enough to cause what is known as a brown reset where SOME functions of IC reset but not all. Other possible sources of issues look to be the isolation strategy.')),(0,a.kt)("p",null,"It was a revelation. I suddenly remembered that I have another ESP32 powered by a battery, with awful wiring, but an uptime of 46 days! "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Reset by IntWdt",src:n(3325).Z,width:"850",height:"610"})),(0,a.kt)("p",null,"Those freezing and rebooting setups were powered by these modules:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"HLK-PM01",src:n(7676).Z,width:"592",height:"600"})),(0,a.kt)("p",null,"as I needed 5v for some of the sensors, and then I used voltage regulator (LD1117 or similar) for 3.3v to power the ESP32. And of course I didn't use any of the capacitors recommended by the datasheet. Real heros don't read datasheets, lol. Now the capacitors are in place, and the problem is solved. Don't be like me, ",(0,a.kt)("em",{parentName:"p"},"Read The F****ng Manuals!")))}c.isMDXComponent=!0},7676:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/hlk-pm01-6b3c22a1db7f0365cd3191c4a1ee83a4.gif"},9301:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intwdt-ae2e66647b41a859b1eb97de3c56a570.png"},3325:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/lipoti-uptime-a6ddcdf9e92fc9279aa70d118e5528d8.png"}}]);