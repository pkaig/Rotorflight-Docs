"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[5225],{32371:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var n=r(74848),l=r(28453);const s=r.p+"assets/medias/arming-ready-50af317c322ee8557fbbe7459c5ac81b.mp4",t=r.p+"assets/medias/arming-fail-83affead7ef485af4b3686d40307c06f.mp4",a={sidebar_position:200},d="Swashplate Wiggle",o={id:"Wiki/Tutorial-Setup/Swash-wiggle",title:"Swashplate Wiggle",description:"The swashplate can be configured to 'wiggle' as an indication for when you are",source:"@site/docs/Wiki/Tutorial-Setup/Swash-wiggle.mdx",sourceDirName:"Wiki/Tutorial-Setup",slug:"/Wiki/Tutorial-Setup/Swash-wiggle",permalink:"/docs/next/Wiki/Tutorial-Setup/Swash-wiggle",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Wiki/Tutorial-Setup/Swash-wiggle.mdx",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"Getting started with LEDs",permalink:"/docs/next/Wiki/Tutorial-Setup/led-strip-quick-start"},next:{title:"Flashing Blheli_S ESC to Bluejay firmware",permalink:"/docs/next/Wiki/Tutorial-Setup/Blheli_s-to-Bluejay"}},c={},h=[{value:"FC is ready to Arm",id:"fc-is-ready-to-arm",level:2},{value:"FC Armed",id:"fc-armed",level:2},{value:"FC Error",id:"fc-error",level:2},{value:"FC Fatal error",id:"fc-fatal-error",level:2}];function u(e){const i={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"swashplate-wiggle",children:"Swashplate Wiggle"})}),"\n",(0,n.jsx)(i.p,{children:"The swashplate can be configured to 'wiggle' as an indication for when you are"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Ready to Arm"}),"\n",(0,n.jsx)(i.li,{children:"Armed (default is disabled)"}),"\n",(0,n.jsx)(i.li,{children:"FC Error detected"}),"\n",(0,n.jsx)(i.li,{children:"FC Fatal Error"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"fc-is-ready-to-arm",children:"FC is ready to Arm"}),"\n",(0,n.jsxs)(i.p,{children:["If arming is ready to be enabled and there is no prevention flags active (ready to arm) the swashplate will wiggle as an indication.",(0,n.jsx)(i.br,{}),"\n","It can be enabled or disabled from the cli:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_enable_ready = ON or OFF (default ON)"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"save"})]}),"\n",(0,n.jsx)("video",{src:s,controls:!0,playsInline:!0,muted:!0,width:"85%"}),"\n",(0,n.jsx)(i.h2,{id:"fc-armed",children:"FC Armed"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["This is just a very brief single collective movement indicating the FC has just armed. This is disabled by default.",(0,n.jsx)(i.br,{}),"\n","It can be enabled or disabled from the cli:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_enable_armed = ON or OFF (default OFF)"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"save"})]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"fc-error",children:"FC Error"}),"\n",(0,n.jsx)(i.p,{children:"If the flight controller identifies a configuration fault it will do an error movement by cycling collective several times."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["Arm switch is active",(0,n.jsx)(i.br,{}),"\n","It can be enabled or disabled from the cli:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_enable_error = ON or OFF (default ON)"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"save"})]}),"\n",(0,n.jsx)("video",{src:t,controls:!0,playsInline:!0,muted:!0,width:"85%"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"fc-fatal-error",children:"FC Fatal error"}),"\n",(0,n.jsxs)(i.p,{children:["The following ",(0,n.jsx)(i.a,{href:"/docs/next/Wiki/Tutorial-Setup/arming#disable-flags-description",children:(0,n.jsx)(i.strong,{children:"Arm disable flags"})})," will trigger a FC fatal error.",(0,n.jsx)(i.br,{}),"\n","It can be enabled or disabled from the cli:",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_enable_fatal = ON or OFF (default ON)"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"save"})]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"'NOGYRO'"}),"\n",(0,n.jsx)(i.li,{children:"'LOAD'"}),"\n",(0,n.jsx)(i.li,{children:"'GOVERNOR'"}),"\n",(0,n.jsx)(i.li,{children:"'RPMFILTER'"}),"\n",(0,n.jsx)(i.li,{children:"'REBOOT_REQD'"}),"\n",(0,n.jsx)(i.li,{children:"'NO_ACC_CAL'"}),"\n",(0,n.jsx)(i.li,{children:"'MOTOR_PROTO'"}),"\n",(0,n.jsx)(i.li,{children:"'DSHOT_BBANG'"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The 'amount' (strength) of wiggle and 'speed' (frequency) can be modified by changing the values below.",(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_strength = 50"}),(0,n.jsx)(i.br,{}),"\n",(0,n.jsx)(i.code,{children:"set wiggle_frequency = 10"})]})]})}function g(e={}){const{wrapper:i}={...(0,l.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,i,r)=>{r.d(i,{R:()=>t,x:()=>a});var n=r(96540);const l={},s=n.createContext(l);function t(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);