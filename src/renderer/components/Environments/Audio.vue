<template>
  <div class="audio">
    <div class="track">
      <div @click="change" class="audio-preview"></div>
    </div>
    <div class="track">
      <div @click="change" class="audio-preview" style="left:200px;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Audio',
  methods: {
    change () {
      window.modal.$shareStore.target = 'Audio'
    }
  }
}
</script>

<style lang="scss" scoped>
.audio {
  max-width: 100vw;
  max-height: 100vh;
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
}
.track {
  position: relative;
  padding: 25px;
  height: 55px;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.04);

  .audio-preview {
    position: relative;
    flex-grow: 1;
    padding: 5px;
    height: 55px;
    border-radius: 4px;
    box-shadow: 0 0 21px rgba(0,0,0,0.05);
    background: url('/static/images/sound-wave.png') repeat-x left center rgba(255,255,255,0.5);
    background-size: auto 35px;
    transition: background-color 0.2s;

    &:hover {
      background-color: rgba(255,255,255,0.8);
    }
  }
}
</style>
