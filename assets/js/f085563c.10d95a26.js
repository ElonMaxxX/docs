"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8991],{7314:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>h});t(67294);var o=t(85893),a=t(11151);const i={title:"Epochs, Staking & Delegating on Flow",sidebar_title:"Introduction",description:"Introduction to how staking works on Flow"},s=void 0,r={unversionedId:"concepts/nodes/staking/index",id:"concepts/nodes/staking/index",title:"Epochs, Staking & Delegating on Flow",description:"Introduction to how staking works on Flow",source:"@site/docs/concepts/nodes/staking/index.md",sourceDirName:"concepts/nodes/staking",slug:"/concepts/nodes/staking/",permalink:"/docs/concepts/nodes/staking/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/staking/index.md",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1684266146,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Epochs, Staking & Delegating on Flow",sidebar_title:"Introduction",description:"Introduction to how staking works on Flow"},sidebar:"tutorialSidebar",previous:{title:"Slashing Conditions",permalink:"/docs/concepts/nodes/slashing"},next:{title:"Custody Provider Staking Guides",permalink:"/docs/concepts/nodes/staking/custody-providers"}},d={},h=[{value:"What is Staking?",id:"what-is-staking",level:2},{value:"How Does Staking Work on Flow?",id:"how-does-staking-work-on-flow",level:2},{value:"Epochs",id:"epochs",level:2},{value:"Rewards",id:"rewards",level:2},{value:"Delegation",id:"delegation",level:2},{value:"How Do I Stake?",id:"how-do-i-stake",level:2},{value:"Staking using Flow Port",id:"staking-using-flow-port",level:3},{value:"Staking via a Custody Provider",id:"staking-via-a-custody-provider",level:3},{value:"Manual Staking or Building your own Staking Integration",id:"manual-staking-or-building-your-own-staking-integration",level:3}];function l(e){const n=Object.assign({p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",a:"a",h3:"h3"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"This document provides an introduction to staking FLOW tokens on the Flow network\nfor token holders and node operators.\nStaking is an important part of the security protocol of a proof-of-stake (PoS) blockchain.\nRunning nodes and staking tokens contributes to the blockchain's\nsecurity and is rewarded accordingly."}),"\n",(0,o.jsx)(n.h2,{id:"what-is-staking",children:"What is Staking?"}),"\n",(0,o.jsx)(n.p,{children:"Flow is a global network of computers working together\nto maintain the security and integrity of its users' data."}),"\n",(0,o.jsx)(n.p,{children:"This global network is made up of many individual nodes: software applications run by people.\nEvery node in the network shares a small part of the responsibility\nto keep the network running smoothly and to ensure that other nodes are doing the same.\nThis shared responsibility is a core premise of decentralization, because no single central\nnode is solely responsible for the security and integrity of the network and the data it contains."}),"\n",(0,o.jsx)(n.p,{children:"Node operators are what we call the people who run nodes.\nIn order to connect their software applications as nodes on the network,\na node operator must first purchase tokens. Every node operator has to temporarily give (or \u2018stake\u2019)\na large number of their tokens to the network as a promise that they will not modify their node\nto do something that is against the rules of the network, like steal funds from users' accounts.\nThis process of temporarily giving up tokens is called staking."}),"\n",(0,o.jsx)(n.p,{children:"If a node ever breaks the rules defined by the network,\na number of the node operator's staked tokens will be taken from them as a punishment.\nThis process is automatic. Every node knows the rules defined by the network\nand automatically watches other nodes and reports them if they misbehave.\nMeanwhile, the network pays the node operator a reward from a mixture of\ntransaction fees and newly minted tokens\non a regular basis provided their node does not break the rules."}),"\n",(0,o.jsx)(n.p,{children:"If a node operator breaks the rules, they lose the tokens they've staked.\nIf they operate their node with integrity, they get rewarded with more tokens!\nThis is the basic incentive that enables a decentralized proof-of-stake network, like Flow."}),"\n",(0,o.jsx)(n.h2,{id:"how-does-staking-work-on-flow",children:"How Does Staking Work on Flow?"}),"\n",(0,o.jsx)(n.p,{children:"The Flow protocol maintains a list of node operators.\nThe list contains important information about each node, like their public keys, node address,\nand what kind of node they are running.\n(Collection, Consensus, Execution, Verification, or Access)"}),"\n",(0,o.jsx)(n.p,{children:"A node operator registers a node by submitting a transaction containing\ntheir node information, a cryptographic proof that they control their node info,\nand the FLOW they wish to stake.\nIf they meet the requirements to run a node, then will be accepted to join the network!"}),"\n",(0,o.jsxs)(n.p,{children:["Once a node is staking and operating properly, it will receive periodic reward payments,\nassuming it stays online and actively participates in the protocol\nwithout committing any actions that would harm the network, which we call slashable offenses.\nOnce nodes have registered, they are required to operate for a protocol-specified timeframe.\nThis timeframe is otherwise known as an ",(0,o.jsx)(n.strong,{children:"Epoch."})]}),"\n",(0,o.jsx)(n.h2,{id:"epochs",children:"Epochs"}),"\n",(0,o.jsxs)(n.p,{children:["An ",(0,o.jsx)(n.strong,{children:"Epoch"})," is a roughly week-long period that the network uses\nto manage list of nodes and pay rewards."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Only a pre-determined set of nodes is authorized to participate in the protocol.\nThe set of authorized nodes is known to all network participants.\nThis set is referred to as the ",(0,o.jsx)(n.strong,{children:"Identity Table"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.strong,{children:"Epoch"})," is defined as a period of time, where the set of authorized nodes is constant\n(or can only shrink due to ejection of malicious nodes)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Every epoch, a list of committed nodes are chosen to be the staked nodes of the network.\nThis list is called the ",(0,o.jsx)(n.strong,{children:"Identity Table (ID Table)"}),".\nThe node's staked tokens are locked in and cannot change for the duration of the epoch.\nAt the end of the epoch, rewards are paid to each staked node based on how many tokens they had staked for that epoch\nand how well they performed during the epoch. Nodes can choose to join or leave, but changes to the Identity Table\ncan only happen at end of an epoch, which is also the beginning of a new epoch.\nThis process repeats itself indefinitely, as long as the network remains functioning."]}),"\n",(0,o.jsx)(n.p,{children:"To determine the list of nodes that are included as officially staked nodes in the next epoch,\nthe protocol looks at the records of all the nodes that have committed tokens.\nIt checks to make sure each node's information is correct and that the node is running properly.\nEach node also has to have committed tokens above the minimum stake required for their node role\nand be authorized by the service account.\nIf any of these checks are insufficient, the node is not included in the next epoch."}),"\n",(0,o.jsxs)(n.p,{children:["Every epoch, some nodes also have to perform certain processes to initialize the state and communication\nwith other nodes for the next epoch. These processes are called ",(0,o.jsx)(n.strong,{children:"Cluster Quorum Certificate Generation (QC)"}),",\nand ",(0,o.jsx)(n.strong,{children:"Distributed Key Generation (DKG)"}),". If any node does not perform this initialization properly,\nit is not included in the next epoch's Identity Table."]}),"\n",(0,o.jsx)(n.p,{children:"If a node passes all the checks and initializations, it is approved and included as an official node for the next epoch."}),"\n",(0,o.jsx)(n.p,{children:"Nodes (and users who delegate to them) do not have to continue to submit\nstaking registration transactions every epoch in order to remain staked.\nAs long as they continue to run their node properly, their tokens will remain staked.\nA node operator only needs to take action if they want to stake more tokens\nor if they want to unstake their staked tokens."}),"\n",(0,o.jsx)(n.p,{children:"If a node operator or delegator decides to stake or unstake tokens,\ntheir requests are not carried out until the end of the current epoch.\nIn the case of unstaking requests, they also must wait an additional\nepoch before their unstaked tokens are available to withdraw.\nThis allows the protocol to deal with any slashable offenses that may have happened in the previous epoch."}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/staking/epoch-preparation",children:"Epochs"})," section of the documentation for in-depth explainations\nof the identity table, epoch schedule, QC, and DKG."]}),"\n",(0,o.jsx)(n.h2,{id:"rewards",children:"Rewards"}),"\n",(0,o.jsxs)(n.p,{children:["Please see the ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/staking/schedule",children:"schedule"})," section of the documentation\nfor information about reward calculations and schedule and\nwhat you can do with the rewards you earn by staking a node!"]}),"\n",(0,o.jsx)(n.h2,{id:"delegation",children:"Delegation"}),"\n",(0,o.jsx)(n.p,{children:"Any account in the network may also participate in staking by delegating their tokens to a node operator.\nEvery node operator in the network is eligible to receive delegations, there is no opting out."}),"\n",(0,o.jsx)(n.p,{children:"To delegate to a node, a user simply specifies the ID of the node they want to delegate to\nand the amount of tokens they want to delegate.\nThe tokens are committed and managed in the exact same way that normal staked tokens are managed."}),"\n",(0,o.jsx)(n.p,{children:"Rewards for delegators are also calculated in the exact same way that rewards for node operators are calculated,\nwith one difference in that 8% of the calculated amount is given to the delegatee (the node being delegated to).\nThe remaining 92% is awarded to the delegator."}),"\n",(0,o.jsx)(n.h2,{id:"how-do-i-stake",children:"How Do I Stake?"}),"\n",(0,o.jsx)(n.p,{children:"So you have decided you want to be a part of the Flow network? Welcome!\nYou are joining a group of people from all around the world that are a part of a movement that is bringing decentralization and transparency into the world."}),"\n",(0,o.jsx)(n.h3,{id:"staking-using-flow-port",children:"Staking using Flow Port"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://port.onflow.org/",children:"Flow Port"})," is a simple browser-based app for the Flow blockchain\nthat provides functionality for sending, receiving, and staking tokens.\nAny wallet that uses the ",(0,o.jsx)(n.a,{href:"/docs/tooling/fcl-js/",children:"Flow Client Library"}),"\nis compatible with Flow Port."]}),"\n",(0,o.jsxs)(n.p,{children:["If you created your account using ",(0,o.jsx)(n.a,{href:"https://port.onflow.org/",children:"Flow Port"}),",\nyou can also stake and earn rewards using the Flow Port.\nFollow this ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/flow-port/staking-guide",children:"step-by-step guide"})," to stake using Flow Port.\nFlow Port currently supports staking as a node, delegating,\nand reward withdrawal using ",(0,o.jsx)(n.strong,{children:"Blocto"}),", ",(0,o.jsx)(n.strong,{children:"Ledger"}),", ",(0,o.jsx)(n.strong,{children:"Lilico"}),", and ",(0,o.jsx)(n.strong,{children:"NuFi"})," accounts / wallets."]}),"\n",(0,o.jsx)(n.h3,{id:"staking-via-a-custody-provider",children:"Staking via a Custody Provider"}),"\n",(0,o.jsxs)(n.p,{children:["If you are using a custody provider who controls your account and private keys for you,\nsuch as Kraken, Finoa, or Coinlist, they all have different policies and processes\nfor what you need to do to stake your tokens, the rewards you receive,\nand the fees that they take from your staking rewards.\nPlease see ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/staking/custody-providers",children:"our guides"})," for more information about staking\nusing custody providers."]}),"\n",(0,o.jsx)(n.h3,{id:"manual-staking-or-building-your-own-staking-integration",children:"Manual Staking or Building your own Staking Integration"}),"\n",(0,o.jsxs)(n.p,{children:["If you are self-custodying your Flow account and keys, or you want to build a staking service for customers,\nyou will need to learn more about how staking works,\nthe various methods for staking, and how you can participate safely and reliably.\nSee the ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/staking/technical-overview",children:"staking technical overview"})," first,\nfollowed by the ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/staking/locked-staking-guide",children:"staking technical guide"}),"\nfor information about technical integration."]})]})}const c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);