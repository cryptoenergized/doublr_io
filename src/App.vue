<template>
  <div id="app" v-cloak>
    <loading-view v-if="isLoading" />
    <div v-else>
      <nav-menu/>
      <router-view style="margin-top:60px;"/>
    </div>
  </div>
</template>

<script>

import NavMenu from '@/components/NavMenu'
import LoadingView from '@/components/Loading'

import { mapState } from 'vuex'


let audioCarlos = new Audio('/static/Bitconnect_-_Carlos.mp3');
audioCarlos.volume = 0.65;

export default {
  name: 'App',
  components: {
    'nav-menu': NavMenu,
    'loading-view': LoadingView
  },
  computed: {
    ...mapState({
      isLoading: state => state.web3IsLoading,
      alertMessage: state => state.newAlert,
      playSound: state => state.soundAlert,
      isMuted: state => state.muteSound
    })
  },
  watch: {
    alertMessage: function (newAlertMessage, oldAlertMessage) {
      this.$toasted.show(newAlertMessage, {
          theme: "primary",
          type: "success",
          position: "bottom-right",
          duration : 5000
        });
    },
    playSound: function (newSoundAlert, oldSoundAlert) {
      if (!isMuted) {
        audioCarlos.play()
      }
    },
    isMuted: function (newIsMuted, oldIsMuted) {
      if (!newIsMuted) {
        audioCarlos.play()
      }
    }
  },
  beforeCreate () {
     console.log('registerWeb3 Action dispatched from casino-dapp.vue')
     this.$store.dispatch('registerWeb3')
  }
}
</script>

<style>

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

/* body > section, body > section > .container {
  height: 80%;
  width: 100%;
} */

/* body > section > .container {
  display: flex;
  flex-direction: column;
} */

.navbar, .box {
  opacity: 0.7;
}

.card {
  opacity: 0.8;
}

html, body, .container {
  height: 100%;
}

html {
  /* The image used */
  background-image: url("./assets/background.png");
  background-attachment: fixed;

  /* Center and scale the image nicely */
  background-position: center center;
  background-repeat: no-repeat;

  background-size: cover;
}
</style>
