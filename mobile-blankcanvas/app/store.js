import Vue from 'nativescript-vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import modules
import { state as artboardsState, mutations as artboardsMutations, actions as artboardsActions } from '../../desktop-blankcanvas/store/artboards'
import { state as artflowState, mutations as artflowMutations, actions as artflowActions } from '../../desktop-blankcanvas/store/artflow'
import { state as attachedFilesState, mutations as attachedFilesMutations, actions as attachedFilesActions } from '../../desktop-blankcanvas/store/attached-files'
import { state as connectionsState, mutations as connectionsMutations, actions as connectionsActions } from '../../desktop-blankcanvas/store/connections'
import { state as consoleState, mutations as consoleMutations, actions as consoleActions } from '../../desktop-blankcanvas/store/console'
import { state as directorState, mutations as directorMutations, actions as directorActions } from '../../desktop-blankcanvas/store/director'
import { state as documentState, mutations as documentMutations, actions as documentActions } from '../../desktop-blankcanvas/store/document'
import { state as electronState, mutations as electronMutations, actions as electronActions } from '../../desktop-blankcanvas/store/electron'
import { state as feathersServerState, mutations as feathersServerMutations, actions as feathersServerActions } from '../../desktop-blankcanvas/store/feathers-server'
import { state as fileSystemState, mutations as fileSystemMutations, actions as fileSystemActions } from '../../desktop-blankcanvas/store/file-system'

export const store = new Vuex.Store({
  state: {
    test: 'hello test string 44'
  },
  modules: {
    artboards: {
      namespaced: true,
      state: artboardsState,
      mutations: artboardsMutations,
      actions: artboardsActions
    },
    artflow: {
      namespaced: true,
      state: artflowState,
      mutations: artflowMutations,
      actions: artflowActions
    },
    attachedFiles: {
      namespaced: true,
      state: attachedFilesState,
      mutations: attachedFilesMutations,
      actions: attachedFilesActions
    },
    connections: {
      namespaced: true,
      state: connectionsState,
      mutations: connectionsMutations,
      actions: connectionsActions
    },
    console: {
      namespaced: true,
      state: consoleState,
      mutations: consoleMutations,
      actions: consoleActions
    },
    director: {
      namespaced: true,
      state: directorState,
      mutations: directorMutations,
      actions: directorActions
    },
    document: {
      namespaced: true,
      state: documentState,
      mutations: documentMutations,
      actions: documentActions
    },
    electron: {
      namespaced: true,
      state: electronState,
      mutations: electronMutations,
      actions: electronActions
    },
    feathersServer: {
      namespaced: true,
      state: feathersServerState,
      mutations: feathersServerMutations,
      actions: feathersServerActions
    },
    fileSystem: {
      namespaced: true,
      state: fileSystemState,
      mutations: fileSystemMutations,
      actions: fileSystemActions
    }
  }
});
