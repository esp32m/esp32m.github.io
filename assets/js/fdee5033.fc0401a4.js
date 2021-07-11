(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3602:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:3},l="MQTT setup",u={unversionedId:"tutorial/mqtt",id:"tutorial/mqtt",isDocsHomePage:!1,title:"MQTT setup",description:"MQTT is a lightweight and simple publish-subscribe messaging protocol, ideal for IOT devices. esp32m makes use of MQTT for many purposes, such as:",source:"@site/docs/tutorial/mqtt.md",sourceDirName:"tutorial",slug:"/tutorial/mqtt",permalink:"/docs/tutorial/mqtt",editUrl:"https://github.com/esp32m/website/edit/master/website/docs/tutorial/mqtt.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Build and Flash",permalink:"/docs/tutorial/building-flashing"},next:{title:"OTA updates",permalink:"/docs/tutorial/ota"}},p=[{value:"Server setup",id:"server-setup",children:[]},{value:"Client setup",id:"client-setup",children:[]}],c={toc:p};function m(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"mqtt-setup"},"MQTT setup"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"//mqtt.org/"},"MQTT")," is a lightweight and simple publish-subscribe messaging protocol, ideal for IOT devices. ",(0,i.kt)("inlineCode",{parentName:"p"},"esp32m")," makes use of MQTT for many purposes, such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"feeding sensor readings into external time-series databases;"),(0,i.kt)("li",{parentName:"ul"},"remote logging;"),(0,i.kt)("li",{parentName:"ul"},"controlling ESP32 remotely via ",(0,i.kt)("a",{parentName:"li",href:"/docs/reference/api#mqtt"},"MQTT API"),".\nThe size of MQTT client in the compiled binary is pretty small (about 50KB), so it is a good idea to include it in your application.")),(0,i.kt)("h3",{id:"server-setup"},"Server setup"),(0,i.kt)("p",null,"We use ",(0,i.kt)("a",{parentName:"p",href:"//mosquitto.org/"},"Mosquitto server"),", but it is possible to use any other that follows ",(0,i.kt)("a",{parentName:"p",href:"//mqtt.org/"},"MQTT protocol"),". Mosquitto requires zero configuration and works with ",(0,i.kt)("inlineCode",{parentName:"p"},"esp32m")," out-of-the-box."),(0,i.kt)("h3",{id:"client-setup"},"Client setup"),(0,i.kt)("p",null,"Add the following code to your ",(0,i.kt)("inlineCode",{parentName:"p"},"main.cpp")," to enable MQTT API:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <esp32m/net/mqtt.hpp>\n\n...\n\nnet::useMqtt();\n")),(0,i.kt)("p",null,"In the UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'import { useMqtt } from "esp32m/ui";\n\nuseMqtt();\n')),(0,i.kt)("p",null,"By default, MQTT client module looks for ",(0,i.kt)("inlineCode",{parentName:"p"},"mqtt.lan")," name on your local network. You can just add this name to the ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file on the machine with the MQTT server, or add static name to your local DNS. Alternatively, you can pass URL of your MQTT server to the ",(0,i.kt)("inlineCode",{parentName:"p"},"net::useMqtt();")," command, it would be something like ",(0,i.kt)("inlineCode",{parentName:"p"},"mqtt://192.168.0.10"),". Another option is to configure MQTT client from within the ",(0,i.kt)("inlineCode",{parentName:"p"},"esp32m UI"),": click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"MQTT Client")," link in the sidebar menu, enter the details and click Save button:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mqtt-settings",src:n(4625).Z})),(0,i.kt)("p",null,"if the connection succeeds, you should see the following box in a couple of seconds:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mqtt-settings",src:n(5657).Z})))}m.isMDXComponent=!0},4625:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mqtt-settings-725c9cf0332af32572948ee5163120e2.png"},5657:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mqtt-state-d50f46cce5d5ba8afa721f50f53bd0d6.png"}}]);