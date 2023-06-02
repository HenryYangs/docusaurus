"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,p(p({ref:t},l),{},{components:n})):r.createElement(h,p({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"Writing tests"},p=void 0,c={unversionedId:"howto/degraded/degraded-testing",id:"howto/degraded/degraded-testing",title:"Writing tests",description:"NPM Version",source:"@site/docs/howto/degraded/degraded-testing.md",sourceDirName:"howto/degraded",slug:"/howto/degraded/degraded-testing",permalink:"/docs/howto/degraded/degraded-testing",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/howto/degraded/degraded-testing.md",tags:[],version:"current",lastUpdatedBy:"Abhishek Jaiswal",lastUpdatedAt:1634707553,formattedLastUpdatedAt:"Oct 20, 2021",frontMatter:{title:"Writing tests"}},i={},s=[{value:"USAGE",id:"usage",level:2},{value:"Puppet Mock",id:"puppet-mock",level:3},{value:"Mocker &amp; Environment",id:"mocker--environment",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Mocker",id:"mocker",level:3},{value:"HELPER UTILITIES",id:"helper-utilities",level:2},{value:"StateSwitch",id:"stateswitch",level:3}],l={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://badge.fury.io/js/wechaty-puppet-mock"},(0,a.kt)("img",{parentName:"a",src:"https://badge.fury.io/js/wechaty-puppet-mock.svg",alt:"NPM Version"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg",alt:"npm (tag)"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-mock/actions?query=workflow%3ANPM"},(0,a.kt)("img",{parentName:"a",src:"https://github.com/wechaty/wechaty-puppet-mock/workflows/NPM/badge.svg",alt:"NPM"}))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://wechaty.github.io/wechaty-puppet-mock/images/mock.png",alt:"chatie puppet"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Picture Credit: ",(0,a.kt)("a",{parentName:"p",href:"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"},"https://softwareautotools.com/2017/03/01/mocking-explained-in-python/"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Powered%20By-Wechaty-brightgreen.svg",alt:"Powered by Wechaty"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%3C%2F%3E-TypeScript-blue.svg",alt:"TypeScript"}))),(0,a.kt)("p",null,"Puppet Mocker & Starter Template for Wechaty, it is very useful when you:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Want to test the Wechaty framework with a mock puppet, or"),(0,a.kt)("li",{parentName:"ol"},"You want to write your own Puppet implenmentation.")),(0,a.kt)("p",null,"Then ",(0,a.kt)("inlineCode",{parentName:"p"},"PuppetMock")," will helps you a lot."),(0,a.kt)("h2",{id:"usage"},"USAGE"),(0,a.kt)("h3",{id:"puppet-mock"},"Puppet Mock"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }   from 'wechaty'\nimport { PuppetMock } from 'wechaty-puppet-mock'\n\nconst puppet  = new PuppetMock()\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n")),(0,a.kt)("h3",{id:"mocker--environment"},"Mocker & Environment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  PuppetMock,\n  Mocker,\n  SimpleEnvironment,\n}                     from 'wechaty-puppet-mock'\n\nconst mocker = new Mocker()\nmocker.use(SimpleEnvironment())\n\nconst puppet = new PuppetMock({ mocker })\nconst wechaty = new Wechaty({ puppet })\n\nwechaty.start()\n\n// The Mocker will start perform the SimpleEnvironment...\n")),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"mocker"},"Mocker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Wechaty }  from 'wechaty'\nimport { PuppetMock, mock }   from 'wechaty-puppet-mock'\n\nconst mocker = new mock.Mocker()\nconst puppet = new PuppetMock({ mocker })\nconst bot = new Wechaty({ puppet })\n\nawait bot.start()\n\nmocker.scan('https://github.com/wechaty', 1)\n\nconst user = mocker.createContact()\nmocker.login(user)\n\nconst contact = mocker.createContact()\nconst room = mocker.createRoom()\n\nuser.say('Hello').to(contact)\ncontact.say('World').to(user)\n")),(0,a.kt)("h2",{id:"helper-utilities"},"HELPER UTILITIES"),(0,a.kt)("h3",{id:"stateswitch"},"StateSwitch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"this.state.on('pending')\nthis.state.on(true)\nthis.state.off('pending')\nthis.state.off(true)\n\nawait this.state.ready('on')\nawait this.state.ready('off')\n")))}m.isMDXComponent=!0}}]);