"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9628],{99220:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=i(74848),n=i(28453);const r={sidebar_position:60},o="Matek G474-HLite",a={id:"Controllers/matek_hlite",title:"Matek G474-HLite",description:"Matek G474HELI",source:"@site/versioned_docs/version-2.0.0/Controllers/matek_hlite.md",sourceDirName:"Controllers",slug:"/Controllers/matek_hlite",permalink:"/docs/Controllers/matek_hlite",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Controllers/matek_hlite.md",tags:[],version:"2.0.0",sidebarPosition:60,frontMatter:{sidebar_position:60}},d={},l=[{value:"Hardware Specifications\uff1a",id:"hardware-specifications",level:3},{value:"Rotorflight Target",id:"rotorflight-target",level:3},{value:"Motorised Tail",id:"motorised-tail",level:3},{value:"Wiring",id:"wiring",level:3},{value:"UART ports",id:"uart-ports",level:3},{value:"Manuals",id:"manuals",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"matek-g474-hlite",children:"Matek G474-HLite"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Matek G474HELI",src:i(4290).A+"",width:"1400",height:"517"})}),"\n",(0,s.jsxs)(t.admonition,{title:"Specifications",type:"info",children:[(0,s.jsx)(t.h3,{id:"hardware-specifications",children:"Hardware Specifications\uff1a"}),(0,s.jsxs)(t.p,{children:["MCU: STM32G474CE",(0,s.jsx)(t.br,{}),"\n","IMU: ICM42688-P",(0,s.jsx)(t.br,{}),"\n","Black Box: W25N01G (128MB)",(0,s.jsx)(t.br,{}),"\n","Baro: SPL06 (I2C2\uff09",(0,s.jsx)(t.br,{}),"\n","LED: LED_STRIP port",(0,s.jsx)(t.br,{}),"\n","Beeper: Buzzer output",(0,s.jsx)(t.br,{}),"\n","USB: Type-C",(0,s.jsx)(t.br,{}),"\n","UARTS: UART1, UART2 (Rx Only)\uff0cUART3, UART4",(0,s.jsx)(t.br,{}),"\n","ADC: Battery measurement VBat 2-6s (5.4-30v)\nServo Pins: CH1-CH4",(0,s.jsx)(t.br,{}),"\n","Motor Pins: M1\nVoltage range Vx: 4.5V~14V",(0,s.jsx)(t.br,{}),"\n","RPM Inputs: RPM Frequency input",(0,s.jsx)(t.br,{}),"\n","Dimensions: 30mm x 23mm x 13mm",(0,s.jsx)(t.br,{}),"\n","Weight: 9g"]})]}),"\n",(0,s.jsx)(t.h3,{id:"rotorflight-target",children:"Rotorflight Target"}),"\n",(0,s.jsx)(t.p,{children:"When updating Rotorflight firmware. Please use the MATEKG474HELI target."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Matek G474Heli Target",src:i(30342).A+"",width:"734",height:"253"})}),"\n",(0,s.jsx)(t.h3,{id:"motorised-tail",children:"Motorised Tail"}),"\n",(0,s.jsx)(t.p,{children:"The H-Lite FC is configured with 4 servos and 1 motor. If you wish to use this board for a motorised tail it can be added in the CLI using the following command (just copy and past this into the CLI then push [ENTER])."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"resource SERVO 4 none"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"resource motor 2 A06"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.code,{children:"save"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Matek Motorised Tail",src:i(5674).A+"",width:"539",height:"211"})}),"\n",(0,s.jsx)(t.h3,{id:"wiring",children:"Wiring"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Wiring Diagram",src:i(27572).A+"",width:"1500",height:"1802"})}),"\n",(0,s.jsx)(t.h3,{id:"uart-ports",children:"UART ports"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"UARTS",src:i(79833).A+"",width:"809",height:"235"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"UARTS",src:i(71011).A+"",width:"919",height:"552"})}),"\n",(0,s.jsx)(t.h3,{id:"manuals",children:"Manuals"}),"\n",(0,s.jsxs)(t.p,{children:["Detail specifications and documentation available at the Matek website.",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"https://www.mateksys.com/?portfolio=g474-hlite",children:"Matek G474-HLite website"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},27572:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/g474-hlite_wiring-4eb7a911b255a59179b503a775585a9d.jpg"},30342:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/g474-target-66d10567a28b3492d5ce025e81735eb6.png"},4290:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/matek-g474-hlite-8cda0b6f5d5511fa67b4003895036780.png"},71011:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-hl-ports-bfd33c6e4363dd49a400bfae70fc29f2.png"},5674:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-motorised-eafff3a6ae9dec873830956b6fba47d5.png"},79833:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/mt-uarts-94be99f37528279566a1d4e5c025e168.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);