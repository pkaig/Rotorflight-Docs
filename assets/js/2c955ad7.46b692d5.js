"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7889],{45808:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"setup/radio-setup/radio-setup-ethos/ethos-nexus-status","title":"FrSky Ethos RFStatus LUA Script","description":"Installation","source":"@site/docs/setup/radio-setup/radio-setup-ethos/ethos-nexus-status.mdx","sourceDirName":"setup/radio-setup/radio-setup-ethos","slug":"/setup/radio-setup/radio-setup-ethos/ethos-nexus-status","permalink":"/docs/next/setup/radio-setup/radio-setup-ethos/ethos-nexus-status","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/setup/radio-setup/radio-setup-ethos/ethos-nexus-status.mdx","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"sidebar_position":30},"sidebar":"tutorialSidebar","previous":{"title":"FrSky Ethos and Nexus example","permalink":"/docs/next/setup/radio-setup/radio-setup-ethos/ethos-nexus-setup"},"next":{"title":"Futaba example","permalink":"/docs/next/setup/radio-setup/radio-setup-futaba/futaba-setup"}}');var o=s(74848),i=s(28453);const a={sidebar_position:30},r="FrSky Ethos RFStatus LUA Script",h={},d=[];function l(e){const t={h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"frsky-ethos-rfstatus-lua-script",children:"FrSky Ethos RFStatus LUA Script"})}),"\n",(0,o.jsx)(t.p,{children:"Installation\nAs part of the RFSuite installation detailed above the RFStatus Widget is installed in the background and is ready for configuration."}),"\n",(0,o.jsx)(t.p,{children:"Before proceeding please ensure the Heli, RX and Rotorflight FBL are powered on and connected to your Ethos transmitter, At this point please ensure you have the full list of Telemetry sensors showing in the Model\\Telemetry screen."}),"\n",(0,o.jsx)(t.p,{children:"##-- PLEASE REMOVE THE BLADES --"}),"\n",(0,o.jsx)(t.p,{children:"Ethos Screen Setup\nFrom the main screen press the DISP button and a screen similar to this will be shown."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(21548).A+"",width:"2718",height:"1012"})}),"\n",(0,o.jsx)(t.p,{children:"Press the + symbol to add another screen, scroll down and select the full screen icon as shown."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(64347).A+"",width:"2702",height:"1014"})}),"\n",(0,o.jsx)(t.p,{children:"Select Change Widget, scroll thru the list and select Rotorflight Status"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(87077).A+"",width:"2722",height:"1024"})}),"\n",(0,o.jsx)(t.p,{children:"The following screen is shown, select Configure"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(37083).A+"",width:"2718",height:"1022"})}),"\n",(0,o.jsx)(t.p,{children:"The following screen is the main configuration options for the Rotorflight Status widget"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(81783).A+"",width:"2720",height:"1032"})}),"\n",(0,o.jsx)(t.p,{children:"TRIGGERS"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(29850).A+"",width:"2722",height:"1028"})}),"\n",(0,o.jsx)(t.p,{children:"The ARM and IDLE-UP switch positions MUST be entered as per your Rotorflight configurator setup, in this example SE is ARM (Motor) and SD is IDLE-UP or Throttle Enable. Delay before active is the time taken for your motor to reach idle-up RPM. Current measurements will be started after this timeout."}),"\n",(0,o.jsx)(t.p,{children:"TIMER CONFIGURATION"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(60225).A+"",width:"2722",height:"1024"})}),"\n",(0,o.jsx)(t.p,{children:"This is a count UP timer and will alarm at the set point, you can disable if using another Ethos timer."}),"\n",(0,o.jsx)(t.p,{children:"BATTERY CONFIGURATION"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(86628).A+"",width:"2716",height:"1032"})}),"\n",(0,o.jsx)(t.p,{children:"Enter your Battery \\ Voltage settings and preferences, the 'Play alert on' can be configured for your preference."}),"\n",(0,o.jsx)(t.p,{children:"SWITCH ANNOUNCEMENTS"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(19646).A+"",width:"2720",height:"1026"})}),"\n",(0,o.jsx)(t.p,{children:"This section allows you to have the status widget play announcements depending on your TX switch positions."}),"\n",(0,o.jsx)(t.p,{children:"TELEMETRY ANNOUNCEMENTS"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(74427).A+"",width:"2724",height:"1026"})}),"\n",(0,o.jsx)(t.p,{children:"Similar to the above, allows the status widget to play various Telemetry announcements depending on your TX switch positions, this could include, for example, using the rear panel SJ momentary switch to announce Fuel and/or Voltage."}),"\n",(0,o.jsx)(t.p,{children:"GOVERNOR ANNOUNCEMENTS"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(31628).A+"",width:"2714",height:"1030"})}),"\n",(0,o.jsx)(t.p,{children:"Similar to the above but recommended to enable as per your preferences.These are primarily intended for use when using the Rotorflight Governor - If using an External ESC governor you will receive basic announcements of ARMED, DISARMED, ACTIVE and THROTTLE OFF."}),"\n",(0,o.jsx)(t.p,{children:"CUSTOMISE DISPLAY"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(93353).A+"",width:"2722",height:"1034"})}),"\n",(0,o.jsx)(t.p,{children:"This is the main widget display which has 6 pre-defined boxes each of which can display a range of items for your layout preference."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(91514).A+"",width:"2724",height:"1034"})}),"\n",(0,o.jsx)(t.p,{children:"The additional display options allow the widget to display the min\\max of the sensors as well as colours to indicate status or low battery. You also have the option to add additional sensors from Telemetry and choose these to display in the main screen."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(85975).A+"",width:"2718",height:"1028"})}),"\n",(0,o.jsx)(t.p,{children:"ADVANCED OPTIONS"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Ethos",src:s(51752).A+"",width:"2720",height:"1032"})}),"\n",(0,o.jsx)(t.p,{children:"This is where you select Rotorflight Internal or an External governor for the widget, as well as any temp conversion from Centigrade to Fahrenheit."}),"\n",(0,o.jsx)(t.p,{children:"The Voltage section allows you to choose how sensitive the low voltage alarms will be depending on the voltage sag whilst in flight.The sag compensation is a time delay before the alarms are announced."}),"\n",(0,o.jsx)(t.p,{children:"Gimbal monitor effectively monitors your stick positions based on the drop down selection, and alerts if the given value is met. Normally disabled."}),"\n",(0,o.jsx)(t.p,{children:"The Headspeed option allows you to set the announcement which will tell you when the headspeed has changed, 10% default, useful to monitor if the Governor is maintaining the requested headspeed during fast 3D manoeuvres. Could point to Governor PID tuning."}),"\n",(0,o.jsx)(t.p,{children:"Calculate fuel locally can be used in the event your ESC does not send a current measurement."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},21548:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-1-e69f177f961080ce0ccce4845a7aee7c.jpg"},19646:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-10-0390393535755891e504b07f21ba125e.jpg"},74427:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-11-7d815a93fd40ce6c6e80259d30efc219.jpg"},31628:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-12-c85769d94a69def9eb8df4412e8ebdcf.jpg"},93353:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-13-cafa465f0aaeb556194978cc0faf4287.jpg"},91514:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-14-aa62273208516fd6d9db81ab11c39599.jpg"},85975:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-15-e4b3a9da05a5e60168ae080862a019f8.jpg"},51752:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-16-5b8af1b5ae9be05023ddc7876822e398.jpg"},64347:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-2-6f03f33e925846004bf388c9b17d707d.jpg"},87077:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-4-0afd89047d69257f8e79b91b8dfdae1f.jpg"},37083:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-5-f6d41b9638d68baf87cf2ebd7c52e5d6.jpg"},81783:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-6-a78a5cfffcbd70a0a8e2becacd3d42e8.jpg"},29850:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-7-ae0992d05ed0d0eff4a9936deb31cf41.jpg"},60225:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-8-1bb56f5f954af110343cd8fb10986979.jpg"},86628:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ethos-status-9-fba01e9c1e468d06088d6b80fed87761.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(96540);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);