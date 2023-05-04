"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9176],{16720:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>c,metadata:()=>a,toc:()=>d});t(67294);var o=t(85893),s=t(11151);const c={title:"Leased FLOW Account Setup",description:"Configure an account to hold leased FLOW"},r=void 0,a={unversionedId:"concepts/nodes/node-operation/leased-account-setup",id:"concepts/nodes/node-operation/leased-account-setup",title:"Leased FLOW Account Setup",description:"Configure an account to hold leased FLOW",source:"@site/docs/concepts/nodes/node-operation/leased-account-setup.mdx",sourceDirName:"concepts/nodes/node-operation",slug:"/concepts/nodes/node-operation/leased-account-setup",permalink:"/docs/concepts/nodes/node-operation/leased-account-setup",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/node-operation/leased-account-setup.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683159163,formattedLastUpdatedAt:"May 4, 2023",frontMatter:{title:"Leased FLOW Account Setup",description:"Configure an account to hold leased FLOW"},sidebar:"tutorialSidebar",previous:{title:"Starting Your Nodes",permalink:"/docs/concepts/nodes/node-operation/guides/starting-nodes"},next:{title:"Machine Accounts for Existing Node Operators",permalink:"/docs/concepts/nodes/node-operation/machine-existing-operator"}},i={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Setup",id:"setup",level:2},{value:"Configure a Creator Account",id:"configure-a-creator-account",level:3},{value:"Receive Account Creator Capability",id:"receive-account-creator-capability",level:3},{value:"Account Creation",id:"account-creation",level:2},{value:"1. Create Both Accounts for the User",id:"1-create-both-accounts-for-the-user",level:3},{value:"2. Create the Shared Account for an Existing User Account",id:"2-create-the-shared-account-for-an-existing-user-account",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code",em:"em",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t,{type:"warning",children:[(0,o.jsx)(n.p,{children:"This guide is for custodians and wallet providers who wish to create user accounts\nthat can hold locked FLOW tokens from the Flow token sale."}),(0,o.jsxs)(n.p,{children:["If you already have an account and wish to stake tokens,\nplease see our guides on staking ",(0,o.jsx)(n.a,{href:"../staking/",children:"here"}),"."]})]}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"This guide covers the technical integration required for custodians to create\naccounts that store locked FLOW tokens for users."}),"\n",(0,o.jsx)(n.p,{children:"Before discussing the account creation process, some terminology needs to be defined:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Flow Token Admin"})," - The user who controls the locked and vesting tokens from the\nFlow Token sale. This user maintains a record of users, their account addresses,\nand how many Flow tokens they will receive according to their vesting schedule.\nThis user also is required to co-sign any transactions that transfer locked tokens\nbefore they have been unlocked via the vesting schedule."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"User"})," - A user who has bought Flow tokens in the Flow token sale or auction."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Custody/Wallet Provider"})," - A service that is managing accounts on behalf of users."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Every user who holds locked FLOW tokens gets two accounts."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Account 1 - User Account:"})," This is the user's normal Flow account.\nThis account is completely controlled by the user. It can have already been created by\nthe custody provider or can be created along with the user's second account."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Account 2 - Lease Admin Account:"})," This account holds leased tokens used to stake your node. The key for this\naccount belongs to the lease provider (1000 weight). Any transactions that directly access this account need to be signed\nby this key."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"User Account"})," will include an object that manages access to\nthe staking functionality contained in the lease admin account."]}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.h3,{id:"configure-a-creator-account",children:"Configure a Creator Account"}),"\n",(0,o.jsxs)(n.p,{children:["As the custodian, you must configure a Flow account that you will use to\ncreate user accounts. This is called your ",(0,o.jsx)(n.strong,{children:"creator account"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You can convert an existing account into a ",(0,o.jsx)(n.strong,{children:"creator account"})," by running\nthe ",(0,o.jsx)(n.strong,{children:"Set Up Creator Account"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.01"}),") transaction."]}),"\n",(0,o.jsxs)(n.p,{children:["This transaction creates an ",(0,o.jsx)(n.code,{children:"AccountCreator"})," object and stores it in the custodian's account.\nIt also publishes a capability that allows the token admin to grant the custodian\nthe authority to register locked token accounts."]}),"\n",(0,o.jsx)(n.h3,{id:"receive-account-creator-capability",children:"Receive Account Creator Capability"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:(0,o.jsx)(n.strong,{children:"Note: Once you reach this step, please contact the token admin."})})}),"\n",(0,o.jsx)(n.p,{children:"After you have set up your creator account,\nthe token admin needs to submit one more transaction\nto enable your account to register new user accounts to receive locked tokens."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Deposit Account Creator"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-admin",children:"TA.06"}),") transaction\nmust be signed and authorized by the token admin account. It requires the\nfollowing arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"custodyProviderAddress"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Address"})}),(0,o.jsx)(n.td,{children:"The address of the custodian's account."})]})})]}),"\n",(0,o.jsx)(n.p,{children:"This transaction gives the account registration capability to the custodian's creator account\nthat was configured in the previous transaction."}),"\n",(0,o.jsx)(n.h2,{id:"account-creation",children:"Account Creation"}),"\n",(0,o.jsx)(n.p,{children:"When a custodian uses these transactions, they must also ensure that\nthe token admin knows which account addresses map to which users. This is so the token\nadmin knows which accounts correspond to which lease recipient."}),"\n",(0,o.jsx)(n.h3,{id:"1-create-both-accounts-for-the-user",children:"1. Create Both Accounts for the User"}),"\n",(0,o.jsxs)(n.p,{children:["If your user does not have a regular account created for them yet, you must\ncreate both accounts using the ",(0,o.jsx)(n.strong,{children:"Create Shared Lease Accounts"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.02"}),")\ntransaction with the following arguments:"]}),"\n","\n",(0,o.jsx)(n.h3,{id:"2-create-the-shared-account-for-an-existing-user-account",children:"2. Create the Shared Account for an Existing User Account"}),"\n",(0,o.jsx)(n.p,{children:"If your user already has a personal account allocated to them, you can run a transaction\nthat creates the shared account."}),"\n",(0,o.jsx)(t,{type:"warning",children:(0,o.jsxs)(n.p,{children:["This transaction ",(0,o.jsx)(n.strong,{children:"MUST"})," also be signed and authorized by the existing user account.\nIt needs this because it needs to have access to the user's private storage and Authorized access."]})}),"\n",(0,o.jsxs)(n.p,{children:["To attach a shared account to an existing user account,\nrun the ",(0,o.jsx)(n.strong,{children:"Create Only Shared Account"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#custodian",children:"C.03"}),")\ntransaction with the following arguments:"]}),"\n","\n",(0,o.jsx)(n.p,{children:"TODO: Key setup for leased token account"}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"TODO: Summary"}),"\n"]})}const u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}}}]);