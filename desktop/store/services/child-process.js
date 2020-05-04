export const state = () => ({
    temrinals: {
        // Key is ID
    }
})

export const mutations = {
    io(state, payload) {
        console.log(payload)
        // state.temrinals[payload.id] = { bash: [ payload ] }
    },
    removed(state, payload) {
        delete state.temrinals[payload.id]
    }
}

export const actions = {
    io({ commit }, payload) {
        commit('io', payload)
    },
    removed({ commit }, payload) {
        commit('removed', payload)
    }
}
