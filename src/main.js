// The Vue build version to load with the `import` command
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Vuex from 'vuex'
Vue.use(Vuex)
Vue.config.productionTip = false
console.log(store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
