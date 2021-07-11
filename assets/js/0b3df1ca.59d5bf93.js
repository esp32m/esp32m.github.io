(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[93],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2778:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:5},l="Monitoring sensors",p={unversionedId:"tutorial/sensor-monitoring",id:"tutorial/sensor-monitoring",isDocsHomePage:!1,title:"Monitoring sensors",description:"esp32m allows to monitor sensors in real time, and also perform historical analysis by feeding sensor readings into time-series database.",source:"@site/docs/tutorial/sensor-monitoring.md",sourceDirName:"tutorial",slug:"/tutorial/sensor-monitoring",permalink:"/docs/tutorial/sensor-monitoring",editUrl:"https://github.com/esp32m/website/edit/master/website/docs/tutorial/sensor-monitoring.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Remote Logging",permalink:"/docs/tutorial/remote-logging"},next:{title:"Project structure",permalink:"/docs/reference/project-structure"}},u=[{value:"Real-time monitoring",id:"real-time-monitoring",children:[{value:"From the UI",id:"from-the-ui",children:[]},{value:"Using the API",id:"using-the-api",children:[]}]},{value:"Historical analysis",id:"historical-analysis",children:[]}],c={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"monitoring-sensors"},"Monitoring sensors"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"esp32m")," allows to monitor sensors in real time, and also perform historical analysis by feeding sensor readings into time-series database. "),(0,o.kt)("h2",{id:"real-time-monitoring"},"Real-time monitoring"),(0,o.kt)("h3",{id:"from-the-ui"},"From the UI"),(0,o.kt)("p",null,"Every supported sensor has a corresponding UI module that is available from the Devices menu in the UI. UI widgets request state updates from the backend approximately every second, and you can observe changes on the Web page in real time, for example:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"bme280",src:r(6681).Z})),(0,o.kt)("h3",{id:"using-the-api"},"Using the API"),(0,o.kt)("h4",{id:"mqtt"},"MQTT"),(0,o.kt)("p",null,"First, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorial/mqtt"},"MQTT setup")," tutorial page to enable MQTT data feed. Once MQTT connection is established, ",(0,o.kt)("inlineCode",{parentName:"p"},"esp32m")," will start to send sensor readings over MQTT protocol automatically for every connected and configured sensor, approximately every second, in the ",(0,o.kt)("strong",{parentName:"p"},"influxdb")," format, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"topic"),": esp32m/sensor/basic"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"message"),": esp32m,unit=basic,device=BME280 temperature=33.64")),(0,o.kt)("h4",{id:"websockets"},"WebSockets"),(0,o.kt)("p",null,"Refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/api#websockets"},"WebSocksts API reference")," for general guidelines. Getting sensor readings via WebSockets is as easy as issuing a ",(0,o.kt)("inlineCode",{parentName:"p"},"state-get")," request, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"request","target":"BME280","name":"state-get"}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"esp32m")," responds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"type":"response","source":"BME280","name":"state-get","data":{"addr":118,"temperature":33.64,"pressure":98758.39,"humidity":33.65}}\n')),(0,o.kt)("h2",{id:"historical-analysis"},"Historical analysis"),(0,o.kt)("p",null,"There are many different tools to store and analyze time-series data that may work with ",(0,o.kt)("inlineCode",{parentName:"p"},"esp32m"),". In this example we will use ",(0,o.kt)("strong",{parentName:"p"},"Influxdb")," with ",(0,o.kt)("strong",{parentName:"p"},"Chronograph")," on a ",(0,o.kt)("strong",{parentName:"p"},"Debian Stretch")," Linux."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"//mosquitto.org"},(0,o.kt)("em",{parentName:"a"},"Mosquitto")," server"),"."),(0,o.kt)("li",{parentName:"ul"},"Configure MQTT connection on your ESP32, use ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorial/mqtt"},"this guide"),"."),(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"//www.influxdata.com/"},(0,o.kt)("strong",{parentName:"a"},"Influxdb"),", ",(0,o.kt)("strong",{parentName:"a"},"Telegraf")," and ",(0,o.kt)("strong",{parentName:"a"},"Chronograph")),"."),(0,o.kt)("li",{parentName:"ul"},"Configure ",(0,o.kt)("strong",{parentName:"li"},"Telegraf")," to subscribe for MQTT messages and feed them into ",(0,o.kt)("strong",{parentName:"li"},"Influxdb"),", in /etc/telegraf.conf")),(0,o.kt)("p",null,"Finally, you should see something like this in your browser:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"chronograf",src:r(3031).Z})))}m.isMDXComponent=!0},6681:function(e,t,r){"use strict";t.Z=r.p+"assets/images/bme280-be67a96dcc9745efd57458cf9cf370a8.png"},3031:function(e,t,r){"use strict";t.Z=r.p+"assets/images/chronograf-74f50ac6e159970039e7c6539bd41da8.png"}}]);