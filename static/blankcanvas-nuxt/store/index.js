/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/online/electron'
import fs from './modules/online/file-system'
import document, { mutations as documentMutations } from './modules/online/document'
import connections from './modules/online/connections'
import artflow from './modules/online/artflow'
import director from './modules/online/director'
import attachedFiles from './modules/online/attached-files'
import console from './modules/online/console'

// import { createPersistedState } from 'vuex-electron'

// import modules from './modules'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    // State
    state: {
      // Define online
      online: window.require ? true: false,
      // Contains user selection of elements on active art board
      focus: [],
      
      // A document to the program is a zip file
      // Our program should work in the unzipped or even compressed space to help keep the user optimised
      
      //////// Document's consist of artboards, artflow, attached files and director mode ////////
    },
    // Mutations
    mutations: {
      ...documentMutations
    },
    // Plugins,
    // plugins: [
    //   createPersistedState()
    // ],
    // Modules,
    modules: {app, fs, document, connections, artflow, director, attachedFiles, console},
    strict: process.env.NODE_ENV !== 'production'
  })
}
export default createStore
