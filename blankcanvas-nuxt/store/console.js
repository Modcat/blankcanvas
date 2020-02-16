export const state = () => ({
  displayConsole: false,
  terminals: []
});

export const actions = {
  displayConsole(context, payload) {
    context.commit("DISPLAYCONSOLE", payload);
  }
};

export const mutations = {
  DISPLAYCONSOLE(state, payload) {
    state.displayConsole = payload;
  }
};
