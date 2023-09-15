"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[29939],{97780:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});s(67294);var i=s(85893),t=s(11151);const r={sidebar_position:3,title:"App Architecture",description:"Describes building self-custody and app custody applications on Flow Blockchain.",sidebar_custom_props:{icon:"\ud83c\udfd7\ufe0f"}},o="App Architecture on Flow Blockchain",a={unversionedId:"building-on-flow/app-architecture/index",id:"building-on-flow/app-architecture/index",title:"App Architecture",description:"Describes building self-custody and app custody applications on Flow Blockchain.",source:"@site/docs/building-on-flow/app-architecture/index.md",sourceDirName:"building-on-flow/app-architecture",slug:"/building-on-flow/app-architecture/",permalink:"/docs/next/building-on-flow/app-architecture/",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/app-architecture/index.md",tags:[],version:"current",lastUpdatedBy:"Alex Ni",lastUpdatedAt:1694785469,formattedLastUpdatedAt:"Sep 15, 2023",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"App Architecture",description:"Describes building self-custody and app custody applications on Flow Blockchain.",sidebar_custom_props:{icon:"\ud83c\udfd7\ufe0f"}},sidebar:"buildingOnFlow",previous:{title:"Flow Testnet",permalink:"/docs/next/building-on-flow/flow-networks/accessing-testnet"},next:{title:"Differences vs. Other Blockchains",permalink:"/docs/next/building-on-flow/building-vs-other-chains"}},c={},l=[{value:"<strong>Self-Custody Architecture</strong>",id:"self-custody-architecture",level:3},{value:"<strong>App Custody Architecture</strong>",id:"app-custody-architecture",level:3},{value:"Wrapping Up",id:"wrapping-up",level:2}];function d(e){const n=Object.assign({h1:"h1",p:"p",strong:"strong",h3:"h3",img:"img",ul:"ul",li:"li",h2:"h2"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"app-architecture-on-flow-blockchain",children:"App Architecture on Flow Blockchain"}),"\n",(0,i.jsx)(n.p,{children:"The Flow blockchain, with its focus on scalability and user-centric design, offers a unique environment for app development. Designed from the ground up, Flow prioritizes user experience, aiming to bridge the gap to mainstream adoption without compromising on decentralization or security."}),"\n",(0,i.jsxs)(n.p,{children:["While the Flow blockchain offers various architectural patterns, the recommended approaches for developers are ",(0,i.jsx)(n.strong,{children:"Self-Custody"})," and ",(0,i.jsx)(n.strong,{children:"App Custody"}),". These choices align with Flow's ethos of user-centric design and flexibility."]}),"\n",(0,i.jsx)(n.h3,{id:"self-custody-architecture",children:(0,i.jsx)(n.strong,{children:"Self-Custody Architecture"})}),"\n",(0,i.jsx)(n.p,{children:"In a self-custody architecture, users retain direct control over their private keys and assets. This model emphasizes user sovereignty and decentralization, placing the responsibility of asset management squarely on the user's shoulders. While it offers the highest degree of control, it also demands a certain level of technical knowledge and awareness from the user, which can sometimes lead to a more complex user experience."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(2501).Z+"",loading:"lazy",alt:"self-custody.png",width:"657",height:"389"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Architectural Elements"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Wallet"}),": A wallet where users store their private keys and sign transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Frontend"}),": Interfaces directly with the user and their wallet for signing transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method of Talking to Chain"}),": Through FCL directly."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Benefits"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Control"}),": Users maintain full ownership of their assets and transactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security"}),": Direct management of private keys reduces potential points of failure."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Considerations"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"User Experience"}),": The direct control model can lead to a more complex user experience, especially for those unfamiliar with blockchain. Typically, all transactions must be approved by the user, which can be cumbersome."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Key Management"}),": Users are solely responsible for managing, backing up, and ensuring the safe generation and storage of their keys."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ideal Use Cases"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Decentralized Finance (DeFi)"}),": Users interacting with financial protocols while maintaining full control."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Web3 Native Users"}),": Those familiar with blockchain technology and key management."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"app-custody-architecture",children:(0,i.jsx)(n.strong,{children:"App Custody Architecture"})}),"\n",(0,i.jsxs)(n.p,{children:["App custody on Flow offers a unique approach to key management and user experience. Unlike traditional app custody solutions on other blockchains, Flow's App Custody architecture introduces features like ",(0,i.jsx)(n.strong,{children:"account linking"})," and ",(0,i.jsx)(n.strong,{children:"walletless onboarding"}),". These features ensure that while users enjoy a seamless experience, they still have the option to link their accounts and move their assets freely around the Flow ecosystem, providing a balanced approach to key management."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(25272).Z+"",loading:"lazy",alt:"app-custody.png",width:"825",height:"472"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Architectural Elements"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Wallet"}),": Both user custody and app custody wallets coexist."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Frontend"}),": Interfaces for both wallet types and features for account linking and walletless onboarding."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Backend"}),": Manages app-custody user keys and assets.  Also supports direct blockchain interactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Method of Interacting with the Chain"}),": Both direct FCL calls and backend-managed interactions."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Rails"}),": Flexible methods, accommodating both direct and managed transactions."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Benefits"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Walletless Onboarding"}),": Users can start interacting with the app using traditional, familiar web2 mechanics without the initial need for a blockchain wallet."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Streamlined Experience"}),": Transactions can be processed without constant user approval, offering a smoother user journey."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Open Ecosystem with Account Linking"}),": Users can link their accounts, ensuring they can move their assets freely around the Flow ecosystem without being locked into a single application."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Flexibility"}),": Cater to both tech-savvy users and newcomers without compromising on security."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Platform Versatility"}),": The abstraction of the user wallet allows for integration with various platforms, including Unity games, consoles, and mobile applications."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Considerations"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Complexity"}),": Implementing app custody can be more intricate."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Trust"}),": Users need to trust the dApp with certain aspects of their data and assets."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Legal Implications"}),": Operating with app custody may come with legal considerations, depending on jurisdiction and the nature of the dApp. It's essential to consult with legal professionals to ensure compliance."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Ideal Use Cases"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gaming"}),": Seamless gaming without constant transaction approvals."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Social Media Platforms"}),": Earning tokens for content without initial blockchain familiarity."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Loyalty Programs"}),": Earning rewards without deep blockchain setup."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wrapping-up",children:"Wrapping Up"}),"\n",(0,i.jsx)(n.p,{children:"Selecting the right architecture is crucial when developing an app on the Flow blockchain. Your choice will influence not only the technical aspects but also the user experience and overall trust in your application. While Flow offers the tools and flexibility to cater to various needs, it's up to developers to harness these capabilities effectively. Whether you opt for a self-custody or app custody approach, ensure that your decision aligns with the core objectives of your app and the expectations of your users. Making informed architectural decisions will lay a strong foundation for your app's success."})]})}const h=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},25272:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/app-custody-f91cb2f87bdaf50b9c8c9081f1c9e01e.png"},2501:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/self-custody-30dadf36915ad9d32c951cec2bfc2a61.png"}}]);