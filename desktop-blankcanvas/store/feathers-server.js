export const state = () => ({
    server: {
        privateIP: false,
        app: false,
        // Array of messages to be outputted in the console
        socketMessages: false
    }
})

export const actions = {
    startFeathers(context) {
    },
    shutdownFeathers(context) {
    },
    msgRecived(context, payload) {
    }
}

export const mutations = {
}

export const getters = {
    feathersStatus() {
        return false
    }
}
