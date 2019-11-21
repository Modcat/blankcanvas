const io = require('socket.io-client')
const feathers = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')

const socket = io(`http://${document.location.hostname}:3030`)
window.client = feathers()

client.configure(socketio(socket))
