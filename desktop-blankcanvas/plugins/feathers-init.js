(function(){
    const io = require('socket.io-client')
    const feathers = require('@feathersjs/client')
    const socket = io(`http://${document.location.hostname}:3030`)
    const client = feathers()

    client.configure(feathers.socketio(socket))

    client.configure(feathers.authentication({
        storage: window.localStorage
    }))
    
    window.client = client
})()