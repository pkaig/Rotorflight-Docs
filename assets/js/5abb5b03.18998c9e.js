"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[2331],{32099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"setup/esc-telemetry","title":"ESC Telemetry","description":"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART.","source":"@site/versioned_docs/version-2.1.0/setup/esc-telemetry.md","sourceDirName":"setup","slug":"/setup/esc-telemetry","permalink":"/docs/setup/esc-telemetry","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/setup/esc-telemetry.md","tags":[],"version":"2.1.0","sidebarPosition":100,"frontMatter":{"sidebar_position":100},"sidebar":"tutorialSidebar","previous":{"title":"RPM Filters","permalink":"/docs/setup/rpm-filters"},"next":{"title":"ESC Forward Programming","permalink":"/docs/setup/esc-forward-programming"}}');var r=n(74848),i=n(28453);const l={sidebar_position:100},d="ESC Telemetry",o={},c=[{value:"Select Serial Port",id:"select-serial-port",level:3},{value:"Select the Protocol",id:"select-the-protocol",level:3},{value:"Power Config",id:"power-config",level:3}];function h(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"esc-telemetry",children:"ESC Telemetry"})}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.p,{children:"The purpose of ESC telemetry is to provide a method of reading the values provided by the ESC. These are things such as RPM, Temperature, Voltage, Current and mAh consumed. This is accomplished by connecting the ESC telemetry wire to the flight controller with a spare UART."}),(0,r.jsx)(t.p,{children:"ESC Telemetry currently supported are :"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"BLHELI32"}),": BLheli and KISS"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"HOBBYWING V4"}),":  Platinum PRO V4, V4.1,& FLYFUN V5"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"HOBBYWING V5"}),": Platinum V5"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"SCORPION"}),": Unsc Telem"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"KONTRONIK"}),": Kosmik & Kolibri"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.strong,{children:"OMPHOBBY"})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ZTW"}),": Skyhawk"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"APD"}),": HV Pro UART telemetry"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"FlyRotor"}),":"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Graupner"}),":"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"YGE"}),": OpenYGE - Note - The ESC must have firmware V1.03547 or above. At the moment this is in beta and has not been released. Please use the contact form to request the updated firmware. ",(0,r.jsx)(t.a,{href:"https://www.yge.de/en/contact/",children:"YGE: Contact Us"})]}),"\n"]})]}),"\n",(0,r.jsx)(t.h3,{id:"select-serial-port",children:"Select Serial Port"}),"\n",(0,r.jsx)(t.p,{children:"The ESC telemetry pin TX needs to be connected to a spare UART RX."}),"\n",(0,r.jsx)(t.p,{children:"Select the UART from the Configuration page."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ESC Telemetry",src:n(25451).A+"",width:"802",height:"341"})}),"\n",(0,r.jsx)(t.h3,{id:"select-the-protocol",children:"Select the Protocol"}),"\n",(0,r.jsx)(t.p,{children:"Select the correct ESC telemetry protocol based on the one you are using."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ESC Telemetry",src:n(23488).A+"",width:"836",height:"508"})}),"\n",(0,r.jsx)(t.h3,{id:"power-config",children:"Power Config"}),"\n",(0,r.jsxs)(t.p,{children:["Enable the Voltage and Current from the ",(0,r.jsx)(t.code,{children:"Power"})," Tab."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ESC Telemetry",src:n(35548).A+"",width:"844",height:"259"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"For Hobbywing V4"}),"\nAdditional parameters are provided for the voltage and current gains, and zero offsets.\nThese parameters are set to ",(0,r.jsx)(t.strong,{children:"zero by default"})," to enable the ",(0,r.jsx)(t.strong,{children:"Auto-Calculation"})," within the firmware."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"set esc_sensor_hw4_voltage_gain = 0"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"set esc_sensor_hw4_current_gain = 0"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"set esc_sensor_hw4_current_offset = 0"})}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"note",type:"info",children:(0,r.jsxs)(t.p,{children:["Only change these values if Auto-calculation is inaccurate and you wish to fine tune the voltage and current.",(0,r.jsx)(t.br,{}),"\n","You can use the below values as a starting point."]})}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{style:{textAlign:"left"},children:"Model"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Voltage gain"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Current gain"}),(0,r.jsx)(t.th,{style:{textAlign:"right"},children:"Current offset"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 60A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 80A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"146"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"409"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum LV 120A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"109"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"110"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"377"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum HV 130A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"157"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"Platinum HV 200A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"157"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"477"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{style:{textAlign:"left"},children:"FlyFun HV 160A"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"210"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"66"}),(0,r.jsx)(t.td,{style:{textAlign:"right"},children:"381"})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},35548:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/esc-telem-power-24c16005f8352b8e9867374cad743c11.png"},23488:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/esc-telem-sel-p-18283faf0068ffc718aaf1c48dd7f594.png"},25451:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/esc-telem-uart-5dcfad44c9144abe4bc3d17e186a00fe.png"},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>d});var s=n(96540);const r={},i=s.createContext(r);function l(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);