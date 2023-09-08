"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[97699],{94430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});n(67294);var s=n(85893),o=n(11151);const r={title:"Core Components",description:"Learn about the key components of NFT marketplaces",sidebar_label:"Core Components",sidebar_position:3,sidebar_custom_props:{icon:"\ud83e\uddf1"}},a=void 0,i={unversionedId:"guides/nft-marketplace/core-components",id:"version-stable/guides/nft-marketplace/core-components",title:"Core Components",description:"Learn about the key components of NFT marketplaces",source:"@site/versioned_docs/version-stable/guides/nft-marketplace/core-components.md",sourceDirName:"guides/nft-marketplace",slug:"/guides/nft-marketplace/core-components",permalink:"/docs/guides/nft-marketplace/core-components",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/nft-marketplace/core-components.md",tags:[],version:"stable",sidebarPosition:3,frontMatter:{title:"Core Components",description:"Learn about the key components of NFT marketplaces",sidebar_label:"Core Components",sidebar_position:3,sidebar_custom_props:{icon:"\ud83e\uddf1"}},sidebar:"guides",previous:{title:"Best practices",permalink:"/docs/guides/nft-marketplace/best-practices"},next:{title:"Minting NFTs",permalink:"/docs/guides/nft-marketplace/minting-nfts"}},l={},c=[{value:"Coming from Ethereum",id:"coming-from-ethereum",level:2}];function d(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Following are the core components for any NFT marketplace solution on the Flow blockchain. Throughout the guide, these will be referred to."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft",children:"NFT Standard"}),": Every NFT minted on Flow should follow this standard."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-ft",children:"Fungible Token Standard"}),": All fungible tokens on Flow follow this standard. NFTs purchased on an NFT marketplace will be paid for using a fungible token in many scenarios."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"/docs/concepts/flow-token",children:"FLOW Token"}),": Native currency of the Flow blockchain used to pay for the transaction fees. NFT buyers can use FLOW tokens to buy NFTs in a marketplace."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),": A generalized framework for NFTs on Flow to expose their metadata. The framework described already has ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/#list-of-common-views",children:"a mechanism specified to render the basic representation"})," of an NFT."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/dapperlabs/nft-catalog",children:"Flow NFT Catalog"}),": NFT marketplaces can use this on-chain registry of NFTs to obtain the list of NFTs owned by an account and obtain display metadata for those NFTs and their collections. Developers should use the ",(0,s.jsx)(t.a,{href:"https://github.com/dapperlabs/nft-catalog#using-the-catalog-for-marketplaces-and-other-nft-applications",children:"example scripts"})," in conjunction with the ",(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"NFT Metadata Standard"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/onflow/nft-storefront",children:"NFT Storefront Contract"}),": \u200b\u200bContract used by almost all Flow NFT marketplaces for creating NFT sale listings. Note that you can directly use the version of this contract already deployed on the Mainnet."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"../../tools/clients/fcl-js/",children:"FCL (Flow Client Library)"}),": This library is like web3.js in Ethereum. Application frontend will use FCL to interact with user wallets and the blockchain. JS-based backends of applications can also use it to interact with the blockchain."]}),"\n",(0,s.jsxs)(t.li,{children:["Flow SDKs: Multiple SDKs are available in different programming languages (",(0,s.jsx)(t.a,{href:"/docs/tools/clients/flow-go-sdk/",children:"Go"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/the-nft-company/flow-jvm-sdk",children:"Java"}),") for Flow application backends to interact with the blockchain."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"coming-from-ethereum",children:"Coming from Ethereum"}),"\n",(0,s.jsx)(t.p,{children:"If you are coming from Ethereum, the following list shows corresponding modules and services available on Flow."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Resource"}),(0,s.jsx)(t.th,{children:"Ethereum"}),(0,s.jsx)(t.th,{children:"Flow"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Smart Contract Programming Language"}),(0,s.jsx)(t.td,{children:"Solidity"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/cadence/intro",children:"Cadence"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Fungible Token Standard"}),(0,s.jsx)(t.td,{children:"ERC-20"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-ft",children:"Flow Fungible Token Standard"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NFT Standard"}),(0,s.jsx)(t.td,{children:"ERC-721/ERC-1155"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft",children:"Flow NFT Token Standard"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"NFT Metadata Standard"}),(0,s.jsx)(t.td,{children:"ERC-721"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/#nft-metadata",children:"Flow NFT Metadata Standard"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Native Crypto Currency"}),(0,s.jsx)(t.td,{children:"ETH"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/docs/concepts/flow-token",children:"FLOW"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Wallet Interaction Library"}),(0,s.jsx)(t.td,{children:"web3.js"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../tools/clients/",children:"Flow Client Library (FCL)"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Blockchain Interaction SDK"}),(0,s.jsx)(t.td,{children:"web3.js"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../tools/clients/",children:"Language Clients"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Block Explorer"}),(0,s.jsx)(t.td,{children:"Etherscan"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"../../tools/toolchains/",children:"Block Explorers"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Node Service Providers"}),(0,s.jsx)(t.td,{children:"Infura"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"https://flowscan.org/staking/nodes",children:"Official Flow Access Nodes"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Wallets"}),(0,s.jsx)(t.td,{children:"Metamask, WalletConnect"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"https://portto.com/",children:"Blocto"}),", ",(0,s.jsx)(t.a,{href:"https://www.meetdapper.com/",children:"Dapper Wallet"})]})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}}}]);