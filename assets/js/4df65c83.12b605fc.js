"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4376],{67875:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>d,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup","title":"EdgeTX Generic Radio Setup","description":"This walkthrough will guide you through to create a basic radio model for rotorflight controller.","source":"@site/docs/setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup.mdx","sourceDirName":"setup/radio-setup/radio-setup-edgetx","slug":"/setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup","permalink":"/docs/next/setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/rotorflight/rotorflight-docs/tree/main/docs/setup/radio-setup/radio-setup-edgetx/edgetx-generic-radio-setup.mdx","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Example setup - Servo tail","permalink":"/docs/next/examples/example-1"},"next":{"title":"RF2 Touch Lua Scripts","permalink":"/docs/next/setup/radio-setup/radio-setup-edgetx/lua-RF2-touch"}}');var t=n(74848),r=n(28453);const l={sidebar_position:10},d="EdgeTX Generic Radio Setup",c={},h=[{value:"Channels Arrangement",id:"channels-arrangement",level:2},{value:"Radio Setup",id:"radio-setup",level:2},{value:"Radio Inputs Page Setup",id:"radio-inputs-page-setup",level:3},{value:"Radio Mixer Page Setup",id:"radio-mixer-page-setup",level:3},{value:"Rotorflight Setup",id:"rotorflight-setup",level:2},{value:"Arming Setup",id:"arming-setup",level:3},{value:"Profile Switching Setup",id:"profile-switching-setup",level:3},{value:"Rescue Setup",id:"rescue-setup",level:3},{value:"Blackbox Setup",id:"blackbox-setup",level:3},{value:"Buffer Pack Setup",id:"buffer-pack-setup",level:3},{value:"In-Flight Profile Parameters Setup",id:"in-flight-profile-parameters-setup",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"edgetx-generic-radio-setup",children:"EdgeTX Generic Radio Setup"})}),"\n",(0,t.jsx)(i.p,{children:"This walkthrough will guide you through to create a basic radio model for rotorflight controller."}),"\n",(0,t.jsx)(i.p,{children:"This is a guide for EdgeTx/OpenTx radios, it will work with both ELRS and F.port receivers."}),"\n",(0,t.jsx)(i.p,{children:"The Channel order is AECR1T23 which required by ELRS receiver, but it will also works for F.Port, SBUS, and others."}),"\n",(0,t.jsxs)(i.admonition,{title:"note",type:"info",children:[(0,t.jsx)(i.p,{children:"The Rotorflight basic operation will require a minimum of 6 channels, but this is for basic operation only, additional channels will be required for other options, such as profile switching, Rescue, etc."}),(0,t.jsxs)(i.p,{children:["Normally you will need a total of 8 channels if you want to have options like ",(0,t.jsx)(i.em,{children:"Profile switching"})," and ",(0,t.jsx)(i.em,{children:"Rescue"}),"."]})]}),"\n",(0,t.jsx)(i.h2,{id:"channels-arrangement",children:"Channels Arrangement"}),"\n",(0,t.jsx)(i.p,{children:"This following radio model uses 12 channels to get the best of Rotorflight options, the user can add or delete channels depending on his specific application, and required features."}),"\n",(0,t.jsx)(i.p,{children:"These channels are configured as follows:"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Channel #"}),(0,t.jsx)(i.th,{children:"Function"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH1"}),(0,t.jsx)(i.td,{children:"Aileron"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH2"}),(0,t.jsx)(i.td,{children:"Elevator"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH3"}),(0,t.jsx)(i.td,{children:"Collective"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH4"}),(0,t.jsx)(i.td,{children:"Rudder"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH5"}),(0,t.jsx)(i.td,{children:"AUX1 - Arming"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH6"}),(0,t.jsx)(i.td,{children:"Throttle"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH7"}),(0,t.jsx)(i.td,{children:"AUX2 - Profile Switching"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH8"}),(0,t.jsx)(i.td,{children:"AUX3 - Rescue"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH9"}),(0,t.jsx)(i.td,{children:"AUX4 - Blackbox"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH10"}),(0,t.jsx)(i.td,{children:"AUX5 - Backup Pack"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH11"}),(0,t.jsx)(i.td,{children:"AUX6 - Adjustment Enable Channel"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"CH12"}),(0,t.jsx)(i.td,{children:"AUX7 - Adjustment Value Channel"})]})]})]}),"\n",(0,t.jsxs)(i.admonition,{title:"note",type:"caution",children:[(0,t.jsx)(i.p,{children:"Use the below recommended setting for the ELRS Tx module."}),(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.expresslrs.org/quick-start/transmitters/tx-prep/#radio-settings",children:"Baud Rate"}),": ",(0,t.jsx)(i.em,{children:"5.25M (or as high as your module supports)"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.expresslrs.org/software/switch-config/#channel-update-rate-versus-packet-rate",children:"Packet Rate"}),": ",(0,t.jsx)(i.em,{children:"500Hz"})]}),"\n",(0,t.jsxs)(i.li,{children:["Telemetry Ratio: ",(0,t.jsx)(i.em,{children:"1:8 to 1:32"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.expresslrs.org/software/switch-config/#summary-of-switch-configuration-modes",children:"Switch Mode"}),": ",(0,t.jsx)(i.em,{children:"Wide"})]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.a,{href:"https://www.expresslrs.org/software/dynamic-transmit-power/#description",children:"Tx Max Power"}),": ",(0,t.jsx)(i.em,{children:"250mW Dynamic"})]}),"\n"]}),(0,t.jsxs)(i.p,{children:["Consult ",(0,t.jsx)(i.a,{href:"https://www.expresslrs.org/software/switch-config/",children:"ELRS Website"})," for more info."]})]}),"\n",(0,t.jsx)(i.h2,{id:"radio-setup",children:"Radio Setup"}),"\n",(0,t.jsxs)(i.p,{children:["This ",(0,t.jsx)(i.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(74253).A+"",children:"Generic Rotorflight Radio Model"})," Yaml file contain all the options listed above."]}),"\n",(0,t.jsx)(i.h3,{id:"radio-inputs-page-setup",children:"Radio Inputs Page Setup"}),"\n",(0,t.jsx)(i.p,{children:"Configure the inputs on the radio as per the below image."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(65596).A+"",width:"480",height:"763"})}),"\n",(0,t.jsx)(i.p,{children:"Based on the image above:"}),"\n",(0,t.jsxs)(i.p,{children:["The 3-position ",(0,t.jsx)(i.strong,{children:"SB"})," Switch will control ",(0,t.jsx)(i.em,{children:"Arming"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SB"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Disarmed"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SB"}),"-",(0,t.jsx)(i.em,{children:"middle"}),": Disarmed"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SB"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Armed"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The 2-position ",(0,t.jsx)(i.strong,{children:"SF"})," Switch will control ",(0,t.jsx)(i.em,{children:"Throttle Hold"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SF"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Throttle Hold"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SF"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Throttle Release"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The 3-position ",(0,t.jsx)(i.strong,{children:"SE"})," Switch will control ",(0,t.jsx)(i.em,{children:"Throttle percentage"})," and ",(0,t.jsx)(i.em,{children:"Profile Switching"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SE"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Throttle 60%, Profile 1, and Rate 1"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SE"}),"-",(0,t.jsx)(i.em,{children:"middle"}),": Throttle 70%, Profile 2, and Rate 2"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SE"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Throttle 80%, Profile 3, and Rate 2"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The 2-position ",(0,t.jsx)(i.strong,{children:"SH"})," Momentary Switch will control ",(0,t.jsx)(i.em,{children:"Rescue"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SH"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Rescue OFF"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SH"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Rescue ON"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The 3-position ",(0,t.jsx)(i.strong,{children:"SA"})," Switch will control ",(0,t.jsx)(i.em,{children:"Blackbox enable"})," and ",(0,t.jsx)(i.em,{children:"Blackbox erase"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SA"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Blackbox Logging OFF"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SA"}),"-",(0,t.jsx)(i.em,{children:"middle"}),": Blackbox Logging ON"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SA"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Erase Blackbox Logs"]}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["The 3-position ",(0,t.jsx)(i.strong,{children:"SC"})," Switch will control ",(0,t.jsx)(i.em,{children:"Backup Buffer Pack"})," as below:"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SC"}),"-",(0,t.jsx)(i.em,{children:"down"}),": Buffer OFF"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SC"}),"-",(0,t.jsx)(i.em,{children:"middle"}),": Buffer ON"]}),"\n",(0,t.jsxs)(i.li,{children:["Switch ",(0,t.jsx)(i.strong,{children:"SC"}),"-",(0,t.jsx)(i.em,{children:"up"}),": Buffer ON"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"radio-mixer-page-setup",children:"Radio Mixer Page Setup"}),"\n",(0,t.jsxs)(i.p,{children:["Additionally you can use CH11-AUX6 and CH12-AUX7 to perform in flight parameter adjustment using adjustment functions from the ",(0,t.jsx)(i.a,{href:"/docs/next/configurator/tabs/adjustments#adjustment-functions",children:"Adjustments Tab"}),"."]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(1935).A+"",width:"480",height:"1146"})}),"\n",(0,t.jsx)(i.p,{children:"The above settings will allow you to adjust 30 parameters in flight using the radio trim switches with combination of the 6-position buttons."}),"\n",(0,t.jsx)(i.p,{children:"The below table explain how each parameter can be accessed."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(35172).A+"",width:"690",height:"230"})}),"\n",(0,t.jsxs)(i.p,{children:["For example when 6-position ",(0,t.jsx)(i.em,{children:"button 1"})," is activated, the ",(0,t.jsx)(i.em,{children:"pitch trim switch"})," will change ",(0,t.jsx)(i.em,{children:"Pitch P Gain"})," value, and when 6-position ",(0,t.jsx)(i.em,{children:"button 3"})," is activated, the ",(0,t.jsx)(i.em,{children:"throttle trim switch"})," will change ",(0,t.jsx)(i.em,{children:"Governor D Gain"})," value, and so on."]}),"\n",(0,t.jsx)(i.h2,{id:"rotorflight-setup",children:"Rotorflight Setup"}),"\n",(0,t.jsx)(i.p,{children:"After completing the above radio setup, you can proceed to the Rotorflight Configurator to complete the setup on the flight controller side."}),"\n",(0,t.jsx)(i.h3,{id:"arming-setup",children:"Arming Setup"}),"\n",(0,t.jsx)(i.p,{children:"Proceed to Modes Tab and setup arming as per below picture."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(40966).A+"",width:"971",height:"102"})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively you can paste and save the below commands in CLI to easily achieve the same result."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"aux 0 0 0 1800 2100 0 0\n"})}),"\n",(0,t.jsx)(i.h3,{id:"profile-switching-setup",children:"Profile Switching Setup"}),"\n",(0,t.jsx)(i.p,{children:"Proceed to Adjustment Tab and setup Profiles and rates switching as per below picture."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(82574).A+"",width:"1016",height:"629"})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively in CLI."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"adjfunc 0 2 1 900 2100 1 975 2025 975 2025 0 0 3\nadjfunc 1 1 1 900 2100 1 975 2025 975 2025 0 0 3\n"})}),"\n",(0,t.jsx)(i.h3,{id:"rescue-setup",children:"Rescue Setup"}),"\n",(0,t.jsx)(i.p,{children:"Proceed to Modes Tab and setup Rescue mode as per below picture."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(85797).A+"",width:"1034",height:"111"})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively in CLI."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"aux 1 53 2 1800 2100 0 0\n"})}),"\n",(0,t.jsx)(i.h3,{id:"blackbox-setup",children:"Blackbox Setup"}),"\n",(0,t.jsx)(i.p,{children:"Proceed to Modes Tab and setup Blackbox Modes as per below picture."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(96186).A+"",width:"1034",height:"209"})}),"\n",(0,t.jsx)(i.p,{children:"Alternatively in CLI."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"aux 2 26 3 1400 1600 0 0\naux 3 31 3 1800 2100 0 0\n"})}),"\n",(0,t.jsx)(i.h3,{id:"buffer-pack-setup",children:"Buffer Pack Setup"}),"\n",(0,t.jsxs)(i.p,{children:["Buffer packs like the ",(0,t.jsx)(i.a,{href:"https://1st-rc.com/en/product/1st-buffer-v4-3x25f-for-helis-450-700/",children:"1st Buffer-Pack"})," can be switched off from the radio after disconnecting the main pack, this can be done by connecting the buffer pack to a free 1500us PWM Channel on the flight controller."]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"First you need to assign servo 5 to a free timer pin, you will then see servo 5 in the Servos Tab.\nAssuming we have a free timer on pin A08."}),"\n",(0,t.jsx)(i.p,{children:"In CLI:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"Resource Servo 5 A08\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Next you assign AUX5 Channel to Servo 5 using a mixer rule."}),"\n",(0,t.jsx)(i.p,{children:"In CLI:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"mixer rule 1 set AUX5 S5 1000 0\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"in-flight-profile-parameters-setup",children:"In-Flight Profile Parameters Setup"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Generic Setup",src:n(35172).A+"",width:"690",height:"230"})}),"\n",(0,t.jsx)(i.p,{children:"Since there is many functions required to perform the In-flight adjustment as per the above table, you can directly copy the below commands to CLI and save."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"adjfunc 2 14 5 900 1100 6 1025 1075 1925 1975 5 10 200\nadjfunc 3 18 5 900 1100 6 1100 1150 1850 1900 5 10 200\nadjfunc 4 22 5 900 1100 6 1175 1225 1775 1825 5 10 200\nadjfunc 5 49 5 900 1100 6 1250 1300 1700 1750 5 10 200\nadjfunc 6 27 5 900 1100 6 1325 1375 1625 1675 5 10 200\nadjfunc 7 26 5 900 1100 6 1400 1450 1550 1600 5 10 200\nadjfunc 8 15 5 1100 1300 6 1025 1075 1925 1975 5 10 200\nadjfunc 9 19 5 1100 1300 6 1100 1150 1850 1900 5 10 200\nadjfunc 10 23 5 1100 1300 6 1175 1225 1775 1825 5 10 200\nadjfunc 11 50 5 1100 1300 6 1250 1300 1700 1750 5 10 200\nadjfunc 12 28 5 1100 1300 6 1325 1375 1625 1675 5 10 200\nadjfunc 13 29 5 1100 1300 6 1400 1450 1550 1600 5 10 200\nadjfunc 14 16 5 1300 1400 6 1025 1075 1925 1975 5 10 200\nadjfunc 15 20 5 1300 1400 6 1100 1150 1850 1900 5 10 200\nadjfunc 16 24 5 1300 1400 6 1175 1225 1775 1825 5 10 200\nadjfunc 17 51 5 1300 1400 6 1250 1300 1700 1750 5 10 200\nadjfunc 18 39 5 1300 1400 6 1325 1375 1625 1675 5 10 200\nadjfunc 19 40 5 1300 1400 6 1400 1450 1550 1600 5 10 200\nadjfunc 20 17 5 1550 1700 6 1025 1075 1925 1975 5 10 200\nadjfunc 21 21 5 1550 1700 6 1100 1150 1850 1900 5 10 200\nadjfunc 22 25 5 1550 1700 6 1175 1225 1775 1825 5 10 200\nadjfunc 23 52 5 1550 1700 6 1250 1300 1700 1750 5 10 200\nadjfunc 24 59 5 1750 1900 6 1025 1075 1925 1975 5 10 200\nadjfunc 25 60 5 1750 1900 6 1100 1150 1850 1900 5 10 200\nadjfunc 26 54 5 1750 1900 6 1175 1225 1775 1825 5 10 200\nadjfunc 27 55 5 1750 1900 6 1250 1300 1700 1750 5 10 200\nadjfunc 28 56 5 1950 2100 6 1025 1075 1925 1975 5 10 200\nadjfunc 29 57 5 1950 2100 6 1100 1150 1850 1900 5 10 200\nadjfunc 30 58 5 1950 2100 6 1175 1225 1775 1825 5 10 200\nadjfunc 31 48 5 1950 2100 6 1250 1300 1700 1750 5 10 200\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Consult ",(0,t.jsx)(i.a,{href:"/docs/next/configurator/tabs/adjustments",children:"Rotorflight Adjustments"})," for more info on how to setup the above adjustments."]})]})}function o(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},74253:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/files/Generic_RF-935521af677ed9cdc31f834af24c40eb.yml"},35172:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-adjustments-f6e808108eec8d4857baf1f86412066c.png"},40966:(e,i,n)=>{n.d(i,{A:()=>s});const s="data:image/png;base64,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397yPvfh9pt3ozXLPgXLDz34I8eBVY2yBC82yX797TetOQXLIiIiIiLhLiDNsBUoS7BTGRURERERkYrQaNg+YoU8+5JwiPXLly9bqVdxNMzTp09f1+RPREREREREgp+CZTf5+fkYP348evTogaysLCv1euz0PnfuXEydOtX0T3SXk5ODgQMHlvoaGRkZ5vX5YJ+CSZMmmREQvWwRLyIiIiIiIn6mYNmNPQQ/B1T417/+ZYJif+KNz9etW4cXX3zRjGgnIiIiIiIiVU/BsgsGxgyQOVocb2fBadY027ic96974403kJ2dfd3ItIcPH8bChQuxdOlS00S7WTPPty969dVXsWHDBvz61782gbI9kiGbdr/22msYNmyYqXmeNWuWuR0A7d+/H4888oi5BQrTufzpp58uGfadz7PT7drrsWPHmvX4un/+85+RkpJiXvuVV17B2bNnzXoiIiIiIiJylYJlF8ePH8e2bdvQoUMHc2NuYnNqYhPp9PR0PPnkk/joo49MoMn/NgbKzzzzDP72t79h5cqVeOmll0ytsTfsfs0c6p14jzwGwwzU+Rrvvfce3n333ZK+0QzEn332WZPO5atWrcLy5cvNEO98np1uGzJkCGJiYkwgzyCcQTNfm/vw/vvvq/m3iIiIiIiIGwXLLnbu3GkCya5du5obunfp0sXcU5HBLJtmsxY4LS0N8+fPN/2VeU8yG4Ns3udu5syZZvlTTz1lLSnbww8/jN69e+OFF14wNxNv166dSWfwypuk80bztsLCQjNomK1Xr17m/m+LFy826/GeaBxQjEE7t/HTTz8128jabe4P77H25ZdfWmtfxWbnql0WERERERG5loJli90EOy8vDw888ADuvPNO05yaQXBBQYEJRE+cOIH4+Hg0bNgQDRo0MAGt7dChQyZojY2NNfOsyW3VqpWZLs/tt9+OX/3qV2jSpIkJzNk8m7XDDNzL0r17d9x0002IioryeL8w1pazJpqP0gYiY7Nt1yBcREREREREFCyXsJtgu9u1a5fpn8wAmcEpA1gGl2wS7XpbqObNm5vaX7v5M4NvNqf2hEExm0KzNnjFihXmNbkOm0inpqaakbTZvJp9qN3Vq1fPmrqqfv366Nixoxlt+/vf/74ZZZsBPAN8NvFmUD148GDTTHzz5s1Yv3495syZU9L8W0RERERERJwULFvYhJrBMkelZiDJBwPV733veyZYrlmzJtq0aWOaPjPYzMzMxNq1a621gYSEBPOfzaLZXJvrspa6PBx1e9SoUWY9e9AwNp3m63Mgrvvvv98MzuWNiIgIU+PNoNnGgH7Pnj0m2GeTb/azZh9mDvzFZuSebo8lIiIiIiISrhQsOzCgZN9k1sImJiZaqTBBK/stM4hmzfOYMWPM4F8MqBlcDxo0yHomTDpHqeb9kv/whz+Y12FAWh4G4ffee69Z/8033zQ10/fddx86depkmnI/8cQTmDBhgvVsz9j3mNvpioE2A3HWevN1J0+ebGqaqX///mjdurWZFhERERERkasirng5FPKM3862poAJPx5vTUkw4W2tXn75ZTPIWPv27U1z8UWLFuHDDz/E7Nmzr+ljHQ7+9sZr1hTw0wmPWlMiIiIiIhKOPI31VBrVLFcjt9xyixnEa9y4cSXNrFnLzdGw2adaREREREREvONTsHzp0kVrSoIJm5HzPtBJSUlmns2tH3vsMUycOBF16tQxaeFCZVRERERERCrCp2bYg1IGIv5WZ79XkWC0/8B+rMr62JpTM2wRERERkXAXkGbYW7ZuVc2dBC2WTZZRERERERERX/kULB8/cRzLM1aY2jsFzRIsWBZZJlk2WUZFRERERER85VMzbJFQo2bYIiIiIiLhTaNhi4iIiIiIiFSQgmURERERERERN143wxYREREREREJF6pZFhEREREREXGjYFlERERERETEjYJlERERERERkWsA/x/dSMRZD+SIzQAAAABJRU5ErkJggg=="},96186:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-blackbox-aec0ca4b84ecdf4b8690e89d165956bd.png"},65596:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-input-e94d46071f3e3c21869e19aaf499cbc7.png"},1935:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-mixer-9eacacbaee27e112b5114f1de7b937c7.png"},82574:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-prof-switch-a17d379c0f8d88673fdd8bd17b4e35d8.png"},85797:(e,i,n)=>{n.d(i,{A:()=>s});const s=n.p+"assets/images/generic-setup-rescue-a0d9b0b5f6c30f62ecd01b01651402d6.png"},28453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>d});var s=n(96540);const t={},r=s.createContext(t);function l(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);