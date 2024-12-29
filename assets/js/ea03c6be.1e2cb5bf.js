"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9990],{79897:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"Wiki/Configurator/Configuration","title":"Configuration tab","description":"Personalization","source":"@site/docs/Wiki/Configurator/Configuration.md","sourceDirName":"Wiki/Configurator","slug":"/Wiki/Configurator/Configuration","permalink":"/docs/next/Wiki/Configurator/Configuration","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Wiki/Configurator/Configuration.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"Setup tab","permalink":"/docs/next/Wiki/Configurator/Setup"},"next":{"title":"Receiver tab","permalink":"/docs/next/Wiki/Configurator/Receiver"}}');var i=t(74848),r=t(28453);const o={sidebar_position:30},s="Configuration tab",a={},l=[{value:"Personalization",id:"personalization",level:2},{value:"System Configuration",id:"system-configuration",level:2},{value:"Gyro Update Frequency",id:"gyro-update-frequency",level:3},{value:"PID Loop Frequency",id:"pid-loop-frequency",level:3},{value:"Accelerometer",id:"accelerometer",level:3},{value:"Barometer",id:"barometer",level:3},{value:"Magnetometer",id:"magnetometer",level:3},{value:"Features",id:"features",level:2},{value:"Serial Ports",id:"serial-ports",level:2},{value:"MSP",id:"msp",level:3},{value:"GPS",id:"gps",level:3},{value:"Serial Rx",id:"serial-rx",level:3},{value:"ESC Telemetry",id:"esc-telemetry",level:3},{value:"Blackbox Logging",id:"blackbox-logging",level:3},{value:"Telemetry: FrSky SmartPort",id:"telemetry-frsky-smartport",level:3},{value:"Board and Sensor alignment",id:"board-and-sensor-alignment",level:2},{value:"Accelerometer Trim",id:"accelerometer-trim",level:2}];function c(A){const e={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"configuration-tab",children:"Configuration tab"})}),"\n",(0,i.jsx)(e.h2,{id:"personalization",children:"Personalization"}),"\n",(0,i.jsx)(e.p,{children:"Allows you to set your heli name to be shown in the OSD, blackbox logs and diff/dump outputs."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(45907).A+"",width:"836",height:"87"})}),"\n",(0,i.jsx)(e.h2,{id:"system-configuration",children:"System Configuration"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(84484).A+"",width:"831",height:"208"})}),"\n",(0,i.jsx)(e.h3,{id:"gyro-update-frequency",children:"Gyro Update Frequency"}),"\n",(0,i.jsx)(e.p,{children:"This indicates the current gyro update frequency."}),"\n",(0,i.jsx)(e.h3,{id:"pid-loop-frequency",children:"PID Loop Frequency"}),"\n",(0,i.jsx)(e.p,{children:"This is the frequency that the control loop operates at. Set to between 1kHz and 2kHz."}),"\n",(0,i.jsx)(e.p,{children:"There is limited or no benefit in higher rates and will result in high loads for your flight controller. This could be an issue for F405 and F411 boards."}),"\n",(0,i.jsx)(e.h3,{id:"accelerometer",children:"Accelerometer"}),"\n",(0,i.jsx)(e.p,{children:"This must be selected if you wish to use stability (6G modes) such as Angle, Horizon or Rescue modes."}),"\n",(0,i.jsx)(e.h3,{id:"barometer",children:"Barometer"}),"\n",(0,i.jsx)(e.p,{children:"This is used for Altitude hold Rescue which is currently still being developed"}),"\n",(0,i.jsx)(e.h3,{id:"magnetometer",children:"Magnetometer"}),"\n",(0,i.jsx)(e.p,{children:"Currently this does not provide any control functionality, however, it can be used for telemetry."}),"\n",(0,i.jsx)(e.h2,{id:"features",children:"Features"}),"\n",(0,i.jsx)(e.p,{children:"This section is used to enable or disable features."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(2355).A+"",width:"805",height:"194"})}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsxs)(e.p,{children:["Features such as the GPS must be selected in the ",(0,i.jsx)(e.a,{href:"#serial-ports",children:"Serial ports"})," section before selecting the Feature here."]})}),"\n",(0,i.jsx)(e.h2,{id:"serial-ports",children:"Serial Ports"}),"\n",(0,i.jsx)(e.p,{children:"Please choose the functions you wish to assign to your UART."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(13650).A+"",width:"1272",height:"268"})}),"\n",(0,i.jsx)(e.h3,{id:"msp",children:"MSP"}),"\n",(0,i.jsx)(e.p,{children:"As the name suggests, usually only used for lower-level communication using the MSP (MultiWii Serial Protocol) for configuration done by external devices, or to allow a more direct way of control.\nYou can also set a specific baud rate."}),"\n",(0,i.jsx)(e.h3,{id:"gps",children:"GPS"}),"\n",(0,i.jsx)(e.p,{children:"GPS is not currently used for Rotorflight for any flight controls. This can be used for telemetry purposes."}),"\n",(0,i.jsx)(e.h3,{id:"serial-rx",children:"Serial Rx"}),"\n",(0,i.jsxs)(e.p,{children:["Check ",(0,i.jsx)(e.a,{href:"/docs/next/Wiki/Configurator/Receiver",children:"Receiver"})," page for detailed info."]}),"\n",(0,i.jsx)(e.h3,{id:"esc-telemetry",children:"ESC Telemetry"}),"\n",(0,i.jsxs)(e.p,{children:["Check ",(0,i.jsx)(e.a,{href:"/docs/next/Wiki/Tutorial-Setup/ESC-Telemetry",children:"ESC Telemetry"})," page for detailed info."]}),"\n",(0,i.jsx)(e.h3,{id:"blackbox-logging",children:"Blackbox Logging"}),"\n",(0,i.jsxs)(e.p,{children:["This enables a UART for an external logging device such as ",(0,i.jsx)(e.a,{href:"/docs/next/Wiki/Tutorial-Setup/OpenLager",children:"OpenLager"}),"."]}),"\n",(0,i.jsx)(e.h3,{id:"telemetry-frsky-smartport",children:"Telemetry: FrSky SmartPort"}),"\n",(0,i.jsx)(e.p,{children:"This is used when connecting an FrSky SmartPort receiver pin to this UART."}),"\n",(0,i.jsx)(e.h2,{id:"board-and-sensor-alignment",children:"Board and Sensor alignment"}),"\n",(0,i.jsx)(e.p,{children:"Change the roll, pitch and yaw gyro alignment value until the model on the status page moves in the same direction as the gyro board."}),"\n",(0,i.jsx)(e.p,{children:"A method of determining what settings to use:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"set Roll, Pitch and Yaw values to 0 degrees."}),"\n",(0,i.jsx)(e.li,{children:"set Gyro alignment to CW-0 degrees."}),"\n",(0,i.jsx)(e.li,{children:'Move the FC around until the movement of the FC matches the movement of the helicopter on the "Status" page. You may have to "reset Z axis".'}),"\n",(0,i.jsx)(e.li,{children:"Now take note of how you have to rotate/flip the board in order to get the FC oriented in the way you wish to mount it in the helicopter. An example would be that you have to rotate the board 180 and flip. You would chose 'CW180 Flip' in the Gyro alignment dropdown."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(56931).A+"",width:"833",height:"159"})}),"\n",(0,i.jsx)(e.h2,{id:"accelerometer-trim",children:"Accelerometer Trim"}),"\n",(0,i.jsx)(e.p,{children:"This section is used to trim the roll and pitch axis while the helicopter is in Stability mode (e.g Angle, horizon or Rescue)."}),"\n",(0,i.jsx)(e.p,{children:"The Transmitter trims for each cyclic axis must be at neutral when using Rotorflight (at 1500us). This will usually result in the helicopter drifting while in a stable hover. To correct for this drift the Accelerometer roll and pitch trims are to be used."}),"\n",(0,i.jsxs)(e.p,{children:["This can be done either directly by the configurator or via the transmitter with ",(0,i.jsx)(e.a,{href:"/docs/next/Wiki/Tutorial-Setup/Using-Stability-Modes-example",children:"Lua"})," or Adjustments."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Configuration Tab",src:t(21379).A+"",width:"832",height:"117"})})]})}function h(A={}){const{wrapper:e}={...(0,r.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(c,{...A})}):c(A)}},21379:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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"},2355:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/config-features-b815e995ab63782eb70b8cc4d1e24b21.png"},45907:(A,e,t)=>{t.d(e,{A:()=>n});const n="data:image/png;base64,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2JG2xrW1x469PTGWl6FiZSnp+NfZ6MzHi+OuG/Vzjp3pjKOXe+Kd12vmqKwqzdy9EJ1vbM3u1RbtOzqj537tNZUtee3b451Ld+PupXdie3t2jy074+g3U5X5p2L437tja3q9fWt0HBuKqcp9AQDY/BQiWXchmujuiJ2nxhqOpULUsWVXfPhttXBkZmZiJi8wU9Hz9vb4MN9al0pRV9ysve5A4xWisTMd0b7nQlGCZrM59rYXW+3S+Gw2d2WVaupyVniO3128ZuvfemMiXTPZH/v+2B67ThVj898eje1v9RTF55vDsaN6Xj73tjg8VMwHAMDmpxDJugtRKhtNC9He3pipHs9O5J812r5iBWh9hWjf9frj6irSxPXDsev1YoUon78yR/016V4d0V1ZPZqfvxldHd0xVjmv+nNVdZxZ5XcDAGDTUYhk3YVorS1ztcVm6tLu2Jq2uFVWcW4eeLFCVLuNbvF4sid2v9YZPfdmirEbXXWFaOma5oVo96Wa1SwAAEpFIZL1F6JUMN5sj47jQzFRKTrzP00V2+KWFZu0vW77P4eL44n+6Hq9ffVC1PHR4meDaq1aiMaza/50NIbz7W4T0f/e9mhfZyGav/tR7OjI5pisjP00EVPr+nIIAABeZQqRvEAhykwNR/feHcWXEbSlr93eF72pVCxf6ZkaiqN/Lr4MYetb3XFzsagsK0TZ8YW30ta39th1bmLp+syqhWh+KoaO7Sy+UOG13dF9Y+nez12I0rmXlr70YesbXdFfLUcAAGx6CpG8WCECAIBNQCEShQgAgNJSiEQhAgCgtBQiUYgAACgthUgUIgAASmtDClFfX188ffq0cqW0UtJzSc+n0XMDAIDNbkMK0fDwcE4paq2k51F9No2eGwAAbHYbUoiS9Ed3WolI27NoDel5KEMAAJTZhhUiAACAVqMQAQAApaUQAQAApaUQAQAApaUQAQAApaUQAQAApaUQAQAApaUQAQAApaUQAQAApaUQAQAApfXChWhwcDBmZ2cbTgoAANDqUp9JvWa1NC1EIyMj8cMPPzScGAAAoNWlPpN6zWppWoiePHmSt6k0iZUiAADgVZH6S+oxqc+kXrNamhailHRxalRporT3DgAAoNWl/pJ6TLMylLJmIRIREREREdmsUYhERERERKS0UYhERERERKS0UYhERERERKS0UYhERERERKS0UYhERERERKS0UYhERERERKSkifg/48E9ksEeovEAAAAASUVORK5CYII="},56931:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/config-sens-align-aa8e57c0385644ddfcba813c9f74b554.png"},13650:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/config-serial-2e4ff7916b56a95c6be0d5db60c23569.png"},84484:(A,e,t)=>{t.d(e,{A:()=>n});const n=t.p+"assets/images/config-sys-conf-1cd8f72e7026b90bd4d02c3ce70f1c36.png"},28453:(A,e,t)=>{t.d(e,{R:()=>o,x:()=>s});var n=t(96540);const i={},r=n.createContext(i);function o(A){const e=n.useContext(r);return n.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function s(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(i):A.components||i:o(A.components),n.createElement(r.Provider,{value:e},A.children)}}}]);