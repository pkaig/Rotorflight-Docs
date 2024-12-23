"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6974],{55556:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>A,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var s=i(74848),n=i(28453);const r={sidebar_position:110},A="RPM Filters",l={id:"Wiki/Tutorial-Setup/RPM-Filters",title:"RPM Filters",description:"Introduction",source:"@site/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/RPM-Filters.md",sourceDirName:"Wiki/Tutorial-Setup",slug:"/Wiki/Tutorial-Setup/RPM-Filters",permalink:"/docs/Wiki/Tutorial-Setup/RPM-Filters",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/versioned_docs/version-2.0.0/Wiki/Tutorial-Setup/RPM-Filters.md",tags:[],version:"2.0.0",sidebarPosition:110,frontMatter:{sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"Governor setup",permalink:"/docs/Wiki/Tutorial-Setup/governor-setup"},next:{title:"ESC Telemetry",permalink:"/docs/Wiki/Tutorial-Setup/ESC-Telemetry"}},a={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Basic RPM Filters Settings",id:"basic-rpm-filters-settings",level:2},{value:"Filter Tuning",id:"filter-tuning",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"rpm-filters",children:"RPM Filters"})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"RPM filters clean up the gyro signals by filtering out vibrations that are coming from the rotating parts in a helicopter: the main rotor, tail rotor and motor(s)."}),"\n",(0,s.jsx)(t.p,{children:"The difference between an unfiltered and filtered signal is significant. Here's an example of filtered and unfiltered gyro signals:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Gyro signals",src:i(23304).A+"",width:"1393",height:"940"})}),"\n",(0,s.jsx)(t.p,{children:"RPM filtered gyro signals enable you to tune the helicopter better, for example by being able to use higher gains."}),"\n",(0,s.jsxs)(t.p,{children:["The RPM filters require real time motor speed information to be available to the flight controller. This can be obtained with a ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Tutorial-Setup/Rpm-Measurement#frequency-sensor",children:"Frequency Sensor"})," or by using ",(0,s.jsx)(t.a,{href:"/docs/Wiki/Tutorial-Setup/Rpm-Measurement#bi-directional-dshot",children:"Bidirectional DSHOT"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Once the FC knows the motor speed, it can calculate the main and tail rotor speeds. For this it needs to know the ",(0,s.jsx)(t.em,{children:"Main Rotor Gear Ratio"})," and the ",(0,s.jsx)(t.em,{children:"Tail Rotor Gear Ratio"}),", which you can specify in the ",(0,s.jsx)(t.em,{children:"Motors"})," tab."]}),"\n",(0,s.jsx)(t.p,{children:"For example, here are the ratios for my Gaui X3."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Gear ratios",src:i(50344).A+"",width:"831",height:"75"})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Direct drive motors have a ratio of 1:1."})}),"\n",(0,s.jsxs)(t.p,{children:["In order to use RPM filters, proceed to the ",(0,s.jsx)(t.em,{children:"Gyro"})," tab, and enable the filters as shown below."]}),"\n",(0,s.jsx)(t.h2,{id:"basic-rpm-filters-settings",children:"Basic RPM Filters Settings"}),"\n",(0,s.jsx)(t.p,{children:"These settings should be ok for a first flight."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"RPM Filters",src:i(91578).A+"",width:"838",height:"557"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"RPM Filters",src:i(12689).A+"",width:"835",height:"836"})}),"\n",(0,s.jsx)(t.p,{children:"Filters introduce latency. More filters mean more latency. So try to keep the number of filters low."}),"\n",(0,s.jsx)(t.p,{children:"Double filters provide heavier filtering than single filters, but are also slower. They are sometimes needed on the 1st and/or 2nd harmonic."}),"\n",(0,s.jsxs)(t.admonition,{type:"tip",children:[(0,s.jsx)(t.p,{children:"The Q factor defines how wide the filter is:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Lower Q values make the filter wider"}),"\n",(0,s.jsx)(t.li,{children:"Higher Q values make the filter smaller"}),"\n"]})]}),"\n",(0,s.jsx)(t.p,{children:"Wider filters are slower than narrow filters, so try to make the filters as small as possible without it being ineffective."}),"\n",(0,s.jsx)(t.h2,{id:"filter-tuning",children:"Filter Tuning"}),"\n",(0,s.jsxs)(t.p,{children:["Make a blackbox log of a short flight with constant headspeed. Scroll to the point where the heli has spooled up and is hovering. Mark that point with the ",(0,s.jsx)(t.code,{children:"I"})," key. Scroll near the end and mark that with the ",(0,s.jsx)(t.code,{children:"O"})," key. Now bring up the ",(0,s.jsx)(t.em,{children:"Analyzer Display"})," and enlarge it. It might look like:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Missing filters",src:i(15716).A+"",width:"1393",height:"940"})}),"\n",(0,s.jsx)(t.p,{children:"This log was made with only a double fundamental filter. As you can see there's some noise around 144Hz. Since the headspeed is 4200 RPM, that must be near the second harmonic (4200/60 = 70*2 = 140Hz). Also note that the gyro signal in the background is also a bit noisy."}),"\n",(0,s.jsx)(t.p,{children:"Now let's add some single filters for the 2nd (140Hz) and 3rd (210Hz) harmonic. Suddenly the log looks a lot cleaner:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Added filters",src:i(18354).A+"",width:"1393",height:"940"})})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},50344:(e,t,i)=>{i.d(t,{A:()=>s});const s="data:image/png;base64,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"},18354:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/rpm-filters-added-e59278055fba570a444e245705faac94.png"},15716:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/rpm-filters-missing-636f4c3a9a935c4644dea41490fb2cae.png"},91578:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/rpm-filters-set-1-1ed77e515775eb8c4c0f469c416f7a9c.png"},12689:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/rpm-filters-set-2-e7ed76de18502bfa21152b083b9a00c9.png"},23304:(e,t,i)=>{i.d(t,{A:()=>s});const s=i.p+"assets/images/rpm-unfiltered-20b6697aa790a2143f27566f94663ca7.png"},28453:(e,t,i)=>{i.d(t,{R:()=>A,x:()=>l});var s=i(96540);const n={},r=s.createContext(n);function A(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:A(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);