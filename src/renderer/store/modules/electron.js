// Here are packages we need for UI, UX design and control

const state = {
  electron: require('electron'),
  perfectScrollbar: require('perfect-scrollbar')
}

const actions = {
  // changeState ({ commit }, data) {
  //   // do something async
  //   commit('CHANGE_STATE', data)
  // }
  // someAsyncTask ({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER')
  // }
}

const mutations = {
  // INCREMENT_MAIN_COUNTER (state) {
  //   state.target++
  // },
  // CHANGE_STATE (state, data) {
  //   state.target = data
  // }
}

export default {
  state,
  actions,
  mutations
}
