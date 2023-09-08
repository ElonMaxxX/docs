"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[84893],{58250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});n(67294);var o=n(85893),a=n(11151);const c={title:"Contract Upgrades with Incompatible Changes"},s=void 0,r={unversionedId:"cadence/contract-upgrades",id:"version-stable/cadence/contract-upgrades",title:"Contract Upgrades with Incompatible Changes",description:"Problem",source:"@site/versioned_docs/version-stable/cadence/contract-upgrades.mdx",sourceDirName:"cadence",slug:"/cadence/contract-upgrades",permalink:"/docs/cadence/contract-upgrades",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/contract-upgrades.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1694185403,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{title:"Contract Upgrades with Incompatible Changes"},sidebar:"cadence",previous:{title:"Guide for Solidity developers",permalink:"/docs/cadence/solidity-to-cadence"},next:{title:"JSON-Cadence format",permalink:"/docs/cadence/json-cadence-spec"}},i={},d=[{value:"Problem",id:"problem",level:3},{value:"Solution",id:"solution",level:3}];function l(e){const t=Object.assign({h3:"h3",p:"p",a:"a",code:"code",em:"em",ol:"ol",li:"li",strong:"strong"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"problem",children:"Problem"}),"\n",(0,o.jsx)(t.p,{children:"I have an incompatible upgrade for a contract. How can I deploy this?"}),"\n",(0,o.jsx)(t.h3,{id:"solution",children:"Solution"}),"\n",(0,o.jsx)(t.p,{children:"Please don't perform incompatible upgrades between contract versions in the same account.\nThere is too much that can go wrong."}),"\n",(0,o.jsxs)(t.p,{children:["You can make ",(0,o.jsx)(t.a,{href:"/docs/cadence/language/contract-updatability",children:"compatible upgrades"})," and then run a post-upgrade function on the new contract code if needed."]}),"\n",(0,o.jsxs)(t.p,{children:["If you must replace your contract rather than update it,\nthe simplest solution is to add or increase a suffix on any named paths in the contract code\n(e.g. ",(0,o.jsx)(t.code,{children:"/public/MyProjectVault"})," becomes ",(0,o.jsx)(t.code,{children:"/public/MyProjectVault002"}),") in addition to making the incompatible changes,\nthen create a new account and deploy the updated contract there."]}),"\n",(0,o.jsxs)(t.p,{children:["\u26a0\ufe0f Flow identifies types relative to addresses, so you will also need to provide ",(0,o.jsx)(t.em,{children:"upgrade transactions"})," to exchange the old contract's resources for the new contract's ones. Make sure to inform users as soon as possible when and how they will need to perform this task."]}),"\n",(0,o.jsx)(t.p,{children:"If you absolutely must keep the old address when making an incompatible upgrade, then you do so at your own risk. Make sure you perform the following actions in this exact order:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Delete any resources used in the contract account, e.g. an Admin resource."}),"\n",(0,o.jsx)(t.li,{children:"Delete the contract from the account."}),"\n",(0,o.jsx)(t.li,{children:"Deploy the new contract to the account."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["\u26a0\ufe0f Note that if any user accounts contain ",(0,o.jsx)(t.code,{children:"structs"})," or ",(0,o.jsx)(t.code,{children:"resources"})," from the ",(0,o.jsx)(t.em,{children:"old"})," version of the contract that have been replaced with incompatible versions in the new one, ",(0,o.jsx)(t.strong,{children:"they will not load and will cause transactions that attempt to access them to crash"}),". For this reason, once any users have received ",(0,o.jsx)(t.code,{children:"structs"})," or ",(0,o.jsx)(t.code,{children:"resources"})," from the contract, this method of making an incompatible upgrade should not be attempted!"]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);