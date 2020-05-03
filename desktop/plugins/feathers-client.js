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

    client.authenticate({
        strategy: 'local',
        email: 'admin',
        password: '123'
    })
    
    // Loop over services
    services
    .forEach( serviceName => {
        
        const service = client.service(serviceName)

        // Assign event sockets

        const events = ['created', 'updated', 'patched']

        events
        .forEach( eventName => {

            

            // window.$nuxt.$store.state.services[serviceName] = 

            // Forward the store

            // Register each socket event
            
            service
            .on(
                eventName,
                payload => { window.$nuxt.$store.dispatch(`services/${serviceName}/io`, payload)
            })

        })

        // Removed is adcense of data so register it sperately

        service
        .on(
            'removed',
            payload => { window.$nuxt.$store.dispatch(`services/${serviceName}/removed`, payload)
        })

        // expose global scope

        window.client = client

    })
})