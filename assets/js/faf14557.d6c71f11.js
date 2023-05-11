"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8459],{46985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});n(67294);var s=n(85893),i=n(11151);const o={title:"Token Staking Process"},a=void 0,r={unversionedId:"concepts/nodes/token-staking",id:"concepts/nodes/token-staking",title:"Token Staking Process",description:"This document suggests a process for submitting a staking request through coordination between a node operator and an independent custody provider.",source:"@site/docs/concepts/nodes/token-staking.mdx",sourceDirName:"concepts/nodes",slug:"/concepts/nodes/token-staking",permalink:"/docs/concepts/nodes/token-staking",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/token-staking.mdx",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1683837812,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{title:"Token Staking Process"},sidebar:"tutorialSidebar",previous:{title:"Basic Staking with Unlocked FLOW",permalink:"/docs/concepts/nodes/staking/unlocked-staking-guide"},next:{title:"Flow Mobile",permalink:"/docs/concepts/mobile/"}},d={},c=[{value:"Create Staking Keys",id:"create-staking-keys",level:2},{value:"Create a Staking Account",id:"create-a-staking-account",level:2},{value:"Deploy a <code>StakingHelper</code> Contract",id:"deploy-a-stakinghelper-contract",level:2},{value:"Deposit Staking Funds",id:"deposit-staking-funds",level:2},{value:"Send Staking Request",id:"send-staking-request",level:2}];function l(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",em:"em"},(0,i.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This document suggests a process for submitting a staking request through coordination between a node operator and an independent custody provider."}),"\n",(0,s.jsx)(t.h2,{id:"create-staking-keys",children:"Create Staking Keys"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The node operator generates the following private keys that the staked node will use to authenticate and identify itself within the Flow network:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Staking Key"}),"\n",(0,s.jsx)(t.li,{children:"Networking Key"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-a-staking-account",children:"Create a Staking Account"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Custody provider creates a new Flow account that will hold the initial tokens to be staked and (optionally) receive future reward payments."}),"\n",(0,s.jsx)(t.li,{children:"The custody provider and their client(s) are the only parties authorized to transfer tokens out of this account."}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"deploy-a-stakinghelper-contract",children:["Deploy a ",(0,s.jsx)(t.code,{children:"StakingHelper"})," Contract"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The node operator deploys a ",(0,s.jsx)(t.code,{children:"StakingHelper"})," contract initialized with the following parameters:","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Staking Public Key"}),"\n",(0,s.jsx)(t.li,{children:"Staking Key Signature"}),"\n",(0,s.jsx)(t.li,{children:"Networking Public Key"}),"\n",(0,s.jsx)(t.li,{children:"Networking Key Signature"}),"\n",(0,s.jsx)(t.li,{children:"Staking Account Address"}),"\n",(0,s.jsx)(t.li,{children:"Rewards Account Address (can be the same as Staking Account Address)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.code,{children:"StakingHelper"})," is an auditable contract that is ",(0,s.jsx)(t.em,{children:"only"})," authorized to initiate a staking request to the system-level ",(0,s.jsx)(t.code,{children:"FlowStaking"})," contract. This contract will temporarily hold the staking deposit (tokens to be staked held by custody provider) in escrow before submitting a staking request, and these funds ",(0,s.jsx)(t.em,{children:"cannot"})," be moved out of the contract for any other purpose. The only exception to this restriction is the ",(0,s.jsx)(t.code,{children:"abort"})," method, which returns the escrowed funds to the initial depositor."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"deposit-staking-funds",children:"Deposit Staking Funds"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The custody provider transfers ",(0,s.jsx)(t.code,{children:"X"})," tokens from the staking account to the address of the ",(0,s.jsx)(t.code,{children:"StakingHelper"})," contract."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"send-staking-request",children:"Send Staking Request"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["The node operator submits a transaction that calls the ",(0,s.jsx)(t.code,{children:"StakingHelper.submit"})," method, which sends the staking public keys, signatures, rewards address and token deposit to the system-level ",(0,s.jsx)(t.code,{children:"FlowStaking"})," contract."]}),"\n"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}}}]);