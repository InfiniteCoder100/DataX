export const POLICY_CONTRACT = {
    "_format": "hh-sol-artifact-1",
    "contractName": "OpenPolicy",
    "sourceName": "contracts/OpenPolicy.sol",
    "abi": [
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "name": "getPolicy",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "allowInsert",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "allowUpdate",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "allowDelete",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "whereClause",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "withCheck",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "updatableColumns",
                "type": "string[]"
              }
            ],
            "internalType": "struct TablelandPolicy",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "getPolicy",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "allowInsert",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "allowUpdate",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "allowDelete",
                "type": "bool"
              },
              {
                "internalType": "string",
                "name": "whereClause",
                "type": "string"
              },
              {
                "internalType": "string",
                "name": "withCheck",
                "type": "string"
              },
              {
                "internalType": "string[]",
                "name": "updatableColumns",
                "type": "string[]"
              }
            ],
            "internalType": "struct TablelandPolicy",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "payable",
        "type": "function"
      }
    ],
    "bytecode": "0x608060405234801561000f575f80fd5b506104ef8061001d5f395ff3fe608060405260043610610028575f3560e01c80633791dc6a1461002c57806366df322e1461005c575b5f80fd5b610046600480360381019061004191906101dd565b61008c565b60405161005391906103fb565b60405180910390f35b6100766004803603810190610071919061044e565b610098565b60405161008391906103fb565b60405180910390f35b610094610146565b5f80fd5b6100a0610146565b6040518060c001604052806001151581526020016001151581526020015f1515815260200160405180602001604052805f815250815260200160405180602001604052805f81525081526020015f67ffffffffffffffff8111156101075761010661048c565b5b60405190808252806020026020018201604052801561013a57816020015b60608152602001906001900390816101255790505b50815250905092915050565b6040518060c001604052805f151581526020015f151581526020015f151581526020016060815260200160608152602001606081525090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101ac82610183565b9050919050565b6101bc816101a2565b81146101c6575f80fd5b50565b5f813590506101d7816101b3565b92915050565b5f602082840312156101f2576101f161017f565b5b5f6101ff848285016101c9565b91505092915050565b5f8115159050919050565b61021c81610208565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561025957808201518184015260208101905061023e565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61027e82610222565b610288818561022c565b935061029881856020860161023c565b6102a181610264565b840191505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f6102e08383610274565b905092915050565b5f602082019050919050565b5f6102fe826102ac565b61030881856102b6565b93508360208202850161031a856102c6565b805f5b85811015610355578484038952815161033685826102d5565b9450610341836102e8565b925060208a0199505060018101905061031d565b50829750879550505050505092915050565b5f60c083015f83015161037c5f860182610213565b50602083015161038f6020860182610213565b5060408301516103a26040860182610213565b50606083015184820360608601526103ba8282610274565b915050608083015184820360808601526103d48282610274565b91505060a083015184820360a08601526103ee82826102f4565b9150508091505092915050565b5f6020820190508181035f8301526104138184610367565b905092915050565b5f819050919050565b61042d8161041b565b8114610437575f80fd5b50565b5f8135905061044881610424565b92915050565b5f80604083850312156104645761046361017f565b5b5f610471858286016101c9565b92505060206104828582860161043a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffdfea26469706673582212202edf4cb4927bcde63aa730f6a5853a5d8fcb5fc5b13d0cd8807547daa0c8737864736f6c63430008150033",
    "deployedBytecode": "0x608060405260043610610028575f3560e01c80633791dc6a1461002c57806366df322e1461005c575b5f80fd5b610046600480360381019061004191906101dd565b61008c565b60405161005391906103fb565b60405180910390f35b6100766004803603810190610071919061044e565b610098565b60405161008391906103fb565b60405180910390f35b610094610146565b5f80fd5b6100a0610146565b6040518060c001604052806001151581526020016001151581526020015f1515815260200160405180602001604052805f815250815260200160405180602001604052805f81525081526020015f67ffffffffffffffff8111156101075761010661048c565b5b60405190808252806020026020018201604052801561013a57816020015b60608152602001906001900390816101255790505b50815250905092915050565b6040518060c001604052805f151581526020015f151581526020015f151581526020016060815260200160608152602001606081525090565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6101ac82610183565b9050919050565b6101bc816101a2565b81146101c6575f80fd5b50565b5f813590506101d7816101b3565b92915050565b5f602082840312156101f2576101f161017f565b5b5f6101ff848285016101c9565b91505092915050565b5f8115159050919050565b61021c81610208565b82525050565b5f81519050919050565b5f82825260208201905092915050565b5f5b8381101561025957808201518184015260208101905061023e565b5f8484015250505050565b5f601f19601f8301169050919050565b5f61027e82610222565b610288818561022c565b935061029881856020860161023c565b6102a181610264565b840191505092915050565b5f81519050919050565b5f82825260208201905092915050565b5f819050602082019050919050565b5f6102e08383610274565b905092915050565b5f602082019050919050565b5f6102fe826102ac565b61030881856102b6565b93508360208202850161031a856102c6565b805f5b85811015610355578484038952815161033685826102d5565b9450610341836102e8565b925060208a0199505060018101905061031d565b50829750879550505050505092915050565b5f60c083015f83015161037c5f860182610213565b50602083015161038f6020860182610213565b5060408301516103a26040860182610213565b50606083015184820360608601526103ba8282610274565b915050608083015184820360808601526103d48282610274565b91505060a083015184820360a08601526103ee82826102f4565b9150508091505092915050565b5f6020820190508181035f8301526104138184610367565b905092915050565b5f819050919050565b61042d8161041b565b8114610437575f80fd5b50565b5f8135905061044881610424565b92915050565b5f80604083850312156104645761046361017f565b5b5f610471858286016101c9565b92505060206104828582860161043a565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffdfea26469706673582212202edf4cb4927bcde63aa730f6a5853a5d8fcb5fc5b13d0cd8807547daa0c8737864736f6c63430008150033",
    "linkReferences": {},
    "deployedLinkReferences": {}
  }
  