// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
// Add the styles here
import 'bulma/css/bulma.min.css'

// import 'assets/main.scss'
import 'font-awesome/css/font-awesome.min.css'

// Add Toasted to our UI
// register the plugin on vue
import Toasted from 'vue-toasted';
Vue.use(Toasted)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
