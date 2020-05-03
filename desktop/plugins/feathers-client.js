window.addEventListener('load', function(){
    const feathers = require('@feathersjs/client')
    const io = require('socket.io-client')
    const socket = io(`http://${document.location.hostname}:1993`)
    const client = feathers()

    console.log(`http://${document.location.hostname}:1993`)

    client.configure(feathers.socketio(socket))

    client.configure(feathers.authentication({
        storage: window.localStorage
    }))

    // Registered services forwarded to $store.services[service name]

    const services = [
        'users',
        'authentication',
        'child-process',
        'fonts',
        'fs',
        'git',
        'images',
        'messages',
        'profile',
    ]

    client
    .service('users')
    .on('created', payload => { console.log(payload) })
    
    // Loop over services
    // services
    // .forEach( serviceName => {

    //     // Assign event sockets

    //     const events = ['created', 'updated', 'patched', 'removed']

    //     events
    //     .forEach( eventName => {

    //         // Expose feathers service to Vuex

    //         const service = client.service(serviceName)

    //         // window.$nuxt.$store.state.services[serviceName] = 

    //         // Forward the store

    //         console.log(service)
            
    //         service
    //         .on(
    //             eventName,
    //             // payload => { window.$nuxt.$store.dispatch(`services/${serviceName}/${eventName}`, payload)
    //             payload => { console.log(serviceName, payload)
    //         })

    //     })
    // })
})