"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6475],{42369:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"configurator/tabs/cli","title":"CLI","description":"This tab is the CLI or Command Line Interface. It is a method for sending commands and settings to the flight controller. We can also backup and restore our configuration using this tab.","source":"@site/docs/configurator/tabs/cli.md","sourceDirName":"configurator/tabs","slug":"/configurator/tabs/cli","permalink":"/docs/next/configurator/tabs/cli","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/configurator/tabs/cli.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Blackbox","permalink":"/docs/next/configurator/tabs/blackbox"}}');var s=n(74848),o=n(28453);const r={},a="CLI",l={},c=[{value:"CLI Usage",id:"cli-usage",level:3},{value:"Diff Backup Using CLI",id:"diff-backup-using-cli",level:4},{value:"Dump Using CLI",id:"dump-using-cli",level:4},{value:"Dump Profiles Using CLI if You Use Them",id:"dump-profiles-using-cli-if-you-use-them",level:4},{value:"Dump Rate Profiles Using CLI if You Use Them",id:"dump-rate-profiles-using-cli-if-you-use-them",level:4},{value:"Restore via CLI",id:"restore-via-cli",level:3}];function d(e){const i={code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"cli",children:"CLI"})}),"\n",(0,s.jsx)(i.p,{children:"This tab is the CLI or Command Line Interface. It is a method for sending commands and settings to the flight controller. We can also backup and restore our configuration using this tab."}),"\n",(0,s.jsx)(i.h3,{id:"cli-usage",children:"CLI Usage"}),"\n",(0,s.jsxs)(i.p,{children:["To save your settings type in ",(0,s.jsx)(i.code,{children:"save"}),", saving will reboot the flight controller."]}),"\n",(0,s.jsxs)(i.p,{children:["To exit the CLI without saving power off the flight controller or type in ",(0,s.jsx)(i.code,{children:"exit"}),"."]}),"\n",(0,s.jsxs)(i.p,{children:["To see a list of other commands type in ",(0,s.jsx)(i.code,{children:"help"})," and press return."]}),"\n",(0,s.jsxs)(i.p,{children:["To dump your configuration (including the current profile), use the ",(0,s.jsx)(i.code,{children:"dump"})," command."]}),"\n",(0,s.jsx)(i.p,{children:"See the other documentation sections for details of the cli commands and settings that are available."}),"\n",(0,s.jsx)(i.h4,{id:"diff-backup-using-cli",children:"Diff Backup Using CLI"}),"\n",(0,s.jsx)(i.p,{children:"This method shows all user-modified settings but avoids saving values left as default or values that are part of the\nboard targets"}),"\n",(0,s.jsxs)(i.p,{children:["Note that ",(0,s.jsx)(i.code,{children:"diff"})," only shows the current Rate and PID profiles, whereas ",(0,s.jsx)(i.code,{children:"diff all"})," will show all profiles that have been\nchanged"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"diff all\n"})}),"\n",(0,s.jsx)(i.p,{children:"This data should be sufficient to replicate the quad configuration on a new or erased flight controller board. Use the\nsave to file function to create a backup"}),"\n",(0,s.jsx)(i.h4,{id:"dump-using-cli",children:"Dump Using CLI"}),"\n",(0,s.jsxs)(i.p,{children:["Note that the ",(0,s.jsx)(i.code,{children:"dump"})," command will output every setting and their current values. Many of these will be firmware\ndefaults and are not needed to backup quad configuration changes"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"rateprofile 0\nprofile 0\ndump\n"})}),"\n",(0,s.jsx)(i.h4,{id:"dump-profiles-using-cli-if-you-use-them",children:"Dump Profiles Using CLI if You Use Them"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"profile 1\ndump profile\nprofile 2\ndump profile\n"})}),"\n",(0,s.jsx)(i.h4,{id:"dump-rate-profiles-using-cli-if-you-use-them",children:"Dump Rate Profiles Using CLI if You Use Them"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"rateprofile 1\ndump rates\nrateprofile 2\ndump rates\n"})}),"\n",(0,s.jsx)(i.p,{children:"copy screen output to a file and save it."}),"\n",(0,s.jsx)(i.h3,{id:"restore-via-cli",children:"Restore via CLI"}),"\n",(0,s.jsxs)(i.p,{children:["Use the cli ",(0,s.jsx)(i.code,{children:"defaults"})," command first."]}),"\n",(0,s.jsx)(i.p,{children:"When restoring from a backup it is a good idea to do a dump of the latest defaults so you know what has changed - if you do this each time a firmware release is created you will be able to see the cli changes between firmware versions."}),"\n",(0,s.jsx)(i.p,{children:"Use the CLI and send all the output from the saved backup commands."}),"\n",(0,s.jsx)(i.p,{children:"You may find you have to copy/paste a few lines at a time."}),"\n",(0,s.jsx)(i.p,{children:"Repeat the backup process again!"}),"\n",(0,s.jsx)(i.p,{children:"Compare the two backups to make sure you are happy with your restored settings."}),"\n",(0,s.jsx)(i.p,{children:"Re-apply any new defaults as desired."}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{alt:"CLI Tab",src:n(27926).A+"",width:"1905",height:"803"})})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},27926:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/cli-cf2c37eee20b79522257a43f5281952b.png"},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(96540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);