(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x6080604052606444426200001491906200002c565b62000020919062000093565b60018190555062000129565b6000620000398262000089565b9150620000468362000089565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200007e576200007d620000cb565b5b828201905092915050565b6000819050919050565b6000620000a08262000089565b9150620000ad8362000089565b925082620000c057620000bf620000fa565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b610e0980620001396000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906106cf565b6100d9565b005b610075610414565b60405161008291906109ab565b60405180910390f35b6100a560048036038101906100a091906106a6565b61041d565b6040516100b291906109ab565b60405180910390f35b6100c3610435565b6040516100d09190610929565b60405180910390f35b42601e600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610abd565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d9061096b565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610abd565b92505081905550600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610282929190610586565b50604082015181600201555050606460015442446102a09190610abd565b6102aa9190610abd565b6102b49190610bf4565b6001819055506032600154116103c1576000655af3107a4000905047811115610312576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103099061094b565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161033890610914565b60006040518083038185875af1925050503d8060008114610375576040519150601f19603f3d011682016040523d82523d6000602084013e61037a565b606091505b50509050806103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b59061098b565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104099291906109c6565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561057d57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546104e290610b91565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90610b91565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050815260200160028201548152505081526020019060010190610459565b50505050905090565b82805461059290610b91565b90600052602060002090601f0160209004810192826105b457600085556105fb565b82601f106105cd57805160ff19168380011785556105fb565b828001600101855582156105fb579182015b828111156105fa5782518255916020019190600101906105df565b5b509050610608919061060c565b5090565b5b8082111561062557600081600090555060010161060d565b5090565b600061063c61063784610a1b565b6109f6565b90508281526020810184848401111561065457600080fd5b61065f848285610b4f565b509392505050565b60008135905061067681610dbc565b92915050565b600082601f83011261068d57600080fd5b813561069d848260208601610629565b91505092915050565b6000602082840312156106b857600080fd5b60006106c684828501610667565b91505092915050565b6000602082840312156106e157600080fd5b600082013567ffffffffffffffff8111156106fb57600080fd5b6107078482850161067c565b91505092915050565b600061071c83836108a6565b905092915050565b61072d81610b13565b82525050565b600061073e82610a5c565b6107488185610a7f565b93508360208202850161075a85610a4c565b8060005b8581101561079657848403895281516107778582610710565b945061078283610a72565b925060208a0199505060018101905061075e565b50829750879550505050505092915050565b60006107b382610a67565b6107bd8185610a9b565b93506107cd818560208601610b5e565b6107d681610ce1565b840191505092915050565b60006107ec82610a67565b6107f68185610aac565b9350610806818560208601610b5e565b61080f81610ce1565b840191505092915050565b6000610827603483610aac565b915061083282610cf2565b604082019050919050565b600061084a600f83610aac565b915061085582610d41565b602082019050919050565b600061086d602783610aac565b915061087882610d6a565b604082019050919050565b6000610890600083610a90565b915061089b82610db9565b600082019050919050565b60006060830160008301516108be6000860182610724565b50602083015184820360208601526108d682826107a8565b91505060408301516108eb60408601826108f6565b508091505092915050565b6108ff81610b45565b82525050565b61090e81610b45565b82525050565b600061091f82610883565b9150819050919050565b600060208201905081810360008301526109438184610733565b905092915050565b600060208201905081810360008301526109648161081a565b9050919050565b600060208201905081810360008301526109848161083d565b9050919050565b600060208201905081810360008301526109a481610860565b9050919050565b60006020820190506109c06000830184610905565b92915050565b60006040820190506109db6000830185610905565b81810360208301526109ed81846107e1565b90509392505050565b6000610a00610a11565b9050610a0c8282610bc3565b919050565b6000604051905090565b600067ffffffffffffffff821115610a3657610a35610cb2565b5b610a3f82610ce1565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ac882610b45565b9150610ad383610b45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b0857610b07610c25565b5b828201905092915050565b6000610b1e82610b25565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b7c578082015181840152602081019050610b61565b83811115610b8b576000848401525b50505050565b60006002820490506001821680610ba957607f821691505b60208210811415610bbd57610bbc610c83565b5b50919050565b610bcc82610ce1565b810181811067ffffffffffffffff82111715610beb57610bea610cb2565b5b80604052505050565b6000610bff82610b45565b9150610c0a83610b45565b925082610c1a57610c19610c54565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f57616974203330207365636f6e64730000000000000000000000000000000000600082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b610dc581610b13565b8114610dd057600080fd5b5056fea2646970667358221220cbfbbc2658909cbb134d663b6070bf71453ba6d30fd7e6757bb727acdbe26b0764736f6c63430008040033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b600480360381019061006691906106cf565b6100d9565b005b610075610414565b60405161008291906109ab565b60405180910390f35b6100a560048036038101906100a091906106a6565b61041d565b6040516100b291906109ab565b60405180910390f35b6100c3610435565b6040516100d09190610929565b60405180910390f35b42601e600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610abd565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d9061096b565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610abd565b92505081905550600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506020820151816001019080519060200190610282929190610586565b50604082015181600201555050606460015442446102a09190610abd565b6102aa9190610abd565b6102b49190610bf4565b6001819055506032600154116103c1576000655af3107a4000905047811115610312576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103099061094b565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff168260405161033890610914565b60006040518083038185875af1925050503d8060008114610375576040519150601f19603f3d011682016040523d82523d6000602084013e61037a565b606091505b50509050806103be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b59061098b565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104099291906109c6565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561057d57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546104e290610b91565b80601f016020809104026020016040519081016040528092919081815260200182805461050e90610b91565b801561055b5780601f106105305761010080835404028352916020019161055b565b820191906000526020600020905b81548152906001019060200180831161053e57829003601f168201915b5050505050815260200160028201548152505081526020019060010190610459565b50505050905090565b82805461059290610b91565b90600052602060002090601f0160209004810192826105b457600085556105fb565b82601f106105cd57805160ff19168380011785556105fb565b828001600101855582156105fb579182015b828111156105fa5782518255916020019190600101906105df565b5b509050610608919061060c565b5090565b5b8082111561062557600081600090555060010161060d565b5090565b600061063c61063784610a1b565b6109f6565b90508281526020810184848401111561065457600080fd5b61065f848285610b4f565b509392505050565b60008135905061067681610dbc565b92915050565b600082601f83011261068d57600080fd5b813561069d848260208601610629565b91505092915050565b6000602082840312156106b857600080fd5b60006106c684828501610667565b91505092915050565b6000602082840312156106e157600080fd5b600082013567ffffffffffffffff8111156106fb57600080fd5b6107078482850161067c565b91505092915050565b600061071c83836108a6565b905092915050565b61072d81610b13565b82525050565b600061073e82610a5c565b6107488185610a7f565b93508360208202850161075a85610a4c565b8060005b8581101561079657848403895281516107778582610710565b945061078283610a72565b925060208a0199505060018101905061075e565b50829750879550505050505092915050565b60006107b382610a67565b6107bd8185610a9b565b93506107cd818560208601610b5e565b6107d681610ce1565b840191505092915050565b60006107ec82610a67565b6107f68185610aac565b9350610806818560208601610b5e565b61080f81610ce1565b840191505092915050565b6000610827603483610aac565b915061083282610cf2565b604082019050919050565b600061084a600f83610aac565b915061085582610d41565b602082019050919050565b600061086d602783610aac565b915061087882610d6a565b604082019050919050565b6000610890600083610a90565b915061089b82610db9565b600082019050919050565b60006060830160008301516108be6000860182610724565b50602083015184820360208601526108d682826107a8565b91505060408301516108eb60408601826108f6565b508091505092915050565b6108ff81610b45565b82525050565b61090e81610b45565b82525050565b600061091f82610883565b9150819050919050565b600060208201905081810360008301526109438184610733565b905092915050565b600060208201905081810360008301526109648161081a565b9050919050565b600060208201905081810360008301526109848161083d565b9050919050565b600060208201905081810360008301526109a481610860565b9050919050565b60006020820190506109c06000830184610905565b92915050565b60006040820190506109db6000830185610905565b81810360208301526109ed81846107e1565b90509392505050565b6000610a00610a11565b9050610a0c8282610bc3565b919050565b6000604051905090565b600067ffffffffffffffff821115610a3657610a35610cb2565b5b610a3f82610ce1565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610ac882610b45565b9150610ad383610b45565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610b0857610b07610c25565b5b828201905092915050565b6000610b1e82610b25565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610b7c578082015181840152602081019050610b61565b83811115610b8b576000848401525b50505050565b60006002820490506001821680610ba957607f821691505b60208210811415610bbd57610bbc610c83565b5b50919050565b610bcc82610ce1565b810181811067ffffffffffffffff82111715610beb57610bea610cb2565b5b80604052505050565b6000610bff82610b45565b9150610c0a83610b45565b925082610c1a57610c19610c54565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008201527f616e2074686520636f6e7472616374206861732e000000000000000000000000602082015250565b7f57616974203330207365636f6e64730000000000000000000000000000000000600082015250565b7f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008201527f6e74726163742e00000000000000000000000000000000000000000000000000602082015250565b50565b610dc581610b13565b8114610dd057600080fd5b5056fea2646970667358221220cbfbbc2658909cbb134d663b6070bf71453ba6d30fd7e6757bb727acdbe26b0764736f6c63430008040033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,b){f.exports=b(61)},44:function(f,e,b){},46:function(f,e,b){},51:function(f,e){},61:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(32),c=b.n(n),r=(b(44),b(20)),s=b(2),d=b.n(s),o=b(13),u=b(21),i=(b(46),b(12)),l=b(33);b(47).config();var p="0x6b3248522e754DCb91b03A22bD55De4f15E1E20B";function m(){var f=Object(a.useState)(""),e=Object(u.a)(f,2),b=e[0],t=e[1],n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],m=c[1],v=Object(a.useState)([]),w=Object(u.a)(v,2),g=w[0],y=w[1],h=Object(a.useState)(0),x=Object(u.a)(h,2),k=x[0],E=x[1],W=l.abi,j=function(){var f=Object(o.a)(d.a.mark((function f(e){return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:m(e.target.value);case 1:case"end":return f.stop()}}),f)})));return function(e){return f.apply(this,arguments)}}(),O=function(){var f=Object(o.a)(d.a.mark((function f(e){var b,a,t,n,c,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,b=window,a=b.ethereum,e.preventDefault(),!a){f.next=21;break}return t=new i.a.providers.Web3Provider(a),n=t.getSigner(),c=new i.a.Contract(p,W,n),f.next=9,c.getTotalWaves();case 9:return f.sent,f.next=12,c.wave(s,{gasLimit:3e5});case 12:return r=f.sent,console.log("Mining...",r.hash),f.next=16,r.wait();case 16:return f.next=18,c.getTotalWaves();case 18:f.sent,f.next=21;break;case 21:f.next=26;break;case 23:f.prev=23,f.t0=f.catch(0),console.log(f.t0.message);case 26:case"end":return f.stop()}}),f,null,[[0,23]])})));return function(e){return f.apply(this,arguments)}}(),T=function(){var f=Object(o.a)(d.a.mark((function f(){var e,b,a,t,n,c;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=10;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract(p,W,t),f.next=8,n.getTotalWaves();case 8:c=f.sent,E(c.toNumber());case 10:f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),N=function(){var f=Object(o.a)(d.a.mark((function f(){var e,b,a,t,n,c,r;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=window,b=e.ethereum,f.prev=1,!b){f.next=14;break}return a=new i.a.providers.Web3Provider(b),t=a.getSigner(),n=new i.a.Contract(p,W,t),f.next=8,n.getAllWaves();case 8:c=f.sent,(r=c.map((function(f){return{address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message,test:"test"}}))).sort((function(f,e){return f.timestamp<e.timestamp?1:-1})),y(r),f.next=15;break;case 14:console.log("Ethereum object doesn't exist!");case 15:f.next=20;break;case 17:f.prev=17,f.t0=f.catch(1),console.log(f.t0);case 20:case"end":return f.stop()}}),f,null,[[1,17]])})));return function(){return f.apply(this,arguments)}}();Object(a.useEffect)((function(){var f;N();var e=function(f,e,b){y((function(a){return[].concat(Object(r.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))};if(window.ethereum){var b=new i.a.providers.Web3Provider(window.ethereum).getSigner();(f=new i.a.Contract(p,W,b)).on("NewWave",e)}return function(){f&&f.off("NewWave",e)}}),[]),Object(a.useEffect)((function(){T()}),[]);var C=function(){var f=Object(o.a)(d.a.mark((function f(){var e,b,a,n;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return",!1);case 7:console.log("We have the ethereum object",b);case 8:return f.next=10,b.request({method:"eth_accounts"});case 10:if(0===(a=f.sent).length){f.next=18;break}return n=a[0],console.log("Found an authorized account:",n),t(n),f.abrupt("return",!1);case 18:console.log("No authorized account found");case 19:f.next=24;break;case 21:f.prev=21,f.t0=f.catch(0),console.log(f.t0);case 24:case"end":return f.stop()}}),f,null,[[0,21]])})));return function(){return f.apply(this,arguments)}}(),M=function(){var f=Object(o.a)(d.a.mark((function f(){var e,b,a;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,t(a[0]),f.next=14;break;case 11:f.prev=11,f.t0=f.catch(0),console.log(f.t0);case 14:case"end":return f.stop()}}),f,null,[[0,11]])})));return function(){return f.apply(this,arguments)}}(),S=function(){var f=Object(o.a)(d.a.mark((function f(){var e,b;return d.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Your need to be logged in"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:f.sent,t(""),f.next=14;break;case 11:f.prev=11,f.t0=f.catch(0),console.log(f.t0);case 14:case"end":return f.stop()}}),f,null,[[0,11]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)((function(){C()}),[]),a.createElement("div",{className:"mainContainer"},a.createElement("div",{className:"dataContainer"},a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),a.createElement("form",{action:"",className:"waveForm",onSubmit:O},a.createElement("div",{className:"bio"},a.createElement("p",null,"I am Malchik and I'm learning solidity tricks ! That's pretty cool right?"),a.createElement("p",null,"Connect your wallet to Ethereum Rinkeby , write your twitter handle and wave at me!"),a.createElement("p",null,"Follow me on Twitter: @0xProudFrog"),b?a.createElement("p",null,"I already received ",k," waves ! What are you waiting for ?"):null),a.createElement("input",{type:"text",className:"waveFormMessage",placeholder:"Write a message",required:!0,onChange:j}),a.createElement("button",{type:"submit",className:"waveButton"},"Wave at Me")),b?a.createElement("button",{className:"connectButton",onClick:S},a.createElement("p",null,b.substring(0,4)+"..."+b.substring(11,14)," ","- Click to logout")):a.createElement("button",{className:"connectButton",onClick:M},"Connect"),b?g.map((function(f,e){return a.createElement("div",{key:e,style:{backgroundColor:"#333",marginTop:"16px",padding:"8px",color:"white"}},a.createElement("div",null,"Address: ",f.address),a.createElement("div",null,"Time: ",f.timestamp.toString()),a.createElement("div",null,"Message: ",f.message))})):""))}c.a.render(t.a.createElement(m,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.23af6064.chunk.js.map