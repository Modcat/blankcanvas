<template>
  <div class="art-store">
    <div class="main-hero preview color-shift">
      <img src="/static/art-store/mountains-hero.jpg" />
    </div>
    <div class="grid">
      <div class="illusration preview color-shift">
        <img src="/static/art-store/illustration.svg" style="margin-top: -0.8vw;" />
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
      <div class="video preview color-shift">
        <video style="max-width:100%;" src="/static/art-store/video-example.mp4" autoplay loop="loop"></video>
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
      <div class="3d preview color-shift">
        <input type="range" min="0" max="360"/>
        <aside></aside>
      </div>
      <div class="audio preview" />
      <div class="code preview" />
      <div class="services preview" />
    </div>
    <span class="label-art label-art--large">Preview</span>
    <div class="creative-code">
      <aside></aside>
      <div class="code"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtStore',
  mounted () {
    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode === 119) {
        document.body.classList.toggle('artstore-open')
      }
    })
  }
}
</script>

<style lang="scss">
body.artstore-open {
  overflow: hidden;

  .art-store {
    z-index:100 !important;
    pointer-events: all !important;
    opacity: 1 !important;
    left: 0 !important;
  }
}
</style>


<style lang="scss" scoped>
.art-store {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(5px);
  background: rgba(255,255,255,0.85);
  z-index: -1;
  pointer-events: none;
  opacity: 0;
  left: -200%;
  transition: opacity 0.2s ease-in-out, left 0.2s ease-in-out;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 10px;
}
.preview {
  position: relative;
  border-radius: 4px;
  height: 18vw;
  flex-grow: 1;
  overflow: hidden;

  img,
  video {
    position: absolute;
    min-width: 100%;
    max-height: 20vw;
    object-fit: cover;
    z-index: -1;
  }
}
.grid {
  display: grid;
  grid-template-columns: 32.67% 32.67% 32.67%;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 10px;

  .preview {
    max-width: 100%;
  }
}
.main-hero {
  margin-bottom: 10px;
  height: 20vw;
}
.creative-code {
  position: relative;
  left: -10px;
  top: 0px;
  margin-bottom: -10px;
  width: calc(100% + 20px);
  height: calc(20vw + 10px);
  background: #eee;
}
</style>
