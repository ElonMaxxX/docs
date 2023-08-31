"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[70717],{66413:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>a});n(67294);var d=n(85893),i=n(11151);const l={},o=void 0,s={unversionedId:"tooling/flow-go-sdk/error-codes",id:"version-stable/tooling/flow-go-sdk/error-codes",title:"error-codes",description:"Error Codes",source:"@site/versioned_docs/version-stable/tooling/flow-go-sdk/error-codes.mdx",sourceDirName:"tooling/flow-go-sdk",slug:"/tooling/flow-go-sdk/error-codes",permalink:"/docs/tooling/flow-go-sdk/error-codes",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tooling/flow-go-sdk/error-codes.mdx",tags:[],version:"stable",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1693500784,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{},sidebar:"tooling",previous:{title:"Flow Go SDK",permalink:"/docs/tooling/flow-go-sdk/"},next:{title:"migration-v0.25.0",permalink:"/docs/tooling/flow-go-sdk/migration-v0.25.0"}},c={},a=[{value:"Error Codes",id:"error-codes",level:2},{value:"1006",id:"1006",level:3},{value:"1007",id:"1007",level:3},{value:"1008",id:"1008",level:3},{value:"1009",id:"1009",level:3},{value:"1051",id:"1051",level:3},{value:"1052",id:"1052",level:3},{value:"1053",id:"1053",level:3},{value:"1054",id:"1054",level:3},{value:"1055",id:"1055",level:3},{value:"1056",id:"1056",level:3},{value:"1057",id:"1057",level:3},{value:"1101",id:"1101",level:3},{value:"1103",id:"1103",level:3},{value:"1105",id:"1105",level:3},{value:"1106",id:"1106",level:3},{value:"1107",id:"1107",level:3},{value:"1108",id:"1108",level:3},{value:"1109",id:"1109",level:3},{value:"1110",id:"1110",level:3},{value:"1111",id:"1111",level:3},{value:"1112",id:"1112",level:3},{value:"1113",id:"1113",level:3},{value:"1114",id:"1114",level:3},{value:"1115",id:"1115",level:3},{value:"1116",id:"1116",level:3},{value:"1118",id:"1118",level:3},{value:"1201",id:"1201",level:3},{value:"1202",id:"1202",level:3},{value:"1203",id:"1203",level:3},{value:"1204",id:"1204",level:3},{value:"1206",id:"1206",level:3},{value:"1251",id:"1251",level:3},{value:"2000",id:"2000",level:3},{value:"2001",id:"2001",level:3},{value:"2002",id:"2002",level:3},{value:"2003",id:"2003",level:3},{value:"2004",id:"2004",level:3},{value:"2006",id:"2006",level:3},{value:"2007",id:"2007",level:3}];function t(e){const r=Object.assign({h2:"h2",p:"p",a:"a",h3:"h3",strong:"strong",code:"code"},(0,i.ah)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(r.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,d.jsxs)(r.p,{children:["List of error codes returned from failing transactions and scripts. The error code has an accompanied error message that usually gives more clarification. This list is meant to give more information and helpful hints.\n",(0,d.jsx)(r.a,{href:"https://github.com/onflow/flow-go/blob/master/fvm/errors/codes.go",children:"Code file"})]}),"\n",(0,d.jsx)(r.h3,{id:"1006",children:"1006"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidProposalSignatureError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1007",children:"1007"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidProposalSeqNumberError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1007] invalid proposal key: public key 0 on account xxx has sequence number xxx, but given xxx"})]}),"\n",(0,d.jsx)(r.h3,{id:"1008",children:"1008"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidPayloadSignatureError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1008] invalid payload signature: public key 0 on account xxx does not have a valid signature: signature is not valid"})]}),"\n",(0,d.jsx)(r.h3,{id:"1009",children:"1009"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidEnvelopeSignatureError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1009] invalid envelope key: public key 1 on account xxx does not have a valid signature: signature is not valid"})]}),"\n",(0,d.jsx)(r.h3,{id:"1051",children:"1051"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeValueError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1051] invalid value (xxx): invalid encoded public key value: rlp: expected input list for flow.runtimeAccountPublicKeyWrapper..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1052",children:"1052"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidArgumentError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1052] transaction arguments are invalid: (argument is not json decodable: failed to decode value: runtime error: slice bounds out of range [:2] with length 0)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1053",children:"1053"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidAddressError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1054",children:"1054"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidLocationError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1054] location (../contracts/FungibleToken.cdc) is not a valid location: expecting an AddressLocation, but other location types are passed ../contracts/FungibleToken.cdc"})]}),"\n",(0,d.jsx)(r.h3,{id:"1055",children:"1055"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeAccountAuthorizationError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1055] authorization failed for account e85d442d61a611d8: payer account does not have sufficient signatures (1 < 1000)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1056",children:"1056"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeOperationAuthorizationError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1056] (RemoveContract) is not authorized: removing contracts requires authorization from specific accounts goroutine 5688834491 [running]:"})]}),"\n",(0,d.jsx)(r.h3,{id:"1057",children:"1057"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeOperationNotSupportedError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1101",children:"1101"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeCadenceRunTimeError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1101] cadence runtime error Execution failed: error: pre-condition failed: Amount withdrawn must be less than or equal than the balance of the Vault"})]}),"\n",(0,d.jsx)(r.h3,{id:"1103",children:"1103"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeStorageCapacityExceeded"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1103] The account with address (xxx) uses 96559611 bytes of storage which is over its capacity (96554500 bytes). Capacity can be increased by adding FLOW tokens to the account."})]}),"\n",(0,d.jsx)(r.h3,{id:"1105",children:"1105"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeEventLimitExceededError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1105] total event byte size (256200) exceeds limit (256000)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1106",children:"1106"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeLedgerInteractionLimitExceededError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1106] max interaction with storage has exceeded the limit (used: 20276498 bytes, limit 20000000 bytes)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1107",children:"1107"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeStateKeySizeLimitError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1108",children:"1108"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeStateValueSizeLimitError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1109",children:"1109"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeTransactionFeeDeductionFailedError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1109] failed to deduct 0 transaction fees from 14af75b8c487333c: Execution failed: f919ee77447b7497.FlowFees:97:24"})]}),"\n",(0,d.jsx)(r.h3,{id:"1110",children:"1110"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeComputationLimitExceededError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1110] computation exceeds limit (100)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1111",children:"1111"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeMemoryLimitExceededError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1112",children:"1112"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeCouldNotDecodeExecutionParameterFromState"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1113",children:"1113"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeScriptExecutionTimedOutError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1114",children:"1114"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeScriptExecutionCancelledError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1115",children:"1115"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeEventEncodingError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1116",children:"1116"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInvalidInternalStateAccessError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1118",children:"1118"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeInsufficientPayerBalance"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:" [Error Code: 1118] payer ... has insufficient balance to attempt transaction execution (required balance: 0.00100000)"})]}),"\n",(0,d.jsx)(r.h3,{id:"1201",children:"1201"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeAccountNotFoundError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1201] account not found for address xxx"})]}),"\n",(0,d.jsx)(r.h3,{id:"1202",children:"1202"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeAccountPublicKeyNotFoundError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"[Error Code: 1202] account public key not found for address xxx and key index 3"})]}),"\n",(0,d.jsx)(r.h3,{id:"1203",children:"1203"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeAccountAlreadyExistsError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1204",children:"1204"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeFrozenAccountError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1206",children:"1206"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeAccountPublicKeyLimitError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"1251",children:"1251"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"ErrCodeContractNotFoundError"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2000",children:"2000"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeUnknownFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2001",children:"2001"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeEncodingFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2002",children:"2002"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeLedgerFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2003",children:"2003"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeStateMergeFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2004",children:"2004"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeBlockFinderFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2006",children:"2006"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodeParseRestrictedModeInvalidAccessFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]}),"\n",(0,d.jsx)(r.h3,{id:"2007",children:"2007"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.strong,{children:"FailureCodePayerBalanceCheckFailure"})}),"\n",(0,d.jsxs)(r.p,{children:["Example:\n",(0,d.jsx)(r.code,{children:"..."})]})]})}const x=function(e){void 0===e&&(e={});const{wrapper:r}=Object.assign({},(0,i.ah)(),e.components);return r?(0,d.jsx)(r,Object.assign({},e,{children:(0,d.jsx)(t,e)})):t(e)}}}]);