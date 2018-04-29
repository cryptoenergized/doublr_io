<template>
    <div class="container has-text-centered is-one-third flex-1">
      <div class="section">
        <div class="columns">
          <div class="column is-2">
          </div>
          <div class="column">
            <img src="../assets/logo.png">
            <h1 class="title is-3" style="margin-top:30px; margin-bottom: 30px;color:#b631df;">How to Doublr: A step by step guide for beginners.</h1>
            <h2 class="subtitle is-3 has-text-weight-bold" style="color:#b631df;"> Installation Metamask </h2>

            <div class="box">
              <div class="content has-text-left">
	                 <h1>Installation of Meta Mask</h1>

		               <p>Using Chrome or Firefox, install <a href="https://metamask.io" target="_blank" style="margin-left:20px;">
		    		             <img src="../assets/metamask.png" style="vertical-align: bottom;">
		    	         </a>. <br><br>
                   </p>
                   <p><strong>Follow the following steps using this <a href="https://www.youtube.com/watch?v=e9OsJH2F-lU" target="_blank">installation video</a>.</strong></p>
                   <figure>
                     <iframe width="100%" height="400px" src="https://www.youtube.com/embed/e9OsJH2F-lU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> <br>
                   </figure>
                   <br>
                   1.) Create your metamask account password and then store your 12 seed words. <br>
                 </br>
                   <h4>Fund MetaMask with Coinbase account</h4>
                   2.) Click 'BUY' button<br>
                   3.) Make sure 'Coinbase' is selected and click 'Continue to Coinbase'<br>
                   4.) Enter USD amount of ETH you would like to purchase and have sent to your MetaMask.<br>
                   5.) Enter your email address you use with coinbase and click 'Continue'<br>
                   6.) Enter your Password and click 'Continue'<br>
                   7.) Enter authorization code, if applicable<br>
                   8.) Select Payment Method<br>
                   9.) Click the Green 'Buy' button to finalize your purchase.  Your ETH will be transferred automagically to your MetaMask. <br>

                   <h3>OR</h3>

                   <h4>Fund with another account</h4>
                   2.) Open MetaMask, click the '...' icon, and select 'Copy address to clipboard' .<br>
                   3.) Go to where you currently have ETH (Binance, Gemini, etc.) and find the 'Send' or 'Transfer' feature for your wallet.<br>
                   4.) Transfer Ethereum to MetaMmask address.<br>
                   <p></p>
            </div>
          </div>

          <h2 class="subtitle is-3 has-text-weight-bold" style="color:#b631df;"> Installation of Trust Wallet </h2>
          <div class="box">
            <div class="content has-text-left">
		            <h4>Set Up Trust Wallet</h4>

                  <p>1.) Using your mobile, download and install <a href="https://trustwalletapp.com/" target="_blank" style="margin-left:20px;">
		    		            <img src="../assets/trust-wallet.png" style="vertical-align: bottom;">
		    	               </a>. <br>


                         <br></p>

                  <p><strong>Follow the following steps using this <a href="https://www.youtube.com/watch?v=3QMxQ9P8nAY" target="_blank">installation/setup video</a>.</strong></p><br>
                  <figure>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/3QMxQ9P8nAY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>
                  </figure>
                  <h4>Fund with another account</h4>
                  2.) Open Trust Wallet, click the wallet icon, click 'Recieve', and select 'Copy wallet address'.<br>
                  3.) Go to where you currently have ETH (Binance, Gemini, etc.) and find the 'Send' or 'Transfer' feature for your wallet.<br>
                  4.) Transfer Ethereum to Trust Wallet address.<br>
            </div>
          </div>

          <h2 class="subtitle is-3 has-text-weight-bold" style="color:#b631df;"> Investing in Fund </h2>
          <div class="box">
            <div class="content has-text-left">
		            <h4>Using the Fund</h4>

                  <p>1.) After logging into your MetaMask or Trust Wallet account, navigate to our <a href="https://doublr.io/#/fund" target="_blank">Fund</a>. <br>
                    2.) Under 'Select amount to buy-in' enter the amount of ETH you wish to spend.<br>
                    3.) Click 'Buy In' button.<br>
                    4.) MetaMask or Trust Wallet will then prompt you to authorize the transaction and assign GWEI (satoshi for ETH) for Gas (transaction speed fee).<br>
                  </p>
            </div>
          </div>

          <h2 class="subtitle is-3 has-text-weight-bold" style="color:#b631df;"> Getting 2x </h2>
          <div class="box">
            <div class="content has-text-left">
		            <h4>Getting 2x</h4>
                <p>
                  Once you have invested in fund, you will be added in the queue of payouts 2x of your investment.
                  This is controlled by contract and will happen autoamtically, when your turn will come.
                </p>
                <p>
                  You can check your position in participants list on page <a href="https://doublr.io/#/participants" target="_blank">Participants</a></p>
                <p>
                  Please visit our <a href="https://discord.gg/SkhqW5V" target="_blank"> discord </a> for more information.
                </p>
            </div>
          </div>

        </div>
        <div class="column is-2">
        </div>
      </div>
    </div>
    </div>
</template>

<script>


export default {
  name: 'about',
  data: function () {
    return {}
  }
}
</script>

<style scoped>
.box {
  opacity: 1 !important;
}
.content, h1,h2,h3,h4,h5,h6,strong{
  /* color:#b631df; */
}


</style>
