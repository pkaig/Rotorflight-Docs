"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3578],{6856:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>a,toc:()=>d});var r=t(74848),n=t(28453);t(89024);const l={sidebar_position:60},s="Mixer Setup and Calibration",a={id:"Wiki/Tutorial-Setup/setup-mixer",title:"Mixer Setup and Calibration",description:"Before starting on this step the Servos should already be connected and calibrated.",source:"@site/docs/Wiki/Tutorial-Setup/setup-mixer.mdx",sourceDirName:"Wiki/Tutorial-Setup",slug:"/Wiki/Tutorial-Setup/setup-mixer",permalink:"/docs/next/Wiki/Tutorial-Setup/setup-mixer",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Wiki/Tutorial-Setup/setup-mixer.mdx",tags:[],version:"current",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Servo Setup and Calibration",permalink:"/docs/next/Wiki/Tutorial-Setup/setup-servos"},next:{title:"RPM Measurement",permalink:"/docs/next/Wiki/Tutorial-Setup/Rpm-Measurement"}},o={},d=[{value:"Set mixer type",id:"set-mixer-type",level:2},{value:"Calibrating The mixer",id:"calibrating-the-mixer",level:2},{value:"Mixer override",id:"mixer-override",level:3},{value:"Level the swashplate and blade pitch to zero",id:"level-the-swashplate-and-blade-pitch-to-zero",level:3},{value:"Collective Calibration",id:"collective-calibration",level:3},{value:"Cyclic Calibration",id:"cyclic-calibration",level:3},{value:"Variable Pitch Yaw Calibration",id:"variable-pitch-yaw-calibration",level:3}];function c(e){const i={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.header,{children:(0,r.jsx)(i.h1,{id:"mixer-setup-and-calibration",children:"Mixer Setup and Calibration"})}),"\n",(0,r.jsxs)(i.admonition,{type:"caution",children:[(0,r.jsx)(i.mdxAdmonitionTitle,{}),(0,r.jsx)(i.p,{children:"Before starting on this step the Servos should already be connected and calibrated."})]}),"\n",(0,r.jsx)(i.h2,{id:"set-mixer-type",children:"Set mixer type"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Choose the ",(0,r.jsx)(i.strong,{children:"Swashplate type"})," to suit your helicopter swash arrangement."]}),"\n",(0,r.jsxs)(i.li,{children:["Choose the ",(0,r.jsx)(i.strong,{children:"Main rotor direction"}),". Generally this is clockwise however some scale helicopters are anticlockwise."]}),"\n",(0,r.jsxs)(i.li,{children:["Check ",(0,r.jsx)(i.strong,{children:"Control directions"}),". With the transmitter on and servos powered.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Command a roll to the right on the Tx. Check the swash rolls right. Reverse direction is required."}),"\n",(0,r.jsx)(i.li,{children:"Command the elevator to pitch forward on the Tx. Check the swash pitches forward. Reverse direction is required."}),"\n",(0,r.jsx)(i.li,{children:"Increase collective on the Tx. Check collective angle also increases. Reverse direction is required."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Mixer Tab",src:t(11311).A+"",width:"842",height:"201"})}),"\n",(0,r.jsx)(i.h2,{id:"calibrating-the-mixer",children:"Calibrating The mixer"}),"\n",(0,r.jsx)(i.admonition,{title:"note",type:"info",children:(0,r.jsx)(i.p,{children:"The purpose of the mixer calibration is to set the helicopters physical blade angle to the angle commanded by the FC"})}),"\n",(0,r.jsx)(i.h3,{id:"mixer-override",children:"Mixer override"}),"\n",(0,r.jsxs)(i.p,{children:["Set the mixer override at the bottom of the pages to ",(0,r.jsx)(i.strong,{children:"ON"}),". This will open the override window."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Mixer Tab",src:t(78153).A+"",width:"844",height:"444"})}),"\n",(0,r.jsx)(i.h3,{id:"level-the-swashplate-and-blade-pitch-to-zero",children:"Level the swashplate and blade pitch to zero"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"With the Mixer override enabled and all set to 0 degrees as above (servo arms should be at 90 deg)."}),"\n",(0,r.jsx)(i.li,{children:"Trim the swashplate to level using the ball links."}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{title:"note",type:"info",children:(0,r.jsxs)(i.p,{children:["If the link arms are ",(0,r.jsx)(i.strong,{children:"not adjustable"})," then use the ",(0,r.jsx)(i.strong,{children:"Roll trim"})," and ",(0,r.jsx)(i.strong,{children:"Pitch trim"})," as required."]})}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Adjust the upper link arms to zero the blade pitch. If the link arms are not adjustable use the ",(0,r.jsx)(i.strong,{children:"Collective trim"})," to zero."]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.img,{alt:"Mixer Tab",src:t(8630).A+"",width:"801",height:"170"})}),"\n",(0,r.jsx)(i.h3,{id:"collective-calibration",children:"Collective Calibration"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Confirm with a blade pitch tool that with collective mixer at 0 deg the blades are also at 0 deg."}),"\n",(0,r.jsx)(i.li,{children:"Set the collective mixer override to 9 deg. Measure the blade angle."}),"\n",(0,r.jsxs)(i.li,{children:["If the Blade angle is different from the Override angle, increase or decrease ",(0,r.jsx)(i.a,{href:"/docs/next/Wiki/Configurator/Mixer#cyclic-and-collective-calibration",children:(0,r.jsx)(i.strong,{children:"Collective Calibration %"})})," until the bade angle matches."]}),"\n",(0,r.jsx)(i.li,{children:"Set collective back to 0 deg."}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"cyclic-calibration",children:"Cyclic Calibration"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set the pitch override to 9 deg."}),"\n",(0,r.jsx)(i.li,{children:"Measure the blade pitch"}),"\n",(0,r.jsxs)(i.li,{children:["Increase or decrease the ",(0,r.jsx)(i.a,{href:"/docs/next/Wiki/Configurator/Mixer#cyclic-and-collective-calibration",children:(0,r.jsx)(i.strong,{children:"Cyclic Calibration %"})})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"variable-pitch-yaw-calibration",children:"Variable Pitch Yaw Calibration"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set YAW override to 0 deg."}),"\n",(0,r.jsx)(i.li,{children:"Adjust the push rod length so that the rear tail L arm is 90\xb0."}),"\n",(0,r.jsx)(i.li,{children:"If this does not give 0\xb0 blade pitch, adjust Center trim until you have 0\xb0 blade pitch."}),"\n",(0,r.jsxs)(i.li,{children:["Set mixer yaw override to 30deg CW/CCW, adjust ",(0,r.jsx)(i.a,{href:"/docs/next/Wiki/Configurator/Mixer#tail-rotor-settings",children:(0,r.jsx)(i.strong,{children:"Yaw Calibration %"})})," until you have around 30deg both ways."]}),"\n",(0,r.jsxs)(i.li,{children:["Set mixer yaw override to 60deg CW/CCW, adjust ",(0,r.jsx)(i.a,{href:"/docs/next/Wiki/Configurator/Mixer#tail-rotor-settings",children:(0,r.jsx)(i.strong,{children:"CW / CCW blade angle limits"})})," to the maximum number that does not causing binding."]}),"\n"]}),"\n",(0,r.jsx)(i.admonition,{title:"note",type:"info",children:(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"The calibration and CW / CCW limits vs. blade pitch is never perfect, because of the geometry asymmetry. It does not matter."}),"\n",(0,r.jsx)(i.li,{children:"The reason for doing the calibration is to make the PID defaults better. Without the calibration, all defaults in PID Profile are probably wrong."}),"\n",(0,r.jsx)(i.li,{children:"The Centre trim is mostly needed for making the CW/CCW blade angle limit numbers to match the blade angles. It also helps the feedforwards to work correctly."}),"\n"]})})]})}function h(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},89024:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/medias/servo-setup-670e167379cd3f4a2bb24cb5ae342d49.mp4"},11311:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/mixer-main-rotor-settings-880ad842dc90ce7327a264c5b617cbdb.png"},78153:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/mixer-override-6d8cd872a47d355de99dac1c66d9ec65.png"},8630:(e,i,t)=>{t.d(i,{A:()=>r});const r=t.p+"assets/images/mixer-swashplate-link-trims-c1b640fb1c2173d674bdf743031e5f04.png"},28453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>a});var r=t(96540);const n={},l=r.createContext(n);function s(e){const i=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(l.Provider,{value:i},e.children)}}}]);