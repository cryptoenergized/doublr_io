let state = {
  web3IsLoading: true,
  newAlert: null,
  soundAlert: null,
  muteSound: true,
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    coinbase: null,
    balance: null,
    error: null,
  },
  web3Events: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    error: null
  },
  ironHands: {
    participants: [],
    amountOwed: 0,
    dividends: 0,
    tokens: 0,
    multiplier: 0,
    backlogAmount: 0,
    backlogLength: 0,
    totalParticipants: 0,
    totalSpent:0,
    totalDividends: 0,
    contractBalance: 0,
    address: null
  },
  ironHandsContractInstance: null,
  ironHandsContractEventsInstance: null
}

export default state
