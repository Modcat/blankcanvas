export const state = () => ({
    server: {
        privateIP: false,
        app: false,
        // Array of messages to be outputted in the console
        socketMessages: false
    }
})

export const actions = {
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

export const mutations = {
    // DISPLAYCONSOLE(state, payload) {
    //     state.displayConsole = payload
    // }
}

export const getters = {
    feathersStatus() {
        return false
    }
}
