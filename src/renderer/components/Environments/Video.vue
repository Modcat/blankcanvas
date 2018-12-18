<template>
  <div @click="change" @mousemove="mouseMove">
    <main id="video">
      <div id="target"/>

      <span/>
      <div class="document">
          <div id="mainCanvas" style="position:relative;">
            <div class="cards">
              <div class="card">
                <img src="/static/images/vr-logo.png" alt="">
                <span class="label-art">John</span>
              </div>
              <div class="card">
                <img src="/static/images/XBOX.png" alt="">
                <span class="label-art">Joane</span>
              </div>
              <div class="card">
                <img src="/static/images/Ubuntu.png" style="width:50px; margin: 0 auto;" alt="">
                <span class="label-art">Jamie</span>
              </div>
            </div>
            <img class="vid-overlay" src="/static/images/video-overlay.png" alt="" style="position:absolute;max-width:80%;">
            <video style="max-width:100%;" src="/static/video/honey.mp4" autoplay loop="loop"></video>
          </div>
      </div>
      <span/>

    </main>
    <div :style="`left: ${mousex - 75}px; top: ${mousey - 40}px; opacity:${showPreview ? '1' : '0'}`" id="live-preview">
      <video src="/static/video/honey.mp4" autoplay loop="loop"></video>
    </div>
    <div ref="timeline" class="animate-timeline">
      <div class="line" :style="`left: ${mousex + timelineOffsetX}px`" />
      <div class="track">
        <div class="preview" @mousemove="showPreview = true" @mouseout="showPreview = false">
          <img src="/static/video/honey-thumbnail.png" alt="thumbnail" height="38">
          <label>The movie of the honey badger</label>
        </div>
        <div class="preview" style="left: 340px" @mousemove="showPreview = true" @mouseout="showPreview = false">
          <img src="/static/video/honey-thumbnail.png" alt="thumbnail" height="38">
          <label>The movie of the honey badger</label>
        </div>
      </div>
      <div class="track">
        <div class="preview" style="width: 200px; left: 200px" @mousemove="showPreview = true" @mouseout="showPreview = false">
          <img src="/static/video/honey-thumbnail.png" alt="thumbnail" height="38">
          <label>The movie of the honey badger</label>
        </div>
      </div>
      <div class="track" v-for="(track,index) in [1,1,1,1,1,1]" :key="index"/>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Video',
  data () {
    return {
      mousex: 0,
      mousey: 0,
      timelineOffsetX: '',
      showPreview: false
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Video'
    },
    mouseMove (event) {
      this.mousex = event.clientX
      this.mousey = event.clientY
      this.timelineOffsetX = this.$refs.timeline.scrollLeft
    }
  }
}
</script>

<style lang="scss" scoped>
#video {
  transform: translate3d(0,0,0);
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: calc(100vh - 150px);
  overflow: auto;
  background: rgba(0,0,0,0.05);
}
.cards {
  display: flex;
  justify-content: center;
  .card {
    display: flex;
    flex-direction: column;
    margin: 25px 25px 25px 0;
    background: rgba(0,0,0,0.2);
    padding: 15px;
    border-radius: 3px;
    width: 120px;
    text-align: center;
    img {
      max-width: 100%;
      width: auto;
      height: auto;
      max-height: 150px;
    }
    span {
      color: white;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    &:nth-child(1) {
      background: #ffcf00;
    }
    &:nth-child(2) {
      background: #ff9641;
    }
    &:nth-child(3) {
      background: #e77ef3;
    }
    &:last-child {
      margin-right: 0;
    }
  }
}
.document {
  margin: 0 auto;
  padding: 45px;

  #mainCanvas {
    width: 760px;
    height: 430px;
    background: rgba(0, 0, 0, 1);
    box-shadow: 0px 0px 21px 2px rgba(0,0,0,0.4);
  }
}
#live-preview {
  display: inline-flex;
  position: absolute;
  z-index: 99;
  height: 84px;
  margin-top: -84px;
  width: 150px;
  overflow: hidden;
  box-shadow: 0 0 21px 2px rgba(0,0,0,0.4);
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s;
  z-index: 9999999999999;

  video {
    width: 150px;
    height: auto;
   
  }
}
.animate-timeline {
  position: fixed;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
  width: 100%;
  height: 150px;
  border-top: 1px solid rgba(255,255,255,0.4);
  overflow: auto;

  .line {
    position: absolute;
    left: 50px;
    top: 0;
    bottom: 0;
    height: 450px;
    width: 1px;
    background: rgba(255, 134, 34, 0.55);
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .line {
    opacity: 1;
  }

  .track {
    position: relative;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    align-items: center;
    height: 55px;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    width: 100%;

    .preview {
      position: absolute;
      display: flex;
      align-items: center;
      padding: 0 4px;
      height: 45px;
      width: 250px;
      border-radius: 4px;
      background: rgba(255,255,255,0.45);
      box-shadow: inset 0 0 0 2px rgba(255,255,255,0.2), 0 2px 25px rgba(0,0,0,0.1);
      overflow: hidden;
      user-select: none;
      pointer-events: all;
      transition: background-color 0.2s;

      &:hover {
        background: rgba(255,255,255,0.9);
      }

      img {
        border-radius: 3px;
        opacity: 0.7;
      }

      label {
        margin-left: 10px;
        margin-right: 5px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
