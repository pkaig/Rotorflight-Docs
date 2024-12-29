"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9537],{66241:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"Wiki/Controllers/matek_hlite","title":"Matek G474-HLite","description":"Matek G474HELI","source":"@site/docs/Wiki/Controllers/matek_hlite.md","sourceDirName":"Wiki/Controllers","slug":"/Wiki/Controllers/matek_hlite","permalink":"/docs/next/Wiki/Controllers/matek_hlite","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Wiki/Controllers/matek_hlite.md","tags":[],"version":"current","sidebarPosition":60,"frontMatter":{"sidebar_position":60},"sidebar":"tutorialSidebar","previous":{"title":"Matek G474Heli","permalink":"/docs/next/Wiki/Controllers/matek_heli"},"next":{"title":"Diy board - Betaflight FC","permalink":"/docs/next/Wiki/Controllers/betaflight-diy"}}');var n=i(74848),r=i(28453);const a={sidebar_position:60},o="Matek G474-HLite",l={},d=[{value:"Hardware Specifications\uff1a",id:"hardware-specifications",level:3},{value:"Rotorflight Target",id:"rotorflight-target",level:3},{value:"Motorised Tail",id:"motorised-tail",level:3},{value:"Wiring",id:"wiring",level:3},{value:"UART ports",id:"uart-ports",level:3},{value:"Manuals",id:"manuals",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"matek-g474-hlite",children:"Matek G474-HLite"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Matek G474HELI",src:i(94321).A+"",width:"1400",height:"517"})}),"\n",(0,n.jsxs)(t.admonition,{title:"Specifications",type:"info",children:[(0,n.jsx)(t.h3,{id:"hardware-specifications",children:"Hardware Specifications\uff1a"}),(0,n.jsxs)(t.p,{children:["MCU: STM32G474CE",(0,n.jsx)(t.br,{}),"\n","IMU: ICM42688-P",(0,n.jsx)(t.br,{}),"\n","Black Box: W25N01G (128MB)",(0,n.jsx)(t.br,{}),"\n","Baro: SPL06 (I2C2\uff09",(0,n.jsx)(t.br,{}),"\n","LED: LED_STRIP port",(0,n.jsx)(t.br,{}),"\n","Beeper: Buzzer output",(0,n.jsx)(t.br,{}),"\n","USB: Type-C",(0,n.jsx)(t.br,{}),"\n","UARTS: UART1, UART2 (Rx Only)\uff0cUART3, UART4",(0,n.jsx)(t.br,{}),"\n","ADC: Battery measurement VBat 2-6s (5.4-30v)\nServo Pins: CH1-CH4",(0,n.jsx)(t.br,{}),"\n","Motor Pins: M1\nVoltage range Vx: 4.5V~14V",(0,n.jsx)(t.br,{}),"\n","RPM Inputs: RPM Frequency input",(0,n.jsx)(t.br,{}),"\n","Dimensions: 30mm x 23mm x 13mm",(0,n.jsx)(t.br,{}),"\n","Weight: 9g"]})]}),"\n",(0,n.jsx)(t.h3,{id:"rotorflight-target",children:"Rotorflight Target"}),"\n",(0,n.jsx)(t.p,{children:"When updating Rotorflight firmware. Please use the MATEKG474HELI target."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Matek G474Heli Target",src:i(31903).A+"",width:"734",height:"253"})}),"\n",(0,n.jsx)(t.h3,{id:"motorised-tail",children:"Motorised Tail"}),"\n",(0,n.jsx)(t.p,{children:"The H-Lite FC is configured with 4 servos and 1 motor. If you wish to use this board for a motorised tail it can be added in the CLI using the following command (just copy and past this into the CLI then push [ENTER])."}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"resource SERVO 4 none"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"resource motor 2 A06"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.code,{children:"save"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Matek Motorised Tail",src:i(27189).A+"",width:"539",height:"211"})}),"\n",(0,n.jsx)(t.h3,{id:"wiring",children:"Wiring"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Wiring Diagram",src:i(82129).A+"",width:"1500",height:"1802"})}),"\n",(0,n.jsx)(t.h3,{id:"uart-ports",children:"UART ports"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"UARTS",src:i(30494).A+"",width:"809",height:"235"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"UARTS",src:i(95782).A+"",width:"919",height:"552"})}),"\n",(0,n.jsx)(t.h3,{id:"manuals",children:"Manuals"}),"\n",(0,n.jsxs)(t.p,{children:["Detail specifications and documentation available at the Matek website.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://www.mateksys.com/?portfolio=g474-hlite",children:"Matek G474-HLite website"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},82129:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/g474-hlite_wiring-4eb7a911b255a59179b503a775585a9d.jpg"},31903:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/g474-target-66d10567a28b3492d5ce025e81735eb6.png"},94321:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/matek-g474-hlite-8cda0b6f5d5511fa67b4003895036780.png"},95782:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-hl-ports-bfd33c6e4363dd49a400bfae70fc29f2.png"},27189:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-motorised-eafff3a6ae9dec873830956b6fba47d5.png"},30494:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-uarts-94be99f37528279566a1d4e5c025e168.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var s=i(96540);const n={},r=s.createContext(n);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);