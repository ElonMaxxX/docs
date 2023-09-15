"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[90454],{8773:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});n(67294);var o=n(85893),a=n(11151);const s={title:"1. First Steps"},c=void 0,i={unversionedId:"cadence/tutorial/first-steps",id:"cadence/tutorial/first-steps",title:"1. First Steps",description:"In this tutorial, we will learn how to use smart contracts, switch accounts, and view account state.",source:"@site/docs/cadence/tutorial/01-first-steps.mdx",sourceDirName:"cadence/tutorial",slug:"/cadence/tutorial/first-steps",permalink:"/docs/next/cadence/tutorial/first-steps",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/tutorial/01-first-steps.mdx",tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:1,frontMatter:{title:"1. First Steps"},sidebar:"cadence",previous:{title:"Why Use Cadence?",permalink:"/docs/next/cadence/why"},next:{title:"2. Hello World",permalink:"/docs/next/cadence/tutorial/hello-world"}},r={},l=[{value:"What is Cadence?",id:"what-is-cadence",level:2},{value:"What is the Flow Developer Playground?",id:"what-is-the-flow-developer-playground",level:2},{value:"Getting to know the Playground",id:"getting-to-know-the-playground",level:2},{value:"Accounts and Contracts",id:"accounts-and-contracts",level:2},{value:"Resources",id:"resources",level:2},{value:"Say Hello, World!",id:"say-hello-world",level:2}];function d(e){const t=Object.assign({p:"p",h2:"h2",hr:"hr",ul:"ul",li:"li",a:"a",img:"img"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this tutorial, we will learn how to use smart contracts, switch accounts, and view account state."}),"\n",(0,o.jsx)(t.h2,{id:"what-is-cadence",children:"What is Cadence?"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:"Cadence is a new smart contract programming language for use on the Flow Blockchain.\nCadence introduces new features to smart contract programming that help developers ensure that their code is safe, secure, clear, and approachable. Some of these features are:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Type safety and a strong static type system"}),"\n",(0,o.jsx)(t.li,{children:"Resource-oriented programming, a new paradigm that pairs linear types with object capabilities to create a secure and declarative model for digital ownership\nby ensuring that resources (and their associated assets) can only exist in one location at a time, cannot be copied, and cannot be accidentally lost or deleted"}),"\n",(0,o.jsxs)(t.li,{children:["Built-in pre-conditions and post-conditions for functions and ",(0,o.jsx)(t.a,{href:"../language/transactions",children:"transactions"})]}),"\n",(0,o.jsx)(t.li,{children:"The utilization of capability-based security, which enforces access control by requiring that access to objects\nis restricted to only the owner and those who have a valid reference to the object"}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Please see the ",(0,o.jsx)(t.a,{href:"/docs/next/cadence/intro",children:"Cadence introduction"})," for more information about the high level design of the language."]}),"\n",(0,o.jsx)(t.h2,{id:"what-is-the-flow-developer-playground",children:"What is the Flow Developer Playground?"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://play.onflow.org",children:"Flow Playground"})," includes\nan in-browser editor and emulator to experiment with Flow.\nUsing the Flow Playground, you can write Cadence smart contracts,\ndeploy them to a local Flow emulated blockchain, and submit transactions."]}),"\n",(0,o.jsx)(t.p,{children:"The Flow Playground should be compatible with any standard web browser,\nbut we recommend that you use Google Chrome with it,\nbecause it has been tested and optimized for only the Chrome browser so far."}),"\n",(0,o.jsx)(t.h2,{id:"getting-to-know-the-playground",children:"Getting to know the Playground"}),"\n",(0,o.jsx)(t.p,{children:"The Playground contains everything you need to get familiar\nwith deploying Cadence smart contracts and interacting with transaction and scripts."}),"\n",(0,o.jsx)(t.p,{children:'The Playground comes pre-loaded with contract and transaction templates\nthat correspond to each of the tutorials in the docs site.\nTo load the contracts from a specific tutorial, click the "Examples" link at the top of the Playground.\nThis opens up a menu with each tutorial.'}),"\n",(0,o.jsx)(t.p,{children:"When you click on one of these links, the tutorial will open in a new tab\nand the contracts, transactions, and scripts will be loaded into the templates in the Playground for you to use."}),"\n",(0,o.jsx)(t.h2,{id:"accounts-and-contracts",children:"Accounts and Contracts"}),"\n",(0,o.jsx)(t.p,{children:"The Accounts section on the bottom left part of the screen is where the active accounts are listed and selected.\nAn account can have multiple smart contracts deployed to it, which will be covered later.\nYou can click on an account tab to view the contracts that are associated with that account in the main editor."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(98796).Z+"",loading:"lazy",alt:"Playground Intro",width:"1909",height:"1094"})}),"\n",(0,o.jsx)(t.p,{children:"When you have Cadence code open in the account editor that contains a contract,\nyou can click the deploy button in the bottom-right of the screen\nto deploy that contract to the currently selected account."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:n(43705).Z+"",loading:"lazy",alt:"Deploy Contract",width:"1909",height:"1094"})}),"\n",(0,o.jsx)(t.p,{children:'After a few seconds, the contract should deploy. In the accounts section, you should\nnow see the name of the contract next to the selected account that you deployed too\nand if you click on "Log" in the bottom section of the screen, you should\nsee a message in the console confirming that the contract was deployed and which account it was deployed to.'}),"\n",(0,o.jsx)(t.p,{children:"You can also select transactions and scripts from the left selection menu\nand submit them to interact with your deployed smart contracts,\nwhich will be covered in the Hello World tutorial."}),"\n",(0,o.jsx)(t.p,{children:"This is just a small set of the things you can do with the Playground.\nIf you would like a more detailed explanation of the different Playground features, look at the Playground Manual."}),"\n",(0,o.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,o.jsx)(t.p,{children:"Each tutorial in this package uses several files containing transactions, contracts, and scripts.\nAll the code you need will be provided in the text of the tutorials for you to copy and paste,\nor you can use the pre-generated tutorial setups in the Playground."}),"\n",(0,o.jsx)(t.h2,{id:"say-hello-world",children:"Say Hello, World!"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you have the Flow Developer Playground running,\nyou can ",(0,o.jsx)(t.a,{href:"/docs/next/cadence/tutorial/hello-world",children:"create a smart contract"})," for Flow!"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},43705:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/deploybox-23f3152e93e6cd42c99adec556cebd6c.png"},98796:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/playground-intro-514e99da776669e9dbe1f4375dad280a.png"}}]);