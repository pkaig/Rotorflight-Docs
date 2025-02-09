"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7175],{41113:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"controllers/betaflight-diy","title":"DIY board - Betaflight FC","description":"Rotorflight is a fork of the popular Betaflight project commonly used for drones. This means that all of the drone boards designed for Betaflight are also compatible with Rotorflight. Drones most commonly use 4 motors and do not have servos so we need to do some additional configuration to add these items (as shown below).","source":"@site/versioned_docs/version-2.1.0/controllers/betaflight-diy.md","sourceDirName":"controllers","slug":"/controllers/betaflight-diy","permalink":"/docs/controllers/betaflight-diy","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/versioned_docs/version-2.1.0/controllers/betaflight-diy.md","tags":[],"version":"2.1.0","sidebarPosition":70,"frontMatter":{"sidebar_position":70},"sidebar":"tutorialSidebar","previous":{"title":"Matek G474-HLite","permalink":"/docs/controllers/matek_hlite"},"next":{"title":"Getting Started","permalink":"/docs/examples/"}}');var r=o(74848),i=o(28453);const n={sidebar_position:70},a="DIY board - Betaflight FC",l={},h=[{value:"Flashing Rotorflight",id:"flashing-rotorflight",level:3},{value:"Remap Betaflight board",id:"remap-betaflight-board",level:3},{value:"Build notes",id:"build-notes",level:2},{value:"Resource mapping",id:"resource-mapping",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"diy-board---betaflight-fc",children:"DIY board - Betaflight FC"})}),"\n",(0,r.jsx)(t.p,{children:"Rotorflight is a fork of the popular Betaflight project commonly used for drones. This means that all of the drone boards designed for Betaflight are also compatible with Rotorflight. Drones most commonly use 4 motors and do not have servos so we need to do some additional configuration to add these items (as shown below)."}),"\n",(0,r.jsx)(t.h3,{id:"flashing-rotorflight",children:"Flashing Rotorflight"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/setup/flashing-the-firmware",children:"Flashing Rotorflight firmware"})}),"\n",(0,r.jsx)(t.h3,{id:"remap-betaflight-board",children:"Remap Betaflight board"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/setup/remapping",children:"Remapping servos and motors"})}),"\n",(0,r.jsx)(t.h1,{id:"example-m1-with-darwinfpv-15a",children:"Example: M1 with DarwinFPV 15A"}),"\n",(0,r.jsxs)(t.p,{children:["The OMPHOBBY M1 is a small double brushless helicopter with an all-up weight of about 120g. The stock FC is so-so and has some peculiarities, such as a huge deadband around center and a tail that sometimes ",(0,r.jsx)(t.a,{href:"https://www.youtube.com/watch?v=q4H1CzN1pPY",children:"spins volatile"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["It's fairly easy to replace the stock FC and ESC with an AIO whoop board. Here we're using the ",(0,r.jsx)(t.a,{href:"https://darwinfpv.com/products/darwinfpv-15a-1-3s-f411-ultralight-whoop-aio",children:"DarwinFPV 15A"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"It's able to do 15A continuously with peaks of 17A, which should be enough for the main motor."}),"\n",(0,r.jsx)(t.li,{children:"It also has a 2A 5V BEC, which is plenty for the servos."}),"\n",(0,r.jsxs)(t.li,{children:["There are enough connections (pads) for the servos, ELRS and -optional- an ",(0,r.jsx)(t.a,{href:"/docs/setup/openlager",children:"OpenLager"})," blackbox logging device."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The receiver used here is a ",(0,r.jsx)(t.a,{href:"https://betafpv.com/products/elrs-lite-receiver",children:"BETAFPV ELRS Lite"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"M1",src:o(4762).A+"",width:"4032",height:"2268"})}),"\n",(0,r.jsx)(t.p,{children:"There's also a DarwinFPV 15A with built-in ELRS receiver, but we can't use that version since it uses SPI - which isn't supported by Rotorflight."}),"\n",(0,r.jsx)(t.h2,{id:"build-notes",children:"Build notes"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The AIO is mounted to the M1 frame with some plastic M3 spacers and screws. The spacers are glued to the M1 frame with some epoxy, after cutting the thread underneath them slightly to make a perfect fit."}),"\n",(0,r.jsxs)(t.li,{children:["The servo connectors are three Molex PicoBlade connectors glued together (similar to ",(0,r.jsx)(t.a,{href:"../setup/led-strip-quick-start#building-the-picoblade-bus",children:"this bus"}),"), then connected to the FC using 5 wires (5V/GND using 28AWG, S1/S2/S3 with 30AWG). The underside of the bus is reinforced and insulated with epoxy."]}),"\n",(0,r.jsx)(t.li,{children:"None of the servo or tail motor wires are modified, and only the copper connectors on the main motor wires were removed."}),"\n",(0,r.jsx)(t.li,{children:"All wires soldered to the PCBs are secured with some electronics-friendly silicon glue, which will reduce the risk of solder joints breaking or wires loosening during flight."}),"\n",(0,r.jsxs)(t.li,{children:["The ESCs were flashed with ",(0,r.jsx)(t.a,{href:"../setup/blheli_s-to-bluejay",children:"Bluejay"})," version 0.21, so we can use bi-directional Dshot with RPM telemetry for filtering and governing."]}),"\n",(0,r.jsx)(t.li,{children:"The pre-soldered capacitor on the DarwinFPV 15A has been removed."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Here's a view from the left:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"M1",src:o(93453).A+"",width:"4032",height:"2268"})}),"\n",(0,r.jsx)(t.p,{children:"The OpenLager can be placed on the velcro, and also uses a Molex PicoBlade connector."}),"\n",(0,r.jsx)(t.h2,{id:"resource-mapping",children:"Resource mapping"}),"\n",(0,r.jsx)(t.p,{children:"Here's the resource mapping used for this build."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"resource MOTOR 1 B07   # main motor on M4\nresource MOTOR 2 B04   # tail motor on M1\nresource MOTOR 3 NONE\nresource MOTOR 4 NONE\nresource SERVO 1 A00   # RSSI\nresource SERVO 2 B03   # S5\nresource SERVO 3 A08   # LED strip\nresource LED_STRIP 1 NONE\n"})}),"\n",(0,r.jsx)(t.p,{children:"And here's an overview of the pads on the DarwinFPV 15A:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"M1",src:o(62630).A+"",width:"601",height:"486"})}),"\n",(0,r.jsx)(t.p,{children:"ELRS is on RX1/TX1/4.5V (so it also powers up when connecting USB), OpenLager is on TX2."}),"\n",(0,r.jsxs)(t.p,{children:["Here's the complete ",(0,r.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:o(58474).A+"",children:(0,r.jsx)(t.code,{children:"diff all"})}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},58474:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/files/m1-diff-all-e4ce777ac60e581886f8634adfbbe570.txt"},62630:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/m1-darwinfpv-15a-pins-36a61b5f3e1f12b8f0e2451b46dc2f15.png"},93453:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/m1-darwinfpv-left-16479546a717ccd5c7cb511347514041.jpg"},4762:(e,t,o)=>{o.d(t,{A:()=>s});const s=o.p+"assets/images/m1-darwinfpv-right-987f944058e8b42db7298affb10d64e7.jpg"},28453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>a});var s=o(96540);const r={},i=s.createContext(r);function n(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);