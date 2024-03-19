"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2749],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},i=Object.keys(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),u=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},c=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=u(r),d=n,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?o.createElement(h,a(a({ref:e},c),{},{components:r})):o.createElement(h,a({ref:e},c))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56133:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:10},a="Introduction",l={unversionedId:"Tutorial-Quickstart/Introduction",id:"Tutorial-Quickstart/Introduction",title:"Introduction",description:"Introduction",source:"@site/docs/Tutorial-Quickstart/Introduction.md",sourceDirName:"Tutorial-Quickstart",slug:"/Tutorial-Quickstart/Introduction",permalink:"/docs/Tutorial-Quickstart/Introduction",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Quickstart/Introduction.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",next:{title:"What board should I get?",permalink:"/docs/Tutorial-Quickstart/What-Board"}},s={},u=[{value:"Latest Rotorflight 2 Version",id:"latest-rotorflight-2-version",level:2},{value:"Discussion &amp; Help",id:"discussion--help",level:2}],c={toc:u},p="wrapper";function f(t){let{components:e,...i}=t;return(0,n.kt)(p,(0,o.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Introduction",src:r(66422).Z,width:"480",height:"360"})),(0,n.kt)("p",null,"Rotorflight is a flight control software suite for single rotor RC helicopters. "),(0,n.kt)("p",null,"It is based on Betaflight, with many advanced features added for helicopters. "),(0,n.kt)("p",null,"It consists of several components:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rotorflight Firmware: The software that runs on your flight controller."),(0,n.kt)("li",{parentName:"ul"},"The Rotorflight Configurator: Update and configure the firmware using Windows, macOS or Linux."),(0,n.kt)("li",{parentName:"ul"},"Optional: Rotorflight Blackbox Explorer: Analyze Rotorflight logs on your computer."),(0,n.kt)("li",{parentName:"ul"},"Optional: Rotorflight LUA scripts: Tweak your helicopter on the field using your OpenTX/EdgeTX-ETHOS transmitter.")),(0,n.kt)("p",null,"Most Betaflight G4, F4, F7 and H7 flight controllers are compatible with Rotorflight, but they usually require some soldering. "),(0,n.kt)("p",null,"Since 2023 there are also ",(0,n.kt)("a",{parentName:"p",href:"/docs/Tutorial-Quickstart/What-Board#such-as"},"Commercial Rotorflight controllers")," available."),(0,n.kt)("p",null,"Those dedicated Rotorflight controllers resemble traditional FBL units and don't require any soldering."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Rotorflight does NOT support multi-rotor drones, nor airplanes."),(0,n.kt)("p",{parentName:"admonition"},"It is only for traditional RC helicopters.")),(0,n.kt)("h2",{id:"latest-rotorflight-2-version"},"Latest Rotorflight 2 Version"),(0,n.kt)("p",null,"The Rotorflight 2 Snapshots for testing can be found on the ",(0,n.kt)("a",{parentName:"p",href:"/announcement/"},(0,n.kt)("strong",{parentName:"a"},"Announcements"))," page. "),(0,n.kt)("h2",{id:"discussion--help"},"Discussion & Help"),(0,n.kt)("p",null,"Get in touch with fellow Rotorflight users and the developers on social media platforms:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/FyfMF4RwSA"},"Rotorflight Discord Chat Invitation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.rcgroups.com/forums/showthread.php?4000345-Rotorflight-Flight-Control-%28FBL%29-Software-Official-discussion"},"Official Rotorflight RCGroups Thread"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.facebook.com/groups/876445460825093/"},"Rotorflight Facebook Group")," "))),(0,n.kt)("p",null,"There's a lot of in-depth information available in this Website. The most important pages are shown in the sidebar on the right."))}f.isMDXComponent=!0},66422:(t,e,r)=>{r.d(e,{Z:()=>o});const o=r.p+"assets/images/intro-1-47550b31dd051216a24e836f6dcf9f6c.jpg"}}]);