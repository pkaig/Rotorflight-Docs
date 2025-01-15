"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7550],{22887:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"setup/radio-setup/radio-setup-futaba/futaba-setup","title":"Futaba example","description":"Instructions for Fu.taba Initial Radio and Configurator Setup, this is a generic setup using Futaba T26SZ transmitter and SBUS2 receiver with a Rotorflight FC. This example shows a Nexus; however, the process is the same for any Rotorflight controller. Please choose the SBUS port related to your FC","source":"@site/versioned_docs/version-2.1.0/setup/radio-setup/radio-setup-futaba/futaba-setup.mdx","sourceDirName":"setup/radio-setup/radio-setup-futaba","slug":"/setup/radio-setup/radio-setup-futaba/futaba-setup","permalink":"/docs/setup/radio-setup/radio-setup-futaba/futaba-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.1.0/setup/radio-setup/radio-setup-futaba/futaba-setup.mdx","tags":[],"version":"2.1.0","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"FrSky Ethos RFStatus LUA Script","permalink":"/docs/setup/radio-setup/radio-setup-ethos/ethos-nexus-status"},"next":{"title":"Jeti example","permalink":"/docs/setup/radio-setup/radio-setup-jeti/jeti-setup"}}');var r=s(74848),o=s(28453);const a={sidebar_position:10},n="Futaba example",c={},d=[{value:"Wiring",id:"wiring",level:2},{value:"Configure the FC",id:"configure-the-fc",level:2},{value:"Setup UART ports",id:"setup-uart-ports",level:3},{value:"Setup Receiver",id:"setup-receiver",level:3},{value:"Setup Radio",id:"setup-radio",level:3}];function u(e){const t={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"futaba-example",children:"Futaba example"})}),"\n",(0,r.jsx)(t.admonition,{title:"Rotorflight Futaba Setup",type:"info",children:(0,r.jsx)(t.p,{children:"Instructions for Fu.taba Initial Radio and Configurator Setup, this is a generic setup using Futaba T26SZ transmitter and SBUS2 receiver with a Rotorflight FC. This example shows a Nexus; however, the process is the same for any Rotorflight controller. Please choose the SBUS port related to your FC"})}),"\n",(0,r.jsx)(t.h2,{id:"wiring",children:"Wiring"}),"\n",(0,r.jsxs)(t.p,{children:["The simplest is to use a male to male servo lead to connect from the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"SBUS"})})," port on the FBL to the ",(0,r.jsx)(t.em,{children:(0,r.jsx)(t.strong,{children:"SBUS2"})})," port on your receiver."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Wiring",src:s(55345).A+"",width:"5472",height:"3648"})}),"\n",(0,r.jsx)(t.h2,{id:"configure-the-fc",children:"Configure the FC"}),"\n",(0,r.jsx)(t.p,{children:"Next steps are to configure the fbl to receive the SBUS2 signal."}),"\n",(0,r.jsx)(t.h3,{id:"setup-uart-ports",children:"Setup UART ports"}),"\n",(0,r.jsx)(t.p,{children:"Set the SBUS port to be used for serial rx communication"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"SerialRX",src:s(48209).A+"",width:"1333",height:"506"})}),"\n",(0,r.jsx)(t.h3,{id:"setup-receiver",children:"Setup Receiver"}),"\n",(0,r.jsx)(t.p,{children:"Then visit the receiver page and configure as follows"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ConfiguratorRXPage",src:s(46104).A+"",width:"690",height:"238"})}),"\n",(0,r.jsx)(t.h3,{id:"setup-radio",children:"Setup Radio"}),"\n",(0,r.jsxs)(t.p,{children:["On the ",(0,r.jsx)(t.code,{children:"Linkage Menu"})," -> ",(0,r.jsx)(t.code,{children:"System Type"})," page, make sure you are using a protocol that supports telemetry, like T-FHSS or FASSTest 18ch and that telemetry is enabled.\n",(0,r.jsx)(t.img,{alt:"RadioTelemetryOn",src:s(23114).A+"",width:"3193",height:"1821"})]}),"\n",(0,r.jsxs)(t.p,{children:["Once you have activated telemetry, you have to configure the list of sensors in the ",(0,r.jsx)(t.code,{children:"Linkage Menu"})," -> ",(0,r.jsx)(t.code,{children:"Sensor"})," page. The slot assignment and sesor types are important, otherwise your radio won't display the telemetry information correctly.\nFollow the assignment map and example bellow:"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"ConfiguratorSensorsList",src:s(41622).A+"",width:"501",height:"222"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"RadioSensorsExamples",src:s(48843).A+"",width:"2855",height:"1603"})}),"\n",(0,r.jsxs)(t.p,{children:["Once your sensors are configured correctly, you should be able to customize your telemetry screen to include the data you want.\n",(0,r.jsx)(t.img,{alt:"ConfiguratorSensorsList",src:s(98951).A+"",width:"2838",height:"1710"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},46104:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/configurator-ddd19e3ab42e4acf4980885a9b7857e7.png"},48843:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/sensors-example-d46041b3935a4b9e201b2e72adbfca74.jpg"},41622:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/sensors-b9c5e42259caaf559b93e83cbe834b6e.png"},48209:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/serialrx-113fab703935cbbcde93709cc3208d2a.png"},98951:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/telemetry-display-bb729633cf40c5a0c05e7d3c5d73d304.jpg"},23114:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/telemetry-on-0911b699444fbee349c3ac2ede615e0c.jpg"},55345:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/wiring-15d592124995712f313f8b368c2c7f93.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>n});var i=s(96540);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);