const state = {
    privateIP: false,
    app: false,
    // Array of messages to be outputted in the console
    socketMessages: false
}

const actions = {
    // displayConsole(context, payload) {
    //     context.commit('DISPLAYCONSOLE', payload)
    // }
    startFeathers(context) {
    },
    shutdownFeathers(context) {
    },
    msgRecived(context, payload) {
    }
}

const mutations = {
    // DISPLAYCONSOLE(state, payload) {
    //     state.displayConsole = payload
    // }
}

const getters = {
    feathersStatus() {
        return false
    }
}

export default {
    state,
    actions,
    mutations,
    getters
}
