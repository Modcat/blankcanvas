<template>
    <section v-if="this.$store.state.console.displayConsole" class="console">
        <header>
            <nav>
                <button>MESSAGES</button>
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
        <section id="console"/>
    </section>
</template>

<script>
export default {
    name: 'Console'
}
</script>

<style lang="scss" scoped>
.console {
    position: fixed;
    display: flex;
    flex-direction: column;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 200px;
    background: white;
    border-top: 1px solid #ccc;
    z-index: 100;

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
    }
}
</style>