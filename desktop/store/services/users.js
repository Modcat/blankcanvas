export const state = () => ({
    users: {
        // Key is ID
    }
})

export const mutations = {
    io(state, payload) {
        state.users[payload.id] = payload
    },
    removed(state, payload) {
        delete state.users[payload.id]
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
