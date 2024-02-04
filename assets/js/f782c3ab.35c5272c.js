"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13483:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={sidebar_position:30},i=void 0,s={unversionedId:"Tutorial-Setup/Remapping",id:"Tutorial-Setup/Remapping",title:"Remapping",description:"Rotorflight is based on Betaflight which is generally used to control drones. Unfortunately, drones do not have servos and have more motors than we need for a helicopter. In order to use servos we must remap our boards so that we have a pad to connect the servos to.",source:"@site/docs/Tutorial-Setup/Remapping.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/Remapping",permalink:"/docs/Tutorial-Setup/Remapping",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/Remapping.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"Flashing the firmware",permalink:"/docs/Tutorial-Setup/Flashing-the-firmware"},next:{title:"Configuration",permalink:"/docs/Tutorial-Setup/Configuration"}},p={},l=[{value:"Key concepts",id:"key-concepts",level:2},{value:"Custom defaults remapping spreadsheet",id:"custom-defaults-remapping-spreadsheet",level:2},{value:"Rotorflight Hardware config and remapping video",id:"rotorflight-hardware-config-and-remapping-video",level:2},{value:"Importing new targets",id:"importing-new-targets",level:2}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Rotorflight is based on Betaflight which is generally used to control drones. Unfortunately, drones do not have servos and have more motors than we need for a helicopter. In order to use servos we must remap our boards so that we have a pad to connect the servos to."),(0,n.kt)("p",{parentName:"admonition"},"If using a commercial FC such as the ones in the Manufacturers section. This step is not required."),(0,n.kt)("p",{parentName:"admonition"},"Disclaimer"),(0,n.kt)("p",{parentName:"admonition"},"The pin labeling on commercial flight controllers refers to what the manufacturer has assigned as a function to that pin, in reality these pins are connected to the mcu, and with the power of RF, we can reassign these pins to other functions depending on the available resources on that pin, (you can consult the mcu data sheet STM32 alternate function mapping table to view all the available resources on a particular pin).")),(0,n.kt)("h2",{id:"key-concepts"},"Key concepts"),(0,n.kt)("p",null,"Before you start remapping your drone FC to be used with Rotorflight, keep in mind the following."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1- Although it is not necessary, but it is advised to keep your cyclic servos on the same Timer.\n\n2- If you wish to use a narrow band tail servo, then assign that servo to separate timer.\n\n3- Main motor esc output should on a separate timer.\n\n4- In case you are using a PWM controlled esc then Rotorflight will require an rpm signal\n   for governor and RPM Filtering, RPM input should be on a 32bit separate timer (TIM2 or TIM5).\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mixer Tab",src:r(66868).Z,width:"1694",height:"1024"})),(0,n.kt)("h2",{id:"custom-defaults-remapping-spreadsheet"},"Custom defaults remapping spreadsheet"),(0,n.kt)("p",null,"Spreadsheet for remapping Betaflight targets for use with Rotorflight. The spreadsheet re-allocates features for motors and servos and configures associated timers and dma."),(0,n.kt)("p",null,"Please 'make a copy'. "),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1m-DhCcTTKnMhXicMjBQc5EqCSAowDk0TqXpZUyZq--A/edit?usp=drivesdk"},"Rotorflight remapping spreadsheet v1.4.1")),(0,n.kt)("h2",{id:"rotorflight-hardware-config-and-remapping-video"},"Rotorflight Hardware config and remapping video"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/TNAeDaAjzfQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,n.kt)("h2",{id:"importing-new-targets"},"Importing new targets"),(0,n.kt)("p",null,"Some targets in the betaflight target repository have additional #define lines above board_name. Please do not chose them. In the example below copy only from board_name down. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Board_name")," MUST be the first line in the spreadsheet."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Mixer Tab",src:r(4730).Z,width:"907",height:"606"})))}d.isMDXComponent=!0},66868:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/remapping-1-03ea9d64f2a9cb3c4f22340d53fedcc7.png"},4730:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/remapping-2-626682e0cc3b714810a23985f931637b.png"}}]);