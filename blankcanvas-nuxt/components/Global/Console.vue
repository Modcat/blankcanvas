<template>
    <section class="console">
        <header>
            <nav>
                <button @click="startServer()">SERVER</button>
                <button>OUTPUT</button>
                <button>TERMINAL</button>
            </nav>
            <div class="right">
                <select>
                    <option value="">1: Blank Canvas Feathers</option>
                    <option value="">2: Terminal</option>
                    <option value="">3: Terminal</option>
                </select>
                <button id="new-terminal">+</button>
                <button id="delete">Del</button>
                <button id="full-view">Full View</button>
                <button id="close" @click="$store.dispatch('displayConsole', false)">X</button>
            </div>
        </header>
        <pre ref="sysOutput" class="messages"></pre>
        <section class="terminals">
        </section>
        <footer class="status-bar">
            <Fork class="fork" height="25"/>
            <select>
                <option value="">master</option>
                <option value="">develop</option>
            </select>
            <button><Refresh height="15"/></button>
            <button>git conflicts</button>
        </footer>
    </section>
</template>

<script>
// SVG images
import Fork from '~/assets/images/fork.svg'
import Refresh from '~/assets/images/loop-circular.svg'

// Feathers
import io  from 'socket.io-client'
import feathers from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'

export default {
    name: 'Console',
    components: {
        Fork,
        Refresh
    },
    mounted() {
        const socket = io(`http://${this.$store.state.privateIP}:3030`)
        const client = feathers()

        client.configure(socketio(socket))

        // Services
        

        client.service('messages').on('created', message => console.log('Created a message', message))

        // Use the messages service from the server
        messageService.create({
        text: 'Message from client'
        });

    },
    methods: {
        sendIO() {

        }
    }
}
</script>

<style lang="scss" scoped>
.console {
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 200px;
    background: #222;
    color: white;
    z-index: 100;

    button {
        color: white;
        background: transparent;
    }
    header {
        display: flex;
        padding: 5px 5px 5px 10px;
        justify-content: space-between;

        button {
            border-radius: 0px;
            box-shadow: none;
            border-bottom: 1px solid #ccc;
            white-space: nowrap;
            margin-right: 10px;
            outline: none !important;
        }
        .right {
            display: flex;
            align-self: flex-end;
        }
        ~ * {
            flex-grow: 1;
        }
    }
    footer {
        display: flex;
        align-items: center;
        flex-grow: 0;
        padding: 5px 5px 5px 10px;
        background: rgb(62, 128, 214);
        align-items: flex-start;

        > * {
            white-space: nowrap;
            margin-right: 10px;
        }
    }
    .terminals {
        display: flex;
        border: none;

        .terminal {
            width: 100%;
            // display: flex;
            flex-grow: 1;
        }
    }
}
button {
    border: none;
    padding: 0;
}
select {
    appearance: none;
    border: none;
    background: rgba(255,255,255,0.35);
    border-radius: 1px;
    color: white;
    font-size: 13px;

    option {
        color: #444;
    }
}
/deep/ .fork * {
    fill: white;
    // stroke: white;
}
</style>