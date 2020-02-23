<template>
  <FlexboxLayout class="c-artflow">
    <Label text="Artflow"/>
  </FlexboxLayout>
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
.c-artflow {
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  overflow-x: hidden;
}
</style>
