export const state = () => ({
  displayConsole: false,
  terminals: []
});

export const actions = {
  displayConsole({ commit }, payload) {
    commit("DISPLAYCONSOLE", payload);
  }
};

export const mutations = {
  DISPLAYCONSOLE(state, payload) {
    state.displayConsole = payload;
  }
};
