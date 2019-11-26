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
        <section class="terminals">
        </section>
        <footer class="status-bar">
            <select>
                <option value="">master</option>
                <option value="">develop</option>
            </select>
            <button>refresh</button>
            <button>git conflicts</button>
        </footer>
    </section>
</template>

<script>
export default {
    name: 'Console',
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
        select {
            margin-right: 10px;
            padding-right: 15px;
            box-shadow: none;
            background: #f3f3f3;
        }
        ~ * {
            flex-grow: 1;
        }
    }
    footer {
        display: flex;
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
</style>