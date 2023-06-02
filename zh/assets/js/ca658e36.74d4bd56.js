"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[1983,6590,8594],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3901:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(93743);const i={tableOfContentsInline:"tableOfContentsInline_prmo"};function o(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:o}=e;return r.createElement("div",{className:i.tableOfContentsInline},r.createElement(a.Z,{toc:t,minHeadingLevel:n,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},93743:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(87462),a=n(67294),i=n(86668);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const r=n.slice(2,e.level);e.parentIndex=Math.max(...r),n[e.level]=t}));const r=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):r.push(a)})),r}function c(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return t.flatMap((e=>{const t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:r});return function(e){return e.level>=n&&e.level<=r}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const r=e.find((e=>s(e).top>=n));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function d(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function p(e){const t=(0,a.useRef)(void 0),n=d();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:o}=e;function c(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),c=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const r=[];for(let a=t;a<=n;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:o}),s=l(c,{anchorTopOffset:n.current}),d=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",c),document.addEventListener("resize",c),c(),()=>{document.removeEventListener("scroll",c),document.removeEventListener("resize",c)}}),[e,n])}function u(e){let{toc:t,className:n,linkClassName:r,isChild:i}=e;return t.length?a.createElement("ul",{className:i?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(u,{isChild:!0,toc:e.children,className:n,linkClassName:r}))))):null}const m=a.memo(u);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:d,maxHeadingLevel:u,...f}=e;const h=(0,i.L)(),v=d??h.tableOfContents.minHeadingLevel,y=u??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:r})),[t,n,r])}({toc:t,minHeadingLevel:v,maxHeadingLevel:y});return p((0,a.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:v,maxHeadingLevel:y}}),[s,l,v,y])),a.createElement(m,(0,r.Z)({toc:g,className:n,linkClassName:s},f))}},10750:(e,t,n)=>{n.r(t),n.d(t,{Toc:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(3901);const o={slug:"/api/",title:"Wechaty API",sidebar_label:"API: Overview"},c=void 0,s={unversionedId:"api/overview",id:"api/overview",title:"Wechaty API",description:"Wechaty API",source:"@site/docs/api/overview.mdx",sourceDirName:"api",slug:"/api/",permalink:"/zh/docs/api/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/api/overview.mdx",tags:[],version:"current",lastUpdatedBy:"\u5f20\u5c0f\u5929",lastUpdatedAt:1638205026,formattedLastUpdatedAt:"2021\u5e7411\u670829\u65e5",frontMatter:{slug:"/api/",title:"Wechaty API",sidebar_label:"API: Overview"},sidebar:"docs",previous:{title:"Overview",permalink:"/zh/docs/references/"},next:{title:"Wechaty",permalink:"/zh/docs/api/wechaty"}},l={},d=[{value:"Wechaty API",id:"wechaty-api",level:2},{value:"Importing the Wechaty API",id:"importing-the-wechaty-api",level:2},{value:"ES6/TypeScript",id:"es6typescript",level:2}],p=()=>(0,a.kt)(i.Z,{toc:d,mdxType:"TOCInline"}),u={toc:d,Toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"wechaty-api"},"Wechaty API"),(0,a.kt)("p",null,"API- Application programming interface is a software interface that offers services to other software services. Wechaty API is a very tiny and easy to import API that allows users to use all the functionalities of Wechaty to its best. The API offers a variety of user classes, typedefs, functions, methods, and many more features. This section is an overview of the Wechaty API."),(0,a.kt)("h2",{id:"importing-the-wechaty-api"},"Importing the Wechaty API"),(0,a.kt)("p",null,"You can import the Wechaty API as shown below:"),(0,a.kt)("h2",{id:"es6typescript"},"ES6/TypeScript"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { WechatyBuilder } from 'wechaty'\n")))}f.isMDXComponent=!0},26956:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));n(10750),n(50230);const i={slug:"/references/",title:"Wechaty References Overview",sidebar_label:"Overview"},o=void 0,c={unversionedId:"references/overview",id:"references/overview",title:"Wechaty References Overview",description:"The reference guide contains the technical description of the machinery. They are code determined and information oriented. The references guides contain clear descriptions of Classes, API, Functions, Methods, Attributes, and many more technical aspects of the software. The Wechaty references aim to guide the end-users completely about Wechaty.",source:"@site/docs/references/overview.mdx",sourceDirName:"references",slug:"/references/",permalink:"/zh/docs/references/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/references/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Shraddha",lastUpdatedAt:1632471865,formattedLastUpdatedAt:"2021\u5e749\u670824\u65e5",frontMatter:{slug:"/references/",title:"Wechaty References Overview",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Deploy with Docker",permalink:"/zh/docs/howto/docker"},next:{title:"API: Overview",permalink:"/zh/docs/api/"}},s={},l=[{value:"References Index",id:"references-index",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The reference guide contains the technical description of the machinery. They are code determined and information oriented. The references guides contain clear descriptions of Classes, API, Functions, Methods, Attributes, and many more technical aspects of the software. The Wechaty references aim to guide the end-users completely about Wechaty."),(0,a.kt)("h2",{id:"references-index"},"References Index"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/api/"},"API References")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/polyglot/"},"Polyglot")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/puppet-providers/"},"Puppet Providers")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/puppet-services/"},"Puppet Services")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/specs/"},"Specifications"))))}u.isMDXComponent=!0},50230:(e,t,n)=>{n.r(t),n.d(t,{Toc:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(3901);const o={slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},c=void 0,s={unversionedId:"specs/overview",id:"specs/overview",title:"Wechaty specs overview",description:"Wechaty community need clear specifications for a healthy ecosystem.",source:"@site/docs/specs/overview.mdx",sourceDirName:"specs",slug:"/specs/",permalink:"/zh/docs/specs/",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/specs/overview.mdx",tags:[],version:"current",lastUpdatedBy:"Huan LI (\u674e\u5353\u6853)",lastUpdatedAt:1616596436,formattedLastUpdatedAt:"2021\u5e743\u670824\u65e5",frontMatter:{slug:"/specs/",title:"Wechaty specs overview",sidebar_label:"Specs: Overview"},sidebar:"docs",previous:{title:"Puppet Services: FAQ",permalink:"/zh/docs/puppet-services/faq"},next:{title:"Wechaty",permalink:"/zh/docs/specs/wechaty"}},l={},d=[{value:"Table of Content",id:"table-of-content",level:2}],p=()=>(0,a.kt)(i.Z,{toc:d,mdxType:"TOCInline"}),u={toc:d,Toc:p},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wechaty community need clear specifications for a healthy ecosystem."),(0,a.kt)("p",null,"All Wechaty community projects should follow Wechaty Specifications."),(0,a.kt)("h2",{id:"table-of-content"},"Table of Content"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/specs/wechaty"},"Polygram Wechaty"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Polygram Wechaty"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/specs/puppet"},"Wechaty Puppet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Puppet Abstract, Puppet Providers"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/specs/service"},"Wechaty Puppet Service"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wechaty Puppet Service"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/specs/token"},"Wechaty Puppet Service Token"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Wechaty Puppet Service Token")))))}f.isMDXComponent=!0}}]);