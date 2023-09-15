"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[87096],{64787:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});t(67294);var o=t(85893),s=t(11151);const r={title:"About Flow",sidebar_position:0},i="Introduction to Flow",a={unversionedId:"concepts/start-here",id:"concepts/start-here",title:"About Flow",description:"Flow is a fast, decentralized, and developer-friendly blockchain designed to be the foundation for a new generation of games, apps, and the digital assets that power them. It is based on a unique, multi-role architecture, and designed to scale without sharding, allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment.",source:"@site/docs/concepts/start-here.md",sourceDirName:"concepts",slug:"/concepts/start-here",permalink:"/docs/next/concepts/start-here",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/start-here.md",tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:0,frontMatter:{title:"About Flow",sidebar_position:0},sidebar:"concepts",next:{title:"Blocks",permalink:"/docs/next/concepts/blocks"}},c={},l=[{value:"What makes Flow unique",id:"what-makes-flow-unique",level:2},{value:"App Development",id:"app-development",level:2},{value:"Core Contracts",id:"core-contracts",level:2},{value:"FLOW Token",id:"flow-token",level:2},{value:"Technical Background",id:"technical-background",level:2},{value:"Tokenomics",id:"tokenomics",level:2},{value:"More Concepts",id:"more-concepts",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"introduction-to-flow",children:"Introduction to Flow"}),"\n",(0,o.jsxs)(n.p,{children:["Flow is a fast, decentralized, and developer-friendly blockchain designed to be the foundation for a new generation of games, apps, and the ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/post/flow-blockchain-cadence-programming-language-resources-assets",children:"digital assets"})," that power them. It is based on a unique, ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/primer",children:"multi-role architecture"}),", and designed to ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/post/flow-blockchain-multi-node-architecture-advantages",children:"scale without sharding"}),", allowing for massive improvements in speed and throughput while preserving a developer-friendly, ACID-compliant environment."]}),"\n",(0,o.jsx)(n.h2,{id:"what-makes-flow-unique",children:"What makes Flow unique"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Multi-role architecture:"})," Flow's node architecture allows the network to scale to serve billions of users without sharding or reducing the decentralization of consensus."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Resource-oriented programming:"})," Smart contracts on Flow are written in Cadence, an easier and safer programming language for crypto assets and apps."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Developer ergonomics:"})," This network is designed to maximize developer productivity. Examples range from upgradeable smart contracts and built-in logging support to the Flow Emulator."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Consumer onboarding:"})," Flow was designed for mainstream consumers, with payment onramps catalyzing a safe and low-friction path from fiat to crypto."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The following chapters summarize the content in this section. Read on more for details."}),"\n",(0,o.jsx)(n.h2,{id:"app-development",children:"App Development"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/next/tutorials/intro",children:"development guide"})," covers the Flow core concepts, including:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"App Client:"})," The app client is the interface through which users interact with your app. Web and mobile applications are typical examples of app clients."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Smart Contract:"})," A smart contract is a collection of code deployed to a permanent location on the blockchain that defines the core logic for a dApp."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"User Account:"})," A user account is a record on the blockchain that stores the digital assets owned by a single user."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transaction:"})," A transaction is a code submitted to the blockchain that mutates the state of one or more user accounts and smart contracts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"User Wallet:"})," A user wallet is software or hardware that controls access to a user's account on the blockchain."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"State Query:"})," A state query is a request made to the blockchain that returns information about the state of your dApp's smart contracts."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow Client Library (FCL):"})," The Flow Client Library is a framework that provides a standard interface to connect client applications and user wallets."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"core-contracts",children:"Core Contracts"}),"\n",(0,o.jsxs)(n.p,{children:["The Flow blockchain implements core functionality using its own smart contract language, Cadence. The core functionality is split into a set of contracts, so-called ",(0,o.jsx)(n.a,{href:"/docs/next/building-on-flow/core-contracts/",children:"core contracts"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Fungible Token:"})," The FungibleToken contract implements the Fungible Token Standard. It is the second contract ever deployed on Flow."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow Token:"})," The FlowToken contract defines the FLOW network token."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Flow Fees:"})," The FlowFees contract is where all the collected flow fees are gathered."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Service Account:"})," tracks transaction fees and deployment permissions and provides convenient methods for Flow Token operations."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Staking Table:"})," The FlowIDTableStaking contract is the central table that manages staked nodes, delegation, and rewards."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Epoch Contract:"})," The FlowEpoch contract is the state machine that manages Epoch phases and emits service events."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"flow-token",children:"FLOW Token"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"/docs/next/building-on-flow/core-contracts/flow-token",children:"FLOW"})," token is the native currency for the Flow network. Developers and users can use FLOW to transact on the network. Developers can integrate FLOW directly into their apps for peer-to-peer payments, service charges, or consumer rewards. FLOW can be held, transferred, or transacted peer-to-peer."]}),"\n",(0,o.jsx)(n.h2,{id:"technical-background",children:"Technical Background"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The Flow ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/primer",children:"Technical Primer"})," is a great place to start to understand how Flow works."]}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/technical-paper",children:"3 technical whitepapers"})," are covering the unique innovation behind the Flow blockchain network in-depth."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"tokenomics",children:"Tokenomics"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["To understand more about Flow's Token Economics, and the ",(0,o.jsx)(n.strong,{children:"FLOW token"}),", you can read the ",(0,o.jsx)(n.a,{href:"https://www.onflow.org/flow-token-economics",children:"Flow Token Economics"})," guide."]}),"\n",(0,o.jsxs)(n.li,{children:["FLOW tokens are Flow's native Fungible Token. To learn more about how to work with them in your applications, go ",(0,o.jsx)(n.a,{href:"/docs/next/building-on-flow/core-contracts/flow-token",children:"here"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"more-concepts",children:"More Concepts"}),"\n",(0,o.jsx)(n.p,{children:"If you're a developer, looking to get a better understanding of working with Flow in your applications,\nuse the \ud83d\udc48 left-hand navigation to explore the concepts pages."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}}}]);