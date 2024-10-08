"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bytecode = exports.abi = void 0;
exports.abi = [
    {
        "type": "constructor",
        "inputs": [
            {
                "name": "_allo",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_name",
                "type": "string",
                "internalType": "string"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "receive",
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "NATIVE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "allocate",
        "inputs": [
            {
                "name": "_recipientIds",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "_amounts",
                "type": "uint256[]",
                "internalType": "uint256[]"
            },
            {
                "name": "_token",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "allocate",
        "inputs": [
            {
                "name": "_data",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_sender",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "distribute",
        "inputs": [
            {
                "name": "_recipientIds",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "_data",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_sender",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getAllo",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IAllo"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPayouts",
        "inputs": [
            {
                "name": "_recipientIds",
                "type": "address[]",
                "internalType": "address[]"
            },
            {
                "name": "_data",
                "type": "bytes[]",
                "internalType": "bytes[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct IStrategy.PayoutSummary[]",
                "components": [
                    {
                        "name": "recipientAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "amount",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPoolAmount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPoolId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getRecipientStatus",
        "inputs": [
            {
                "name": "_recipientId",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint8",
                "internalType": "enum IStrategy.Status"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getStrategyId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "increasePoolAmount",
        "inputs": [
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "_poolId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "isPoolActive",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isValidAllocator",
        "inputs": [
            {
                "name": "_allocator",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "registerRecipient",
        "inputs": [
            {
                "name": "_data",
                "type": "bytes",
                "internalType": "bytes"
            },
            {
                "name": "_sender",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "recipientId",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "withdraw",
        "inputs": [
            {
                "name": "_token",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_recipient",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "_amount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "Allocated",
        "inputs": [
            {
                "name": "recipientId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "token",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Distributed",
        "inputs": [
            {
                "name": "recipientId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "recipientAddress",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "poolId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "data",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PoolActive",
        "inputs": [
            {
                "name": "active",
                "type": "bool",
                "indexed": false,
                "internalType": "bool"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Registered",
        "inputs": [
            {
                "name": "recipientId",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "data",
                "type": "bytes",
                "indexed": false,
                "internalType": "bytes"
            },
            {
                "name": "sender",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "ALLOCATION_ACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ALLOCATION_NOT_ACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ALLOCATION_NOT_ENDED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ALREADY_INITIALIZED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "AMOUNT_MISMATCH",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ANCHOR_ERROR",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ARRAY_MISMATCH",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INPUT_LENGTH_MISMATCH",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INVALID",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INVALID_ADDRESS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INVALID_FEE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INVALID_METADATA",
        "inputs": []
    },
    {
        "type": "error",
        "name": "INVALID_REGISTRATION",
        "inputs": []
    },
    {
        "type": "error",
        "name": "IS_APPROVED_STRATEGY",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MISMATCH",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NONCE_NOT_AVAILABLE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NON_ZERO_VALUE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOOP",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOT_APPROVED_STRATEGY",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOT_ENOUGH_FUNDS",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOT_IMPLEMENTED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOT_INITIALIZED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NOT_PENDING_OWNER",
        "inputs": []
    },
    {
        "type": "error",
        "name": "POOL_ACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "POOL_INACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RECIPIENT_ALREADY_ACCEPTED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RECIPIENT_ERROR",
        "inputs": [
            {
                "name": "recipientId",
                "type": "address",
                "internalType": "address"
            }
        ]
    },
    {
        "type": "error",
        "name": "RECIPIENT_NOT_ACCEPTED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "REGISTRATION_ACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "REGISTRATION_NOT_ACTIVE",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UNAUTHORIZED",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZERO_ADDRESS",
        "inputs": []
    }
];
exports.bytecode = "0x6080604052600436106100f75760003560e01c8063a0cf0aea1161008a578063eb11af9311610059578063eb11af93146102c8578063edd146cc146102f0578063ef2920fc14610310578063f5b0dfb71461032357600080fd5b8063a0cf0aea1461023b578063b2b878d014610263578063d9caed1214610290578063df868ed3146102b057600080fd5b806342fda9c7116100c657806342fda9c7146101a357806344469f98146101d65780634ab4ba42146101f65780634d31d0871461020b57600080fd5b80630a6f0ee91461010357806315cc481e146101255780632bbe0cae1461017157806338fff2d01461018457600080fd5b366100fe57005b600080fd5b34801561010f57600080fd5b5061012361011e366004610b11565b610343565b005b34801561013157600080fd5b507f000000000000000000000000b087535db0df98fc4327136e897a5985e5cfbd665b6040516001600160a01b0390911681526020015b60405180910390f35b61015461017f366004610b89565b610363565b34801561019057600080fd5b506001545b604051908152602001610168565b3480156101af57600080fd5b507f655593cbfc69cd98c2fcf27a9b15281c7817f038cbb7c00b558128aa5465465b610195565b3480156101e257600080fd5b506101236101f1366004610bdb565b610388565b34801561020257600080fd5b50600254610195565b34801561021757600080fd5b5061022b610226366004610ca6565b6103cb565b6040519015158152602001610168565b34801561024757600080fd5b5061015473eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561026f57600080fd5b5061028361027e366004610cca565b6103d6565b6040516101689190610d9f565b34801561029c57600080fd5b506101236102ab366004610df7565b6104ee565b3480156102bc57600080fd5b5060005460ff1661022b565b3480156102d457600080fd5b506102e3610226366004610ca6565b6040516101689190610e38565b3480156102fc57600080fd5b5061012361030b366004610e60565b610509565b61012361031e366004610b89565b61054f565b34801561032f57600080fd5b5061012361033e366004610ea7565b61056d565b61034b610597565b6103536105e2565b61035e83838361061e565b505050565b600061036d610597565b6103756105e2565b61037f8383610637565b90505b92915050565b3361039281610652565b60008484846040516020016103a993929190610ec0565b60405160208183030381529060405290506103c4813361071d565b5050505050565b600061038282610637565b81518151606091908114610416576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff8111156104315761043161099d565b60405190808252806020026020018201604052801561047657816020015b604080518082019091526000808252602082015281526020019060019003908161044f5790505b50905060005b828110156104e5576104c086828151811061049957610499610f5a565b60200260200101518683815181106104b3576104b3610f5a565b6020026020010151610853565b8282815181106104d2576104d2610f5a565b602090810291909101015260010161047c565b50949350505050565b336104f881610652565b61050384848461086c565b50505050565b610512826108b1565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a8282604051610543929190610f70565b60405180910390a15050565b610557610597565b61055f6105e2565b610569828261071d565b5050565b610575610597565b80600260008282546105879190610fc6565b9091555061059490508181565b50565b336001600160a01b037f000000000000000000000000b087535db0df98fc4327136e897a5985e5cfbd6616146105e05760405163075fd2b160e01b815260040160405180910390fd5b565b6001546000036105e0576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040516302ad284d60e31b815260040160405180910390fd5b60006040516302ad284d60e31b815260040160405180910390fd5b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000b087535db0df98fc4327136e897a5985e5cfbd6616906329e40d4b90604401602060405180830381865afa1580156106dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107009190610fe7565b6105945760405163075fd2b160e01b815260040160405180910390fd5b8061072781610652565b600080600085806020019051810190610740919061106f565b9250925092506000835190508060000361076d5760405163fb76571560e01b815260040160405180910390fd5b8251811461078e5760405163fb76571560e01b815260040160405180910390fd5b60005b818110156108495760008482815181106107ad576107ad610f5a565b6020026020010151905060008683815181106107cb576107cb610f5a565b602002602001015190506107e085828461086c565b806001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b83878c604051610837939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a25050600101610791565b5050505050505050565b604080518082019091526000808252602082015261061e565b7fffffffffffffffffffffffff11111111111111111111111111111111111111126001600160a01b038416016108a65761035e8282610932565b61035e83838361094e565b6108b9610597565b600154156108f3576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060000361092d576040517f7fcce2a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600155565b60008060008084865af16105695763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610993576390b8ec186000526004601cfd5b6000603452505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156109dc576109dc61099d565b604052919050565b600067ffffffffffffffff8211156109fe576109fe61099d565b5060051b60200190565b6001600160a01b038116811461059457600080fd5b8035610a2881610a08565b919050565b600082601f830112610a3e57600080fd5b81356020610a53610a4e836109e4565b6109b3565b82815260059290921b84018101918181019086841115610a7257600080fd5b8286015b84811015610a96578035610a8981610a08565b8352918301918301610a76565b509695505050505050565b600082601f830112610ab257600080fd5b813567ffffffffffffffff811115610acc57610acc61099d565b610adf601f8201601f19166020016109b3565b818152846020838601011115610af457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610b2657600080fd5b833567ffffffffffffffff80821115610b3e57600080fd5b610b4a87838801610a2d565b94506020860135915080821115610b6057600080fd5b50610b6d86828701610aa1565b9250506040840135610b7e81610a08565b809150509250925092565b60008060408385031215610b9c57600080fd5b823567ffffffffffffffff811115610bb357600080fd5b610bbf85828601610aa1565b9250506020830135610bd081610a08565b809150509250929050565b600080600060608486031215610bf057600080fd5b833567ffffffffffffffff80821115610c0857600080fd5b610c1487838801610a2d565b9450602091508186013581811115610c2b57600080fd5b86019050601f81018713610c3e57600080fd5b8035610c4c610a4e826109e4565b81815260059190911b82018301908381019089831115610c6b57600080fd5b928401925b82841015610c8957833582529284019290840190610c70565b8096505050505050610c9d60408501610a1d565b90509250925092565b600060208284031215610cb857600080fd5b8135610cc381610a08565b9392505050565b60008060408385031215610cdd57600080fd5b823567ffffffffffffffff80821115610cf557600080fd5b610d0186838701610a2d565b9350602091508185013581811115610d1857600080fd5b8501601f81018713610d2957600080fd5b8035610d37610a4e826109e4565b81815260059190911b82018401908481019089831115610d5657600080fd5b8584015b83811015610d8e57803586811115610d725760008081fd5b610d808c8983890101610aa1565b845250918601918601610d5a565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610dea57815180516001600160a01b03168552860151868501529284019290850190600101610dbc565b5091979650505050505050565b600080600060608486031215610e0c57600080fd5b8335610e1781610a08565b92506020840135610e2781610a08565b929592945050506040919091013590565b6020810160078310610e5a57634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215610e7357600080fd5b82359150602083013567ffffffffffffffff811115610e9157600080fd5b610e9d85828601610aa1565b9150509250929050565b600060208284031215610eb957600080fd5b5035919050565b606080825284519082018190526000906020906080840190828801845b82811015610f025781516001600160a01b031684529284019290840190600101610edd565b5050508381038285015285518082528683019183019060005b81811015610f3757835183529284019291840191600101610f1b565b50506001600160a01b03861660408601529250610f52915050565b949350505050565b634e487b7160e01b600052603260045260246000fd5b82815260006020604081840152835180604085015260005b81811015610fa457858101830151858201606001528201610f88565b506000606082860101526060601f19601f830116850101925050509392505050565b8082018082111561038257634e487b7160e01b600052601160045260246000fd5b600060208284031215610ff957600080fd5b81518015158114610cc357600080fd5b600082601f83011261101a57600080fd5b8151602061102a610a4e836109e4565b82815260059290921b8401810191818101908684111561104957600080fd5b8286015b84811015610a96578051835291830191830161104d565b8051610a2881610a08565b60008060006060848603121561108457600080fd5b835167ffffffffffffffff8082111561109c57600080fd5b818601915086601f8301126110b057600080fd5b815160206110c0610a4e836109e4565b82815260059290921b8401810191818101908a8411156110df57600080fd5b948201945b838610156111065785516110f781610a08565b825294820194908201906110e4565b9189015191975090935050508082111561111f57600080fd5b5061112c86828701611009565b925050610c9d6040850161106456fea2646970667358221220b49570b11e087cd05288fe5447d289f779640145222bbbae81c4a0fa85df6d6564736f6c63430008130033";
