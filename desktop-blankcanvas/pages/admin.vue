<template>
    <section id="admin">
        <h1>hello admin</h1>
    </section>
</template>

<script>
export default {
    name: 'Admin',
    mounted() {
        client
        .authenticate({
            strategy: 'local',
            email: 'example@feathers.com',
            password: 'secret'
        }).then(() => {
            alert('welcome')
        }).catch(e => {
            alert('Sorry this user is not authenticated')
        })
    },
    methods: {
        getPrivateIP() {
            return document.location.hostname
        }
    }
}
</script>

<style lang="less">
</style>