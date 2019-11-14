const state = {
    displayConsole: false,
    terminals: []
}

const actions = {
    displayConsole(context, payload) {
        context.commit('DISPLAYCONSOLE', payload)
    }
}

export const mutations = {
    DISPLAYCONSOLE(state, payload) {
        state.displayConsole = payload
    }
}

export default {
    state,
    actions,
    mutations
}
