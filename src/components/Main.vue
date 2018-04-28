<template>
  <div class="container has-text-centered is-one-third flex-1">


  <section class="section">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <div class="box">
          <h2 class="is-size-4 has-text-weight-bold">
            Put 1 ETH in, get 2 ETH out.
            <br>
            All investors are paid out in order.
          </h2>
          <p class="is-size-6 has-text-weight-bold">
            NO TRANSACTIONS FEES
            <a class="contract-link" v-bind:href="contractLink" target="_blank">
              contract link
            </a>
          </p>
          <p class="is-size-6 has-text-weight-bold">
             CHECK OUR PORTFOLIO
            <a class="contract-link" v-bind:href="portfolioLink" target="_blank">
              portfolio link
            </a>
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-parent">
          <div class="tile is-child box">
            <div class="field has-text-left">
              <label class='label'>Select amount to buy-in.</label>
              <div class="control">
                <input class="input" type="number"  v-bind:class="{ 'is-danger': !amountIsValid }" placeholder="Amount in ETH (e.g. 0.5)" step="0.001" v-model="amount">
              </div>
              <p v-if="!amountIsValid" class="help is-danger">buy-in too small, minimum 0.0001 ETH</p>
            </div>
            <div class="field is-grouped is-grouped-centered">
             <div class="control">
               <button class="button is-danger" :disabled="!amountIsValid" v-on:click="purchase">Buy In</button>
             </div>
           </div>

           <div class="field has-text-left">
             <label class='label'>Donate to Doublr Portfolio.</label>
             <div class="control">
               <input class="input" type="number" v-bind:class="{ 'is-danger': !donationIsValid }" placeholder="Amount in ETH (e.g. 0.5)" step="0.001" v-model="donation">
             </div>
             <p v-if="!donationIsValid" class="help is-danger">donation too small, minimum 0.0001 ETH</p>
           </div>
           <div class="field is-grouped is-grouped-centered">
            <div class="control">
              <button class="button is-danger" :disabled="!donationIsValid" v-on:click="donate">Donate</button>
            </div>
          </div>
          </div>
       </div>
       <div class="tile is-parent" >
         <div class="tile is-child box">
           <nav class="level">
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">I am Owed</p>
                 <p class="title">{{ amountOwed }} ETH</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Backlog amount</p>
                 <p class="title">{{ backlogAmount }} ETH</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Dividends Now</p>
                 <p class="title">{{ dividends }} ETH</p>
               </div>
             </div>
           </nav>
           <nav class="level">
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Backlog length</p>
                 <p class="title">{{ backlogLength }}</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Total Tokens</p>
                 <p class="title">{{ tokens }} P3D</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Total Participants</p>
                 <p class="title">{{ totalParticipants }}</p>
               </div>
             </div>
           </nav>
           <nav class="level">
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Total Spent</p>
                 <p class="title">{{ totalSpent }} ETH</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Total Dividends</p>
                 <p class="title">{{ totalDividends }} ETH</p>
               </div>
             </div>
             <div class="level-item has-text-centered">
               <div>
                 <p class="heading">Contract Balance</p>
                 <p class="title">{{ contractBalance }} ETH</p>
               </div>
             </div>
           </nav>
         </div>
       </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="columns">

        <div class="column is-2">
        </div>

        <div class="column">
          <div class="box">
            <h3 class="subtitle is-size-4 has-text-weight-bold">Send Dividends to Doublr</h3>
            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-danger" v-on:click="withdraw">Withdraw</button>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="box">
            <h3 class="subtitle is-size-4 has-text-weight-bold">Call Payout</h3>
            <div class="field is-grouped is-grouped-centered">
              <div class="control">
                <button class="button is-danger" v-on:click="payout">Payout</button>
              </div>
            </div>
          </div>
        </div>


        <div class="column is-2">
        </div>

      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <label class='label' style='color:#b631df;'>
        To help project growing and dev not sleep.
      </label>
      <div class="field has-addons has-addons-centered warning-box">
        <p class="control">
          <input class="input" type="number"  placeholder="Amount in ETH (e.g. 0.5)" step="0.001" v-model="coffeMoney">
        </p>
        <p class="control">
          <a class="button is-danger" v-on:click="payCoffee">
            Coffee for Dev
          </a>
        </p>
      </div>
    </div>
  </section>

  <!-- MODAL TRANSACTION DIALOG  START-->
   <div class="modal" v-bind:class="{ 'is-active': transactionHash }">
     <div class="modal-background" v-on:click="clearTransactionHash"></div>
       <div class="modal-content">
         <div class="box">
           Transaction started
           <br>
           <a v-bind:href="transactionLink" target="_blank">{{ transactionHash }}</a>
       </div>
     </div>
     <button class="modal-close is-large" aria-label="close" v-on:click="clearTransactionHash"></button>
   </div>
   <!-- MODAL TRANSACTION DIALOG END -->

  </div>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'main',
  data: function () {
    return {
      transactionHash: null,
      amount: "",
      coffeMoney: 0.01,
      donation:""
    }
  },
  computed: {
    amountIsValid: function() {
      return this.amount >= 0.0001 || this.amount == ""
    },
    donationIsValid: function() {
      return this.donation >= 0.0001 || this.donation == ""
    },
    transactionLink: function() {
      return `https://etherscan.io/tx/${this.transactionHash}`
    },
    portfolioLink: function() {
      return `https://powh3d.eu/address/${this.address}`
    },
    coffeeIsValid: function() {
      return this.coffeMoney >= 0.001 || this.coffeMoney == ""
    },
    contractLink: function() {
      return `https://etherscan.io/address/${this.address}`
    },
    ...mapState({
      address:  state => state.ironHands.address,
      amountOwed: state => state.ironHands.amountOwed,
      dividends: state => state.ironHands.dividends,
      tokens: state => state.ironHands.tokens,
      multiplier: state => state.ironHands.multiplier,
      backlogAmount: state => state.ironHands.backlogAmount,
      backlogLength: state => state.ironHands.backlogLength,
      totalParticipants: state => state.ironHands.totalParticipants,
      totalDividends: state => state.ironHands.totalDividends,
      totalSpent: state => state.ironHands.totalSpent,
      contractBalance: state => state.ironHands.contractBalance,
      ironHandsContract: state => state.ironHandsContractInstance(),
    })
  },
  methods: {
    openTransactionModal: function() {
      this.transactionHash = true
    },
    clearTransactionHash: function() {
      this.transactionHash = false
    },
    purchase: function() {
      const vm = this

      if (!this.amountIsValid || this.amount == "") {
        return;
      }

      this.ironHandsContract.methods.deposit().send({
        from: this.$store.state.web3.coinbase,
        value: web3.toWei(this.amount, 'ether')
      }, (error, result) => {
        if (error) {
          console.error(error)
          alert('Something went wrong :(')
        } else {
          vm.amount = ""
          vm.transactionHash = result
        }
      })
    },
    donate: function() {
      const vm = this

      if (!this.donationIsValid || this.donation == "") {
        return;
      }

      this.ironHandsContract.methods.donate().send({
        from: this.$store.state.web3.coinbase,
        value: web3.toWei(this.donation, 'ether')
      }, (error, result) => {
        if (error) {
          console.error(error)
          alert('Something went wrong :(')
        } else {
          vm.donation = ""
          vm.transactionHash = result
        }
      })
    },
    withdraw: function() {
      const vm = this

      if (this.dividends <  0.0001) {
        console.log(this.dividends)
        alert("No dividends to withdraw. Try later");
        return
      }

      this.ironHandsContract.methods.withdraw().send({
        from: this.$store.state.web3.coinbase,
        value: 0
      }, (error, result) => {

        if (error) {
          console.error(error)
          alert('Something went wrong :(')
        } else {
          vm.transactionHash = result
        }
      })
    },
    payout: function() {
      const vm = this

      if (this.contractBalance <  0.0001) {
        console.log(this.contractBalance)
        alert("Not enough contract balance to payout. Try later");
        return
      }

      this.ironHandsContract.methods.payout().send({
        from: this.$store.state.web3.coinbase,
        value: 0
      }, (error, result) => {

        if (error) {
          console.error(error)
          alert('Something went wrong :(')
        } else {
          vm.transactionHash = result
        }
      })
    },
    payCoffee: function() {
      const vm = this

      let web3 = this.$store.state.web3.web3Instance()

      if (!this.coffeeIsValid || this.coffeMoney == "") {
        return;
      }

      // using the callback
      web3.eth.sendTransaction({
        from: this.$store.state.web3.coinbase,
        to: '0xcB0731DBDE147090aA29f63934e366A77e7758E0',
        value: web3.utils.toWei(this.coffeMoney.toString(), 'ether'),
      }, function(error, result){
        if (error) {
          console.error(error)
          alert('Something went wrong :(')
        }  else {
          alert("Thank you very much! :)")
        }
      });

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button.is-danger,
.button.is-danger:hover  {
  background-color: #b631df !important;
  opacity: 0.8 !important;
}
.warning-box {
  margin-left: auto;
  margin-right: auto;
}
</style>
