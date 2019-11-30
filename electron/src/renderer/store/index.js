import Vue from 'vue'
import Vuex from 'vuex'
import OS from 'os'

// import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  state: {
    os: OS,
    privateIP:  Object.values(OS.networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address,
  },
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  strict: process.env.NODE_ENV !== 'production'
})