"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[3437],{65436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"configurator/index","title":"Configurator","description":"","source":"@site/docs/configurator/index.md","sourceDirName":"configurator","slug":"/configurator/","permalink":"/docs/next/configurator/","draft":false,"unlisted":false,"editUrl":"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/configurator/index.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"OpenLager","permalink":"/docs/next/setup/OpenLager"},"next":{"title":"Status","permalink":"/docs/next/configurator/tabs/status"}}');var o=n(74848),s=n(28453),c=n(44774);const i={},a="Configurator",l={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"configurator",children:"Configurator"})}),"\n","\n",(0,o.jsx)(c.A,{})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},44774:(e,t,n)=>{n.d(t,{A:()=>v});var r=n(96540),o=n(18215),s=n(26972),c=n(28774),i=n(44586);const a=["zero","one","two","few","many","other"];function l(e){return a.filter((t=>e.includes(t)))}const u={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function d(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),u}}),[e])}function f(){const e=d();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}var m=n(16654),h=n(21312),p=n(51107);const g={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var x=n(74848);function j(e){let{href:t,children:n}=e;return(0,x.jsx)(c.A,{href:t,className:(0,o.A)("card padding--lg",g.cardContainer),children:n})}function C(e){let{href:t,icon:n,title:r,description:s}=e;return(0,x.jsxs)(j,{href:t,children:[(0,x.jsxs)(p.A,{as:"h2",className:(0,o.A)("text--truncate",g.cardTitle),title:r,children:[n," ",r]}),s&&(0,x.jsx)("p",{className:(0,o.A)("text--truncate",g.cardDescription),title:s,children:s})]})}function b(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=f();return t=>e(t,(0,h.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,x.jsx)(C,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function w(e){let{item:t}=e;const n=(0,m.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,x.jsx)(C,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function k(e){let{item:t}=e;switch(t.type){case"link":return(0,x.jsx)(w,{item:t});case"category":return(0,x.jsx)(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,s.$S)();return(0,x.jsx)(N,{items:n.items,className:t})}function N(e){const{items:t,className:n}=e;if(!t)return(0,x.jsx)(y,{...e});const r=(0,s.d1)(t);return(0,x.jsx)("section",{className:(0,o.A)("row",n),children:r.map(((e,t)=>(0,x.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,x.jsx)(k,{item:e})},t)))})}function v(e){return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(N,{...e})})}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>i});var r=n(96540);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);