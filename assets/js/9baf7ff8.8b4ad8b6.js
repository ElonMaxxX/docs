"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[26790],{43879:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>h});n(67294);var i=n(85893),s=n(11151);const a={sidebar_position:5},o="Fees",c={unversionedId:"concepts/fees",id:"concepts/fees",title:"Fees",description:"Transaction Fees",source:"@site/docs/concepts/fees.md",sourceDirName:"concepts",slug:"/concepts/fees",permalink:"/docs/next/concepts/fees",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/fees.md",tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1693500784,formattedLastUpdatedAt:"Aug 31, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"concepts",previous:{title:"Scripts",permalink:"/docs/next/concepts/scripts"},next:{title:"Events",permalink:"/docs/next/concepts/events"}},r={},h=[{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"<strong>Fee Structure</strong>",id:"fee-structure",level:3},{value:"Storage",id:"storage",level:2},{value:"Storage Capacity of the Payer",id:"storage-capacity-of-the-payer",level:3},{value:"Storage Used",id:"storage-used",level:3}];function d(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p",h3:"h3",strong:"strong",img:"img",ul:"ul",li:"li",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",a:"a"},(0,s.ah)(),e.components),{Callout:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"fees",children:"Fees"}),"\n",(0,i.jsx)(t.h2,{id:"transaction-fees",children:"Transaction Fees"}),"\n",(0,i.jsx)(t.p,{children:"A transaction fee is a cost paid in Flow by the payer account and is required for a transaction to be included in the Flow blockchain. Fees are necessary for protecting the network against spam, and infinite running transactions and to provide monetary incentives for participants that make up the Flow network."}),"\n",(0,i.jsx)(t.p,{children:"A transaction fee is paid regardless of whether a transaction succeeds or fails. If the payer account doesn\u2019t have sufficient Flow balance to pay for the transaction fee, the transaction will fail. We can limit the transaction fee to some extent by providing the gas limit value when submitting the transaction."}),"\n",(0,i.jsx)(t.h3,{id:"fee-structure",children:(0,i.jsx)(t.strong,{children:"Fee Structure"})}),"\n",(0,i.jsx)(t.p,{children:"Each transaction fee consits of three components: execution fee, inclusion fee, and network surge factor."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(71941).Z+"",loading:"lazy",alt:"Screenshot 2023-08-17 at 17.16.32.png",width:"782",height:"186"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Execution Fee"})}),"\n",(0,i.jsx)(t.p,{children:"The execution effort for a transaction is determined by the code path the transaction takes and the actions it does. The actions that have an associated execution effort cost can be separated into four broad buckets:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Normal lines of cadence, loops, or function calls"}),"\n",(0,i.jsx)(t.li,{children:"Reading data from storage, charged per byte read"}),"\n",(0,i.jsx)(t.li,{children:"Writing data to storage, charged per byte written"}),"\n",(0,i.jsx)(t.li,{children:"Account creation"}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Transaction Type"}),(0,i.jsx)(t.th,{children:"Estimated cost (FLOW)"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"FT transfer"}),(0,i.jsx)(t.td,{children:"0.00000185"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Mint a small NFT (heavily depends on the NFT size)"}),(0,i.jsx)(t.td,{children:"0.0000019"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Empty Transaction"}),(0,i.jsx)(t.td,{children:"0.000001"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Add key to an account"}),(0,i.jsx)(t.td,{children:"0.000001"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Create 1 Account"}),(0,i.jsx)(t.td,{children:"0.00000315"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Create 10 accounts"}),(0,i.jsx)(t.td,{children:"0.00002261"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Deploying a contract that is ~50kb"}),(0,i.jsx)(t.td,{children:"0.00002965"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Inclusion Fee"})}),"\n",(0,i.jsx)(t.p,{children:"The inclusion effort of a transaction represents the work needed for:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Including the transaction in a block"}),"\n",(0,i.jsx)(t.li,{children:"Transporting the transaction information from node to node"}),"\n",(0,i.jsx)(t.li,{children:"Verifying transaction signatures"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Right now, the inclusion effort is always 1.0 and the inclusion effort cost is fixed to\xa0",(0,i.jsx)(t.code,{children:"0.000001"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Surge Factor"})}),"\n",(0,i.jsxs)(t.p,{children:["In the future, a network surge will be applied when the network is busy due to an increased influx of transactions required to be processed or a decrease in the ability to process transactions. Right now, the network surge is fixed to\xa0",(0,i.jsx)(t.code,{children:"1.0"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Currently, both the inclusion fee and surge factor don\u2019t represent any significant Flow fees. Keep in mind this can change in the future."}),"\n",(0,i.jsx)(t.h2,{id:"storage",children:"Storage"}),"\n",(0,i.jsx)(t.p,{children:"Each Flow account has associated storage used. The account's storage used is the byte size of all the data stored in the account's storage. Accounts also have a storage capacity, which is directly tied to the amount of Flow tokens an account has. The account can, without any additional cost, use any amount of storage up to its storage capacity.\xa0"}),"\n",(0,i.jsx)(a,{type:"warning",children:(0,i.jsx)(t.p,{children:"If a transaction puts an account over storage capacity, that transaction fails and is reverted. Likewise, if a transaction would drop an account's balance below 0.001 Flow tokens, which is the minimum an account can have, the transaction would also fail."})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Storage Capacity"})}),"\n",(0,i.jsx)(t.p,{children:"The storage capacity of an account is dictated by the amount of FLOW it has.\xa0"}),"\n",(0,i.jsx)(a,{type:"danger",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"minimum amount of FLOW an account can have is 0.001"}),". This minimum is provided by the account creator at account creation."]})}),"\n",(0,i.jsx)(t.p,{children:"The minimum account reservation ensures that most accounts won't run out of storage capacity if anyone deposits anything (like an NFT) to the account."}),"\n",(0,i.jsx)(t.p,{children:"Currently, the amount required to store 100 MB in account storage is 1 Flow."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(53588).Z+"",loading:"lazy",alt:"Screenshot 2023-08-17 at 17.27.50.png",width:"455",height:"107"})}),"\n",(0,i.jsx)(t.p,{children:"Please note that storing data in an account on Flow doesn\u2019t charge tokens from the account, it just makes sure you will keep the tokens as a reserve. Once the storage is freed up you can transfer the Flow tokens."}),"\n",(0,i.jsxs)(t.h3,{id:"storage-capacity-of-the-payer",children:["Storage Capacity of the Payer",(0,i.jsx)(t.a,{href:"/docs/next/concepts/fees#storage-capacity-of-the-payer"})]}),"\n",(0,i.jsx)(t.p,{children:"The storage capacity of the Payer of a transaction is generally computed the same way as the capacity of any other account, however, the system needs to account for the transaction fees the payer will incur at the end of the transaction. The final transaction fee amount is not fully known at this step, only when accounts are checked for storage compliance. If their storage used is more than their storage capacity, the transaction will fail."}),"\n",(0,i.jsx)(t.p,{children:"Because of this, the payer's balance is conservatively considered to be lower by the maximum possible transaction fees, when checking for storage compliance. The maximum transaction fee of a specific transaction is the transaction fee as if the transaction would have used up all of its execution effort limit."}),"\n",(0,i.jsxs)(t.h3,{id:"storage-used",children:["Storage Used",(0,i.jsx)(t.a,{href:"/docs/next/concepts/fees#storage"})]}),"\n",(0,i.jsx)(t.p,{children:"All data that is in an account's storage counts towards storage used. Even when an account is newly created it is not empty. There are already some items in its storage:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Metadata that marks that the account exists."}),"\n",(0,i.jsx)(t.li,{children:"An empty FLOW vault, and stored receiver capability."}),"\n",(0,i.jsx)(t.li,{children:"Public keys to the account if the account was created with keys."}),"\n",(0,i.jsx)(t.li,{children:"Smart contracts deployed on the account if the account was created with contracts."}),"\n",(0,i.jsx)(t.li,{children:"The value of the account\u2019s storage used as an unsigned integer."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Adding additional keys, smart contracts, capabilities, resources, etc. to the account counts towards storage used."}),"\n",(0,i.jsx)(t.p,{children:"Data stored on the Flow blockchain is stored in a key-value ledger. Each item\u2019s key contains the address that owns the item and the path to the item. An account can have many keys, therefore flow considers the account key items are stored with. This means that the storage used by each item is the byte length of the item plus the byte length of the item\u2019s key."})]})}const l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},71941:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Screenshot_2023-08-17_at_17.16.32-8678c30133be0ae0b2503d108f75c357.png"},53588:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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0xjH/vC0lceQgIxjSEPrIiACIiACIlAhEDWsKqIiIAIiIAIi0AkEZBw74SkqDyIgAiIgAlEJyDhGxSllIiACIiACnUBAxrETnqLyIAIiIAIiEJWAjGNUnFImAiIgAiLQCQSiG0c/i//kr5R3AiDlQQREQAREoP8RiPrJKvueYxcfRm3wVfT+h1k5FgEREAERKBOBqJ6jzYxj8zGWCYTSKgIiUEuAKFD4QeTao9oSgc4mENU4djYq5U4E+g8Bpo6bOHas/9BxOI1c/yGgnPZ3AjKO/f0NUP5FQAREQAS6EZBx7IYk344///zTffTRR/lO1lkiIAIiIAKlIiDj2MPHddttt7k999zTjRkzpocadJkIiIAIiEC7EpBx7OGT+emnn/yV48eP76EGXSYC5SDQpZ7n5XhQSmVUAjKOPcT577//+it/+eWXHmrQZWkEfv/9d/fHH3+kHcq9L4aO3DeLcOI777zjPvnkE0eovl1kkip97fIolI4+IhB1nKPloavyweNOFzOOv/32W6dntWX5e+CBB9w555zjhg0b5o499lgHY35TTJG/DhdDR8syXLnRy5VeoQcffLC/5bTTTuuGDh3q5plnHjfvvPO6BRdc0P/mmGOOViZJ9xIBEagQiGoc+Vo4EwDYeMeyEqZApjZPwfXhhx+6b7/91k2cONH9+uuvbv7553e77rqr++eff3z2pp566rJms63S/dZbb7nRo0f7NL3wwgvukEMOcW+++abDC1ym8l5tueWWboMNNmiY5hg6Gt6g4IPk9fnnn/e/8FYYTRiss846/jf99NOHh7UuAiJQAIHSfuz49ttvd4899pjbd9993WKLLdYrNBg6jCHth/bDGNYTavdLVLzjsZVxYKussoo77bTT6p2q/ZMJECq9/PLL3QcffOBOOeUUN80009SwOf74490TTzxRsy+5gXE45phj3JRTTpk85Ldj6EhVnGMnho2w6EwzzZTj7NpTHn30UffGG2+4r7/+2j300EO1BxNbGMq99trLbbvttm7AgAGJo/E2mQCAcY5EgQZPrrTE0y5NItD+BKJ6jq3K7g033OALWu43YcKEHhlHDOL999/vnnzySYenQuFWT+aaay4399xz+xDfSy+95AtBaxfr6uqqd5n2TyYA6xNOOME988wzfs+kSZNqjCNDYpKGcckll3QLL7yw+/zzz92LL77o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"}}]);