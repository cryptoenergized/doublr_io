<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
       <router-link class="navbar-item" to="/">
         <img src="../assets/logo.png" alt="Doublr: a modern way to 2x your money" width="112" height="28">
       </router-link>

      <div class="navbar-burger burger" v-on:click="toggleNav" v-bind:class="{ 'is-active': isActive }" data-target="navbarExampleTransparentExample">
      <span></span>
      <span></span>
      <span></span>
    </div>

    </div>
    <div id="navbarExampleTransparentExample" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/participants">
          Participants
        </router-link>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button is-primary" href="https://discord.gg/SkhqW5V">
              <!-- <span class="icon">
                <i class="fab fa-discord"></i>
              </span> -->
              <span>
                Discord
              </span>
            </a>
          </p>
          <p class="control">
            <a class="button is-danger" v-on:click="muteSound">
              <span class="icon">
                <i class="fa" v-bind:class="{ 'fa-volume-off': isMuted, 'fa-volume-up': !isMuted }"></i>
              </span>
              <span>
                Sound
              </span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>

import { mapState } from 'vuex'


export default {
  name: 'nav-menu',
  data: function() {
    return {
      isActive: false
    }
  },
  computed: {
    ...mapState({
      errorMessage: state => state.web3.error,
      isMuted: state => state.muteSound
    })
  },
  methods: {
    toggleNav: function() {
      this.isActive = !this.isActive;
    },
    muteSound: function() {
      this.$store.commit('muteSound',{
        isMuted: this.isMuted
      })
    }
  }
}
</script>

<style scoped>
.button.is-danger,
.button.is-danger:hover  {
  background-color: #b631df !important;
}
.navbar { position: fixed !important; top: 0; left: 0; right: 0; }
</style>
