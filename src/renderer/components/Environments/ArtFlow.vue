<template>
  <div class="artflow">
    <div class="tabs">
      <span @click="changeUrl">Art boards</span>
      <span class="active">art flow</span>
    </div>
    <img src="/static/images/artflow.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Artflow',
  methods: {
    changeUrl () {
      window.location.href = '#/artboards'
    }
  }
}
</script>

<style lang="scss" scoped>
.artflow {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  overflow-x: hidden;
}
</style>
