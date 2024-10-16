export declare const abi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_allo";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_name";
        readonly type: "string";
        readonly internalType: "string";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "NATIVE";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "allocate";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "distribute";
    readonly inputs: readonly [{
        readonly name: "_recipientIds";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "getAllo";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "address";
        readonly internalType: "contract IAllo";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPayouts";
    readonly inputs: readonly [{
        readonly name: "_recipientIds";
        readonly type: "address[]";
        readonly internalType: "address[]";
    }, {
        readonly name: "_data";
        readonly type: "bytes[]";
        readonly internalType: "bytes[]";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "tuple[]";
        readonly internalType: "struct IStrategy.PayoutSummary[]";
        readonly components: readonly [{
            readonly name: "recipientAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolAmount";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getPoolId";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getRecipientStatus";
    readonly inputs: readonly [{
        readonly name: "_recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "uint8";
        readonly internalType: "enum IStrategy.Status";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "getStrategyId";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bytes32";
        readonly internalType: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "increasePoolAmount";
    readonly inputs: readonly [{
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "initialize";
    readonly inputs: readonly [{
        readonly name: "_poolId";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }, {
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly name: "isPoolActive";
    readonly inputs: readonly [];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "isValidAllocator";
    readonly inputs: readonly [{
        readonly name: "_allocator";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "";
        readonly type: "bool";
        readonly internalType: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly name: "registerRecipient";
    readonly inputs: readonly [{
        readonly name: "_data";
        readonly type: "bytes";
        readonly internalType: "bytes";
    }, {
        readonly name: "_sender";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly outputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly name: "withdraw";
    readonly inputs: readonly [{
        readonly name: "_token";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_recipient";
        readonly type: "address";
        readonly internalType: "address";
    }, {
        readonly name: "_amount";
        readonly type: "uint256";
        readonly internalType: "uint256";
    }];
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "event";
    readonly name: "Allocated";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "token";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Distributed";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "recipientAddress";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }, {
        readonly name: "amount";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Initialized";
    readonly inputs: readonly [{
        readonly name: "poolId";
        readonly type: "uint256";
        readonly indexed: false;
        readonly internalType: "uint256";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "PoolActive";
    readonly inputs: readonly [{
        readonly name: "active";
        readonly type: "bool";
        readonly indexed: false;
        readonly internalType: "bool";
    }];
    readonly anonymous: false;
}, {
    readonly type: "event";
    readonly name: "Registered";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly indexed: true;
        readonly internalType: "address";
    }, {
        readonly name: "data";
        readonly type: "bytes";
        readonly indexed: false;
        readonly internalType: "bytes";
    }, {
        readonly name: "sender";
        readonly type: "address";
        readonly indexed: false;
        readonly internalType: "address";
    }];
    readonly anonymous: false;
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_NOT_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALLOCATION_NOT_ENDED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ALREADY_INITIALIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "AMOUNT_MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ANCHOR_ERROR";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ARRAY_MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INPUT_LENGTH_MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_ADDRESS";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_FEE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_METADATA";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "INVALID_REGISTRATION";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "IS_APPROVED_STRATEGY";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "MISMATCH";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NONCE_NOT_AVAILABLE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NON_ZERO_VALUE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOOP";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_APPROVED_STRATEGY";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_ENOUGH_FUNDS";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_IMPLEMENTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_INITIALIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "NOT_PENDING_OWNER";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "POOL_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "POOL_INACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_ALREADY_ACCEPTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_ERROR";
    readonly inputs: readonly [{
        readonly name: "recipientId";
        readonly type: "address";
        readonly internalType: "address";
    }];
}, {
    readonly type: "error";
    readonly name: "RECIPIENT_NOT_ACCEPTED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "REGISTRATION_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "REGISTRATION_NOT_ACTIVE";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "UNAUTHORIZED";
    readonly inputs: readonly [];
}, {
    readonly type: "error";
    readonly name: "ZERO_ADDRESS";
    readonly inputs: readonly [];
}];
export declare const bytecode = "0x60c06040523480156200001157600080fd5b506040516200119a3803806200119a8339810160408190526200003491620000ba565b6001600160a01b038216608052604051829082906200005890829060200162000195565b60408051601f19818403018152919052805160209091012060a05250620001ca92505050565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620000b157818101518382015260200162000097565b50506000910152565b60008060408385031215620000ce57600080fd5b82516001600160a01b0381168114620000e657600080fd5b60208401519092506001600160401b03808211156200010457600080fd5b818501915085601f8301126200011957600080fd5b8151818111156200012e576200012e6200007e565b604051601f8201601f19908116603f011681019083821181831017156200015957620001596200007e565b816040528281528860208487010111156200017357600080fd5b6200018683602083016020880162000094565b80955050505050509250929050565b6020815260008251806020840152620001b681604085016020870162000094565b601f01601f19169190910160400192915050565b60805160a051610f9c620001fe60003960006101a70152600081816101290152818161053401526106400152610f9c6000f3fe6080604052600436106100ec5760003560e01c8063a0cf0aea1161008a578063eb11af9311610059578063eb11af931461029d578063edd146cc146102c5578063ef2920fc146102e5578063f5b0dfb7146102f857600080fd5b8063a0cf0aea14610210578063b2b878d014610238578063d9caed1214610265578063df868ed31461028557600080fd5b806338fff2d0116100c657806338fff2d01461017957806342fda9c7146101985780634ab4ba42146101cb5780634d31d087146101e057600080fd5b80630a6f0ee9146100f857806315cc481e1461011a5780632bbe0cae1461016657600080fd5b366100f357005b600080fd5b34801561010457600080fd5b50610118610113366004610a93565b610318565b005b34801561012657600080fd5b507f00000000000000000000000000000000000000000000000000000000000000005b6040516001600160a01b0390911681526020015b60405180910390f35b610149610174366004610b0b565b610338565b34801561018557600080fd5b506001545b60405190815260200161015d565b3480156101a457600080fd5b507f000000000000000000000000000000000000000000000000000000000000000061018a565b3480156101d757600080fd5b5060025461018a565b3480156101ec57600080fd5b506102006101fb366004610b5d565b61035d565b604051901515815260200161015d565b34801561021c57600080fd5b5061014973eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b34801561024457600080fd5b50610258610253366004610b81565b610368565b60405161015d9190610c56565b34801561027157600080fd5b50610118610280366004610cae565b610480565b34801561029157600080fd5b5060005460ff16610200565b3480156102a957600080fd5b506102b86101fb366004610b5d565b60405161015d9190610cef565b3480156102d157600080fd5b506101186102e0366004610d17565b61049b565b6101186102f3366004610b0b565b6104e1565b34801561030457600080fd5b50610118610313366004610d5e565b6104ff565b610320610529565b610328610574565b6103338383836105b0565b505050565b6000610342610529565b61034a610574565b61035483836105c9565b90505b92915050565b6000610357826105c9565b815181516060919081146103a8576040517f7b49805600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008167ffffffffffffffff8111156103c3576103c361092f565b60405190808252806020026020018201604052801561040857816020015b60408051808201909152600080825260208201528152602001906001900390816103e15790505b50905060005b828110156104775761045286828151811061042b5761042b610d77565b602002602001015186838151811061044557610445610d77565b60200260200101516105e4565b82828151811061046457610464610d77565b602090810291909101015260010161040e565b50949350505050565b3361048a816105fd565b6104958484846106c8565b50505050565b6104a48261070d565b7f91efa3d50feccde0d0d202f8ae5c41ca0b2be614cebcb2bd2f4b019396e6568a82826040516104d5929190610d8d565b60405180910390a15050565b6104e9610529565b6104f1610574565b6104fb828261078e565b5050565b610507610529565b80600260008282546105199190610de3565b9091555061052690508181565b50565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146105725760405163075fd2b160e01b815260040160405180910390fd5b565b600154600003610572576040517f3da3f98c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040516302ad284d60e31b815260040160405180910390fd5b60006040516302ad284d60e31b815260040160405180910390fd5b60408051808201909152600080825260208201526105b0565b6001546040517f29e40d4b00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b0382811660248301527f000000000000000000000000000000000000000000000000000000000000000016906329e40d4b90604401602060405180830381865afa158015610687573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ab9190610e04565b6105265760405163075fd2b160e01b815260040160405180910390fd5b7fffffffffffffffffffffffff11111111111111111111111111111111111111126001600160a01b038416016107025761033382826108c4565b6103338383836108e0565b610715610529565b6001541561074f576040517f439a74c900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80600003610789576040517f7fcce2a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600155565b80610798816105fd565b6000806000858060200190518101906107b19190610e91565b925092509250600083519050806000036107de5760405163fb76571560e01b815260040160405180910390fd5b825181146107ff5760405163fb76571560e01b815260040160405180910390fd5b60005b818110156108ba57600084828151811061081e5761081e610d77565b60200260200101519050600086838151811061083c5761083c610d77565b602002602001015190506108518582846106c8565b806001600160a01b03167f463ffc2cf8b1596445c417388ed30e53eb67cf6668cb2be7f0addf8a78c8441b83878c6040516108a8939291909283526001600160a01b03918216602084015216604082015260600190565b60405180910390a25050600101610802565b5050505050505050565b60008060008084865af16104fb5763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d156001600051141716610925576390b8ec186000526004601cfd5b6000603452505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561096e5761096e61092f565b604052919050565b600067ffffffffffffffff8211156109905761099061092f565b5060051b60200190565b6001600160a01b038116811461052657600080fd5b600082601f8301126109c057600080fd5b813560206109d56109d083610976565b610945565b82815260059290921b840181019181810190868411156109f457600080fd5b8286015b84811015610a18578035610a0b8161099a565b83529183019183016109f8565b509695505050505050565b600082601f830112610a3457600080fd5b813567ffffffffffffffff811115610a4e57610a4e61092f565b610a61601f8201601f1916602001610945565b818152846020838601011115610a7657600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610aa857600080fd5b833567ffffffffffffffff80821115610ac057600080fd5b610acc878388016109af565b94506020860135915080821115610ae257600080fd5b50610aef86828701610a23565b9250506040840135610b008161099a565b809150509250925092565b60008060408385031215610b1e57600080fd5b823567ffffffffffffffff811115610b3557600080fd5b610b4185828601610a23565b9250506020830135610b528161099a565b809150509250929050565b600060208284031215610b6f57600080fd5b8135610b7a8161099a565b9392505050565b60008060408385031215610b9457600080fd5b823567ffffffffffffffff80821115610bac57600080fd5b610bb8868387016109af565b9350602091508185013581811115610bcf57600080fd5b8501601f81018713610be057600080fd5b8035610bee6109d082610976565b81815260059190911b82018401908481019089831115610c0d57600080fd5b8584015b83811015610c4557803586811115610c295760008081fd5b610c378c8983890101610a23565b845250918601918601610c11565b508096505050505050509250929050565b602080825282518282018190526000919060409081850190868401855b82811015610ca157815180516001600160a01b03168552860151868501529284019290850190600101610c73565b5091979650505050505050565b600080600060608486031215610cc357600080fd5b8335610cce8161099a565b92506020840135610cde8161099a565b929592945050506040919091013590565b6020810160078310610d1157634e487b7160e01b600052602160045260246000fd5b91905290565b60008060408385031215610d2a57600080fd5b82359150602083013567ffffffffffffffff811115610d4857600080fd5b610d5485828601610a23565b9150509250929050565b600060208284031215610d7057600080fd5b5035919050565b634e487b7160e01b600052603260045260246000fd5b82815260006020604081840152835180604085015260005b81811015610dc157858101830151858201606001528201610da5565b506000606082860101526060601f19601f830116850101925050509392505050565b8082018082111561035757634e487b7160e01b600052601160045260246000fd5b600060208284031215610e1657600080fd5b81518015158114610b7a57600080fd5b600082601f830112610e3757600080fd5b81516020610e476109d083610976565b82815260059290921b84018101918181019086841115610e6657600080fd5b8286015b84811015610a185780518352918301918301610e6a565b8051610e8c8161099a565b919050565b600080600060608486031215610ea657600080fd5b835167ffffffffffffffff80821115610ebe57600080fd5b818601915086601f830112610ed257600080fd5b81516020610ee26109d083610976565b82815260059290921b8401810191818101908a841115610f0157600080fd5b948201945b83861015610f28578551610f198161099a565b82529482019490820190610f06565b91890151919750909350505080821115610f4157600080fd5b50610f4e86828701610e26565b925050610f5d60408501610e81565b9050925092509256fea2646970667358221220ca1e57bb911adbe7f59037a13101dda10d01d02ddc3ad44407ff256d7de8d75264736f6c63430008150033";
