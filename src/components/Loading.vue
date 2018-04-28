<template>
  <div class="container">
    <div class="loading-view has-text-centered" v-if="!errorMessage">
      <atom-spinner
        :animation-duration="1000"
        :size="120"
        :color="'#b631df'"
        />
      <h3 class="subtitle is-size-5 has-text-weight-bold" style="color:#b631df;">Loading Doublr</h3>
    </div>
    <div class="has-text-centered warning-box" v-else>
      <h1 class="title is-size-1" style="color:#b631df;">{{ errorMessage }}</h1>
    </div>
  </div>
</template>

<script>
import {AtomSpinner} from 'epic-spinners'
import { mapState } from 'vuex'

export default {
  name: 'loading-view',
  components: {
     AtomSpinner
  },
  computed: {
    ...mapState({
      errorMessage: state => state.web3.error
    })
  }
}

</script>

<style scoped>
.loading-view {
  width: 200px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 200px;
}

.atom-spinner {
  margin-left: auto;
  margin-right: auto;
}

.warning-box {
  margin-top:200px;
}

</style>
