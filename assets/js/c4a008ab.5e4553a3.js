"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7612],{8441:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(5893),r=i(1151);const s={sidebar_position:2},o="Quick start",a={id:"starting",title:"Quick start",description:"Requirements",source:"@site/docs/starting.md",sourceDirName:".",slug:"/starting",permalink:"/docs/starting",draft:!1,unlisted:!1,editUrl:"https://github.com/esp32m/website/edit/master/website/docs/starting.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Create New Project",permalink:"/docs/tutorial/create-project"}},l={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compiling and running example",id:"compiling-and-running-example",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PC with Windows 10, Linux or MAC OS"}),"\n",(0,t.jsx)(n.li,{children:"ESP32 module"}),"\n",(0,t.jsx)(n.li,{children:"Serial programmer"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsx)(n.p,{children:"You need to have the following software installed:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"//www.python.org/downloads/",children:"Python 3.x"})," or more recent."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"//git-scm.com/downloads",children:"Git 2.x"})," or more recent."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"//nodejs.org/en/",children:"NodeJS 20.x"})," or more recent."]}),"\n",(0,t.jsxs)(n.li,{children:["The latest ESP-IDF, installation instructions are ",(0,t.jsx)(n.a,{href:"//docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/index.html",children:"here"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"//yarnpkg.com/getting-started/install",children:"Yarn Modern 3.x"})," - only needed if you want to use UI."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Initial application upload must be done via serial connection. Depending on the type of your ESP32 board/module, there are different ways to establish serial link to the PC.\r\nPlease review the following guide for details: ",(0,t.jsx)(n.a,{href:"//docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/establish-serial-connection.html",children:"Establish Serial Connection with ESP32"}),".\r\n",(0,t.jsx)(n.a,{href:"//www.google.com/search?q=esp32+serial+programmer",children:"This seach"})," also yields plenty of relevant guides and tutorials to connect ESP32 module to a PC over serial link.\r\nAfter the initial upload, subsequent application updates may be performed via OTA and embedded UI from any Web browser."]}),"\n",(0,t.jsx)(n.h2,{id:"compiling-and-running-example",children:"Compiling and running example"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Clone ESP32 Manager core repository:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"$ git clone https://github.com/esp32m/core.git\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Connect the ESP32 module/board to the PC."}),"\n",(0,t.jsxs)(n.li,{children:["In the ",(0,t.jsx)(n.code,{children:"core/examples/basic"})," run"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"idf.py build flash monitor\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In most cases it should be able to detect your serial port automatically. If not, just pass it int the command line using the ",(0,t.jsx)(n.code,{children:"--port"})," switch, for example: ",(0,t.jsx)(n.code,{children:"--port /dev/ttyUSB0"}),".\r\nWithin a couple of minutes, you should see something like this in the terminal:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0:00:00:00.0011 I basic  starting 0.0.1\r\n0:00:00:00.0429 D config-vfs  XXX bytes loaded\r\n0:00:00:00.0436 I basic  init level 0\r\n0:00:00:00.0548 I wifi  changing mode: AP -> Disabled\r\n0:00:00:00.0553 I wifi  StaInitial -> StaConnecting\r\n0:00:00:00.0556 I basic  initialization complete\r\n...\n"})}),"\n",(0,t.jsxs)(n.p,{children:['At this point the device enters initial configuration mode and brings up WiFi access point. You can use your smarphone or any WiFi-capable device to connect to this AP\r\n(AP name matches application name, "basic" in this case). Upon connection, you will be redirected to a browser page allowing you to connect to your router AP. Some smartphone\r\nmodels don\'t support automatic redirection (also known as Captive Portal), in this case you may need to open the browser and navigate to ',(0,t.jsx)(n.code,{children:"http://192.168.4.1/cp"})," to perform initial configuration."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);