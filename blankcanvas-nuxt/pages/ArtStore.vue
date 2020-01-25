<template>
  <div id="ArtStore">
    <div class="clip">
      <!-- Hero -->
      <div class="hero">
        <div class="display"></div>
        <div class="thumbnails">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- Categories -->
      <!-- image, illusration, SVG, video, 3D, audio, code, plugins, (hosting/support/devs for hire) -->
      <div class="categories">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtStore'
}
</script>


<style lang="scss" scoped>
#ArtStore {
  display: flex;
  flex-direction: column;
  width: 100vw;
  overflow-y: auto;
  overflow-x: hidden;

  .clip {
    display: flex;
    flex-direction: column;
    width: 100vw;
    max-width: 1100px;
    margin: 0 auto;
    padding: 35px;
  }

  .hero {
    min-height: 250px;
    display: flex;
    border-radius: 5px;
    background: #eee;
    overflow: hidden;

    .display {
      flex-grow: 1;
    }

    .thumbnails {
      min-width: 250px;
      background: #e7e7e7;
    }
  }

  .categories {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    left: -25px;
    margin-right: -25px;
    margin-top: 10px;

    div {
      height: 320px;
      max-width: calc(33.333% - 25px);
      width: 100vw;
      margin-top: 25px;
      flex-grow: 1;
      background: #eee;
      border-radius: 5px;
      margin-left: 25px;
    }
  }
}
</style>
