"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?a.createElement(k,p(p({ref:t},s),{},{components:r})):a.createElement(k,p({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},47634:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"Tokens - Wechaty Puppet Services",sidebar_label:"Tokens"},p=void 0,i={unversionedId:"puppet-services/tokens",id:"puppet-services/tokens",title:"Tokens - Wechaty Puppet Services",description:"What is Wechaty Puppet Service Token?",source:"@site/docs/puppet-services/tokens.md",sourceDirName:"puppet-services",slug:"/puppet-services/tokens",permalink:"/docs/puppet-services/tokens",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/puppet-services/tokens.md",tags:[],version:"current",lastUpdatedBy:"NickWang",lastUpdatedAt:1672111665,formattedLastUpdatedAt:"Dec 27, 2022",frontMatter:{title:"Tokens - Wechaty Puppet Services",sidebar_label:"Tokens"},sidebar:"docs",previous:{title:"Donut",permalink:"/docs/puppet-services/donut"},next:{title:"Compatibility",permalink:"/docs/puppet-services/compatibility"}},l={},c=[{value:"What is Wechaty Puppet Service Token?",id:"what-is-wechaty-puppet-service-token",level:2},{value:"Examples",id:"examples",level:2},{value:"Get A Token",id:"get-a-token",level:2},{value:"1. Free TOKEN (Short-term)",id:"1-free-token-short-term",level:3},{value:"2. Free TOKEN (Long-term)",id:"2-free-token-long-term",level:3},{value:"3. Paid TOKEN",id:"3-paid-token",level:3},{value:"Wechaty Puppet Services",id:"wechaty-puppet-services",level:2},{value:"Usage",id:"usage",level:2},{value:"Learn More",id:"learn-more",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(u,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-wechaty-puppet-service-token"},"What is Wechaty Puppet Service Token?"),(0,n.kt)("p",null,"TOKEN is a unique string for authorizing Wechaty Puppet Service."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"WorkPro TOKEN")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"puppet_workpro_7ce4cf8a1ab789166c39c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"PadLocal TOKEN")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"puppet_padlocal_7ce48a1ab789166c39c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Paimon TOKEN")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"puppet_paimon_7ce4cf8a1ab789166c39c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Donut TOKEN")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"puppet_donut_e7ce4cf8a1ab789166c39c6")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"UUIDv4 TOKEN")," : ",(0,n.kt)("inlineCode",{parentName:"li"},"56945fa4-7ce8-4cf8-a1a9-b789166c39c6"))),(0,n.kt)("p",null,"When you are using a Wechaty Puppet Service, you need to provide TOKEN to it so that it can serve you correctly."),(0,n.kt)("h2",{id:"get-a-token"},"Get A Token"),(0,n.kt)("p",null,"There are three ways we provide tokens:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Free Short Term Token")," : You can get a short-term free TOKEN for testing."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Free Long Term Token")," : To get a long-term free TOKEN, join our ",(0,n.kt)("a",{parentName:"li",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Paid Long Term Token")," :  buy a TOKEN from our Wechaty Puppet Service Providers.")),(0,n.kt)("p",null,"If you have any questions about the Wechaty Puppet Service, please feel free to talk to us by ",(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"joining our Gitter")," network if you aren\u2019t already a member."),(0,n.kt)("h3",{id:"1-free-token-short-term"},"1. Free TOKEN (Short-term)"),(0,n.kt)("p",null,"Short-term TOKEN\uff087 days\uff09 is for those developers who want to test Wechaty Puppet Service to make sure the service can meet their needs."),(0,n.kt)("p",null,"TODO: list a easy to follow steps how to apply free token"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Paimon: Register ",(0,n.kt)("a",{parentName:"li",href:"http://120.55.60.194/"},"here")),(0,n.kt)("li",{parentName:"ul"},"WorkPro: contact ",(0,n.kt)("a",{target:"_blank",href:r(25720).Z},"here")),(0,n.kt)("li",{parentName:"ul"},"wxwork/donut: deprecated and no further service available."),(0,n.kt)("li",{parentName:"ul"},"Padlocal: ",(0,n.kt)("a",{parentName:"li",href:"http://pad-local.com/"},"\ud83d\udc49\ud83c\udffb Get Free PadLocal Token \ud83d\udc48\ud83c\udffb"))),(0,n.kt)("h3",{id:"2-free-token-long-term"},"2. Free TOKEN (Long-term)"),(0,n.kt)("p",null,"Long-term TOKEN is for those developers who have joined our ",(0,n.kt)("a",{parentName:"p",href:"/docs/contributor-program/"},"Wechaty Contributor Program"),"."),(0,n.kt)("p",null,"Anyone who has a merged PR to our GitHub repos will be welcome to join."),(0,n.kt)("p",null,"TODO: give a short intro for steps to join the WCP."),(0,n.kt)("h3",{id:"3-paid-token"},"3. Paid TOKEN"),(0,n.kt)("p",null,"Paid TOKEN is the easiest one to getting started with the Wechaty Puppet Service."),(0,n.kt)("p",null,"Select a Wechaty Puppet Service from the list below and follow the steps in its page, then contact the Puppet Service Provider to buy one."),(0,n.kt)("p",null,"If you want to buy more than 10 at a time, or you need consulting services, please contact us in Gitter room at ",(0,n.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"https://gitter.im/wechaty/wechaty"),"."),(0,n.kt)("h2",{id:"wechaty-puppet-services"},"Wechaty Puppet Services"),(0,n.kt)("p",null,"Now, we have the following Wechaty Puppet Services:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Platform"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Life Cycle"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-services/workpro"},"WorkPro")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeCom"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-services/wxwork"},"WXWork")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeCom"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Deprecated")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-services/paimon"},"Paimon")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-services/padlocal"},"PadLocal")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Pad"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"/docs/puppet-services/donut"},"Donut")),(0,n.kt)("td",{parentName:"tr",align:"center"},"WeChat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Windows"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Deprecated")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you are interested in using a Wechaty Puppet Provider directly in your program instead of a Puppet Service, please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet/wiki/Directory"},"Wechaty Puppet Directory"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"The following shell commands demonstrated how to use it under Linux/macOS:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"export WECHATY_PUPPET_SERVICE_TOKEN=__TOKEN__\nbot.ts\nmake bot\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("inlineCode",{parentName:"p"},"__TOKEN__")," is your TOKEN.")),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"Learn more about all the Wechaty Puppet Services at our ",(0,n.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/puppet-services/"},"official website")))}m.isMDXComponent=!0},25720:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/files/workpro-doc-qrcode-45e1720a5cf2846d7e8a930f2ceda310.webp"}}]);