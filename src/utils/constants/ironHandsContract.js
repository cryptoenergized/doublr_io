const contractABI =[
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "oldPosition",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "newPosition",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "appealer",
      "type": "address"
    }
  ],
  "name": "ContinuityAppeal",
  "type": "event"
},
{
  "constant": false,
  "inputs": [],
  "name": "acceptOwnership",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "position",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "skipped",
      "type": "address"
    },
    {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "ContinuityBreak",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "donator",
      "type": "address"
    }
  ],
  "name": "Donation",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    }
  ],
  "name": "Dividends",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "creditor",
      "type": "address"
    }
  ],
  "name": "Payout",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "amountSpent",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "tokensReceived",
      "type": "uint256"
    }
  ],
  "name": "Purchase",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": false,
      "name": "amount",
      "type": "uint256"
    },
    {
      "indexed": false,
      "name": "depositer",
      "type": "address"
    }
  ],
  "name": "Deposit",
  "type": "event"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "_newOwner",
      "type": "address"
    }
  ],
  "name": "changeOwner",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "deposit",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "donate",
  "outputs": [],
  "payable": true,
  "stateMutability": "payable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [],
  "name": "payout",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "tokenAddress",
      "type": "address"
    },
    {
      "name": "tokenOwner",
      "type": "address"
    },
    {
      "name": "tokens",
      "type": "uint256"
    }
  ],
  "name": "transferAnyERC20Token",
  "outputs": [
    {
      "name": "success",
      "type": "bool"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "name": "multiplierPercent",
      "type": "uint256"
    },
    {
      "name": "powh",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "payable": true,
  "stateMutability": "payable",
  "type": "fallback"
},
{
  "constant": false,
  "inputs": [],
  "name": "withdraw",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "amountIAmOwed",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "anAddress",
      "type": "address"
    }
  ],
  "name": "amountOwed",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "backlog",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "backlogAmount",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "backlogLength",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "name": "creditRemaining",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "multiplier",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "myDividends",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "myTokens",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "owner",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "ownerCandidate",
  "outputs": [
    {
      "name": "",
      "type": "address"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "name": "participants",
  "outputs": [
    {
      "name": "etherAddress",
      "type": "address"
    },
    {
      "name": "payout",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "payoutOrder",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "totalDividends",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "totalParticipants",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "totalSpent",
  "outputs": [
    {
      "name": "",
      "type": "uint256"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}
];

export const address =  "0xe58b65d1c0c8e8b2a0e3a3acec633271531084ed"
export const ABI = contractABI
