import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
// Please create import file and attach to view here
import store from './store'

import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
