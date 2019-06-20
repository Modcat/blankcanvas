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
  }
}

const actions = {
}

const mutations = {
}

export default {
  state,
  actions,
  mutations
}
