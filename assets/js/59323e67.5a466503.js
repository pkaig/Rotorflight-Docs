"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6303],{60984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(74848),o=n(28453);const s={sidebar_position:50},a="Adding an extra servo",i={id:"Tutorial-Walkthroughs/Extra-servo",title:"Adding an extra servo",description:"Add an extra servo controlled by an AUX channel.",source:"@site/versioned_docs/version-2.0.0/Tutorial-Walkthroughs/Extra-servo.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Extra-servo",permalink:"/docs/Tutorial-Walkthroughs/Extra-servo",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Tutorial-Walkthroughs/Extra-servo.md",tags:[],version:"2.0.0",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"tutorialSidebar",previous:{title:"ELRS Telemetry Reuse",permalink:"/docs/Tutorial-Walkthroughs/ELRS-telemetry-reuse"},next:{title:"Getting started with LEDs",permalink:"/docs/Tutorial-Walkthroughs/led-strip-quick-start"}},d={},c=[{value:"Add an extra servo controlled by an AUX channel.",id:"add-an-extra-servo-controlled-by-an-aux-channel",level:2}];function l(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"adding-an-extra-servo",children:"Adding an extra servo"})}),"\n",(0,r.jsx)(t.h2,{id:"add-an-extra-servo-controlled-by-an-aux-channel",children:"Add an extra servo controlled by an AUX channel."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Sometimes we may wish to add an extra servo to our helicopter to be controlled by our Tx for something like retracts on a scale machine or a camera etc. This can be done using the remapping spreadsheet. In the example below we will add Servo 5 to be controlled by the AUX 3 channel."})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 1:"})," Assign the servo to your chosen pin. In the pic below we have assigned Servo 5 to Serial Rx 2."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Adding Servo",src:n(20648).A+"",width:"899",height:"288"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 2:"})," Assign the timer to your new servo. This timer cannot clash with motors, frequency or LED_STRIP. They can be assigned to the same timer as one of your other servos; however, it then will need to be set to the same frequency (e.g. if one is set to 333Hz they will both need to be set to 333Hz). If it can be assigned to a totally different timer then you can assign whatever frequency you like."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Adding Servo",src:n(33074).A+"",width:"1745",height:"461"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 3:"})," In the 'Advanced' section assign your AUX channel to servo 5 and then select and copy the mixer config displayed."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Adding Servo",src:n(81234).A+"",width:"718",height:"438"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Step 4:"})," Open the configurator and go to the CLI page. Paste the config from the mixer into the command line and click [ENTER]. Type save and click [ENTER]."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Adding Servo",src:n(17367).A+"",width:"784",height:"465"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},20648:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/remapping-servo-1-44ea0e54c2a85eba885811d15d93c38c.png"},17367:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/remapping-servo-cli-1f4e0ca3cf391148b7c5a28306cfd988.png"},81234:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/remapping-servo-mixer-36b484595746284c36686737d8f04dba.png"},33074:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/remapping-servo-timer-f89810dc3ab28ebb49b3afbcfd04cddb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);