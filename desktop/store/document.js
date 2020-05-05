export const state = () => ({
  document: {
    // Document location
    saveTo: '',
    database: {
      // DB object type
    },
  }
})

export const actions = {
  saveTo(context, payload) {
    context.commit('SAVETO', payload)
  }
}

export const mutations = {
  SAVETO(state, payload) {
    state.saveTo = `${payload}.bcd`
  }
}
