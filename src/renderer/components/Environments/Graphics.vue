<template>
  <div class="main-layout">
    <!-- Left Draw -->
    <!-- All main content that pushes over to left -->
    <div class="left-draw draw" :style="`width:${sidebarWidth}vw;`">
      <!-- Database sidebar -->
      <div :class="['database-mode', { 'on': mode === 'database' }]">
        <input type="text" class="search" placeholder="search" style="margin-top:0px;">
        <ul class="tree">
          <li @click="view = 'db-info'">Database Name</li>
          <li @click="view = 'table-info'" class="active">Table Name</li>
          <li>Table Name</li>
          <li>Table Name</li>
        </ul>
      </div>
      <!-- Presentation -->
      <div :class="['presenation', { 'on': mode === 'presentation' }]">
        <section class="artboards">
          <span class="label-art label-art--large">Art Boards</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/Graphics"><div class="art" style="width: 65px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="z-index: 1;width: 135px; height: 135px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="z-index: 0;width: 100px; height: 67px; background: white;"></div></a>
          </section>
          <span class="label-art">Website Pages</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/Graphics"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
          </section>
          <span class="label-art">Writer Art</span>
          <section class="art-collection">
            <a style="z-index:14;" href="#/markdownwriter"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:13;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:12;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:11;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:10;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:9;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:8;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:7;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:6;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:5;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:4;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:3;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
          </section>
          <span class="label-art">Slides and presentations</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/powerpoint"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 150px; height: 150px; background: white;"></div></a>
          </section>
          <span class="label-art label-art--large">Attached Files</span>
          <span class="label-art">Videos</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/video"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 150px; height: 98px; background: white;"></div></a>
          </section>
          <span class="label-art">Databases</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/database"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
          </section>
          <span class="label-art">Code projects</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/codeeditor"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 100px; height: 150px; background: white;"></div></a>
          </section>
          <span class="label-art">Excel</span>
          <section class="art-collection">
            <a style="z-index:3;" href="#/excel"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 135px; height: 135px; background: white;"></div></a>
          </section>
        </section>

        <!-- Slide for presentation -->

        <section class="slides">
          <span class="label-art label-art--large slide-thread">Slides</span>
          <section class="art-collection">
            <a style="z-index:17;" href="#/Graphics"><div class="art" style="width: 65px; height: 150px; background: white;"></div></a>
            <a style="z-index:16;" href="#/"><div class="art" style="z-index: 1;width: 135px; height: 135px; background: white;"></div></a>
            <a style="z-index:15;" href="#/"><div class="art" style="z-index: 0;width: 100px; height: 67px; background: white;"></div></a>
            <a style="z-index:14;" href="#/markdownwriter"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:13;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:12;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:11;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:10;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:9;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:8;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:7;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:6;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:5;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:4;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:3;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:2;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
            <a style="z-index:1;" href="#/"><div class="art" style="width: 110px; height: 150px; background: white;"></div></a>
          </section>
        </section>
      </div>
    </div>
    <main @click="change" id="graphics">
      <!-- Top draw -->
      <div class="top-draw draw">
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
      </div>

      <!-- Right Draw -->
      <div class="right-draw draw">
        <div class="blur" />
      </div>
      
      <div :class="['document', { 'last-canvas': linkedCanvas }]">
        <a href="#/audio" class="audio"/>
        <a href="#/database" class="database"/>
        <a href="#/excel" class="excel"/>
        <a href="#/video" class="video"/>
        <a href="#/codeeditor" class="code"/>
        <div class="linked-canvas" @click="linkedCanvas = true"/>
        <div id="mainCanvas">
          <img class="desktop" src="/static/images/art-canvas.svg" alt="Vector Graphics">
          <img class="mobile" src="/static/images/art-canvas-600.svg" alt="Vector Graphics">
          <!-- <div id="webglCanvas"/> -->
        </div>
      </div>
      <div :class="['document', 'doc2', { linkedCanvas }]">
        <a href="#/audio" class="audio"/>
        <a href="#/database" class="database"/>
        <a href="#/excel" class="excel"/>
        <a href="#/video" class="video"/>
        <a href="#/codeeditor" class="code"/>
        <div class="linked-canvas" @click="linkedCanvas = false"/>
        <div id="mainCanvas">
          <img src="/static/images/art-canvas.svg" alt="Vector Graphics">
          <!-- <div id="webglCanvas"/> -->
        </div>
      </div>

      <!-- Bottom Draw -->
      <div class="bottom-draw draw">
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

    </main>
  </div>
</template>

<script>
export default {
  name: 'Graphics',
  data () {
    return {
      linkedCanvas: false,
      mousex: 0,
      mousey: 0,
      timelineOffsetX: '',
      showPreview: false,
      mode: 'presentation'
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Graphics'
    },
    mouseMove (event) {
      this.mousex = event.clientX
      this.mousey = event.clientY
      this.timelineOffsetX = this.$refs.timeline.scrollLeft
    }
  },
  computed: {
    sidebarWidth () {
      if (this.mode === 'presentation') {
        return 54.7
      } else if (this.mode === 'database') {
        return 18.6
      } else {
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
}
#graphics {
  border-left: .5px solid rgba(90,90,90,0.25);
  background: rgba(255,255,255,.45);
  transform: translate3d(0,0,0);
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
.cards {
  min-height: 90px;
  max-height: 90px;
  // transform: scale(0.4);
  transition: transform 0.45s ease-in-out;
}
// Draws
.draw {
  background: rgba(230,230,230,0.4);
  z-index: 99;
  transition: height 0.5s ease-in-out;
}
.left-draw {
  max-height: 100vh;
  overflow-y: auto;
  display: flex;
  transition: all 0.45s;

  > * {
    width: 0;
    transition: width 0.45s ease-in-out;
  }
}
.top-draw {
  border-bottom: .5px solid rgba(90,90,90,0.2);
  transition: height 0.45s ease-in-out;

  &:hover {
    height: 105px;
  }
}
.right-draw {
  position: fixed;
  z-index: 361;
  right: -36vw;
  bottom: 0;
  height: 100%;
  width: 35vw;
  min-width: 350px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: -5px -2px 15px rgba(0,0,0,0.15);
  transition: right 0.5s ease-in-out;

  &.open {
    right: 0;
  }

  .blur {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    border-left: .5px solid rgba(90,90,90,0.3);
    backdrop-filter: blur(25px);
  }
}
.bottom-draw {
  display: flex;
  flex-direction: column;
  border-top: .5px solid rgba(90,90,90,0.2);
}
// Document
.document {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  margin: 0 auto;
  padding: 45px;
  transition: opacity 0.5s, transform 0.5s;

  * {
    user-select: none;
  }

  #mainCanvas {
    display: flex;
    flex-direction: column;
    img {
      max-width: 100%;
    }
    width: 900px;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 0px 21px 5px rgba(0,0,0,0.2);
  }
}
// Hotspots
.audio {
  display: block;
  position: absolute;
  z-index: 99;
  width: 390px;
  height: 90px;
  top: 169px;
  left: 320px;
}
.linked-canvas {
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 99;
  width: 390px;
  height: 180px;
  top: 279px;
  left: 320px;
}
.database {
  display: block;
  position: absolute;
  z-index: 99;
  top: 260px;
  left: 120px;
  width: 180px;
  height: 200px;
}
.excel {
  display: block;
  position: absolute;
  z-index: 99;
  height: 200px;
  top: 510px;
  width: 220px;
  left: 270px;
}
.video {
  display: block;
  position: absolute;
  z-index: 99;
  height: 200px;
  top: 510px;
  width: 220px;
  left: 560px;
}
.code {
  display: block;
  position: absolute;
  z-index: 99;
  height: 500px;
  left: 45px;
  right: 45px;
  margin-top: 747px;
}
.last-canvas {
  opacity: 0;
  transform: scale(0);
}
.mobile {
  display: none;
}
@media screen and (max-width: 800px) {
  .desktop {
    display: none;
  }
  .mobile {
    display: block;
  }
}
.doc2 {
  position: absolute;
  top: 0;
  opacity: 0;
  transform: scale(0);
  height: 0;
  padding: 0;

  #mainCanvas {
    width: 450px;
  }

  &.linkedCanvas {
    height: auto;
    padding: 45px;
    opacity: 1 !important;
    transform: scale(1) !important;
  }
}
// Video timeline
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
  position: relative;
  display: flex;
  flex-wrap: wrap;
  bottom: 0;
  width: 100%;
  height: 450px;
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
// Presentation
.presenation {
  display: flex;
  flex-direction: row;
  perspective: 1000px;
  max-height: 100vh;
  overflow: hidden;

  &.on {
    width: 56.5vw;
  }

  > * {
    max-height: 100vh;
    overflow: auto;
    box-sizing: border-box;
  }

  .artboards {
    min-width: 225px;
    width: 50%;
    padding-bottom: 50px;
  }
  .slides {
    position: relative;
    min-width: 225px;
    width: 50%;
    text-align: center;
    padding: 25px;
    background: rgba(255, 255, 255, 0.2);
    border-left: .5px solid rgba(90,90,90,0.15);
  }
}
.label-art {
  margin-bottom: 15px;
}
.label-art--large {
  margin-top: 25px;
  margin-bottom: 0;

  &:before {
    display: none !important;
  }
}
.art-collection {
  display: block;
  transform-style: preserve-3d;
  flex-wrap: nowrap;
  text-align: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: 0;
    position: relative;
    margin-top: -30px;
    box-shadow: none;

    &:first-child {
      margin-top: 0 !important;
    }

    &:last-child .art {
      box-shadow: 22px 22px 14px rgba(0, 0, 0, 0.11);
    }
  }

  .art {
    position: relative;
    // margin: 0 auto;
    transform: rotateZ(50deg) scale(0.7,0.7);
    box-shadow: 42px 42px 21px rgba(0, 0, 0, 0.1);
    max-width: 100%;
    max-height: 100%;
  }
}
.slides::before {
  content: '';
  position: fixed;
  z-index: 0;
  top: 42px;
  width: 1px;
  height: 100%;
  left: calc(75% - 1px);
  margin-left: -1px;
  background: rgba(0,0,0,0.07);
}
.slides .art-collection {
  width: 150px;
  margin: 0 auto;
}
// Database
.database-mode {
  box-sizing: border-box;
  background: rgba(180,180,180,0.3);
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 15px;
  user-select: none;
  width: 0;
  transition: width 0.45s ease-in-out;
  border-right: 0.5px solid rgba(255,255,255,.45);

  &.on {
    width: 100%;
  }

  .search {
    margin-left: 15px;
    width: calc(100% - 30px);
  }

  .tree {
    list-style-type: none;
    padding: 10px 0 0 0;
    margin: 0;
    text-align: left;
    color: #666;

    li {
      position: relative;
      padding: 5px 15px;
      z-index: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    li:before {
      content: '';
      display: block;
      position: absolute;
      left: -15px;
      right: -15px;
      top: 0;
      bottom: 0;
      background: rgba(255, 134, 34, 0.3);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.2s;
    }

    li.active:before {
      opacity: 1;
    }
  }
}
</style>
