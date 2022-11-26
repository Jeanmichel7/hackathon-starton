export let ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hashCID",
				"type": "string"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			}
		],
		"name": "sendRewardFromPool",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_reviewsCID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hashCID",
				"type": "string"
			}
		],
		"name": "setAllCID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hashCID",
				"type": "string"
			}
		],
		"name": "setHashCID",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_cost",
				"type": "uint256"
			}
		],
		"name": "setProductCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "details",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "hashCID",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "reviewsCID",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "tokenPool",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "total_products",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
;
export let bytesCode = "608060405269d3c21bcecceda10000006007553480156200001f57600080fd5b506040518060400160405280600c81526020017f4661697466756c546f6b656e00000000000000000000000000000000000000008152506040518060400160405280600481526020017f4646554c00000000000000000000000000000000000000000000000000000000815250620000ac620000a06200020660201b60201c565b6200020e60201b60201c565b8160049080519060200190620000c4929190620008dd565b508060059080519060200190620000dd929190620008dd565b505050620000fe336b033b2e3c9fd0803ce8000000620002d260201b60201c565b620001546040518060400160405280600d81526020017f5072656d696572206f626a657400000000000000000000000000000000000000815250604051806020016040528060008152506200044160201b60201c565b620001aa6040518060400160405280600e81526020017f4465757869656d65206f626a6574000000000000000000000000000000000000815250604051806020016040528060008152506200044160201b60201c565b620002006040518060400160405280600f81526020017f54726f697369656d65206f626a65740000000000000000000000000000000000815250604051806020016040528060008152506200044160201b60201c565b62000e88565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000345576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200033c9062000b61565b60405180910390fd5b6200035960008383620005f460201b60201c565b80600360008282546200036d919062000bb1565b9250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000421919062000b83565b60405180910390a36200043d60008383620005f960201b60201c565b5050565b60088251101562000489576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004809062000afb565b60405180910390fd5b6200049a33620005fe60201b60201c565b6007541115620004e1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620004d89062000b3f565b60405180910390fd5b620004f633306007546200064760201b60201c565b620005006200096e565b60065481600001818152505082816020018190525060075481608001818152505060008251111562000536578181604001819052505b600660008154809291906200054b9062000c4e565b91905055506008819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001556020820151816001019080519060200190620005a4929190620008dd565b506040820151816002019080519060200190620005c3929190620008dd565b506060820151816003019080519060200190620005e2929190620008dd565b50608082015181600401555050505050565b505050565b505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415620006ba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620006b19062000b1d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200072d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007249062000ab7565b60405180910390fd5b62000740838383620005f460201b60201c565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015620007ca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620007c19062000ad9565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051620008bc919062000b83565b60405180910390a3620008d7848484620005f960201b60201c565b50505050565b828054620008eb9062000c18565b90600052602060002090601f0160209004810192826200090f57600085556200095b565b82601f106200092a57805160ff19168380011785556200095b565b828001600101855582156200095b579182015b828111156200095a5782518255916020019190600101906200093d565b5b5090506200096a91906200099d565b5090565b6040518060a0016040528060008152602001606081526020016060815260200160608152602001600081525090565b5b80821115620009b85760008160009055506001016200099e565b5090565b6000620009cb60238362000ba0565b9150620009d88262000cfa565b604082019050919050565b6000620009f260268362000ba0565b9150620009ff8262000d49565b604082019050919050565b600062000a1960318362000ba0565b915062000a268262000d98565b604082019050919050565b600062000a4060258362000ba0565b915062000a4d8262000de7565b604082019050919050565b600062000a6760158362000ba0565b915062000a748262000e36565b602082019050919050565b600062000a8e601f8362000ba0565b915062000a9b8262000e5f565b602082019050919050565b62000ab18162000c0e565b82525050565b6000602082019050818103600083015262000ad281620009bc565b9050919050565b6000602082019050818103600083015262000af481620009e3565b9050919050565b6000602082019050818103600083015262000b168162000a0a565b9050919050565b6000602082019050818103600083015262000b388162000a31565b9050919050565b6000602082019050818103600083015262000b5a8162000a58565b9050919050565b6000602082019050818103600083015262000b7c8162000a7f565b9050919050565b600060208201905062000b9a600083018462000aa6565b92915050565b600082825260208201905092915050565b600062000bbe8262000c0e565b915062000bcb8362000c0e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000c035762000c0262000c9c565b5b828201905092915050565b6000819050919050565b6000600282049050600182168062000c3157607f821691505b6020821081141562000c485762000c4762000ccb565b5b50919050565b600062000c5b8262000c0e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000c915762000c9062000c9c565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f50726f64756374732064657461696c73206e65656420746f206265206174206c60008201527f6561737420382063686172616374657273000000000000000000000000000000602082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420656e6f756768204646554c20546f6b656e0000000000000000000000600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b61241c8062000e986000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80637acc0b20116100b8578063a457c2d71161007c578063a457c2d714610342578063a9059cbb14610372578063b7728c2e146103a2578063ca2efb55146103be578063dd62ed3e146103da578063f2fde38b1461040a57610137565b80637acc0b20146102985780637efa6959146102cc5780638da5cb5b146102ea578063917151461461030857806395d89b411461032457610137565b8063313ce567116100ff578063313ce567146101f457806339509351146102125780635ea5f73e1461024257806370a082311461025e578063715018a61461028e57610137565b806306fdde031461013c578063095ea7b31461015a5780630c6f8e7f1461018a57806318160ddd146101a657806323b872dd146101c4575b600080fd5b610144610426565b6040516101519190611a93565b60405180910390f35b610174600480360381019061016f9190611655565b6104b8565b6040516101819190611a78565b60405180910390f35b6101a4600480360381019061019f919061173a565b6104db565b005b6101ae610565565b6040516101bb9190611c55565b60405180910390f35b6101de60048036038101906101d99190611602565b61056f565b6040516101eb9190611a78565b60405180910390f35b6101fc61059e565b6040516102099190611cd8565b60405180910390f35b61022c60048036038101906102279190611655565b6105a7565b6040516102399190611a78565b60405180910390f35b61025c60048036038101906102579190611655565b6105de565b005b61027860048036038101906102739190611595565b610671565b6040516102859190611c55565b60405180910390f35b6102966106ba565b005b6102b260048036038101906102ad919061170d565b6106ce565b6040516102c3959493929190611c70565b60405180910390f35b6102d46108ac565b6040516102e19190611c55565b60405180910390f35b6102f26108b2565b6040516102ff9190611a5d565b60405180910390f35b610322600480360381019061031d9190611796565b6108db565b005b61032c6109e4565b6040516103399190611a93565b60405180910390f35b61035c60048036038101906103579190611655565b610a76565b6040516103699190611a78565b60405180910390f35b61038c60048036038101906103879190611655565b610aed565b6040516103999190611a78565b60405180910390f35b6103bc60048036038101906103b7919061170d565b610b10565b005b6103d860048036038101906103d39190611695565b610b22565b005b6103f460048036038101906103ef91906115c2565b610cb4565b6040516104019190611c55565b60405180910390f35b610424600480360381019061041f9190611595565b610d3b565b005b60606004805461043590611eb7565b80601f016020809104026020016040519081016040528092919081815260200182805461046190611eb7565b80156104ae5780601f10610483576101008083540402835291602001916104ae565b820191906000526020600020905b81548152906001019060200180831161049157829003601f168201915b5050505050905090565b6000806104c3610dbf565b90506104d0818585610dc7565b600191505092915050565b6104e3610f92565b600a815111610527576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161051e90611b75565b60405180910390fd5b806008838154811061053c5761053b611ff0565b5b90600052602060002090600502016002019080519060200190610560929190611429565b505050565b6000600354905090565b60008061057a610dbf565b9050610587858285611010565b61059285858561109c565b60019150509392505050565b60006012905090565b6000806105b2610dbf565b90506105d38185856105c48589610cb4565b6105ce9190611d65565b610dc7565b600191505092915050565b6105e6610f92565b6000600882815481106105fc576105fb611ff0565b5b9060005260206000209060050201600401541161061857600080fd5b600061062382611317565b9050806008838154811061063a57610639611ff0565b5b9060005260206000209060050201600401600082825461065a9190611dec565b9250508190555061066c30848361109c565b505050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6106c2610f92565b6106cc600061135b565b565b600881815481106106de57600080fd5b906000526020600020906005020160009150905080600001549080600101805461070790611eb7565b80601f016020809104026020016040519081016040528092919081815260200182805461073390611eb7565b80156107805780601f1061075557610100808354040283529160200191610780565b820191906000526020600020905b81548152906001019060200180831161076357829003601f168201915b50505050509080600201805461079590611eb7565b80601f01602080910402602001604051908101604052809291908181526020018280546107c190611eb7565b801561080e5780601f106107e35761010080835404028352916020019161080e565b820191906000526020600020905b8154815290600101906020018083116107f157829003601f168201915b50505050509080600301805461082390611eb7565b80601f016020809104026020016040519081016040528092919081815260200182805461084f90611eb7565b801561089c5780601f106108715761010080835404028352916020019161089c565b820191906000526020600020905b81548152906001019060200180831161087f57829003601f168201915b5050505050908060040154905085565b60065481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108e3610f92565b600a825111610927576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091e90611c15565b60405180910390fd5b600a81511161096b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096290611b75565b60405180910390fd5b80600884815481106109805761097f611ff0565b5b906000526020600020906005020160020190805190602001906109a4929190611429565b5081600884815481106109ba576109b9611ff0565b5b906000526020600020906005020160030190805190602001906109de929190611429565b50505050565b6060600580546109f390611eb7565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1f90611eb7565b8015610a6c5780601f10610a4157610100808354040283529160200191610a6c565b820191906000526020600020905b815481529060010190602001808311610a4f57829003601f168201915b5050505050905090565b600080610a81610dbf565b90506000610a8f8286610cb4565b905083811015610ad4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610acb90611c35565b60405180910390fd5b610ae18286868403610dc7565b60019250505092915050565b600080610af8610dbf565b9050610b0581858561109c565b600191505092915050565b610b18610f92565b8060078190555050565b600882511015610b67576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5e90611b55565b60405180910390fd5b610b7033610671565b6007541115610bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bab90611bd5565b60405180910390fd5b610bc1333060075461109c565b610bc96114af565b600654816000018181525050828160200181905250600754816080018181525050600082511115610bfe578181604001819052505b60066000815480929190610c1190611f1a565b91905055506008819080600181540180825580915050600190039060005260206000209060050201600090919091909150600082015181600001556020820151816001019080519060200190610c68929190611429565b506040820151816002019080519060200190610c85929190611429565b506060820151816003019080519060200190610ca2929190611429565b50608082015181600401555050505050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610d43610f92565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610db3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610daa90611ad5565b60405180910390fd5b610dbc8161135b565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610e37576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e2e90611bf5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ea7576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e9e90611af5565b60405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610f859190611c55565b60405180910390a3505050565b610f9a610dbf565b73ffffffffffffffffffffffffffffffffffffffff16610fb86108b2565b73ffffffffffffffffffffffffffffffffffffffff161461100e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100590611b95565b60405180910390fd5b565b600061101c8484610cb4565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146110965781811015611088576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161107f90611b15565b60405180910390fd5b6110958484848403610dc7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561110c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161110390611bb5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561117c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161117390611ab5565b60405180910390fd5b61118783838361141f565b6000600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561120e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161120590611b35565b60405180910390fd5b818103600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516112fe9190611c55565b60405180910390a3611311848484611424565b50505050565b6000806008838154811061132e5761132d611ff0565b5b90600052602060002090600502016004015490506103e8816113509190611dbb565b905080915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b82805461143590611eb7565b90600052602060002090601f016020900481019282611457576000855561149e565b82601f1061147057805160ff191683800117855561149e565b8280016001018555821561149e579182015b8281111561149d578251825591602001919060010190611482565b5b5090506114ab91906114de565b5090565b6040518060a0016040528060008152602001606081526020016060815260200160608152602001600081525090565b5b808211156114f75760008160009055506001016114df565b5090565b600061150e61150984611d18565b611cf3565b90508281526020810184848401111561152a57611529612053565b5b611535848285611e75565b509392505050565b60008135905061154c816123b8565b92915050565b600082601f8301126115675761156661204e565b5b81356115778482602086016114fb565b91505092915050565b60008135905061158f816123cf565b92915050565b6000602082840312156115ab576115aa61205d565b5b60006115b98482850161153d565b91505092915050565b600080604083850312156115d9576115d861205d565b5b60006115e78582860161153d565b92505060206115f88582860161153d565b9150509250929050565b60008060006060848603121561161b5761161a61205d565b5b60006116298682870161153d565b935050602061163a8682870161153d565b925050604061164b86828701611580565b9150509250925092565b6000806040838503121561166c5761166b61205d565b5b600061167a8582860161153d565b925050602061168b85828601611580565b9150509250929050565b600080604083850312156116ac576116ab61205d565b5b600083013567ffffffffffffffff8111156116ca576116c9612058565b5b6116d685828601611552565b925050602083013567ffffffffffffffff8111156116f7576116f6612058565b5b61170385828601611552565b9150509250929050565b6000602082840312156117235761172261205d565b5b600061173184828501611580565b91505092915050565b600080604083850312156117515761175061205d565b5b600061175f85828601611580565b925050602083013567ffffffffffffffff8111156117805761177f612058565b5b61178c85828601611552565b9150509250929050565b6000806000606084860312156117af576117ae61205d565b5b60006117bd86828701611580565b935050602084013567ffffffffffffffff8111156117de576117dd612058565b5b6117ea86828701611552565b925050604084013567ffffffffffffffff81111561180b5761180a612058565b5b61181786828701611552565b9150509250925092565b61182a81611e20565b82525050565b61183981611e32565b82525050565b600061184a82611d49565b6118548185611d54565b9350611864818560208601611e84565b61186d81612062565b840191505092915050565b6000611885602383611d54565b915061189082612073565b604082019050919050565b60006118a8602683611d54565b91506118b3826120c2565b604082019050919050565b60006118cb602283611d54565b91506118d682612111565b604082019050919050565b60006118ee601d83611d54565b91506118f982612160565b602082019050919050565b6000611911602683611d54565b915061191c82612189565b604082019050919050565b6000611934603183611d54565b915061193f826121d8565b604082019050919050565b6000611957601183611d54565b915061196282612227565b602082019050919050565b600061197a602083611d54565b915061198582612250565b602082019050919050565b600061199d602583611d54565b91506119a882612279565b604082019050919050565b60006119c0601583611d54565b91506119cb826122c8565b602082019050919050565b60006119e3602483611d54565b91506119ee826122f1565b604082019050919050565b6000611a06601383611d54565b9150611a1182612340565b602082019050919050565b6000611a29602583611d54565b9150611a3482612369565b604082019050919050565b611a4881611e5e565b82525050565b611a5781611e68565b82525050565b6000602082019050611a726000830184611821565b92915050565b6000602082019050611a8d6000830184611830565b92915050565b60006020820190508181036000830152611aad818461183f565b905092915050565b60006020820190508181036000830152611ace81611878565b9050919050565b60006020820190508181036000830152611aee8161189b565b9050919050565b60006020820190508181036000830152611b0e816118be565b9050919050565b60006020820190508181036000830152611b2e816118e1565b9050919050565b60006020820190508181036000830152611b4e81611904565b9050919050565b60006020820190508181036000830152611b6e81611927565b9050919050565b60006020820190508181036000830152611b8e8161194a565b9050919050565b60006020820190508181036000830152611bae8161196d565b9050919050565b60006020820190508181036000830152611bce81611990565b9050919050565b60006020820190508181036000830152611bee816119b3565b9050919050565b60006020820190508181036000830152611c0e816119d6565b9050919050565b60006020820190508181036000830152611c2e816119f9565b9050919050565b60006020820190508181036000830152611c4e81611a1c565b9050919050565b6000602082019050611c6a6000830184611a3f565b92915050565b600060a082019050611c856000830188611a3f565b8181036020830152611c97818761183f565b90508181036040830152611cab818661183f565b90508181036060830152611cbf818561183f565b9050611cce6080830184611a3f565b9695505050505050565b6000602082019050611ced6000830184611a4e565b92915050565b6000611cfd611d0e565b9050611d098282611ee9565b919050565b6000604051905090565b600067ffffffffffffffff821115611d3357611d3261201f565b5b611d3c82612062565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b6000611d7082611e5e565b9150611d7b83611e5e565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611db057611daf611f63565b5b828201905092915050565b6000611dc682611e5e565b9150611dd183611e5e565b925082611de157611de0611f92565b5b828204905092915050565b6000611df782611e5e565b9150611e0283611e5e565b925082821015611e1557611e14611f63565b5b828203905092915050565b6000611e2b82611e3e565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b82818337600083830152505050565b60005b83811015611ea2578082015181840152602081019050611e87565b83811115611eb1576000848401525b50505050565b60006002820490506001821680611ecf57607f821691505b60208210811415611ee357611ee2611fc1565b5b50919050565b611ef282612062565b810181811067ffffffffffffffff82111715611f1157611f1061201f565b5b80604052505050565b6000611f2582611e5e565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611f5857611f57611f63565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f50726f64756374732064657461696c73206e65656420746f206265206174206c60008201527f6561737420382063686172616374657273000000000000000000000000000000602082015250565b7f42616420486173682066696c6520434944000000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7420656e6f756768204646554c20546f6b656e0000000000000000000000600082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f426164205265766965772066696c652043494400000000000000000000000000600082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6123c181611e20565b81146123cc57600080fd5b50565b6123d881611e5e565b81146123e357600080fd5b5056fea26469706673582212203033490a95509d5f637402b729e35302e20d518c308db9aa144d5c68e1aac4f264736f6c63430008070033";