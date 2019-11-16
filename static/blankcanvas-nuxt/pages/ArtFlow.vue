<template>
  <div class="artflow">
    <img
      src="/static/images/artflow.svg"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'Artflow',
  methods: {
    openArtflow() {
      window.location.href = '#/artflow'
    },
    openArtBoards() {
      window.location.href = '#/artboards'
    },
    openArtStore() {
      document.body.classList.add('artstore-open')
    },
    openHotkeys(){
      window.location.href = '#/hotkeys'
    },
    openBountyBoard() {
      window.location.href = '#/bounty'
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
