<template>
    <section id="admin">
        
    </section>
</template>

<script>
export default {
    name: 'Admin',
    mounted() {
        client
        .authenticate({
            strategy: 'local',
            email: 'my@email.com',
            password: 'my-password'
        }).then(() => {
            alert('welcome')
        }).catch(e => {
            alert('Sorry this user is not authenticated')
        });
    },
    methods: {
        getPrivateIP() {
            return document.location.hostname
        }
    }
}
</script>

<style lang="scss">
</style>