"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3179],{83905:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(74848),s=n(28453);const r={title:"snapshot 2.0.0-20231018",authors:{name:"Phil Kaighin",title:"Rotorflight Team member",url:"https://github.com/pkaig",image_url:"https://github.com/pkaig.png"}},o=void 0,l={permalink:"/announcement/2023/10/18/snapshot 2.0.0",source:"@site/announcement/2023-10-18-snapshot 2.0.0.md",title:"snapshot 2.0.0-20231018",description:"This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care",date:"2023-10-18T00:00:00.000Z",tags:[],readingTime:1.65,hasTruncateMarker:!1,authors:[{name:"Phil Kaighin",title:"Rotorflight Team member",url:"https://github.com/pkaig",image_url:"https://github.com/pkaig.png",imageURL:"https://github.com/pkaig.png",key:null,page:null}],frontMatter:{title:"snapshot 2.0.0-20231018",authors:{name:"Phil Kaighin",title:"Rotorflight Team member",url:"https://github.com/pkaig",image_url:"https://github.com/pkaig.png",imageURL:"https://github.com/pkaig.png"}},unlisted:!1,prevItem:{title:"snapshot 2.0.0-20231127",permalink:"/announcement/2023/11/27/snapshot 2.0.0"},nextItem:{title:"snapshot 2.0.0-20230912",permalink:"/announcement/2023/09/12/snapshot 2.0.0"}},a={authorsImageUrls:[void 0]},h=[{value:"Download The Configurator here.",id:"download-the-configurator-here",level:4},{value:"Download Blackbox here.",id:"download-blackbox-here",level:4},{value:"OpenTX/EdgeTX LUA Scripts",id:"opentxedgetx-lua-scripts",level:4},{value:"Ethos LUA Scripts",id:"ethos-lua-scripts",level:4}];function d(e){const t={a:"a",admonition:"admonition",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{type:"danger",children:[(0,i.jsx)(t.p,{children:"This snapshot is not suitable for end-users. It is intended for beta-testers. Please realise that this software is under heavy development and as such there may be bugs or unintended control issues. Please test with care"}),(0,i.jsxs)(t.p,{children:["If you wish to become involved in testing these snapshots please contact us on the ",(0,i.jsx)(t.a,{href:"https://discord.gg/6QUySXdEvd",children:"Discord"})]})]}),"\n",(0,i.jsx)(t.p,{children:"Rotorflight snapshot 2.0.0-20231018 is ready\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers."}),"\n",(0,i.jsxs)(t.admonition,{title:"Downloads",type:"tip",children:[(0,i.jsxs)(t.h4,{id:"download-the-configurator-here",children:[(0,i.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20231018",children:"Download The Configurator here"}),"."]}),(0,i.jsxs)(t.h4,{id:"download-blackbox-here",children:[(0,i.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230912",children:"Download Blackbox here"}),"."]}),(0,i.jsx)(t.h4,{id:"opentxedgetx-lua-scripts",children:(0,i.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20231019",children:"OpenTX/EdgeTX LUA Scripts"})}),(0,i.jsx)(t.h4,{id:"ethos-lua-scripts",children:(0,i.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-ethos/releases/tag/snapshot%2F2.0.0-20231019",children:"Ethos LUA Scripts"})})]}),"\n",(0,i.jsx)(t.p,{children:"Please also read the Snapshots Wiki page for general information about snapshots."}),"\n",(0,i.jsx)(t.p,{children:"Changes to the Firmware:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"RX subsystem refactored"}),"\n",(0,i.jsx)(t.li,{children:"RX failsafe refactored"}),"\n",(0,i.jsx)(t.li,{children:"Dynamic Notch filter adapted for helis"}),"\n",(0,i.jsxs)(t.li,{children:["ESC telemetry implemented for various ESCs","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hobbywing Platinum V4"}),"\n",(0,i.jsx)(t.li,{children:"Hobbywing Platinum V5"}),"\n",(0,i.jsx)(t.li,{children:"Hobbywing FlyFun V5"}),"\n",(0,i.jsx)(t.li,{children:"Scorpion UNC"}),"\n",(0,i.jsx)(t.li,{children:"Kontronik"}),"\n",(0,i.jsx)(t.li,{children:"OMP Hobby"}),"\n",(0,i.jsx)(t.li,{children:"ZTW Skyhawk"}),"\n",(0,i.jsx)(t.li,{children:"APD Pro/HV"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Servo speed calculation fixed to use ms/60\xb0"}),"\n",(0,i.jsx)(t.li,{children:"PID Mode 3 fixed to use P-term on error"}),"\n",(0,i.jsx)(t.li,{children:"PT1 filter cutoff calculation fixed"}),"\n",(0,i.jsx)(t.li,{children:"MSP over FrSky telemetry speed improved"}),"\n",(0,i.jsx)(t.li,{children:"RPM calculation accuracy improved"}),"\n",(0,i.jsx)(t.li,{children:"More CRSF FM reuse options added"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Changes to the Configurator:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Receiver tab refactored to match firmware"}),"\n",(0,i.jsx)(t.li,{children:"Receiver telemetry added"}),"\n",(0,i.jsx)(t.li,{children:"Rates tab fixed to use new MSP messages"}),"\n",(0,i.jsx)(t.li,{children:"Status tab fixed to show correct channel values"}),"\n",(0,i.jsx)(t.li,{children:"Failsafe refactored - advanced failsafe disabled"}),"\n",(0,i.jsx)(t.li,{children:"ESC telemetry added to Motors tab"}),"\n",(0,i.jsx)(t.li,{children:"Governor max throttle added to Profiles"}),"\n",(0,i.jsx)(t.li,{children:"Governor feature handling simplified"}),"\n",(0,i.jsx)(t.li,{children:"RPM filter feature handling simplified"}),"\n",(0,i.jsx)(t.li,{children:"Dynamic Notch filter added to Gyro tab"}),"\n",(0,i.jsx)(t.li,{children:"Localization improved - most texts are translated"}),"\n",(0,i.jsx)(t.li,{children:"All locales updated with new english messages"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Changes to the LUA Scripts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Aligned MSP messages with firmware 20231018"}),"\n",(0,i.jsx)(t.li,{children:"Added MSP API version check"}),"\n",(0,i.jsx)(t.li,{children:"Added dynamic notch filters to the Filters page"}),"\n",(0,i.jsx)(t.li,{children:"Added LUA version to screen title"}),"\n",(0,i.jsx)(t.li,{children:"Removed Failsafe page"}),"\n",(0,i.jsx)(t.li,{children:"Cleaned up code"}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);