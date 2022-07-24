"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="MQTT setup",s={unversionedId:"tutorial/mqtt",id:"tutorial/mqtt",title:"MQTT setup",description:"MQTT is a lightweight and simple publish-subscribe messaging protocol, ideal for IOT devices. esp32m makes use of MQTT for many purposes, such as:",source:"@site/docs/tutorial/mqtt.md",sourceDirName:"tutorial",slug:"/tutorial/mqtt",permalink:"/docs/tutorial/mqtt",draft:!1,editUrl:"https://github.com/esp32m/website/edit/master/website/docs/tutorial/mqtt.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build and Flash",permalink:"/docs/tutorial/building-flashing"},next:{title:"OTA updates",permalink:"/docs/tutorial/ota"}},l={},p=[{value:"Server setup",id:"server-setup",level:3},{value:"Client setup",id:"client-setup",level:3}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mqtt-setup"},"MQTT setup"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"//mqtt.org/"},"MQTT")," is a lightweight and simple publish-subscribe messaging protocol, ideal for IOT devices. ",(0,o.kt)("inlineCode",{parentName:"p"},"esp32m")," makes use of MQTT for many purposes, such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feeding sensor readings into external time-series databases;"),(0,o.kt)("li",{parentName:"ul"},"remote logging;"),(0,o.kt)("li",{parentName:"ul"},"controlling ESP32 remotely via ",(0,o.kt)("a",{parentName:"li",href:"/docs/reference/api#mqtt"},"MQTT API"),".\nThe size of MQTT client in the compiled binary is pretty small (about 50KB), so it is a good idea to include it in your application.")),(0,o.kt)("h3",{id:"server-setup"},"Server setup"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"//mosquitto.org/"},"Mosquitto server"),", but it is possible to use any other that follows ",(0,o.kt)("a",{parentName:"p",href:"//mqtt.org/"},"MQTT protocol"),". Mosquitto requires zero configuration and works with ",(0,o.kt)("inlineCode",{parentName:"p"},"esp32m")," out-of-the-box."),(0,o.kt)("h3",{id:"client-setup"},"Client setup"),(0,o.kt)("p",null,"Add the following code to your ",(0,o.kt)("inlineCode",{parentName:"p"},"main.cpp")," to enable MQTT API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <esp32m/net/mqtt.hpp>\n\n...\n\nnet::useMqtt();\n")),(0,o.kt)("p",null,"In the UI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useMqtt } from "esp32m/ui";\n\nuseMqtt();\n')),(0,o.kt)("p",null,"By default, MQTT client module looks for ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt.lan")," name on your local network. You can just add this name to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file on the machine with the MQTT server, or add static name to your local DNS. Alternatively, you can pass URL of your MQTT server to the ",(0,o.kt)("inlineCode",{parentName:"p"},"net::useMqtt();")," command, it would be something like ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt://192.168.0.10"),". Another option is to configure MQTT client from within the ",(0,o.kt)("inlineCode",{parentName:"p"},"esp32m UI"),": click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MQTT Client")," link in the sidebar menu, enter the details and click Save button:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mqtt-settings",src:n(6661).Z,width:"567",height:"326"})),(0,o.kt)("p",null,"if the connection succeeds, you should see the following box in a couple of seconds:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mqtt-settings",src:n(4846).Z,width:"574",height:"331"})))}c.isMDXComponent=!0},6661:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mqtt-settings-725c9cf0332af32572948ee5163120e2.png"},4846:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mqtt-state-d50f46cce5d5ba8afa721f50f53bd0d6.png"}}]);