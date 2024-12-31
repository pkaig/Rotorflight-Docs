"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9939],{72831:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"setup/governor-setup","title":"Governor setup","description":"There are several options for configuring the Governor.","source":"@site/docs/setup/governor-setup.mdx","sourceDirName":"setup","slug":"/setup/governor-setup","permalink":"/docs/next/setup/governor-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/setup/governor-setup.mdx","tags":[],"version":"current","sidebarPosition":85,"frontMatter":{"sidebar_position":85},"sidebar":"tutorialSidebar","previous":{"title":"Governor","permalink":"/docs/next/setup/Governor"},"next":{"title":"RPM Filters","permalink":"/docs/next/setup/RPM-Filters"}}');var s=r(74848),i=r(28453),l=r(11470),a=r(19365),o=r(66854);const u={sidebar_position:85},c="Governor setup",d={},h=[{value:"Single profile - Multiple throttle settings",id:"single-profile---multiple-throttle-settings",level:3},{value:"Multiple Profiles - Single throttle setting",id:"multiple-profiles---single-throttle-setting",level:2},{value:"Set transmitter Headspeeds",id:"set-transmitter-headspeeds",level:4},{value:"Enable Profile Switching",id:"enable-profile-switching",level:4},{value:"Set profile Full Headspeed",id:"set-profile-full-headspeed",level:4}];function p(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"governor-setup",children:"Governor setup"})}),"\n",(0,s.jsx)(t.p,{children:"There are several options for configuring the Governor."}),"\n",(0,s.jsx)(t.admonition,{title:"Governor Options",type:"info",children:(0,s.jsxs)(l.A,{groupId:"Gov-options",children:[(0,s.jsxs)(a.A,{value:"Option 1",label:"Option 1",attributes:{className:o.A.tab},children:[(0,s.jsx)(t.h3,{id:"single-profile---multiple-throttle-settings",children:"Single profile - Multiple throttle settings"}),(0,s.jsxs)(t.p,{children:["Configuring a single profile with ",(0,s.jsx)(t.strong,{children:"Full Headspeed"})," set to the Maximum desired headspeed."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Governor Setup",src:r(85944).A+"",width:"789",height:"342"})}),(0,s.jsx)(t.p,{children:"Transmitter throttle settings are configured to Separate throttle positions for each desired headspeed."}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Example:"})," If we configure a 2500RPM ",(0,s.jsx)(t.strong,{children:"Full headspeed"})]}),(0,s.jsx)(t.p,{children:"On the transmitter set the required headspeeds."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Throttle Hold = 0%"}),"\n",(0,s.jsx)(t.li,{children:"Idle up 1 = 70% = 2500 * 0.7 = 1750 RPM headspeed"}),"\n",(0,s.jsx)(t.li,{children:"Idle up 2 = 90% = 2500 * 0.9 = 2250 RPM headspeed"}),"\n",(0,s.jsx)(t.li,{children:"Idle up 3 = 100% = 2500 RPM Headspeed"}),"\n"]}),(0,s.jsx)(t.p,{children:"This Method is easier to configure and simplifies the tuning as there is only one profile to change. You will have to tune so that it is suitable for each of the headspeed."})]}),(0,s.jsxs)(a.A,{value:"Option 2",label:"Option 2",attributes:{className:o.A.tab},children:[(0,s.jsx)(t.h2,{id:"multiple-profiles---single-throttle-setting",children:"Multiple Profiles - Single throttle setting"}),(0,s.jsx)(t.p,{children:"In this option we set each profile with a separate Full headspeed. We use the Adjustments to switch between each profile. Our Transmitter throttle setting remains at 100% unless throttle hold is activated."}),(0,s.jsx)(t.h4,{id:"set-transmitter-headspeeds",children:"Set transmitter Headspeeds"}),(0,s.jsx)(t.p,{children:"On the transmitter set the required headspeeds."}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Throttle Hold ON = 0%"}),"\n",(0,s.jsx)(t.li,{children:"Throttle hold OFF = 100%"}),"\n"]}),(0,s.jsx)(t.p,{children:"Our Idle up switch (headspeed switch) is just a 3 position switch assigned to an AUX channel. This channel is used for the profile switching below (e.g. AUX4)."}),(0,s.jsx)(t.h4,{id:"enable-profile-switching",children:"Enable Profile Switching"}),(0,s.jsxs)(t.p,{children:["This example switches between Profiles 1-3",(0,s.jsx)(t.br,{}),"\n","More details can be found in the ",(0,s.jsx)(t.a,{href:"/docs/next/setup/Profile-switching-example",children:(0,s.jsx)(t.strong,{children:"Profile Switching Example"})})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Governor Setup",src:r(5226).A+"",width:"1634",height:"391"})}),(0,s.jsx)(t.h4,{id:"set-profile-full-headspeed",children:"Set profile Full Headspeed"}),(0,s.jsxs)(t.p,{children:["For each of the profiles set a separate ",(0,s.jsx)(t.strong,{children:"Full Headspeed"})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Governor Setup",src:r(60435).A+"",width:"649",height:"678"})})]})]})})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var n=r(18215);const s={tabItem:"tabItem_Ymn6"};var i=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(96540),s=r(18215),i=r(23104),l=r(56347),a=r(205),o=r(57485),u=r(31682),c=r(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.W6)(),i=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function g(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,i=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:r,groupId:s}),[g,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,i]=(0,c.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:s}),b=(()=>{const e=u??g;return p({value:e,tabValues:i})?e:null})();(0,a.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(74848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=a[r].value;s!==n&&(u(t),l(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:a.map((e=>{let{value:t,label:r,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,s.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function j(e){let{lazy:t,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function w(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(j,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},66854:(e,t,r)=>{r.d(t,{A:()=>n});const n={tab:"tab_gaMl"}},85944:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/governor-setup-1-e925e2e705cf2cc41521793684733e0a.png"},60435:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/governor-setup-2-939893dcd18f7c63f6cf4bbe00fbd0a6.png"},5226:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/governor-setup-3-0f85f1291e59ae0e14412d5f61e49117.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>a});var n=r(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);