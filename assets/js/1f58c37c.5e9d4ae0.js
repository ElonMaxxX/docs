"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[23677],{14327:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});o(67294);var i=o(85893),s=o(11151);const a={title:"Next steps",description:"Where to go from here",sidebar_label:"Next steps"},r=void 0,n={unversionedId:"tutorials/kitty-items/next-steps",id:"tutorials/kitty-items/next-steps",title:"Next steps",description:"Where to go from here",source:"@site/docs/tutorials/kitty-items/next-steps.md",sourceDirName:"tutorials/kitty-items",slug:"/tutorials/kitty-items/next-steps",permalink:"/docs/next/tutorials/kitty-items/next-steps",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tutorials/kitty-items/next-steps.md",tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{title:"Next steps",description:"Where to go from here",sidebar_label:"Next steps"},sidebar:"tutorials",previous:{title:"Modify",permalink:"/docs/next/tutorials/kitty-items/modify"},next:{title:"Start",permalink:"/docs/next/tutorials/kitty-items/start"}},l={},d=[{value:"Video Walkthrough",id:"video-walkthrough",level:2},{value:"Learn more about NFT marketplaces",id:"learn-more-about-nft-marketplaces",level:2},{value:"Improve your Kitty Items project",id:"improve-your-kitty-items-project",level:2},{value:"Adjust rarity",id:"adjust-rarity",level:3},{value:"Update metadata",id:"update-metadata",level:3},{value:"Add utility",id:"add-utility",level:3},{value:"Support naming service",id:"support-naming-service",level:3},{value:"Use production-ready database",id:"use-production-ready-database",level:3},{value:"Cutting edge: Support royalties",id:"cutting-edge-support-royalties",level:3},{value:"Deploy your Kitty Items project to the mainnet",id:"deploy-your-kitty-items-project-to-the-mainnet",level:2},{value:"Get inspired by other projects",id:"get-inspired-by-other-projects",level:2}];function c(e){const t=Object.assign({p:"p",h2:"h2",strong:"strong",a:"a",h3:"h3",blockquote:"blockquote",code:"code"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"By now, you have a fully-functioning NFT marketplace with your own, new exclusive NFT collection. You might ask yourself where to go from here. Here are some ideas to get you inspired!"}),"\n",(0,i.jsx)(t.h2,{id:"video-walkthrough",children:"Video Walkthrough"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"450",src:"https://www.youtube.com/embed/v-r1Ucg8hHk?start=503",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,i.jsx)(t.h2,{id:"learn-more-about-nft-marketplaces",children:"Learn more about NFT marketplaces"}),"\n",(0,i.jsxs)(t.p,{children:["Dive deeper by reading the ",(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.a,{href:"../../guides/nft-marketplace/",children:"NFT Marketplace Guide"})}),". It covers topics like the building blocks of marketplaces, how to handle accounts, how to mint and sell NFTs, and best practices for production-readiness."]}),"\n",(0,i.jsx)(t.h2,{id:"improve-your-kitty-items-project",children:"Improve your Kitty Items project"}),"\n",(0,i.jsx)(t.p,{children:"Below is a list of features and updates you could make to your NFT marketplace."}),"\n",(0,i.jsx)(t.h3,{id:"adjust-rarity",children:"Adjust rarity"}),"\n",(0,i.jsx)(t.p,{children:"You will notice that each NFT has a rarity associated with it. You could design a more complex rarity function to ensure that some NFTs are much more limited than others."}),"\n",(0,i.jsx)(t.p,{children:"The rarity is currently represented as the background color. You could change that and have visual elements on the object itself. For instance, the Fishbowl NFT could have unique items inside."}),"\n",(0,i.jsx)(t.h3,{id:"update-metadata",children:"Update metadata"}),"\n",(0,i.jsxs)(t.p,{children:["NFTs on Flow should follow the ",(0,i.jsx)(t.a,{href:"/docs/next/building-on-flow/core-contracts/nft-metadata",children:"metadata standard"}),". The Kitty Items contract is compatible with the metadata standard as well."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note"}),": You can review the following Cadence contract for more details: ",(0,i.jsx)(t.code,{children:"cadence/contracts/MetadataViews.cdc"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"You can update the metadata to change the name and description of the NFTs on the marketplace. If you wanted to store your NFT resources somewhere else (instead of on IPFS), you could modify the metadata views."}),"\n",(0,i.jsx)(t.h3,{id:"add-utility",children:"Add utility"}),"\n",(0,i.jsx)(t.p,{children:"The KittyItems NFTs on the marketplace do not have any utilitarian function. You could, however, extend your marketplace or any application to provide or unlock additional features that are only available to specific NFT holders. For instance, you could create a Discord community for NFT owners where some exclusive channels are only open to exclusive NFT holders. Another example is an application that lets users log in with their Flow profile and verifies if the account owns an NFT from your collection. If it does, the user could take an action in your application. This is often used for DAOs. The NFT indicates that a user can participate in the DAO community."}),"\n",(0,i.jsx)(t.h3,{id:"support-naming-service",children:"Support naming service"}),"\n",(0,i.jsxs)(t.p,{children:["If an NFT is displayed, it shows who owns the NFT. This is mostly represented by a Flow account address, something that is cryptic and difficult to remember. Users will not be able to associate addresses with other people in the community, like their friends. That's the services like ",(0,i.jsx)(t.a,{href:"https://find.xyz/",children:".find"})," come into play - they make it possible for users to claim usernames for their address. You could integrate with a naming service to display avatars and/or usernames instead of the cryptic addresses."]}),"\n",(0,i.jsx)(t.h3,{id:"use-production-ready-database",children:"Use production-ready database"}),"\n",(0,i.jsxs)(t.p,{children:["The Kitty Items project uses ",(0,i.jsx)(t.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," to store listings on the marketplace. This engine was used to help you ramp up quickly without the need to think about your own database instance. However, for production-ready applications you should consider replacing SQLite with a database that fits your specific needs and preferences."]}),"\n",(0,i.jsxs)(t.p,{children:["If you are looking for a step by step tutorial specifically for Kitty Items, you might be interested in ",(0,i.jsx)(t.a,{href:"https://dev.to/fauna/shrink-your-dapps-server-footprint-with-fauna-2598",children:"this blog post from the Fauna team"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"cutting-edge-support-royalties",children:"Cutting edge: Support royalties"}),"\n",(0,i.jsx)(t.p,{children:"If you want to work on a cutting edge feature, you can explore how to support royalties that live alongside the NFT itself. With that, you can ensure that an NFT creator will receive a share from secondary sales."}),"\n",(0,i.jsxs)(t.p,{children:["The Flow community is ",(0,i.jsx)(t.a,{href:"https://github.com/onflow/flow-nft/issues/53",children:"currently working on the royalty standard"}),". Check it out and chime in if you have any thoughts!"]}),"\n",(0,i.jsx)(t.h2,{id:"deploy-your-kitty-items-project-to-the-mainnet",children:"Deploy your Kitty Items project to the mainnet"}),"\n",(0,i.jsxs)(t.p,{children:["You successfully deployed your project to the testnet, which is helpful to test against a live network of the Flow blockchain. However, once you've improved your project and are ready to transfer it to a production environment, you need to deploy your contracts to the mainnet. ",(0,i.jsx)(t.a,{href:"../../guides/deploying/mainnet-deployment",children:"Follow the Mainnet Deployment guide"})," to accomplish that."]}),"\n",(0,i.jsx)(t.h2,{id:"get-inspired-by-other-projects",children:"Get inspired by other projects"}),"\n",(0,i.jsxs)(t.p,{children:["If you need even more inspiration, check out some of the ",(0,i.jsx)(t.a,{href:"https://www.flowverse.co/projects",children:"existing NFT marketplace on Flow"}),"."]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(c,e)})):c(e)}}}]);