const state = {
  target: 0
}

const mutations = {
  INCREMENT_MAIN_COUNTER (state) {
    state.target++
  },
  CHANGE_STATE (state, data) {
    state.target = data
  }
}

const actions = {
  // changeState ({ commit }, data) {
  //   // do something async
  //   commit('CHANGE_STATE', data)
  // }
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
  state,
  mutations,
  actions
}
