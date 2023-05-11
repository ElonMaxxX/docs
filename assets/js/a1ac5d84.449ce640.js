"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[435],{27465:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>r});o(67294);var s=o(85893),t=o(11151);const i={title:"Slashing Conditions"},a=void 0,l={unversionedId:"concepts/nodes/slashing",id:"concepts/nodes/slashing",title:"Slashing Conditions",description:"Introduction",source:"@site/docs/concepts/nodes/slashing.mdx",sourceDirName:"concepts/nodes",slug:"/concepts/nodes/slashing",permalink:"/docs/concepts/nodes/slashing",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/slashing.mdx",tags:[],version:"current",lastUpdatedBy:"Bastian M\xfcller",lastUpdatedAt:1683837812,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{title:"Slashing Conditions"},sidebar:"tutorialSidebar",previous:{title:"Flow Port Staking Guide",permalink:"/docs/concepts/nodes/flow-port/staking-guide"},next:{title:"Epochs, Staking & Delegating on Flow",permalink:"/docs/concepts/nodes/staking/"}},d={},r=[{value:"Introduction",id:"introduction",level:2},{value:"Slashing Conditions",id:"slashing-conditions",level:2},{value:"Stages of Slashing",id:"stages-of-slashing",level:2},{value:"Phase 1: Beta",id:"phase-1-beta",level:3},{value:"Phase 2: Testing Slashing Mechanics",id:"phase-2-testing-slashing-mechanics",level:3},{value:"Phase 3: BFT",id:"phase-3-bft",level:3},{value:"Slashing Challenges",id:"slashing-challenges",level:2},{value:"0. All Nodes",id:"0-all-nodes",level:3},{value:"1. Collection Nodes",id:"1-collection-nodes",level:3},{value:"2. Consensus Nodes",id:"2-consensus-nodes",level:3},{value:"3. Execution Nodes",id:"3-execution-nodes",level:3},{value:"4. Verification Nodes",id:"4-verification-nodes",level:3}];function h(e){const n=Object.assign({h2:"h2",p:"p",a:"a",strong:"strong",ul:"ul",li:"li",h3:"h3"},(0,t.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Flow is a proof-of-stake system, which means holders of FLOW can earn inflationary rewards by staking their FLOW tokens to secure and operate the network. A node can participate in the Flow network by depositing a specific amount of stake (based on role types) thereby making a bonded pledge to participate in the Flow protocol during the upcoming epoch. (An epoch is a finite amount of time defined by the protocol, approximately one week, during which the nodes participate to run the protocol and are responsible for their operations.)"}),"\n",(0,s.jsx)(n.p,{children:"Flow nodes follow the procedures defined in the protocol (based on their role) in order to receive rewards. Any deviation (see Slashing Challenges below) from the protocol can result in decreased reward payments or punishments. Severe infractions, which undermine the safety of the network, can lead to \u201cslashing\u201d, where some or all of the staked tokens are confiscated from the offending node(s)."}),"\n",(0,s.jsx)(n.p,{children:"This reward and punishment structure is designed to guarantee the security of the protocol and optimize performance over time. This document outlines the most severe infractions against the protocol which result in some portion of a node\u2019s stake being taken from them (\u201cslashing conditions\u201d). Enforcing these slashing conditions is critical to ensure the cryptoeconomic security of the protocol. Future documents will describe an incentive structure that encourages system-wide efficiency and speed, by providing bonuses to the most performant nodes and withholding payments to nodes that are unresponsive."}),"\n",(0,s.jsxs)(n.p,{children:["This document assumes a working understanding of the high-level architecture of the Flow blockchain. Readers who are new to Flow or those looking for a refresher are encouraged to read the Protocol Summary ",(0,s.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-roles",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"slashing-conditions",children:"Slashing Conditions"}),"\n",(0,s.jsxs)(n.p,{children:["Any violation of the Flow protocol that could result in staked tokens being seized from the offending nodes is called ",(0,s.jsx)(n.strong,{children:"Slashable Behaviour."})," In order for the tokens to be seized, the data necessary to prove the occurrence of Slashable Behaviour must be combined with the data necessary to attribute the behaviour to the node(s) responsible into a ",(0,s.jsx)(n.strong,{children:"Slashing Witness"}),". (A reduction of rewards, e.g. due to lack of active participation, is not formally included in our definition of slashing.) The Flow protocol considers only server threats to safety and liveness to be slashable conditions and as such, there are no performance related slashing penalties. The one exception is in the case of missing Collections (see the section on MCC below), where a widespread failure to respond by a large number of nodes is presumed to be coordinated and therefore punishable with slashing."]}),"\n",(0,s.jsxs)(n.p,{children:["Most Slashable Behaviour in Flow can be detected and attributed to the offender by a single honest node observing that behaviour. (In other words, one node can generate a Slashing Witness without coordinating with other nodes.) However, some Slashable Behaviour can only be detected and attributed by combining information from multiple nodes. In those situations, the node that first detects the potential infraction raises a ",(0,s.jsx)(n.strong,{children:"Slashing Challenge"}),". When a challenge is raised, other nodes are expected to provide additional information which can be combined with the original challenge into a definitive Slashing Witness that is used to adjudicate the challenge. Each type of Slashing Challenge depends on different information provided from a different subset of nodes, the details of which are provided below."]}),"\n",(0,s.jsx)(n.p,{children:"Flow adheres to a number of principles in the design of its slashing rules:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Only Consensus Nodes can perform slashing, and only by following the BFT consensus mechanism defined in the protocol. As such, a super-majority of Consensus Nodes must inspect and confirm a Slashing Witness before any punishment is levied."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All Slashing Witnesses are objectively decidable. Given the current protocol state (maintained by the Consensus Nodes) and a well-formed Slashing Witness, all non-Byzantine Consensus Nodes will deterministically come to the same conclusion as to which node or nodes should be slashed (if any) and the amount of stake to be seized."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All Slashing Behaviour in Flow requires active malfeasance on the part of the offending node. In other words, a node will only be slashed if it takes an action against the rules of the protocol, and it will not be slashed if it fails to take an action prescribed by the protocol. (\u201cIf your machine is crashed, you won\u2019t get slashed.\u201d) The one exception is in the case of missing Collections (see the section on MCC below), where a widespread failure to respond by a large number of nodes is presumed to be coordinated and therefore punishable with slashing."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Flow makes no attempt to detect and punish liveness failures within the protocol. A liveness failure across the network functionally slashes the stake of any participants excluded from participating in the reboot (since their stake is locked in a non-functional network). Community analysis can determine which nodes were responsible for the failure and exclude those Byzantine actors from the new instance."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Any staked node of Flow can submit a Slashing Witness for any Slashable Behaviour, regardless of its role. (For example, a Collection Node could submit a Slashing Witness for an invalid execution receipt, even though the protocol doesn\u2019t require Collection Nodes to verify execution receipts.)"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Submitting an invalid Slashing Witness is Slashable Behaviour. We treat the invalid Slashing Witness itself as the Slashing Witness for that case."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"stages-of-slashing",children:"Stages of Slashing"}),"\n",(0,s.jsx)(n.p,{children:"Transitioning to a rigorous staking protocol in which all slashable conditions are checked, enforced, and punished will take place over three phases. The Slashing Challenges section below outlines the various challenges which may be submitted against an offending node but these challenges will not be fully enforced until Phase 3 of the network."}),"\n",(0,s.jsx)(n.h3,{id:"phase-1-beta",children:"Phase 1: Beta"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In the beta phase of the network, the expectation is that nodes are running error detection and logging but not submitting formal challenges. Any errors found may be submitted to the Flow team for additional testing and security improvements."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"phase-2-testing-slashing-mechanics",children:"Phase 2: Testing Slashing Mechanics"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"At this time the slashing mechanisms will be implemented and require testing. Formal challenges should be raised and the protocol will follow the complete, formal mechanics for arbitrating challenges and slashing perpetrators, but no real slashing will take place."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"phase-3-bft",children:"Phase 3: BFT"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"By now, the network has been security-hardened and tested and valid challenges result in real slashing of the offending node."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"slashing-challenges",children:"Slashing Challenges"}),"\n",(0,s.jsx)(n.h3,{id:"0-all-nodes",children:"0. All Nodes"}),"\n",(0,s.jsx)(n.p,{children:"**Invalid Report Witness (IRW): **if any nodes report an invalid/inaccurate witness, an invalid report witness will be reported by the Consensus Nodes, and the node(s) reporting the witness get slashed."}),"\n",(0,s.jsx)(n.h3,{id:"1-collection-nodes",children:"1. Collection Nodes"}),"\n",(0,s.jsx)(n.p,{children:"**1.1 Missing Collection Challenge (MCC): ** Collection nodes are responsible for storing collection content (all transactions) for any collection which they guarantee during the current epoch and the first 1000 blocks of the next epoch. During this time they have to respond to any collection request from staked execution, verification and Consensus Nodes and should respond in a timely manner (specific timeout). If an Execution Node or a Verification Node doesn't receive the response from any of the collection guarantors (Collection Nodes who signed a collection), they can raise a Missing Collection Challenge and broadcast it to the Consensus Nodes to evaluate."}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes randomly contact some of the guarantors. if Collection Nodes don't respond, a portion of their stakes will be seized. if the amount of their stake goes to less than half, they will be fully slashed. Then the Consensus Nodes notify all the Execution Nodes to skip that collection. if any of the Collection Nodes respond, Consensus Nodes redirect the collection content to the Execution Nodes but will also set small penalties both for all the guarantors and that Execution Node (according to their revenue ratio)."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1.2 Invalid Collection Witness (ICW):"})," Collection nodes are responsible for responding to collection content queries by collection hash from any staked nodes. The collection hash is the hash of an ordered list of transaction hashes. If a collection content sent by the Collection Node turns out to be invalid, any staked node can report an Invalid Collection Witness. This includes cases where:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"the content is malformed or incomplete,"}),"\n",(0,s.jsx)(n.li,{children:"there exists an invalid transaction inside the collection, or"}),"\n",(0,s.jsx)(n.li,{children:"the collection hash doesn't match (inside collection guarantee)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Adjudication:"})," Consensus nodes evaluate the content of the collection, if the collection is found invalid, the Collection Node who signed the content is slashed."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1.3 Double Collection Proposal Witness (DCPW):"})," Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires Collection nodes to propose the collection and aggregate votes from others. During the collection consensus, if a Collection Node proposes more than one proposal, any other Collection Node inside the cluster can report a Double Collection Proposal Witness (including both proposals)."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the content and signatures of these two proposals, and if the witness turns out to be valid, the Collection Node who proposed two collections will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"1.4 Double Collection Voting Witness (DCVW):"})," Collection nodes of a cluster run a mini consensus inside the cluster to decide on a collection, which requires Collection nodes to propose the collection and aggregate votes from others. During the collection consensus, if a Collection Node votes for more than one collection proposal with identical collection number and size, any other Collection Node inside the cluster can report a Double Collection Voting Witness (including both votes)."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the signatures of these two votes and evaluate them, and if the witness turns out to be valid, the Collection Node who voted two times will get slashed."}),"\n",(0,s.jsx)(n.h3,{id:"2-consensus-nodes",children:"2. Consensus Nodes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2.1 Double Block Proposal Witness (DBPW):"})," Consensus nodes run the consensus (HotStuff algorithm) over blocks. During these consensus steps, if a Consensus Node proposes more than one variation of a block proposal, any other Consensus Node can report a Double Block Proposal Witness (including both proposals). This report will be broadcasted to all other Consensus Nodes."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate content and signatures of both proposals. If the witness turns out to be valid, the Consensus Node who submitted both proposals will get slashed."}),"\n",(0,s.jsx)(n.p,{children:"**2.2 Double Block Voting Witness (DBVW): ** Consensus nodes run the consensus (HotStuff algorithm) over blocks. During the consensus steps, if a Consensus Node votes for more than one block proposal with the same height, any other Consensus Node can report a Double Block Voting Witness (including both votes). This report will be broadcasted to all other Consensus Nodes."}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate content and signatures of both votes and If the witness turns out to be valid, the Consensus Node who submitted both votes will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2.3 Invalid Block Vote Witness (IBVW):"})," If a Consensus Node votes for an invalid block or the content of the vote itself is invalid (e.g. vote for non-existing block), any other Consensus Nodes can report an Invalid Block Vote Witness."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the vote content and signature. If the witness turns out to be valid, the Consensus Node who submitted the faulty vote will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2.4 Invalid Block Proposal Witness (IBPW):"})," If a Consensus Node proposes an invalid block proposal (e.g. quorum certificate without 2/3 vote), any other Consensus Nodes can raise an Invalid Block Proposal Witness."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the proposal content and signature, If the witness turns out to be valid, the Consensus Node who submitted the invalid proposal will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2.5 Invalid Block Witness (IBW):"})," If the block contents returned by any Consensus Node is invalid, any node can raise the Invalid Block Witness:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It is malformed or incomplete"}),"\n",(0,s.jsx)(n.li,{children:"It doesn't match the payload hash provided by the block header"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the block content and signatures. If the witness turns out to be valid, the Consensus Node who signed the block content will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"2.6 Invalid Random Beacon Signature Witness (IRBSW):"})," If any participant of the random beacon returns an invalid signature, an Invalid Random Beacon Signature Witness can be reported by other Consensus Nodes."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Adjudication:"})," Consensus nodes evaluate the random beacon signature. If the witness turns out to be valid, the Consensus Node who signed the invalid random beacon part will get slashed."]}),"\n",(0,s.jsx)(n.h3,{id:"3-execution-nodes",children:"3. Execution Nodes"}),"\n",(0,s.jsx)(n.p,{children:"**3.1 Faulty Computation Challenge (FCC): ** If any of the Verification Nodes find a fault in the execution of transactions by an Execution Node it can raise an FCC challenge. An FCC challenge includes a faulty chunk and all the evidence."}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the challenge, by sending requests for collection contents and chunk data needed to run the faulty chunk and comparing the results against the expected state commitment. If Consensus Nodes detect any fault in the execution of that chunk, the Execution Node(s) who signed the faulty execution receipts will get slashed. And if no fault is found, the Verification Node who raised the challenge will get slashed."}),"\n",(0,s.jsx)(n.p,{children:"**3.2 Conflicting Execution Results Challenge (CERC): ** If two or more variations of execution results are reported by Execution Nodes for a given block. Since only one can be valid, Consensus Nodes raise a conflicting execution results challenge."}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **As soon as this challenge is raised, all the Verification Nodes goes into full check mode (checks all the chunks). The first execution result that receives result approval from at least 2/3 of Verification Nodes is the accurate one, and the other execution results will be considered faulty and Execution Nodes generating those will get slashed. If none of the execution results receive majority approval from Verification Nodes after a very long timeout, all the Consensus Nodes start executing chunks to determine the correct output."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3.3 Invalid Chunk Data Package Witness (ICDPW):"})," If the contents of a chunk data package doesn't match the hash provided inside the execution result, or the contents is invalid, the Verification Nodes can report an Invalid Chunk Data Package Witness."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the content of the chunk data package. If the witness turns out to be valid, the Execution Node(s) who signed the faulty chunk data package will get slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3.4 Missing Chunk Data Package Challenge (MCDPC):"})," If an Execution Node doesn't respond to the chunk data package request by any staked Verification Node, a Missing Chunk Data Package Challenge can be raised by the Verification Node."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **When this challenge is received by the Consensus Nodes, they contact Execution Nodes and ask for the chunk data package. If none of the Execution Nodes respond after a long timeout, all of them get slashed. If any of the Execution Nodes responds with a valid chunk data package, Consensus Nodes redirect the chunk data package to the Verification Nodes but will also set small penalties both for all the Execution Nodes and the challenge raiser (Verification Node) according to their revenue ratio."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3.5 Execution Results Timeout Challenge (ERTC):"})," If no execution receipt received in X number of blocks after the submission of each block, the liveness of the system is compromised and Consensus Nodes can raise an Execution Results Timeout Challenge for all the Execution Nodes."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **When this challenge is received by the Consensus Nodes, they contact Execution Nodes and ask for an update. If none of the Execution Nodes respond after a long timeout, all of them get slashed. If any of the Execution Nodes return the execution receipt, the case is dismissed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"3.6 Invalid Execution Receipt Witness (IERW):"})," If an Execution Node provides an execution receipt that is not valid, the Consensus Nodes can report an Invalid Execution Receipt Witness."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the content of the execution receipt. If the witness turns out to be valid, the Execution Node(s) who signed the invalid execution receipt will get slashed."}),"\n",(0,s.jsx)(n.p,{children:"**3.7 Non-Matching SPoCKs Challenge (NMSC): ** If the SPoCKs provided by the Execution Node don't match the ones provided by the Verification Node, the Consensus Nodes can raise a Non-Matching SPoCKs challenge."}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes have to re-execute the chunk to be able to compute the accurate SPoCKs secret to be able to adjudicate the challenge. This requires requesting the collection and all other data needed for execution from other nodes. Any node which provided invalid SPoCKs will be slashed."}),"\n",(0,s.jsx)(n.h3,{id:"4-verification-nodes",children:"4. Verification Nodes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4.1 Non-Matching SPoCKs Challenge (NMSC):"})," If the SPoCKs provided by the Execution Node don't match the ones provided by the Verification Node, the Consensus Nodes can raise a Non-Matching SPoCKs challenge."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes have to re-execute the chunk to determine the accurate SPoCKs secret which is needed to adjudicate the challenge. This requires requesting the collection and all other data needed for execution from the other nodes. Any node which provided invalid SPoCKs will be slashed."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"4.2 Invalid Result Approval Witness (IRAW):"})," If a Verification Node provides an invalid result approval, the Consensus Nodes can report this witness. This includes cases that a Verification Node sends a result approval for a chunk that was not assigned to the Verification Node (excluding full check mode) or if the SPoCK\u2019s signature doesn't match the public key of the Verification Node."]}),"\n",(0,s.jsx)(n.p,{children:"**Adjudication: **Consensus nodes evaluate the content and signatures of the result approval. If the witness turns out to be valid, the Verification Node who signed that result approval be slashed."})]})}const c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(h,e)})):h(e)}}}]);