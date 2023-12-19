"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4486],{9213:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151);const s={sidebar_position:1},o="Create New Project",a={id:"tutorial/create-project",title:"Create New Project",description:"Set up the environment and prerequisites as explained in the Quick Start article",source:"@site/docs/tutorial/create-project.md",sourceDirName:"tutorial",slug:"/tutorial/create-project",permalink:"/docs/tutorial/create-project",draft:!1,unlisted:!1,editUrl:"https://github.com/esp32m/website/edit/master/website/docs/tutorial/create-project.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/docs/starting"},next:{title:"Build and Flash",permalink:"/docs/tutorial/building-flashing"}},c={},d=[];function l(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-new-project",children:"Create New Project"}),"\n",(0,r.jsxs)(t.p,{children:["Set up the environment and prerequisites as explained in the ",(0,r.jsx)(t.a,{href:"/docs/starting",children:"Quick Start"})," article"]}),"\n",(0,r.jsxs)(t.p,{children:["The easiest way to create new project is to use sample project as a template. Create new folder and copy the following files and folders from the ",(0,r.jsx)(t.code,{children:"example/basic"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:" main/\r\n web-ui/\r\n CMakeLists.txt\r\n partitions.csv\r\n sdkconfig.defaults\n"})}),"\n",(0,r.jsx)(t.p,{children:"Now you can make the following changes:"}),"\n",(0,r.jsxs)(t.h1,{id:"in-cmakeliststxt---change-the-name-of-your-project-usually-the-last-line-starting-with-project",children:["in ",(0,r.jsx)(t.code,{children:"./CMakeLists.txt"})," - change the name of your project (usually the last line starting with ",(0,r.jsx)(t.code,{children:"project("}),")"]}),"\n",(0,r.jsxs)(t.h1,{id:"in-mainmaincpp---add-your-code",children:["in ",(0,r.jsx)(t.code,{children:"./main/main.cpp"})," - add your code"]}),"\n",(0,r.jsxs)(t.h1,{id:"in-web-uisrc---add-your-ui",children:["in ",(0,r.jsx)(t.code,{children:"./web-ui/src"})," - add your UI"]}),"\n",(0,r.jsx)(t.p,{children:"Build, flash and monitor the project via"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"idf.py build flash monitor\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);