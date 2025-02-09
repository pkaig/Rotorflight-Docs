"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7116],{29643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"setup/openlager","title":"OpenLager","description":"OpenLager is a Blackbox data logger developed by dRonin.","source":"@site/versioned_docs/version-2.1.0/setup/openlager.md","sourceDirName":"setup","slug":"/setup/openlager","permalink":"/docs/setup/openlager","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/versioned_docs/version-2.1.0/setup/openlager.md","tags":[],"version":"2.1.0","sidebarPosition":220,"frontMatter":{"sidebar_position":220},"sidebar":"tutorialSidebar","previous":{"title":"Flashing Blheli_S ESC to Bluejay firmware","permalink":"/docs/setup/blheli_s-to-bluejay"},"next":{"title":"Configurator","permalink":"/docs/configurator/"}}');var i=t(74848),s=t(28453);const r={sidebar_position:220},a="OpenLager",A={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Connecting an OpenLager",id:"connecting-an-openlager",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"openlager",children:"OpenLager"})}),"\n",(0,i.jsxs)(n.p,{children:["OpenLager is a ",(0,i.jsx)(n.a,{href:"https://github.com/d-ronin/openlager/wiki",children:"Blackbox data logger developed by dRonin"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"An OpenLager is not the much cheaper OpenLog. They can log much faster and is more reliable than the OpenLog because it uses a dedicated MCU for logging. The OpenLog; while looking very similar, really is not suitable for use in Rotorflight."})}),"\n",(0,i.jsx)(n.p,{children:"Some versions use an open/lock hinge mechanism instead of a 'push to eject' SD card socket, so you can't wrap it in heat shrink tube. You can fix that by carefully flattening the SD card retainer pin a little bit."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenLager",src:t(14420).A+"",width:"817",height:"767"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"An OpenLager is an external logging devices that use SD cards. Logging with an OpenLager has several benefits compared to other logging methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Virtually unlimited storage when using, for example, a 32GB SD card"}),"\n",(0,i.jsx)(n.li,{children:"High read speeds when you eject the SD card and connect it directly to your PC"}),"\n",(0,i.jsx)(n.li,{children:"Logging using an UART TX is a lightweight process and very MCU friendly, so you'll have more processing power for other tasks."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"connecting-an-openlager",children:"Connecting an OpenLager"}),"\n",(0,i.jsx)(n.p,{children:"The OpenLager can be connected to the FC using just three wires: +5V, ground and a TX output pad of a free UART on the FC, which is connected to the RX pad of the logging device. As soon as you power the device on, it will create a new log file on the SD card. Then it'll log everything it receives to that file. Simple but effective."}),"\n",(0,i.jsxs)(n.p,{children:["After you've connected the OpenLager, you have to tell Rotorflight which UART the TX pad for the logger is connected to. You can specify that UART in the ",(0,i.jsx)(n.em,{children:"Configuration"})," tab, under ",(0,i.jsx)(n.em,{children:"Blackbox logging"}),". For the OpenLager select 2000000 bps. Click ",(0,i.jsx)(n.em,{children:"Save"})," and ",(0,i.jsx)(n.em,{children:"Reboot"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenLager port setup",src:t(32155).A+"",width:"801",height:"144"})}),"\n",(0,i.jsxs)(n.p,{children:["After configuring the OpenLager you can go to the ",(0,i.jsx)(n.em,{children:"Blackbox"})," tab to specify what should be logged at what speed when."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["For maximum performance the SD card should be formatted with the ",(0,i.jsx)(n.a,{href:"https://www.sdcard.org/downloads/formatter",children:"SD Association's special formatting tool"}),". A fast SD card is needed, e.g. the Sandisk Extreme 16GB Class 10 UHS microSDHC."]})})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},14420:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/OpenLager-slide-in-fix-5452f2aa24f61563946181b7cbeb4437.png"},32155:(e,n,t)=>{t.d(n,{A:()=>o});const o="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var o=t(96540);const i={},s=o.createContext(i);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);