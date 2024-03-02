"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[6276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,m=c["".concat(u,".").concat(d)]||c[d]||f[d]||a;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43259:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:230},o="Command Line Interface (CLI)",l={unversionedId:"Tutorial-Setup/CLI",id:"Tutorial-Setup/CLI",title:"Command Line Interface (CLI)",description:"Rotorflight has a command line interface (CLI) that can be used to change settings and configure the FC.",source:"@site/docs/Tutorial-Setup/CLI.md",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/CLI",permalink:"/docs/Tutorial-Setup/CLI",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/CLI.md",tags:[],version:"current",sidebarPosition:230,frontMatter:{sidebar_position:230},sidebar:"tutorialSidebar",previous:{title:"Blackbox logging",permalink:"/docs/Tutorial-Setup/Blackbox"},next:{title:"LUA Scripts",permalink:"/docs/Tutorial-Setup/LUA-Scripts"}},u={},p=[{value:"Accessing the CLI.",id:"accessing-the-cli",level:2},{value:"CLI Usage",id:"cli-usage",level:2},{value:"Diff Backup Using CLI",id:"diff-backup-using-cli",level:2},{value:"Dump Using CLI",id:"dump-using-cli",level:3},{value:"Dump Profiles Using CLI if You Use Them",id:"dump-profiles-using-cli-if-you-use-them",level:3},{value:"Dump Rate Profiles Using CLI if You Use Them",id:"dump-rate-profiles-using-cli-if-you-use-them",level:3},{value:"Backup/Restore via CLI",id:"backuprestore-via-cli",level:3}],s={toc:p},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"command-line-interface-cli"},"Command Line Interface (CLI)"),(0,i.kt)("p",null,"Rotorflight has a command line interface (CLI) that can be used to change settings and configure the FC."),(0,i.kt)("h2",{id:"accessing-the-cli"},"Accessing the CLI."),(0,i.kt)("p",null,"The CLI can be accessed via the configurator CLI tab."),(0,i.kt)("h2",{id:"cli-usage"},"CLI Usage"),(0,i.kt)("p",null,"To save your settings type in ",(0,i.kt)("inlineCode",{parentName:"p"},"save"),", saving will reboot the flight controller."),(0,i.kt)("p",null,"To exit the CLI without saving power off the flight controller or type in ",(0,i.kt)("inlineCode",{parentName:"p"},"exit"),"."),(0,i.kt)("p",null,"To see a list of other commands type in ",(0,i.kt)("inlineCode",{parentName:"p"},"help")," and press return."),(0,i.kt)("p",null,"To dump your configuration (including the current profile), use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dump")," command."),(0,i.kt)("h2",{id:"diff-backup-using-cli"},"Diff Backup Using CLI"),(0,i.kt)("p",null,"This method shows all user-modified settings but avoids saving values left as default or values that are part of the board targets"),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"diff")," only shows the current Rate and PID profiles, whereas diff all will show all profiles that have been changed"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"diff all\n")),(0,i.kt)("p",null,"This data should be sufficient to replicate the heli configuration on a new or erased flight controller board. Use the save to file function to create a backup."),(0,i.kt)("h3",{id:"dump-using-cli"},"Dump Using CLI"),(0,i.kt)("p",null,"Note that the dump command will output every setting and their current values. Many of these will be firmware defaults and are not needed to backup heli configuration changes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rateprofile 0\nprofile 0\ndump\n")),(0,i.kt)("h3",{id:"dump-profiles-using-cli-if-you-use-them"},"Dump Profiles Using CLI if You Use Them"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"profile 1\ndump profile\nprofile 2\ndump profile\n")),(0,i.kt)("h3",{id:"dump-rate-profiles-using-cli-if-you-use-them"},"Dump Rate Profiles Using CLI if You Use Them"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"rateprofile 1\ndump rates\nrateprofile 2\ndump rates\n")),(0,i.kt)("p",null,"copy screen output to a file and save it."),(0,i.kt)("h3",{id:"backuprestore-via-cli"},"Backup/Restore via CLI"),(0,i.kt)("p",null,"Go to ",(0,i.kt)("a",{parentName:"p",href:"./Backup-and-restore"},"Backup and Restore")))}f.isMDXComponent=!0}}]);