<template>
  <div class="bounty-board">
    <div class="tabs">
      <span @click="openArtBoards">Art boards</span>
      <span @click="openArtflow">Art flow</span>
      <span>Director</span>
      <span @click="openArtStore">Art Store</span>
      <span @click="openHotkeys">HotKeys</span>
      <span class="active">Bounty Board</span>
    </div>
    <div v-for="(bounty,bountyIndex) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="bountyIndex" class="bounty">
      <span class="label-art">Some New Job</span>
      <p>Job description : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel rhoncus eros. Nulla sodales bibendum posuere. Sed urna nunc, hendrerit in urna vel, placerat sollicitudin elit. Nullam varius molestie lacus, quis lacinia enim convallis vitae. Nulla lacinia consequat interdum. In lorem elit, porttitor non arcu in, congue iaculis ipsum. Morbi eu est vel metus tempus accumsan. Vivamus varius erat consectetur, ullamcorper velit ac, mattis leo. Ut nisi mi, volutpat nec nulla ac, porta vehicula magna. Fusce a leo ut mauris volutpat sollicitudin quis sit amet libero. Praesent aliquet nulla ac ex luctus ultricies. Mauris eu massa ac nulla faucibus molestie.</p>
      <button>Donate</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BountyBoard',
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
.tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 0 0;
  width: 100%;
}
.bounty-board {
  display: flex;
  flex-wrap: wrap;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  .bounty {
    width: 100%;
    padding: 25px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.08);

    p {
      margin-top: 15px;
      max-width: 650px;
    }
  }
}
</style>
