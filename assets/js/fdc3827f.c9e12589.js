"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[65583],{17192:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>c});a(67294);var i=a(85893),t=a(11151);const s={title:"The Cadence Programming Language",sidebar_label:"Language Reference"},r=void 0,o={unversionedId:"cadence/language/index",id:"version-stable/cadence/language/index",title:"The Cadence Programming Language",description:"Introduction",source:"@site/versioned_docs/version-stable/cadence/language/index.md",sourceDirName:"cadence/language",slug:"/cadence/language/",permalink:"/docs/cadence/language/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/cadence/language/index.md",tags:[],version:"stable",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1693500784,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"The Cadence Programming Language",sidebar_label:"Language Reference"},sidebar:"cadence",previous:{title:"10. Composable Resources",permalink:"/docs/cadence/tutorial/resources-compose"},next:{title:"Syntax",permalink:"/docs/cadence/language/syntax"}},d={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Syntax and Behavior",id:"syntax-and-behavior",level:2}];function l(e){const n=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",a:"a"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"The Cadence Programming Language is a new high-level programming language\nintended for smart contract development."}),"\n",(0,i.jsx)(n.p,{children:"The language's goals are, in order of importance:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Safety and security"}),":\nProvide a strong static type system, design by contract (preconditions and postconditions),\nand resources (inspired by linear types)."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Auditability"}),":\nFocus on readability: Make it easy to verify what the code is doing,\nand make intentions explicit, at a small cost of verbosity."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Simplicity"}),": Focus on developer productivity and usability:\nMake it easy to write code, provide good tooling."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(n.p,{children:"In this document, the following terminology is used to describe syntax\nor behavior that is not allowed in the language:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Invalid"})," means that the invalid program will not even be allowed to run.\nThe program error is detected and reported statically by the type checker."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Run-time error"})," means that the erroneous program will run,\nbut bad behavior will result in the execution of the program being aborted."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"syntax-and-behavior",children:"Syntax and Behavior"}),"\n",(0,i.jsx)(n.p,{children:"Much of the language's syntax is inspired by Swift, Kotlin, and TypeScript."}),"\n",(0,i.jsx)(n.p,{children:"Much of the syntax, types, and standard library is inspired by Swift,\nwhich popularized e.g. optionals, argument labels,\nand provides safe handling of integers and strings."}),"\n",(0,i.jsx)(n.p,{children:"Resources are based on linear types which were popularized by Rust."}),"\n",(0,i.jsx)(n.p,{children:"Events are inspired by Solidity."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Disclaimer:"})," In real Cadence code, all type definitions and code\nmust be declared and contained in ",(0,i.jsx)(n.a,{href:"/docs/cadence/language/contracts",children:"contracts"})," or ",(0,i.jsx)(n.a,{href:"/docs/cadence/language/transactions",children:"transactions"}),",\nbut we omit these containers in examples for simplicity."]})]})}const g=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(l,e)})):l(e)}}}]);