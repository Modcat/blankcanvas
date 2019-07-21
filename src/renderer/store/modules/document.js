import artboards from './artboards'

// Document object contain's file system or github information
// Also database information for live connectivity

const state = {
  // Directory to save document (required even if github so it can store this information)
  saveTo: '',
  // OR || Github URL if hosted on github
  github: '',
  // Database for live connections (not to be confused with database's in the project)
  database: {
    // DB object type
  },
  ...artboards
}

const actions = {
  saveTo(context, payload) {
    context.commit('SAVETO', payload)
  }
}

export const mutations = {
  SAVETO(state, payload) {
    state.saveTo = `${payload}.bcd`
  }
}

export default {
  state,
  actions,
  mutations
}
