import Web3 from 'web3';
import { CURRENT_NETWORK_ID } from '../config'
import {NETWORKS} from './constants/networks'
/*
* 1. Check for injected web3 (mist/metamask)
* 2. If metamask/mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/

// const web3 = new Web3(window.web3.currentProvider);
//
// export default web3;

let getWeb3 = new Promise(async (resolve, reject) => {
  // Check for injected web3 (mist/metamask)
  var web3js = window.web3;
  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    let isInjected =  await web3.eth.net.isListening();
    resolve({
      web3Injected: isInjected,
      web3 () {
        return web3
      }
    })
  } else {
    // web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')) GANACHE FALLBACK
    reject(new Error('You must install MetaMask!'))
  }
}).then(result => {
    return new Promise((resolve, reject) => {
      // Retrieve network ID
     result.web3().eth.net.getId((err, networkId) => {
       if (err) {
         // If we can't find a networkId keep result the same and reject the promise
         reject(new Error('Unable to retrieve network ID'))
       } else {
         if (CURRENT_NETWORK_ID == networkId) {
           // Assign the networkId property to our result and resolve promise
           result = Object.assign({}, result, {networkId})
           resolve(result)
         } else {
           // User should use different network to play Doublr
           reject(new Error(`You must use ${NETWORKS[CURRENT_NETWORK_ID]}!`));
         }
       }
     })
    })
}).then(result => {
    return new Promise((resolve, reject) => {
      // Retrieve coinbase
      result.web3().eth.getCoinbase((err, coinbase) => {
        if (err) {
          reject(new Error('Unable to retrieve coinbase, please login MetaMask'))
        } else {
          result = Object.assign({}, result, { coinbase })
          resolve(result)
        }
      })
    })
  }).then(result => {
    return new Promise((resolve, reject) => {
      // Retrieve balance for coinbase
      result.web3().eth.getBalance(result.coinbase, (err, balance) => {
        if (err) {
          reject(new Error('Unable to retrieve balance for address: ' + result.coinbase))
        } else {
          result = Object.assign({}, result, { balance })
          resolve(result)
        }
      })
    })
  })

export default getWeb3;
