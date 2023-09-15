"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[21823],{47777:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});s(67294);var o=s(85893),i=s(11151);const t={title:"Running a Node",sidebar_label:"Running a Node",description:"Running your own Light Node",sidebar_position:6,sidebar_custom_props:{icon:"\ud83d\udcbb"}},d=void 0,r={unversionedId:"guides/runningNode",id:"version-stable/guides/runningNode",title:"Running a Node",description:"Running your own Light Node",source:"@site/versioned_docs/version-stable/guides/runningNode.mdx",sourceDirName:"guides",slug:"/guides/runningNode",permalink:"/docs/guides/runningNode",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/runningNode.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:6,frontMatter:{title:"Running a Node",sidebar_label:"Running a Node",description:"Running your own Light Node",sidebar_position:6,sidebar_custom_props:{icon:"\ud83d\udcbb"}},sidebar:"guides",previous:{title:"Launch a Token",permalink:"/docs/guides/launchToken"}},a={},c=[{value:"Node Types",id:"node-types",level:2},{value:"Permissioned vs Permissionless",id:"permissioned-vs-permissionless",level:3},{value:"Why run a Flow node?",id:"why-run-a-flow-node",level:2},{value:"Setup",id:"setup",level:2},{value:"Running",id:"running",level:2},{value:"Setup",id:"setup-1",level:2},{value:"Running",id:"running-1",level:2}];function l(e){const n=Object.assign({h2:"h2",p:"p",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",h1:"h1",img:"img"},(0,i.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"node-types",children:"Node Types"}),"\n",(0,o.jsxs)(n.p,{children:["Flow network is made up of many node types. Here is more information on the different ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-roles#collection",children:"Node Types"}),". For a quick reference here are the types:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Node Type"}),(0,o.jsx)(n.th,{children:"Stake Required in FLOW"}),(0,o.jsx)(n.th,{children:"Permissionless"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Running a Node"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Light"}),(0,o.jsx)(n.td,{children:"Zero"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"Best node for application developers that need high throught-put. This node is used to observe the network and get the latest blockchain data."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/observer-node",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Archive"}),(0,o.jsx)(n.td,{children:"Zero"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"Scalable and efficient way to access the history of Flow protocol."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-setup",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Access"}),(0,o.jsx)(n.td,{children:"100"}),(0,o.jsx)(n.td,{children:"Yes"}),(0,o.jsx)(n.td,{children:"Provides access to the Flow network. Public nodes, that rate limits, is used to send transactions to the network and provide Flow blockchain data."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/access-node-setup",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Verification"}),(0,o.jsx)(n.td,{children:"135,000"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"Verify the correctness of blocks proposed by the Consensus nodes."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-setup",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Collection"}),(0,o.jsx)(n.td,{children:"250,000"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"Bandwidth-optimized nodes divided by the protocol into several cooperating Clusters."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-setup",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Consensus"}),(0,o.jsx)(n.td,{children:"500,000"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"Form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-setup",children:"Setup"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Execution"}),(0,o.jsx)(n.td,{children:"1,250,000"}),(0,o.jsx)(n.td,{children:"No"}),(0,o.jsx)(n.td,{children:"Most resource-intensive nodes on the Flow network, responsible for executing transactions and maintaining the Execution State."}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/node-setup",children:"Setup"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"permissioned-vs-permissionless",children:"Permissioned vs Permissionless"}),"\n",(0,o.jsx)(n.p,{children:"The goal is to make all node types permissionless, currently there are three node types that are permissionless these are the first steps towards having all node types permissionless."}),"\n",(0,o.jsx)(n.h2,{id:"why-run-a-flow-node",children:"Why run a Flow node?"}),"\n",(0,o.jsxs)(n.p,{children:["On Flow there is no requirement to run a node to develop applications. For many use cases, an ",(0,o.jsx)(n.a,{href:"../tools/toolchains/emulator",children:"emulator"})," for local development and a public access node will fulfill your needs. For those with higher throughput requirements running your own light node or access is simple."]}),"\n",(0,o.jsx)(n.h1,{id:"running-a-light-node",children:"Running a Light Node"}),"\n",(0,o.jsxs)(n.p,{children:["There are community access nodes available to use, but they are rate limited. Alternative to an Access node, anyone can run their own Light node. This is a good option if you want to have untrottled access to current Flow blockchain data. ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/#which-node-should-you-run",children:"More information"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:s(41397).Z+"",loading:"lazy",alt:"Light nodes",width:"907",height:"421"})}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["First make sure your node has the needed resources, here are the requirements, and step by step instructions to get up and running. ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/observer-node#running-an-observer-node",children:"Light Node Documentation"}),". Light node can be run in a Docker container, it's available for testnet and mainnet."]}),"\n",(0,o.jsx)(n.h2,{id:"running",children:"Running"}),"\n",(0,o.jsxs)(n.p,{children:["For high usage applications on Flow, that have many user interactions, it might be necessary to run your own Light node. Here are the step by step instructions to ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/observer-node#steps-to-run-an-observer-node",children:"run an observer node"}),". The benefit is, no staked FLOW and no register is required. Also, already mentioned you have untrottled access to the blockchain data."]}),"\n",(0,o.jsx)(t,{type:"info",children:(0,o.jsx)(n.p,{children:"Light nodes do not need to be staked. Transactions are relayed to an access node upstream."})}),"\n",(0,o.jsx)(n.h1,{id:"running-an-access-node",children:"Running an Access Node"}),"\n",(0,o.jsx)(n.p,{children:"Application developers can choose to run their own private permissionless access node and move away from using the community access nodes. This will also allow them to not be subjected to the API rate limits of the public access nodes."}),"\n",(0,o.jsx)(n.h2,{id:"setup-1",children:"Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Make sure you have the needed resources, here are the requirements, and step by step instructions to get up and running. ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/access-node-setup#limitations",children:"Access Node Documentation"}),". Access node can be run in a Docker container, it's available for testnet and mainnet."]}),"\n",(0,o.jsx)(n.h2,{id:"running-1",children:"Running"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to run an access node, you will need to stake FLOW and register your node. Here are the step by step instructions to ",(0,o.jsx)(n.a,{href:"/docs/building-on-flow/run-and-secure/nodes/node-operation/access-node-setup",children:"run an access node"}),". There are benefit to running an Access node."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},41397:(e,n,s)=>{s.d(n,{Z:()=>o});const o=s.p+"assets/images/observer-node-arch-9d5b48ef793a2da1adc0e501a7064566.png"}}]);