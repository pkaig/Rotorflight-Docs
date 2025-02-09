"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3979],{76463:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"setup/profile-switching-example","title":"Profile (Bank) switching example","description":"Purpose","source":"@site/docs/setup/profile-switching-example.md","sourceDirName":"setup","slug":"/setup/profile-switching-example","permalink":"/docs/next/setup/profile-switching-example","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/docs/setup/profile-switching-example.md","tags":[],"version":"current","sidebarPosition":150,"frontMatter":{"sidebar_position":150},"sidebar":"tutorialSidebar","previous":{"title":"Two-Stage Gear Train Ratios","permalink":"/docs/next/setup/two-stage-gear-train-ratios"},"next":{"title":"Using Stability Modes (6G)","permalink":"/docs/next/setup/using-stability-modes-example"}}');var i=n(74848),o=n(28453);const r={sidebar_position:150},l="Profile (Bank) switching example",a={},h=[{value:"Purpose",id:"purpose",level:2},{value:"Aim",id:"aim",level:2},{value:"Configure the Tx",id:"configure-the-tx",level:3},{value:"Configure flight controller",id:"configure-flight-controller",level:3}];function c(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"profile-bank-switching-example",children:"Profile (Bank) switching example"})}),"\n",(0,i.jsx)(t.h2,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"We often configure several flight modes to suit our own flying requirements e.g. (Futaba - Normal, IU1, IU2)(OpenTx - FM1, FM2, FM3). It is quite possible that with each of these flight modes we would want to adjust and tune the model independently. We can do this through the Adjustments tab. This is a similar feature to V-bar 'Bank switching'. The following example is just a suggestion and is one way to go about using the adjustments tab. The same process can be used to switch rates if required."})}),"\n",(0,i.jsx)(t.h2,{id:"aim",children:"Aim"}),"\n",(0,i.jsxs)(t.p,{children:["My helicopter has already been set up to have a 3 position switch (SwE) which selects between 3 headspeeds (I use the governor so my 'curves' are just flat). The following example will add switching of tuning parameters (",(0,i.jsx)(t.strong,{children:"Profile"})," Tab) for each of these headspeeds."]}),"\n",(0,i.jsx)(t.h3,{id:"configure-the-tx",children:"Configure the Tx"}),"\n",(0,i.jsx)(t.p,{children:"We need to assign a spare channel to your 3 position switch (SwE) (can be any channel or switch)."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"})," This example shows the process for EdgeTx (same for OpenTX) but is really the same process for any transmitter."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1:"})," Assign Ch9 to the SwE in the ",(0,i.jsx)(t.strong,{children:"Mixers"})," tab"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Change Profiles",src:n(21315).A+"",width:"937",height:"475"})}),"\n",(0,i.jsx)(t.h3,{id:"configure-flight-controller",children:"Configure flight controller"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2:"})," looking at the channels in the ",(0,i.jsx)(t.strong,{children:"receiver"})," tab we can see that Aux4 is the ninth channel. This matches our TX assignment from step 1.  Confirm the 3 position switch changes the value seen on Aux4,"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Change Profiles",src:n(84456).A+"",width:"1138",height:"416"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Step 3:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Go to the ",(0,i.jsx)(t.strong,{children:"Adjustments"})," tab. Enable an adjustment slot by selecting ",(0,i.jsx)(t.em,{children:"Mapped"})," and select Aux4 as the ",(0,i.jsx)(t.em,{children:"Enable Channel"})," and ",(0,i.jsx)(t.em,{children:"Value Channel"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Stretch the ",(0,i.jsx)(t.em,{children:"Enable Channel"})," and ",(0,i.jsx)(t.em,{children:"Value Channel"})," sliders across the entire channel range. This covers the positions for each of the three switch positions."]}),"\n",(0,i.jsxs)(t.li,{children:["Select ",(0,i.jsx)(t.strong,{children:"Profile Selection"})," from the dropdown. This means we want to change the 'Profile selection' by the switch position."]}),"\n",(0,i.jsxs)(t.li,{children:["Stretch the ",(0,i.jsx)(t.em,{children:"Profile Selection"})," slider from 1 to 3, This means over the defined range a value of 1-3 will be chosen based on the switch position. (e.g. SwE down = 0, SwE middle = 1, SwE up = 2). These values are added to the Profile so will result in (e.g. SwE down = Profile 1, SwE middle = Profile 2, SwE up = Profile 3)."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Change Profiles",src:n(66864).A+"",width:"1006",height:"451"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 4:"})," Go to the ",(0,i.jsx)(t.strong,{children:"Profiles"})," tab and test and confirm that changing the switch position results in changing of the current Profile."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Change Profiles",src:n(95230).A+"",width:"1047",height:"654"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},21315:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Change_Profiles_1-ef198abf82c5424f4646f879d98638ad.png"},84456:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Change_Profiles_2-c5ded5dda14325eb61b07f7379ca8465.png"},95230:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/Change_Profiles_4-16e8827ff3f14f47c961b9db20ca04b7.png"},66864:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/change-prof-prof-sw-example-4230ebec14e328850ac68d9923e68deb.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var s=n(96540);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);