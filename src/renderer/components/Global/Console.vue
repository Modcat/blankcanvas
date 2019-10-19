<template>
    <section>
        <header>
            <nav>
                <button>PROBLEMS</button>
                <button>OUTPUT</button>
                <button>DEBUG CONSOLE</button>
                <button>TERMINAL</button>
            </nav>
            <div class="right">
                <select>
                    <option value="">1: Blank Canvas Feathers</option>
                    <option value="">2: Terminal</option>
                    <option value="">3: Terminal</option>
                </select>
                <button id="new-terminal">+</button>
                <button id="split">Split</button>
                <button id="delete">Del</button>
                <button id="full-view">Full View</button>
                <button id="close">X</button>
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

</style>