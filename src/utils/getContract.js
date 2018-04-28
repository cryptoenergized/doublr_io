import Web3 from 'web3'
import { store } from '../store/';
import axios from 'axios'
import { address, ABI } from './constants/ironHandsContract'

let getContract = async () => {

  let web3 = store.state.web3.web3Instance()
  let web3Events = store.state.web3Events.web3Instance()

  // We may need check if something wrong with above setup ^^^
  let ironHandsContract = new web3.eth.Contract(ABI, address);
  let ironHandsContractEvents = new web3Events.eth.Contract(ABI, address);

  store.dispatch('getIronHandsContract', {
      contractInstance: ironHandsContract,
      contractEventsInstance: ironHandsContractEvents,
      address: address
  })

  ironHandsContractEvents.events.Deposit((err, result) => {
    if (err) {
      console.log('could not get event Deposit()')
      console.log(err);
    } else {
      console.log('Recieved event back!');
      let returnValues = result.returnValues
      store.dispatch('depositRecieved', {
        amount: Number(web3.utils.fromWei(returnValues.amount, 'ether')).toFixed(4),
        address: returnValues.depositer
      })
    }
  })

  ironHandsContractEvents.events.Donation((err, result) => {
    if (err) {
      console.log('could not get event Donation()')
      console.log(err);
    } else {
      console.log('Recieved event back!');
      let returnValues = result.returnValues
      store.dispatch('donationRecieved', {
        amount: Number(web3.utils.fromWei(returnValues.amount, 'ether')).toFixed(4),
        address: returnValues.donator
      })
    }
  })

  ironHandsContractEvents.events.Payout((err, result) => {
    if (err) {
      console.log('could not get event Payout()')
      console.log(err);
    } else {
      let returnValues = result.returnValues

      store.dispatch('payoutRecieved', {
        amount: Number(web3.utils.fromWei(returnValues.amount, 'ether')).toFixed(4),
        address: returnValues.creditor
      })
    }
  })


  /*
   event Deposit(uint256 amount, address depositer);
   event Purchase(uint256 amountSpent, uint256 tokensReceived);
   event Payout(uint256 amount, address creditor);
   event Dividends(uint256 amount);
   event Donation(uint256 amount, address donator);
   event ContinuityBreak(uint256 position, address skipped, uint256 amount);
   event ContinuityAppeal(uint256 oldPosition, uint256 newPosition, address appealer);
   */
  let participants = []
  let sumEther = 0
  const refreshParticipantsData = async () => {
    let totalParticipants = await ironHandsContract.methods
                                      .totalParticipants().call()
    totalParticipants = totalParticipants

    // Load list of all participants from the Contract
    // (A lot on first call, much less later)

    for(let i = participants.length; i < totalParticipants; i++) {
      let participant = await ironHandsContract.methods.participants(i).call();

      let payout =  Number(web3.utils.fromWei(participant[1], 'ether')).toFixed(4)

      participants.push({
        order: i,
        address: participant[0],
        payout: payout,
        beforeMe: sumEther
      });
      sumEther = (Number(sumEther) + Number(payout)).toFixed(4)
    }

    store.dispatch('pullParticipants', {
      participants
    })
  }
  refreshParticipantsData()
  // setInterval(refreshParticipantsData, 5000)


  const refreshIronHandsContractState = async () => {
    // Get Number of total participants in contract
    let totalParticipants = await ironHandsContract.methods
                                      .totalParticipants().call()
    totalParticipants = totalParticipants

    // Get Number of participants waiting for payment
    let backlogLength = await ironHandsContract.methods
                                      .backlogLength().call()
    backlogLength = backlogLength

    // Get Amount of Ether waiting to be paid
    let backlogAmount = await ironHandsContract.methods
                                      .backlogAmount().call()
    backlogAmount = Number(web3.utils.fromWei(backlogAmount, 'ether')).toFixed(4)

		// Get Contract Multiplier
		let multiplier = await ironHandsContract.methods
                                      .multiplier().call()
    multiplier = multiplier / 100

		// P3D Checks
		// Get amount of tokens owned by contract
		let tokens = await ironHandsContract.methods
                                      .myTokens().call()
    tokens = Number(web3.utils.fromWei(tokens, 'ether')).toFixed(4);

		// Get amount of dividends collected by contract
		let dividends = await ironHandsContract.methods
                                      .myDividends().call()
    dividends = Number(web3.utils.fromWei(dividends, 'ether')).toFixed(4);

		// User specific call
		let amountOwed = await ironHandsContract.methods
                                      .amountIAmOwed().call({
                                        from: store.state.web3.coinbase
                                      })
    amountOwed = Number(web3.utils.fromWei(amountOwed, 'ether')).toFixed(4);

    // Total amount of ETH that the contract has delt with so far.
    let totalSpent = await ironHandsContract.methods
                                      .totalSpent().call()
    totalSpent =  Number(web3.utils.fromWei(totalSpent, 'ether')).toFixed(4);

    // Number of dividends received by the contract.
    let totalDividends = await ironHandsContract.methods
                                      .totalDividends().call()
    totalDividends = Number(web3.utils.fromWei(totalDividends, 'ether')).toFixed(4);

    let contractBalance = await web3.eth.getBalance(address)
    contractBalance = Number(web3.utils.fromWei(contractBalance, 'ether')).toFixed(4);

    store.dispatch('pullIronHandsData', {
      amountOwed,
      dividends,
      tokens,
      multiplier,
      backlogAmount,
      backlogLength,
      totalParticipants,
      totalSpent,
      totalDividends,
      contractBalance
    })
	}

  setInterval(refreshIronHandsContractState, 1000)
}

export default getContract;
