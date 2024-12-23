"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5009],{65259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(74848),i=r(28453),n=r(49926);const o={sidebar_position:60},a="Servo Setup and Calibration",l={id:"Wiki/Tutorial-Setup/setup-servos",title:"Servo Setup and Calibration",description:"Step 1 - set frequency and center",source:"@site/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/setup-servos.mdx",sourceDirName:"Wiki/Tutorial-Setup",slug:"/Wiki/Tutorial-Setup/setup-servos",permalink:"/docs/Wiki/Tutorial-Setup/setup-servos",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/setup-servos.mdx",tags:[],version:"2.0.0",sidebarPosition:60,frontMatter:{sidebar_position:60},sidebar:"tutorialSidebar",previous:{title:"Remapping",permalink:"/docs/Wiki/Tutorial-Setup/Remapping"},next:{title:"Mixer Setup and Calibration",permalink:"/docs/Wiki/Tutorial-Setup/setup-mixer"}},c={},d=[{value:"Step 1 - set frequency and center",id:"step-1---set-frequency-and-center",level:3},{value:"Step 2 - Set servo directions",id:"step-2---set-servo-directions",level:3},{value:"Step 3 - set arms at 90 degrees",id:"step-3---set-arms-at-90-degrees",level:3},{value:"Step 5 - calibrate range (Optional - recommended)",id:"step-5---calibrate-range-optional---recommended",level:3},{value:"Step 4 - set final limits (Usually Not Required)",id:"step-4---set-final-limits-usually-not-required",level:3}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"servo-setup-and-calibration",children:"Servo Setup and Calibration"})}),"\n",(0,s.jsx)(t.h3,{id:"step-1---set-frequency-and-center",children:"Step 1 - set frequency and center"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"DO NOT CONNECT THE SERVOS YET!"}),"\n",(0,s.jsxs)(t.li,{children:["Confirm and set the servo ",(0,s.jsx)(t.a,{href:"../Configurator/Servos.mdxcenter",children:"center"})," to your servo manufacturers recommendation. For Cyclic this will usually be 1520us, and for Tail it would be 760us."]}),"\n",(0,s.jsx)(t.li,{children:"If a servo's center is 760us, make sure to change the min/max to -350/350 instead of -700/700, and pos/neg scales to 250 instead of 500."}),"\n",(0,s.jsxs)(t.li,{children:["Confirm and set the servo ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#rate",children:"rate"})," as specified by your manufacturer. For many digital cyclic servos this is 333Hz and for most tail servos this is 560Hz."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"step-2---set-servo-directions",children:"Step 2 - Set servo directions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Connect the servos."}),"\n",(0,s.jsxs)(t.li,{children:["Set Servo override to ",(0,s.jsx)(t.code,{children:"ON"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Fit servo arms to as close to 90 degrees as possible."}),"\n",(0,s.jsxs)(t.li,{children:["Slide Servo 1 override in the ",(0,s.jsx)(t.strong,{children:"positive"})," direction (i.e. right)."]}),"\n",(0,s.jsxs)(t.li,{children:["Confirm the servo arm travels ",(0,s.jsx)(t.strong,{children:"upwards"})," towards the swashplate. If not toggle the ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#reverse",children:"servo reverse"}),"."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Repeat with remaining cyclic servos."}),"\n",(0,s.jsx)("video",{src:n.A,controls:!0,playsInline:!0,muted:!0,width:"85%"}),"\n",(0,s.jsx)(t.h3,{id:"step-3---set-arms-at-90-degrees",children:"Step 3 - set arms at 90 degrees"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Set each of the override sliders to 0 degrees."}),"\n",(0,s.jsxs)(t.li,{children:["Adjust ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#center",children:"center"})," to level the servo arm (0\xb0 or 90\xb0 depending on servo installation orientation). One quick way is to slide the override bar and copy the output value from the blue bar into the ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#center",children:"center"})," and press save. Make sure to reset the override to see the correct effect."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Repeat with remaining cyclic servos."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Servo Tab",src:r(6384).A+"",width:"1382",height:"805"})}),"\n",(0,s.jsx)(t.h3,{id:"step-5---calibrate-range-optional---recommended",children:"Step 5 - calibrate range (Optional - recommended)"}),"\n",(0,s.jsxs)(t.p,{children:["The purpose of servo calibration is so the FC is able to more accurately control its mechanical movements. Not all servos are the same. Sometimes identical servos can have several degrees of difference for the same output. Calibrating the servos can enable each servo to move by the same amount when commanded.",(0,s.jsx)(t.br,{}),"\n","Calibration is also required if using the Geometric Correction function."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Set the override to a positive value (e.g. 30\xb0)"}),"\n",(0,s.jsxs)(t.li,{children:["measure the current servo arm angle and increase or decrease the ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#scale-neg-and-scale-pos",children:"Scale Pos"})," until the servo arm angle matches the override angle."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Servo Tab",src:r(7155).A+"",width:"2620",height:"1434"})}),"\n",(0,s.jsx)(t.h3,{id:"step-4---set-final-limits-usually-not-required",children:"Step 4 - set final limits (Usually Not Required)"}),"\n",(0,s.jsxs)(t.p,{children:["With the servos installed in the helicopter, adjust ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Configurator/Servos#min-and-max",children:"Min/Max"}),"  so that the arm & ball won't hit anything in the heli frame (servo override @ 80\xb0 / -80\xb0)."]}),"\n",(0,s.jsx)(t.p,{children:"Repeat with remaining cyclic/tail servos."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},49926:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/medias/servo-setup-670e167379cd3f4a2bb24cb5ae342d49.mp4"},7155:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/servo-5-1b792e6285bd3f192c831a0dd138ca90.png"},6384:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/servos-centre-3e4e3352c3fc41d45502add101e15301.png"},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>a});var s=r(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);