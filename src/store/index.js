import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import getWeb3 from '../utils/getWeb3'
import getWeb3Events from '../utils/getWeb3Events'
import pollWeb3 from '../utils/pollWeb3'
import getContract from '../utils/getContract'

Vue.use(Vuex);

export const store = new Vuex.Store({
 strict: true,
 state,
 mutations: {
   registerWeb3Instance (state, payload) {
     console.log('registerWeb3instance Mutation being executed', payload)
     let result = payload
     let web3Copy = state.web3
     web3Copy.coinbase = result.coinbase
     web3Copy.networkId = result.networkId
     web3Copy.balance = parseInt(result.balance, 10)
     web3Copy.isInjected = result.web3Injected
     web3Copy.web3Instance = result.web3
     state.web3 = web3Copy
     getWeb3Events()
     pollWeb3()
   },
   pollWeb3Instance (state, payload) {
     console.log('pollWeb3Instance mutation being executed', payload)
     state.web3.coinbase = payload.coinbase
     state.web3.balance = parseInt(payload.balance, 10)
   },
   registerWeb3EventsInstance (state, payload) {
     console.log('registerWeb3EventsInstance mutation being executed', payload)
     let result = payload
     let web3EventsCopy = state.web3Events
     web3EventsCopy.isInjected = result.isInjected
     web3EventsCopy.networkId = result.networkId
     web3EventsCopy.web3Instance = result.web3Events
     web3EventsCopy.error = result.error
     // Now we can connect contract :)
     getContract()
   },
   registerIronHandsContract(state, payload) {
     console.log("IronHands contract registered: ", payload)
     state.ironHandsContractInstance = () => payload.contractInstance
     state.ironHandsContractEventsInstance = () => payload.contractEventsInstance
     state.ironHands.address = payload.address
   },
   updateIronHandsData(state, payload) {
     console.log("Update IronHands data: ", payload)
     let result = payload
     let ironHandsCopy = state.ironHands
     ironHandsCopy.amountOwed = result.amountOwed
     ironHandsCopy.dividends = result.dividends
     ironHandsCopy.tokens = result.tokens
     ironHandsCopy.backlogAmount = result.backlogAmount
     ironHandsCopy.backlogLength = result.backlogLength
     ironHandsCopy.totalParticipants = result.totalParticipants
     ironHandsCopy.totalDividends = result.totalDividends
     ironHandsCopy.totalSpent = result.totalSpent
     ironHandsCopy.contractBalance = result.contractBalance
     state.ironHands = ironHandsCopy
     state.web3IsLoading = false
   },
   showNotification(state, payload) {
     console.log("Show Notification called: ", payload);
     let result = payload
     state.newAlert = result.message
     if (result.hasSound) {
       console.log('Play SOUND');
       state.soundAlert = result.message
     }
   },
   failWeb3Registration(state, payload) {
      console.log("Show Fail Web3 Registration called: ", payload);
      let result = payload
      state.web3.error = result.message
   },
   muteSound(state, payload) {
     console.log('Mute sound called:', payload)
     let result = payload
     state.muteSound = !result.isMuted
   },
   updateParticipants(state, payload) {
     console.log('Participants list pulled', payload)
     let result = payload
     let ironHandsCopy = state.ironHands
     ironHandsCopy.participants = payload.participants
     state.ironHands = ironHandsCopy
   }
 },
 actions: {
   registerWeb3 ({commit}) {
      console.log('registerWeb3 Action being executed')
      getWeb3.then(result => {
        console.log('committing result to registerWeb3Instance mutation')
        commit('registerWeb3Instance', result)
      }).catch(e => {
        console.log('error in action registerWeb3', e)
        commit('failWeb3Registration', { message: e.message})
      })
    },
    pollWeb3 ({commit}, payload) {
      console.log('pollWeb3 action being executed')
      commit('pollWeb3Instance', payload)
    },
    registerWeb3Events({commit}, payload) {
      console.log('registerWeb3Events Action being executed')
      commit('registerWeb3EventsInstance', payload)
    },
    getIronHandsContract({commit}, payload) {
      console.log('getIronHandsContract Action being executed')
      commit('registerIronHandsContract', payload)
    },
    pullIronHandsData({commit}, payload) {
      console.log('pullIronHandsData Action being executed')
      commit('updateIronHandsData', payload)
    },
    depositRecieved({commit}, payload) {
      console.log('depositRecieved Action being executed')
      payload.message = `New Deposit recieved: ${payload.amount} ETH`
      payload.hasSound = true
      commit('showNotification', payload)
    },
    donationRecieved({commit}, payload) {
      console.log('donationRecieved Action being executed')
      payload.message = `New Donation recieved: ${payload.amount} ETH`
      payload.hasSound = true
      commit('showNotification', payload)
    },
    payoutRecieved({commit}, payload) {
      console.log('payoutRecieved Action being executed')
      payload.message = `Someone recieved payout: ${payload.amount} ETH`
      payload.hasSound = false
      commit('showNotification', payload)
    },
    pullParticipants({commit}, payload) {
      console.log('pullParticipants Action being executed')
      commit('updateParticipants', payload)
    }
  }
});
