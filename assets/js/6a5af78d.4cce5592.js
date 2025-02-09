"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6279],{83357:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"setup/blheli_s-to-bluejay","title":"Flashing Blheli_S ESC to Bluejay firmware","description":"Rotorflight requires motor RPM telemetry to provide the Governor function and filtering of the gyro signal. This can be provided by the ESC via bidirectional D-shot telemetry. Blheli_S ESC\'s do not provide this feature as standard and the firmware has to be updated. Bluejay has been tested with many Rotorflight builds and is preferred due to the ability to disable Damped Light mode and loading individual ESC config.","source":"@site/versioned_docs/version-2.1.0/setup/blheli_s-to-bluejay.md","sourceDirName":"setup","slug":"/setup/blheli_s-to-bluejay","permalink":"/docs/setup/blheli_s-to-bluejay","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/versioned_docs/version-2.1.0/setup/blheli_s-to-bluejay.md","tags":[],"version":"2.1.0","sidebarPosition":210,"frontMatter":{"sidebar_position":210},"sidebar":"tutorialSidebar","previous":{"title":"Swashplate Wiggle","permalink":"/docs/setup/swash-wiggle"},"next":{"title":"OpenLager","permalink":"/docs/setup/openlager"}}');var n=i(74848),r=i(28453);const o={sidebar_position:210},a="Flashing Blheli_S ESC to Bluejay firmware",l={},d=[{value:"Bluejay Configurator web page",id:"bluejay-configurator-web-page",level:2},{value:"step 1.",id:"step-1",level:3},{value:"step 2.",id:"step-2",level:3},{value:"step 3.",id:"step-3",level:3},{value:"step 4.",id:"step-4",level:3},{value:"step 5.",id:"step-5",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"flashing-blheli_s-esc-to-bluejay-firmware",children:"Flashing Blheli_S ESC to Bluejay firmware"})}),"\n",(0,n.jsx)(t.p,{children:"Rotorflight requires motor RPM telemetry to provide the Governor function and filtering of the gyro signal. This can be provided by the ESC via bidirectional D-shot telemetry. Blheli_S ESC's do not provide this feature as standard and the firmware has to be updated. Bluejay has been tested with many Rotorflight builds and is preferred due to the ability to disable Damped Light mode and loading individual ESC config."}),"\n",(0,n.jsx)(t.h2,{id:"bluejay-configurator-web-page",children:"Bluejay Configurator web page"}),"\n",(0,n.jsxs)(t.p,{children:["Bluejay can be flashed via the web page application at ",(0,n.jsx)(t.a,{href:"https://esc-configurator.com/",children:"https://esc-configurator.com/"})]}),"\n",(0,n.jsx)(t.h3,{id:"step-1",children:"step 1."}),"\n",(0,n.jsx)(t.p,{children:'Click on settings and check the "Disable common settings". This enables different settings to be loaded to each ESC which is required so we can change the settings between the main and tail motors.'}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Settings",src:i(60309).A+"",width:"1349",height:"663"})}),"\n",(0,n.jsx)(t.h3,{id:"step-2",children:"step 2."}),"\n",(0,n.jsxs)(t.p,{children:["From the top right corner click on ",(0,n.jsx)(t.strong,{children:"[Connect]"}),". Power up the ESC with the flight pack and click on ",(0,n.jsx)(t.strong,{children:"[Read Setup]"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Connect",src:i(20266).A+"",width:"1362",height:"609"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3",children:"step 3."}),"\n",(0,n.jsxs)(t.p,{children:["Click on ",(0,n.jsx)(t.strong,{children:"[Flash all]"}),"\n",(0,n.jsx)(t.img,{alt:"Select flash",src:i(60557).A+"",width:"1354",height:"612"})]}),"\n",(0,n.jsx)(t.h3,{id:"step-4",children:"step 4."}),"\n",(0,n.jsx)(t.p,{children:"From the config dropdown chose:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Firmware = ",(0,n.jsx)(t.strong,{children:"Bluejay"})]}),"\n",(0,n.jsxs)(t.li,{children:["ESC = ",(0,n.jsx)(t.strong,{children:"Leave this as you find it"}),". This is specific to your ESC type"]}),"\n",(0,n.jsx)(t.li,{children:"Version = Choose the latest version."}),"\n",(0,n.jsxs)(t.li,{children:["PWM Frequency = ",(0,n.jsx)(t.strong,{children:"24kHz"})," Smaller motors can use higher frequencies due to their very low inductance. Most helicopters 24kHz is suitable however helicopters with very small tail rotors (k110) you can use higher frequencies."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Click on ",(0,n.jsx)(t.strong,{children:"[Flash]"})," to load the new firmware."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Load Firmware",src:i(97144).A+"",width:"694",height:"299"})}),"\n",(0,n.jsx)(t.h3,{id:"step-5",children:"step 5."}),"\n",(0,n.jsxs)(t.p,{children:["After flashing has completed Click on ",(0,n.jsx)(t.strong,{children:"[Read setup]"}),"."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'On both the tail and Main motors deselect "Brake on stop"'}),"\n",(0,n.jsx)(t.li,{children:'On the Main motor slide the "Maximum Braking Strength" to 0. This will disable the Complimentary PWM (Damped Light Mode). This needs to be left active on the Tail motor.'}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"[Write Setup]"})," to complete the setup."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Connect",src:i(52591).A+"",width:"1334",height:"604"})})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},52591:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Bluejay_Complete-f7fd2489fd6d1d73ed27d3a58aa30758.png"},20266:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Bluejay_Connect-5b980c3b6077197a06a573cec5746aae.png"},97144:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Bluejay_Load_Firmware-c35a913dde1346ec4df69526113786e7.png"},60557:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Bluejay_Select_flash-10c17e12feaeb81a005a3244e60e19af.png"},60309:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/Bluejay_settings-fea186fe5ab954820f0e7ad9cb80ca1d.png"},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>a});var s=i(96540);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);