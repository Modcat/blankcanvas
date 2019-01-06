<template>
  <div v-hammer:onTap="onSwipeLeft" class="main-layout">
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

      <!-- Code Sidebar -->
      <div :class="['code-sidebar', { 'on': mode === 'code' }]">
        <input type="text" placeholder="search">
      </div>
    </div>
    <main id="graphics">
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
      <div :class="['right-draw draw', {'on': showRightDraw}]">
        <div class="blur" />
      </div>

      <!-- Graphics, Presentation or Code -->
      <div v-if="mode.match(/graphics|code|presentation/ig)" :class="['document', { 'last-canvas': linkedCanvas }]">
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
      <div v-if="mode === 'graphics'" :class="['document', 'doc2', { linkedCanvas }]">
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
      
      <!-- Video -->
      <div v-if="mode === 'video'" class="document video">
          <div id="mainCanvas" style="position:relative;">
            <img class="vid-overlay" src="/static/images/video-overlay.png" alt="" style="position:absolute;max-width:80%;">
            <video style="max-width:100%;" src="/static/video/honey.mp4" autoplay loop="loop"></video>
          </div>
      </div>

      <!-- Audio -->
      <div v-if="mode === 'audio'" class="audio-env">
        <div class="audio">
          <div class="track">
            <div class="audio-preview"></div>
          </div>
          <div class="track">
            <div class="audio-preview" style="left:200px;"></div>
          </div>
        </div>
      </div>

      <!-- Database -->
      <div v-if="mode === 'database'" class="database-env">
        <div class="database-view" :style="`justify-content:${view === 'db-info' ? 'center' : 'flex-start'};`">
            <div v-if="view === 'db-info'" class="db-info">
              <span class="label-art">Database</span>
              <div class="row" style="width: 250px;">
                <input type="text" style="width: 120%;" placeholder="Host">
                <input type="text" placeholder="Port">
              </div>
              <input type="text" placeholder="User">
              <input type="text" placeholder="password">
              <input type="text" placeholder="Database Name">
            </div>
            <div v-if="view === 'table-info'" class="table-info">
              <div style="text-align:center;">
                <div class="tabs">
                  <span @click="subTab = 'schema'" :class="{ 'active': subTab === 'schema' }">Schema</span>
                  <span @click="subTab = 'data'" :class="{ 'active': subTab === 'data' }">Data</span>
                  <span>VR</span>
                  <span>AR</span>
                </div>
              </div>
              <div v-if="subTab === 'schema'" class="schema">
                <div style="margin-right:15px;">
                  <h3>table info</h3>
                  <input type="text" value="Database Name">
                  <h3>Columns</h3>
                  <input type="text" class="search" placeholder="search">
                </div>
                <div class="row row--wrap">
                  <div class="column" v-for="(col,index) in [1,1,1,1,1,1,1,1]" :key="index">
                    <label>Column Name:</label>
                    <input type="text" value="Col Name">
                    <label>Type:</label>
                    <select name="" placeholder="DataType">
                      <option value="">Int</option>
                      <option value="">Big Int</option>
                      <option value="">Small Int</option>
                      <option value="">Var Char</option>
                      <option value="">Text</option>
                      <option value="">Date</option>
                    </select>
                    <h5 class="label-art">Constraints</h5>
                    <input type="text" value="Col Name">
                    <h5 class="label-art">Indexes</h5>
                  </div>
                </div>
              </div>
              <div v-if="subTab === 'data'">
                <table class="table-contents">
                  <thead>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                    <th>Column Name</th>
                  </thead>
                  <tbody>
                    <tr v-for="(row,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index">
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                      <td>Value</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
      
      <!-- Code -->


      <!-- Spreadsheet -->
      <div v-if="mode === 'spreadsheet'" class="spreadsheet-env">
        <div ref="spreadsheet" class="spreadsheet">
          <table class="table-contents">
            <thead ref="header">
              <td class="index" />
              <th v-for="(row,indexHead) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="indexHead" />
            </thead>
            <tbody>
              <tr v-for="(row,index) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="index">
                <td class="index" v-html="index" />
                <td class="cell" v-for="(row,indexCell) in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="indexCell" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      

      <!-- Bottom Draw -->
      <div v-if="mode !== 'database' && mode !== 'spreadsheet'" class="bottom-draw draw">

        <!-- Code -->
        <div v-if="mode === 'code'" id="editor"></div>
        
        <!-- Video Timeline -->
        <div  v-if="mode === 'video'" :style="`left: ${mousex - 75}px; top: ${mousey - 40}px; opacity:${showPreview ? '1' : '0'}`" id="live-preview">
          <video src="/static/video/honey.mp4" autoplay loop="loop"></video>
        </div>
        <div v-if="mode === 'video'" ref="timeline" class="animate-timeline">
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
import CodeMirror from 'codemirror'
/* eslint-disable-next-line */
import CodeMirrorMode from 'codemirror/mode/javascript/javascript.js'
/* eslint-disable-next-line */
import CodeMirrorCSS from 'codemirror/lib/codemirror.css'
/* eslint-disable-next-line */
import CodeMirrorTheme from 'codemirror/theme/base16-light.css'

export default {
  name: 'Graphics',
  data () {
    return {
      linkedCanvas: false,
      mousex: 0,
      mousey: 0,
      timelineOffsetX: '',
      showPreview: false,
      showRightDraw: false,
      mode: 'code',
      // Database
      view: 'db-info',
      subTab: 'schema'
    }
  },
  mounted () {
     document.body.addEventListener('keydown', function(e) {
      console.log(e.keyCode)
      if ('keypress', e.altKey && e.keyCode === 37) {
        this.showRightDraw = true
      }
      if ('keypress', e.altKey && e.keyCode === 39) {
        this.showRightDraw = false
      }
    }.bind(this))
    if (this.$refs.spreadsheet) {
      this.$refs.spreadsheet.addEventListener('scroll', (e) => {
        let scrollLeft = e.target.scrollLeft
        this.$refs.header.style.marginLeft = `${scrollLeft * -1}px`
      })

      this.$refs.spreadsheet.addEventListener('click', (e) => {
        if (e.target.className.match('cell')) {
          e.target.classList.add('active')
        }
      })
    }
    // Mounted
    let codeSection = document.getElementById('editor')
    CodeMirror(codeSection, {
      value: `document.getElementById('close').onmousedown = function(e) {
window.onload = function () {
    canvas  = document.getElementById('c');
    ctx     = canvas.getContext('2d');

    canvas.width  = 560;
    canvas.height = 350;

    start();
};`,
      mode: 'javascript',
      lineNumbers: true
    }
    )
  },
  methods: {
    mouseMove(event) {
      this.mousex = event.clientX
      this.mousey = event.clientY
      this.timelineOffsetX = this.$refs.timeline.scrollLeft
    },
    onSwipeLeft(e) {
      console.log(e)
    }
  },
  computed: {
    sidebarWidth () {
      if (this.mode === 'presentation') {
        return 54.7
      } else if (this.mode === 'database') {
        return 18.6
      } else if (this.mode === 'code') {
        return 20
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
  background: rgba(245,245,245,0.4);
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
  min-height: 100px;
  position: fixed;
  width: 100%;
  backdrop-filter: blur(20px);

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
  transition: right 0.2s ease-in-out;

  &.on {
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
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 150px;
  overflow: auto;
  flex-direction: column;
  border-top: 0.5px solid rgba(90, 90, 90, 0.2);
  backdrop-filter: blur(20px);
  background: rgba(230, 230, 230, 0.65);
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
// Responsive art board
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
  // pointer-events: none;
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
  height: 195px;
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
.database-env {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;
}
.database-view {
  display: flex;
  flex-grow: 1;
  overflow: auto;
  // background: url('/static/images/heatmap.svg') no-repeat center center;
  background-size: auto 100%;
  h3 {
    font-weight: 600;
    text-transform: uppercase;
    user-select: none;
  }
  .db-info {
    align-self: center;
    justify-self: center;
    background: rgba(230, 230, 230, 0.45);
    border-radius: 3px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    .row {
      margin-bottom: 10px;

      * {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
      }
    }
    > input {
      margin-bottom: 10px;
    }
  }
  .table-info {
    box-sizing: border-box;
    padding-top: 15px;
    text-align: left;
    width: 100%;
    height: 100vh;

    > *:first-child {
      margin-top: 0;
    }
  }
  .row--wrap {
    position: relative;
    margin-right: -15px;
    justify-content: space-between;
  }
  .schema {
    padding-left: 15px;
    > *:first-child {
      margin-top: 0;
    }

    .search {
      margin-bottom:15px;
      max-width: 550px;
      margin-left: auto;
      margin-right: auto !important;
    }
  }
  .column {
    position: relative;
    width: 20%;
    flex-grow: 1;
    background: rgba(230, 230, 230, 0.45);;
    border-radius: 3px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    margin-bottom: 15px;

    label {
      user-select: none;
      margin-top: 10px;

      &:first-child {
        margin-top: 0;
      }
    }

    .label-art {
      margin-bottom: 0;
    }

    .label-art:before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      right: 0;
      margin-top: -15px;
      height: 1px;
      background: rgba(0,0,0,0.03);
    }
  }
  // Table values
  .table-contents {
    margin-top: 15px;
    min-width: 100%;
    border-radius: 2px 2px 0 0;

    thead {
      background: rgba(180, 180, 180, 0.2);

      th {
        padding: 5px;
      }
    }

    td {
      padding: 5px;
      background: rgba(255,255,255,0.45);
    }
  }
}
// Spreadsheet
.spreadsheet-env {
  display: flex;
  flex-grow: 1;
  overflow-y: auto;

  .spreadsheet {
    max-width: 100vw;
    max-height: 100vh;
    overflow: auto;
  }
  .table-contents {
    margin: 0;
    min-width: 100%;
    border-radius: 2px 2px 0 0;

    thead {
      position: absolute;
      counter-reset: th;
      color: white;
      z-index: 99;
      // backdrop-filter: blur(3px);

      th {
        min-width: 90px;
        min-width: 90px;
        padding: 5px;
        background: rgba(120, 120, 120, 0.55);
      }

      .index {
        background: transparent !important;
        min-width: 10px !important;
      }

      th:before {
        counter-increment: th;
        content: counter(th, upper-alpha);
        display: block;
      }
    }

    td {
      min-width: 90px;
      padding: 5px;
      background: rgba(220,220,220,0.45);

      &.index {
        text-align: center;
        min-width: auto;
        background: rgba(180, 180, 180, 0.45);
        color: white;
        font-weight: bold;
      }

      &.cell {
        position: relative;

        &.active:before {
          content: '';
          display: block;
          position: absolute;
          top: -3px;
          right: -3px;
          left: -3px;
          bottom: -3px;
          border: 3px solid lightblue;
          z-index: 5;
        }
      }
    }
  }
}
// Audio
.audio-env {
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
}
// Code
.code-sidebar {
  height: 100%;
  width: 100%;
  background: rgba(220,220,220,0.45);
  box-sizing: border-box;
  padding: 15px;
}
#editor {
  height: 150px;
}
/deep/ .CodeMirror {
  background: transparent !important;
}
</style>
