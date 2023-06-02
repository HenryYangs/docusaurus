"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[7396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=o,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||i;return n?a.createElement(d,r(r({ref:t},c),{},{components:n})):a.createElement(d,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Working with git"},r=void 0,s={unversionedId:"contributing/git",id:"contributing/git",title:"Working with git",description:"This section explains how the community can contribute code to Wechaty via pull",source:"@site/docs/contributing/git.md",sourceDirName:"contributing",slug:"/contributing/git",permalink:"/zh/docs/contributing/git",draft:!1,editUrl:"https://github.com/wechaty/docusaurus/edit/main/docusaurus/docs/contributing/git.md",tags:[],version:"current",lastUpdatedBy:"Rajiv Singh",lastUpdatedAt:1631987027,formattedLastUpdatedAt:"2021\u5e749\u670818\u65e5",frontMatter:{title:"Working with git"},sidebar:"docs",previous:{title:"Getting Help",permalink:"/zh/docs/contributing/getting-help"},next:{title:"File issues",permalink:"/zh/docs/contributing/issues"}},l={},u=[{value:"Installing Git",id:"installing-git",level:2},{value:"Setting up local repository",id:"setting-up-local-repository",level:2},{value:"Working on an issue",id:"working-on-an-issue",level:2},{value:"Publishing work",id:"publishing-work",level:2},{value:"Rebasing branches",id:"rebasing-branches",level:2},{value:"After upstream has changed",id:"after-upstream-has-changed",level:2},{value:"After review",id:"after-review",level:2},{value:"Working on a patch",id:"working-on-a-patch",level:2},{value:"Summary",id:"summary",level:2},{value:"Special Thanks",id:"special-thanks",level:2}],c={toc:u},h="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains how the community can contribute code to Wechaty via pull\nrequests. If you're interested in how committers handle them, see\n",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/contributing/pulls"},"committing code"),"."),(0,o.kt)("p",null,"Below, we are going to show how to create a GitHub pull request containing the\nchanges for issue #xxxxx. By creating a fully-ready pull request, you\nwill make the reviewer's job easier, meaning that your work is more likely to\nbe merged into Wechaty."),(0,o.kt)("h2",{id:"installing-git"},"Installing Git"),(0,o.kt)("p",null,"Wechaty uses ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/"},"Git")," for its source control.\nYou can ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/download"},"download")," Git,\nbut it's often easier to install with\nyour operating system's package manager."),(0,o.kt)("p",null,"Wechaty's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/"},"Git repository")," is hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),",\nand it is recommended that you also work using GitHub."),(0,o.kt)("p",null,"After installing Git, the first thing you should do is setup your name and\nemail:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git config --global user.name "Your Real Name"\ngit config --global user.email "you@email.com"\n')),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"user.name")," should be your real name, not your GitHub nick. GitHub\nshould know the email you use in the ",(0,o.kt)("inlineCode",{parentName:"p"},"user.email")," field, as this will be\nused to associate your commits with your GitHub account."),(0,o.kt)("h2",{id:"setting-up-local-repository"},"Setting up local repository"),(0,o.kt)("p",null,'When you have created your GitHub account, with the nick "GitHub_nick", and\n',(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/fork"},"forked Wechaty's repository"),",\ncreate a local copy of your fork:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/GitHub_nick/wechaty.git\n")),(0,o.kt)("p",null,'This will create a new directory "wechaty", containing a clone of your GitHub\nrepository. The rest of the git commands on this page need to be run within the\ncloned directory, so switch to it now:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd wechaty\n")),(0,o.kt)("p",null,'Your GitHub repository will be called "origin" in Git.'),(0,o.kt)("p",null,"You should also setup ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty"),' as an "upstream" remote (that is, tell\ngit that the reference Wechaty repository was the source of your fork of it):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add upstream git@github.com:wechaty/wechaty.git\ngit fetch upstream\n")),(0,o.kt)("p",null,"You can add other remotes similarly, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote add huan git@github.com:huan/wechaty.git\n")),(0,o.kt)("h2",{id:"working-on-an-issue"},"Working on an issue"),(0,o.kt)("p",null,"When working on an issue, create a new branch for the work, and base that work\non ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream/main"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b ticket_xxxxx upstream/main\n")),(0,o.kt)("p",null,"The -b flag creates a new branch for you locally. Don't hesitate to create new\nbranches even for the smallest things - that's what they are there for."),(0,o.kt)("p",null,"If instead you were working for a fix on the 1.4 branch, you would do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b ticket_xxxxx_1_4 upstream/stable/1.4.x\n")),(0,o.kt)("p",null,"Assume the work is carried on the ticket_xxxxx branch. Make some changes and\ncommit them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git commit\n")),(0,o.kt)("p",null,"When writing the commit message, follow the ","[commit message\nguidelines][committing-guidelines.md]"," to ease the work of the committer. If\nyou're uncomfortable with English, try at least to describe precisely what the\ncommit does."),(0,o.kt)("p",null,"If you need to do additional work on your branch, commit as often as\nnecessary:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git commit -m 'Added two more tests for edge cases'\n")),(0,o.kt)("h2",{id:"publishing-work"},"Publishing work"),(0,o.kt)("p",null,"You can publish your work on GitHub by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin ticket_xxxxx\n")),(0,o.kt)("p",null,"When you go to your GitHub page, you will notice a new branch has been created."),(0,o.kt)("p",null,"If you are working on an GitHub issue, you should mention in the issue that\nyour work is available from branch ticket_xxxxx of your GitHub repo. Include a\nlink to your branch."),(0,o.kt)("p",null,'Note that the above branch is called a "topic branch" in Git parlance. You are\nfree to rewrite the history of this branch, by using ',(0,o.kt)("inlineCode",{parentName:"p"},"git rebase")," for\nexample. Other people shouldn't base their work on such a branch, because\ntheir clone would become corrupt when you edit commits."),(0,o.kt)("p",null,'There are also "public branches". These are branches other people are supposed\nto fork, so the history of these branches should never change. Good examples\nof public branches are the ',(0,o.kt)("inlineCode",{parentName:"p"},"main")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"stable/A.B.x")," branches in the\n",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty")," repository."),(0,o.kt)("p",null,"When you think your work is ready to be pulled into Wechaty, you should create\na pull request at GitHub. A good pull request means:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"commits with one logical change in each,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"well-formed messages for each commit: a summary line and then paragraphs\nwrapped at 72 characters thereafter,")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"documentation and tests, if needed -- actually tests are always needed,\nexcept for documentation changes."))),(0,o.kt)("p",null,"The test suite must pass and the documentation must build without warnings."),(0,o.kt)("p",null,'Once you have created your pull request, you should add a comment in the\nrelated GitHub issue explaining what you\'ve done. In particular, you should note\nthe environment in which you ran the tests, for instance: "all tests pass\nunder wechaty-puppet-mock".'),(0,o.kt)("p",null,"Pull requests at GitHub have only two states: open and closed. The committer\nwho will deal with your pull request has only two options: merge it or close\nit. For this reason, it isn't useful to make a pull request until the code is\nready for merging -- or sufficiently close that a committer will finish it\nthemselves."),(0,o.kt)("h2",{id:"rebasing-branches"},"Rebasing branches"),(0,o.kt)("p",null,'In the example above, you created two commits, the "Fixed ticket_xxxxx" commit\nand "Added two more tests" commit.'),(0,o.kt)("p",null,'We do not want to have the entire history of your working process in your\nrepository. Your commit "Added two more tests" would be unhelpful noise.\nInstead, we would rather only have one commit containing all your work.'),(0,o.kt)("p",null,"To rework the history of your branch you can squash the commits into one by\nusing interactive rebase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase -i HEAD~2\n")),(0,o.kt)("p",null,'The HEAD~2 above is shorthand for two latest commits. The above command\nwill open an editor showing the two commits, prefixed with the word "pick".'),(0,o.kt)("p",null,'Change "pick" on the second line to "squash" instead. This will keep the\nfirst commit, and squash the second commit into the first one. Save and quit\nthe editor. A second editor window should open, so you can reword the\ncommit message for the commit now that it includes both your steps.'),(0,o.kt)("p",null,'You can also use the "edit" option in rebase. This way you can change a single\ncommit, for example to fix a typo in a docstring:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'git rebase -i HEAD~3\n# Choose edit, pick, pick for the commits\n# Now you are able to rework the commit (use git add normally to add changes)\n# When finished, commit work with "--amend" and continue\ngit commit --amend\n# Reword the commit message if needed\ngit rebase --continue\n# The second and third commits should be applied.\n')),(0,o.kt)("p",null,"If your topic branch is already published at GitHub, for example if you're\nmaking minor changes to take into account a review, you will need to force-push\nthe changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git push -f origin ticket_xxxxx\n")),(0,o.kt)("p",null,"Note that this will rewrite history of ticket_xxxxx - if you check the commit\nhashes before and after the operation at GitHub you will notice that the commit\nhashes do not match anymore. This is acceptable, as the branch is a topic\nbranch, and nobody should be basing their work on it."),(0,o.kt)("h2",{id:"after-upstream-has-changed"},"After upstream has changed"),(0,o.kt)("p",null,"When upstream (",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty/wechaty"),") has changed, you should rebase your work. To\ndo this, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch upstream\ngit rebase\n")),(0,o.kt)("p",null,"The work is automatically rebased using the branch you forked on, in the\nexample case using ",(0,o.kt)("inlineCode",{parentName:"p"},"upstream/main"),"."),(0,o.kt)("p",null,"The rebase command removes all your local commits temporarily, applies the\nupstream commits, and then applies your local commits again on the work."),(0,o.kt)("p",null,"If there are merge conflicts, you will need to resolve them and then use\n",(0,o.kt)("inlineCode",{parentName:"p"},"git rebase --continue"),". At any point you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"git rebase --abort"),"\nto return to the original state."),(0,o.kt)("p",null,"Note that you want to ",(0,o.kt)("em",{parentName:"p"},"rebase")," on upstream, not ",(0,o.kt)("em",{parentName:"p"},"merge")," the upstream."),(0,o.kt)("p",null,"The reason for this is that by rebasing, your commits will always be ",(0,o.kt)("em",{parentName:"p"},"on\ntop of")," the upstream's work, not ",(0,o.kt)("em",{parentName:"p"},"mixed in with")," the changes in the upstream.\nThis way your branch will contain only commits related to its topic, which\nmakes squashing easier."),(0,o.kt)("h2",{id:"after-review"},"After review"),(0,o.kt)("p",null,"It is unusual to get any non-trivial amount of code into core without changes\nrequested by reviewers. In this case, it is often a good idea to add the\nchanges as one incremental commit to your work. This allows the reviewer to\neasily check what changes you have done."),(0,o.kt)("p",null,"In this case, do the changes required by the reviewer. Commit as often as\nnecessary. Before publishing the changes, rebase your work. If you added two\ncommits, you would run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git rebase -i HEAD~2\n")),(0,o.kt)("p",null,"Squash the second commit into the first. Write a commit message along the lines\nof:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Made changes asked in review by <reviewer>\n\n- Fixed whitespace errors in foobar\n- Reworded the docstring of bar()\n")),(0,o.kt)("p",null,"Finally, push your work back to your GitHub repository. Since you didn't touch\nthe public commits during the rebase, you should not need to force-push:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git push origin ticket_xxxxx\n")),(0,o.kt)("p",null,"Your pull request should now contain the new commit too."),(0,o.kt)("p",null,"Note that the committer is likely to squash the review commit into the previous\ncommit when committing the code."),(0,o.kt)("h2",{id:"working-on-a-patch"},"Working on a patch"),(0,o.kt)("p",null,"One of the ways that developers can contribute to Wechaty is by reviewing\npatches. Those patches will typically exist as pull requests on GitHub and\ncan be easily integrated into your local repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout -b pull_xxxxx upstream/main\ncurl https://github.com/wechaty/wechaty/pull/xxxxx.patch | git am\n")),(0,o.kt)("p",null,"This will create a new branch and then apply the changes from the pull request\nto it. At this point you can run the tests or do anything else you need to\ndo to investigate the quality of the patch."),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Work on GitHub if you can."),(0,o.kt)("li",{parentName:"ul"},"Announce your work on the issue by linking to your GitHub pull request."),(0,o.kt)("li",{parentName:"ul"},"When you have something ready, make a pull request."),(0,o.kt)("li",{parentName:"ul"},"Make your pull requests as good as you can."),(0,o.kt)("li",{parentName:"ul"},"When doing fixes to your work, use ",(0,o.kt)("inlineCode",{parentName:"li"},"git rebase -i")," to squash the commits."),(0,o.kt)("li",{parentName:"ul"},"When upstream has changed, do ",(0,o.kt)("inlineCode",{parentName:"li"},"git fetch upstream; git rebase"),".")),(0,o.kt)("h2",{id:"special-thanks"},"Special Thanks"),(0,o.kt)("p",null,"I have to credit Django doc authors, because this documentation page is inspired by, and mostly copy/pasted from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/blob/main/docs/internals/contributing/writing-code/working-with-git.txt"},"Django contributing docs")))}p.isMDXComponent=!0}}]);