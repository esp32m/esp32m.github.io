(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},426:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Introduction",c={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Introduction",description:"ESP32 Manager is a framework on top of Espressif's native ESP-IDF development environment,",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/esp32m/website/edit/master/website/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/docs/starting"}},u=[{value:"Architecture",id:"architecture",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"ESP32 Manager is a framework on top of ",(0,a.kt)("a",{parentName:"p",href:"//espressif.com"},"Espressif's")," native ",(0,a.kt)("a",{parentName:"p",href:"//docs.espressif.com/projects/esp-idf"},"ESP-IDF")," development environment,\ndesigned to streamline firmware development for the most common use cases of home automation. It may be useful for those who want to explore ESP32 beyond the Arduino's simplicity and ESP-IDF's complexity."),(0,a.kt)("p",null,"Why another framework, if we alredy have ",(0,a.kt)("a",{parentName:"p",href:"//arduino.cc"},"Arduino")," and ",(0,a.kt)("a",{parentName:"p",href:"//docs.espressif.com/projects/esp-idf"},"ESP-IDF"),"? My reasoning is explained in ",(0,a.kt)("a",{parentName:"p",href:"/blog/initial"},"this blog post.")," In short - I wanted something more comprehensive than Arduino, and more user-friendly than ESP-IDF. I wanted modular, re-usable code and UI to kickstart new projects easily, on a solid foundation, with all the bells and whistles like OTA, MQTT, WiFi autoconfig, remote logging, Web-based UI, JSON-based config & API, real-time monitoring, and more available to include (or exclude) at developer's discretion, with just a few lines of code. I wanted it to be fully event-driven, so the modules can asynchronously respond to events and talk to each other, instead of multiplying dependencies. I wanted true multitasking, to be able to monitor several sensors in parallel, not worrying about blocking other tasks, without dirty hacks. I wanted an API to supervise multiple ESP32-based devices remotely. "),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"ESP32 Manager consists of two major parts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Interface"))),(0,a.kt)("p",null,"The core is written in C++, follows object-oriented pattern and includes the following building blocks:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"logging subsystem;"),(0,a.kt)("li",{parentName:"ul"},"event manager;"),(0,a.kt)("li",{parentName:"ul"},"configuration store;"),(0,a.kt)("li",{parentName:"ul"},"bus managers; "),(0,a.kt)("li",{parentName:"ul"},"device drivers;"),(0,a.kt)("li",{parentName:"ul"},"network subsystem;"),(0,a.kt)("li",{parentName:"ul"},"input/output subsystem;"),(0,a.kt)("li",{parentName:"ul"},"debugging tools;"),(0,a.kt)("li",{parentName:"ul"},"user interface and API backed;"),(0,a.kt)("li",{parentName:"ul"},"bluetooth subsystem;"),(0,a.kt)("li",{parentName:"ul"},"application container.")),(0,a.kt)("p",null,"The user interface is a ",(0,a.kt)("a",{parentName:"p",href:"//nodejs.org/"},"NodeJS")," library of ",(0,a.kt)("a",{parentName:"p",href:"//reactjs.org/"},"ReactJs")," components that interact with the ",(0,a.kt)("strong",{parentName:"p"},"Core's")," backend to visualize the state of the modules and pass user actions on to the module. The UI library follows the structure of the ",(0,a.kt)("strong",{parentName:"p"},"Core"),". Every stateful and/or inteactive module has corresponding visual component in the UI library.\nCompiled UI consists of two files - ",(0,a.kt)("strong",{parentName:"p"},"index.html")," and ",(0,a.kt)("strong",{parentName:"p"},"main.js"),", less than 250KB in size, compressed."),(0,a.kt)("p",null,"The size of ESP32 Manager in the compiled application (esp-idf runtime + esp32m core + UI) starts from 1.4MB."))}m.isMDXComponent=!0}}]);