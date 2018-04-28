import Web3 from 'web3';
import { store } from '../store/';
import { EVENT_PROVIDERS } from './constants/webEventProviders'
/*
* 1. Check for current networkId
* 2. Check list of networks web3 Event Providers we support
* 3. If network is not supported return error
* 4. If network is supported, try connect to web3 Event Providers
* 5. Return result  to the store
*/

let getWeb3Events = async () => {

  let networkId = store.state.web3.networkId;

  let web3EventProviders = EVENT_PROVIDERS[networkId]

  // 1. Check that this network has web3 event providers supported
  if (!web3EventProviders) {
    store.dispatch('registerWeb3Events', {
      isInjected: false,
      networkId: networkId,
      error: "This network provider is not supported."
    })
    return;
  }

  // 2. Try connect to each of web3 event providers and stop on first one working.
  let wsConnected = false;
  let web3jsEvents

  for (let i = 0; i < web3EventProviders.length && !wsConnected; i++) {
      try {
        web3jsEvents = new Web3(new Web3.providers.WebsocketProvider(web3EventProviders[i]));
        const res = await web3jsEvents.eth.net.isListening();

        wsConnected = res;
      } catch (e) {
        console.log('Web3 could not connect to websocket provider', web3EventProviders[i], e);
      }
  }

  store.dispatch('registerWeb3Events', {
    isInjected: wsConnected,
    web3Events: () => web3jsEvents,
    networkId: networkId
  })

}


export default getWeb3Events;
