(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[179],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,m=c["".concat(l,".").concat(d)]||c[d]||g[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1142:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:4},l="Remote Logging",p={unversionedId:"tutorial/remote-logging",id:"tutorial/remote-logging",isDocsHomePage:!1,title:"Remote Logging",description:"ESP32 Manager contains a tiny logger module that is able to send output to multiple independend appenders. esp32m library contains, among others, 2 appenders able to send log messages to remote servers for storage and analysis. This feature may be extremely helpful when debugging applications, especially when no physical access to the ESP32 chip or its UART0 is available.",source:"@site/docs/tutorial/remote-logging.md",sourceDirName:"tutorial",slug:"/tutorial/remote-logging",permalink:"/docs/tutorial/remote-logging",editUrl:"https://github.com/esp32m/website/edit/master/website/docs/tutorial/remote-logging.md",version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"OTA updates",permalink:"/docs/tutorial/ota"},next:{title:"Monitoring sensors",permalink:"/docs/tutorial/sensor-monitoring"}},u=[{value:"Logging to <strong>rsyslog</strong>",id:"logging-to-rsyslog",children:[{value:"Server setup",id:"server-setup",children:[]},{value:"Appender setup",id:"appender-setup",children:[]},{value:"Checking output",id:"checking-output",children:[]}]},{value:"Logging to MQTT",id:"logging-to-mqtt",children:[{value:"Client and server setup",id:"client-and-server-setup",children:[]},{value:"Appender setup",id:"appender-setup-1",children:[]},{value:"Checking output",id:"checking-output-1",children:[]}]}],g={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"remote-logging"},"Remote Logging"),(0,a.kt)("p",null,"ESP32 Manager contains a tiny logger module that is able to send output to multiple independend appenders. esp32m library contains, among others, 2 appenders able to send log messages to remote servers for storage and analysis. This feature may be extremely helpful when debugging applications, especially when no physical access to the ESP32 chip or its UART0 is available."),(0,a.kt)("h2",{id:"logging-to-rsyslog"},"Logging to ",(0,a.kt)("strong",{parentName:"h2"},"rsyslog")),(0,a.kt)("h3",{id:"server-setup"},"Server setup"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"//www.rsyslog.com/"},"RSYSLOG")," daemon is included by default in the majority of modern Linux distributions. Is capable of collecting remote log messages over the TCP or UDP protocol. Many distributions have this feature disabled by default, so we need a little tweak to enable it. Open ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rsyslog.conf")," and make sure that the following lines are un-commented:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'module(load="imudp")\ninput(type="imudp" port="514")\n')),(0,a.kt)("p",null,"Now restart the rsyslog daemon and check that it is listening on UDP port 514::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo systemctl restart rsyslog\n$ sudo netstat -nlp | grep rsyslogd\n")),(0,a.kt)("p",null,"if everything is right, you should see something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"udp        0      0 0.0.0.0:514             0.0.0.0:*                           9335/rsyslogd\nudp6       0      0 :::514                  :::*                                9335/rsyslogd\n")),(0,a.kt)("h3",{id:"appender-setup"},"Appender setup"),(0,a.kt)("p",null,"Add the following code to your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.cpp")," to enable UDP logging to ",(0,a.kt)("strong",{parentName:"p"},"rsyslog"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <esp32m/log/udp.hpp>\n\n...\n\nlog::addBufferedAppender(new log::Udp());\n")),(0,a.kt)("p",null,"By default, UDP appender looks for ",(0,a.kt)("inlineCode",{parentName:"p"},"syslog.lan")," name on your local network. You can just add this name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," file on the machine with the ",(0,a.kt)("strong",{parentName:"p"},"rsyslog")," server, or add static name to your local DNS. Alternatively, you can pass IP or DNS name of your ",(0,a.kt)("strong",{parentName:"p"},"rsyslog")," server to the ",(0,a.kt)("inlineCode",{parentName:"p"},"new log::Udp()")," statement. "),(0,a.kt)("h3",{id:"checking-output"},"Checking output"),(0,a.kt)("p",null,"If everything is set up correctly, you should start seeing log messages from your ESP32 in the /var/log/syslog. It is also possible to redirect these messages to separate file or files. Refer to ",(0,a.kt)("a",{parentName:"p",href:"//www.rsyslog.com/"},"RSYSLOG")," documentation for details."),(0,a.kt)("h2",{id:"logging-to-mqtt"},"Logging to MQTT"),(0,a.kt)("p",null,"If you need remote logging, ",(0,a.kt)("strong",{parentName:"p"},"rsyslog")," option is generally the best due to low footprint and the best possible performance. However, if you don't have access to a Linux machine with ",(0,a.kt)("strong",{parentName:"p"},"rsyslog"),", or if you want to capture log messages in your own MQTT-enabled application, MQTT logging may be useful."),(0,a.kt)("h3",{id:"client-and-server-setup"},"Client and server setup"),(0,a.kt)("p",null,"Refer to ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/mqtt"},"MQTT setup")," tutorial page for details."),(0,a.kt)("h3",{id:"appender-setup-1"},"Appender setup"),(0,a.kt)("p",null,"Add the following code to your ",(0,a.kt)("inlineCode",{parentName:"p"},"main.cpp")," to enable UDP logging to ",(0,a.kt)("strong",{parentName:"p"},"rsyslog"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <esp32m/log/mqtt.hpp>\n\n...\n\nlog::addBufferedAppender(&log::Mqtt::instance());\n")),(0,a.kt)("h3",{id:"checking-output-1"},"Checking output"),(0,a.kt)("p",null,"Run this command on the computer with MQTT server to see log messages:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ mosquitto_sub -t 'esp32m/log/#'\n")))}c.isMDXComponent=!0}}]);