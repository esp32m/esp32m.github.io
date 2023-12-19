"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9671],{7876:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var s=t(5893),i=t(1151);const r={sidebar_position:1},o="Introduction",a={id:"intro",title:"Introduction",description:"ESP32 Manager is a framework on top of Espressif's native ESP-IDF development environment,",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/esp32m/website/edit/master/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/docs/starting"}},l={},c=[{value:"Architecture",id:"architecture",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["ESP32 Manager is a framework on top of ",(0,s.jsx)(n.a,{href:"//espressif.com",children:"Espressif's"})," native ",(0,s.jsx)(n.a,{href:"//docs.espressif.com/projects/esp-idf",children:"ESP-IDF"})," development environment,\r\ndesigned to streamline firmware development for the most common use cases of home automation. It may be useful for those who want to explore ESP32 beyond the Arduino's simplicity and ESP-IDF's complexity."]}),"\n",(0,s.jsxs)(n.p,{children:["Why another framework, if we already have ",(0,s.jsx)(n.a,{href:"//arduino.cc",children:"Arduino"})," and ",(0,s.jsx)(n.a,{href:"//docs.espressif.com/projects/esp-idf",children:"ESP-IDF"}),"? My reasoning is explained in ",(0,s.jsx)(n.a,{href:"/blog/initial",children:"this blog post."})," In short - I wanted something more comprehensive than Arduino, and more user-friendly than ESP-IDF. I wanted modular, re-usable code and UI to kickstart new projects easily, on a solid foundation, with all the bells and whistles like OTA, MQTT, WiFi autoconfig, remote logging, Web-based UI, JSON-based config & API, real-time monitoring, and more available to include (or exclude) at developer's discretion, with just a few lines of code. I wanted it to be fully event-driven, so the modules can asynchronously respond to events and talk to each other, instead of multiplying dependencies. I wanted true multitasking, to be able to monitor several sensors in parallel, not worrying about blocking other tasks, without dirty hacks. I wanted an API to supervise multiple ESP32-based devices remotely."]}),"\n",(0,s.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,s.jsx)(n.p,{children:"ESP32 Manager consists of two major parts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Core"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"User Interface"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The core is written in C++, follows object-oriented pattern and includes the following building blocks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"logging subsystem;"}),"\n",(0,s.jsx)(n.li,{children:"event manager;"}),"\n",(0,s.jsx)(n.li,{children:"configuration store;"}),"\n",(0,s.jsx)(n.li,{children:"bus managers;"}),"\n",(0,s.jsx)(n.li,{children:"device drivers;"}),"\n",(0,s.jsx)(n.li,{children:"network subsystem;"}),"\n",(0,s.jsx)(n.li,{children:"input/output subsystem;"}),"\n",(0,s.jsx)(n.li,{children:"debugging tools;"}),"\n",(0,s.jsx)(n.li,{children:"user interface and API backed;"}),"\n",(0,s.jsx)(n.li,{children:"bluetooth subsystem;"}),"\n",(0,s.jsx)(n.li,{children:"application container."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The user interface is a ",(0,s.jsx)(n.a,{href:"//nodejs.org/",children:"NodeJS"})," library of ",(0,s.jsx)(n.a,{href:"//reactjs.org/",children:"ReactJs"})," components that interact with the ",(0,s.jsx)(n.strong,{children:"Core's"})," backend to visualize the state of the modules and pass user actions on to the module. The UI library follows the structure of the ",(0,s.jsx)(n.strong,{children:"Core"}),". Every stateful and/or interactive module has corresponding visual component in the UI library.\r\nCompiled UI consists of two files - ",(0,s.jsx)(n.strong,{children:"index.html"})," and ",(0,s.jsx)(n.strong,{children:"main.js"}),", less than 250KB in size, compressed."]}),"\n",(0,s.jsx)(n.p,{children:"The size of ESP32 Manager in the compiled application (esp-idf runtime + esp32m core + UI) starts from 1.4MB."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const i={},r=s.createContext(i);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);