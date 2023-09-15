"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[99793],{45270:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>l});s(67294);var a=s(85893),i=s(11151);const n={title:"In App Payments on Flow",description:"Learn about the different payment options available for applications on Flow.",sidebar_label:"In App Payments",sidebar_position:6,sidebar_custom_props:{icon:"\ud83c\udfe6"}},r=void 0,o={unversionedId:"guides/nft-marketplace/in-dapp-payments",id:"version-stable/guides/nft-marketplace/in-dapp-payments",title:"In App Payments on Flow",description:"Learn about the different payment options available for applications on Flow.",source:"@site/versioned_docs/version-stable/guides/nft-marketplace/in-dapp-payments.md",sourceDirName:"guides/nft-marketplace",slug:"/guides/nft-marketplace/in-dapp-payments",permalink:"/docs/guides/nft-marketplace/in-dapp-payments",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/guides/nft-marketplace/in-dapp-payments.md",tags:[],version:"stable",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:6,frontMatter:{title:"In App Payments on Flow",description:"Learn about the different payment options available for applications on Flow.",sidebar_label:"In App Payments",sidebar_position:6,sidebar_custom_props:{icon:"\ud83c\udfe6"}},sidebar:"guides",previous:{title:"Selling NFTs",permalink:"/docs/guides/nft-marketplace/selling-nfts"},next:{title:"Handling accounts",permalink:"/docs/guides/nft-marketplace/handling-accounts"}},p={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Direct vs Peer-to-peer Sales",id:"direct-vs-peer-to-peer-sales",level:2},{value:"Available Payment Options",id:"available-payment-options",level:2},{value:"FLOW",id:"flow",level:3},{value:"Direct Credit Card Payments",id:"direct-credit-card-payments",level:3},{value:"Recommendation",id:"recommendation",level:3}];function d(e){const t=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",h3:"h3",a:"a"},(0,i.ah)(),e.components),{Callout:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,a.jsx)(t.p,{children:"User payments are an important part of many blockchain apps. In order to create a stellar user experience, your app should make it as easy as possible for users to purchase digital assets. For most users, this means being able to pay for digital assets (e.g. NFTs) using their local fiat currency (e.g. via credit card)."}),"\n",(0,a.jsx)(t.h2,{id:"direct-vs-peer-to-peer-sales",children:"Direct vs Peer-to-peer Sales"}),"\n",(0,a.jsx)(t.p,{children:"Before diving into payments, it is important to define the difference between direct sales and peer-to-peer sales."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Direct sales:"})," users purchase digital assets (e.g. NFTs) directly from a app developer."]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"Peer-to-peer sales:"})," users purchase digital assets (e.g. NFTs) from other app users, usually via a marketplace."]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This section will highlight the considerations you should make when implementing payments for direct sales and peer-to-peer sales."}),"\n",(0,a.jsx)(t.h2,{id:"available-payment-options",children:"Available Payment Options"}),"\n",(0,a.jsx)(t.h3,{id:"flow",children:"FLOW"}),"\n",(0,a.jsxs)(t.p,{children:["FLOW is the default cryptocurrency that powers the Flow blockchain network, and is primarily used for staking and for paying ",(0,a.jsx)(t.a,{href:"/docs/concepts/fees#fees",children:"network fees"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"Many of the payment providers support FLOW, including well-trusted cryptocurrency exchanges."}),"\n",(0,a.jsx)(t.p,{children:"However, FLOW isn\u2019t always well-suited for day-to-day user payments due to its price volatility, much like any cryptocurrency."}),"\n",(0,a.jsx)(s,{type:"warning",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"App Custody Gotcha:"}),"  app-custody apps that allow their users to hold FLOW will need to comply with any necessary regulations regarding cryptocurrency asset custody. Consult your legal counsel."]})}),"\n",(0,a.jsx)(t.h3,{id:"direct-credit-card-payments",children:"Direct Credit Card Payments"}),"\n",(0,a.jsxs)(t.p,{children:["Some apps choose to directly integrate off-chain credit card providers such as ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Alipay",children:"Alipay"}),", ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Circle_(company)",children:"Circle"}),", ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/PayPal",children:"PayPal"})," or ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Stripe_(company)",children:"Stripe"})," in order to support NFT sales. In these scenarios, payments are processed externally by the provider, and then the NFT asset is delivered in a transaction authorized by the app developer."]}),"\n",(0,a.jsxs)(t.p,{children:["While direct credit card payments result in a good user experience, they bring significant challenges for the app developer. Credit card payments are prone to ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Chargeback",children:"chargebacks"})," and fraud, meaning users can purchase an asset, dispute the credit card transaction, and then keep the original asset without paying. Because of this, app developers sometimes opt for the app custody model when supporting direct credit card payments."]}),"\n",(0,a.jsx)(t.p,{children:"Credit card payments introduce additional challenges when used in peer-to-peer payment platforms such as an NFT marketplace. When a user buys an NFT from another user using their credit card, the payment is still processed by the app developer, which makes the developer responsible for paying the seller. To pay the proceeds to the seller, the developer must comply with necessary regulations. Consult your legal counsel."}),"\n",(0,a.jsx)(t.h3,{id:"recommendation",children:"Recommendation"}),"\n",(0,a.jsx)(t.p,{children:"USDC and FLOW are the recommended payment methods for FCL-powered apps, due to their ease of integration, stability and widespread ecosystem support."})]})}const c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}}}]);