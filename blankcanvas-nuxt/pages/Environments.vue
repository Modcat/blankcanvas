<template>
  <div
    class="main-layout"
  >
    <!-- Left Draw -->
    <!-- All main content that pushes over to left -->
    <div class="left-draw draw">

      <!-- Code Sidebar -->
      <div :class="['code-sidebar', { 'on': mode === 'code' }]">
        <input
          type="text"
          placeholder="search"
        >
        <div class="group">
          <div class="content">
            hello
          </div>
        </div>
      </div>
    </div>
    <main id="graphics">

      <div id="three"></div>

      <!-- Sidebar -->
      <div :class="['right-draw draw', {'on': showRightDraw}]">
        <div class="blur">
          <!-- People connected -->
          <div class="cards">
            <div class="card">
              <img
                src="/static/images/vr-logo.png"
                alt=""
              >
              <span class="label-art">John</span>
            </div>
            <div class="card">
              <img
                src="/static/images/XBOX.png"
                alt=""
              >
              <span class="label-art">Joane</span>
            </div>
            <div class="card">
              <img
                src="/static/images/XBOX.png"
                alt=""
              >
              <span class="label-art">Jeff</span>
            </div>
            <div class="card">
              <img
                src="/static/images/Ubuntu.png"
                style="width:50px; margin: 0 auto;"
                alt=""
              >
              <span class="label-art">Jamie</span>
            </div>
          </div>

          <hr>

          <!-- Switch Mode -->
          <router-link :to="'/environments?mode=spreadsheet'">
            Spreadsheet
          </router-link>
          <router-link :to="'/environments?mode=presentation'">
            presentation
          </router-link>
          <router-link :to="'/environments?mode=database'">
            Database
          </router-link>
          <router-link :to="'/environments?mode=code'">
            Code
          </router-link>
          <router-link :to="'/environments?mode=graphics'">
            Graphics
          </router-link>
          <router-link :to="'/environments?mode=video'">
            Video
          </router-link>
          <router-link :to="'/environments?mode=audio'">
            Audio
          </router-link>

          <hr>

          <!-- Clipbaord -->

          <span class="label-art">Clipboard</span>

          <div class="box">
            <div
              v-for="(clipbaord,index) in [1,2,3,4]"
              :key="index"
            >
              Clipbaord content {{ index }} ...
            </div>
          </div>

          <hr>

          <!-- Charts -->

          <span class="label-art">Charts</span>

          <div class="charts">
            <div class="half">
              <div>
                <chartist
                  ratio="ct-major-second"
                  type="Line"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </div>
            <div class="half">
              <div>
                <chartist
                  ratio="ct-major-second"
                  type="Line"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </div>
          </div>

          <hr>

          <!-- Clipbaord -->

          <span class="label-art">SQL Presets</span>

          <div class="box">
            <div
              v-for="(clipbaord,index) in [1,2,3,4]"
              :key="index"
            >
              <span class="label-art">Get Figures</span>
              SELECT FROM *{ columns } WHERE cell CONTAINS ${ market }
            </div>
          </div>
        </div>
      </div>

      <!-- Graphics, Presentation or Code -->
      <div
        v-if="mode.match(/graphics/ig)"
        :class="['document', { 'last-canvas': linkedCanvas }]"
      >
        <a
          href="#/audio"
          class="audio"
        />
        <a
          href="#/database"
          class="database"
        />
        <a
          href="#/excel"
          class="excel"
        />
        <a
          href="#/video"
          class="video"
        />
        <a
          href="#/codeeditor"
          class="code"
        />
        <div
          class="linked-canvas"
          @click="linkedCanvas = true"
        />
        <div id="mainCanvas">
          <img
            class="desktop"
            src="/static/images/art-canvas.svg"
            alt="Vector Graphics"
          >
          <img
            class="mobile"
            src="/static/images/art-canvas-600.svg"
            alt="Vector Graphics"
          >
          <!-- <div id="webglCanvas"/> -->
        </div>
      </div>
      <div
        v-if="mode === 'graphics'"
        :class="['document', 'doc2', { linkedCanvas }]"
      >
        <a
          href="#/audio"
          class="audio"
        />
        <a
          href="#/database"
          class="database"
        />
        <a
          href="#/excel"
          class="excel"
        />
        <a
          href="#/video"
          class="video"
        />
        <a
          href="#/codeeditor"
          class="code"
        />
        <div
          class="linked-canvas"
          @click="linkedCanvas = false"
        />
        <div id="mainCanvas">
          <img
            src="/static/images/art-canvas.svg"
            alt="Vector Graphics"
          >
          <!-- <div id="webglCanvas"/> -->
        </div>
      </div>

      <!-- Presentation -->
      <Presentation v-if="mode === 'presentation'"/>
      
      <!-- Video -->
      <div
        v-if="mode === 'video'"
        class="document video"
      >
        <div
          id="mainCanvas"
          style="position:relative;"
        >
          <img
            class="vid-overlay"
            src="/static/images/video-overlay.png"
            alt=""
            style="position:absolute;max-width:80%;"
          >
          <video
            style="max-width:100%;"
            src="/static/video/honey.mp4"
            autoplay
            loop="loop"
          />
        </div>
      </div>

      <!-- Audio -->
      <div
        v-if="mode === 'audio'"
        class="audio-env"
      >
        <div class="audio">
          <div class="track">
            <div class="audio-preview" />
          </div>
          <div class="track">
            <div
              class="audio-preview"
              style="left:200px;"
            />
          </div>
        </div>
      </div>

      <!-- Database -->
      <Database v-if="mode === 'database'" />

      <!-- Spreadsheet -->
      <SpreadsheetView v-if="mode === 'spreadsheet'" />
      

      <!-- Bottom Draw -->
      <div
        v-if="mode !== 'database' && mode !== 'spreadsheet'"
        class="bottom-draw draw"
      >
        <!-- Code -->
        <div
          v-show="mode === 'code'"
          id="editor"
        />
        
        <!-- Video Timeline -->
        <div
          v-if="mode === 'video'"
          id="live-preview"
          :style="`left: ${mousex - 75}px; top: ${mousey - 40}px; opacity:${showPreview ? '1' : '0'}`"
        >
          <video
            src="/static/video/honey.mp4"
            autoplay
            loop="loop"
          />
        </div>
        <div
          v-if="mode === 'video'"
          ref="timeline"
          class="animate-timeline"
        >
          <div
            class="line"
            :style="`left: ${mousex + timelineOffsetX}px`"
          />
          <div class="track">
            <div
              class="preview"
              @mousemove="showPreview = true"
              @mouseout="showPreview = false"
            >
              <img
                src="/static/video/honey-thumbnail.png"
                alt="thumbnail"
                height="38"
              >
              <label>The movie of the honey badger</label>
            </div>
            <div
              class="preview"
              style="left: 340px"
              @mousemove="showPreview = true"
              @mouseout="showPreview = false"
            >
              <img
                src="/static/video/honey-thumbnail.png"
                alt="thumbnail"
                height="38"
              >
              <label>The movie of the honey badger</label>
            </div>
          </div>
          <div class="track">
            <div
              class="preview"
              style="width: 200px; left: 200px"
              @mousemove="showPreview = true"
              @mouseout="showPreview = false"
            >
              <img
                src="/static/video/honey-thumbnail.png"
                alt="thumbnail"
                height="38"
              >
              <label>The movie of the honey badger</label>
            </div>
          </div>
          <div
            v-for="(track,index) in [1,1,1,1,1,1]"
            :key="index"
            class="track"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Code mirror
import CodeMirror from 'codemirror'
import CodeMirrorMode from 'codemirror/mode/javascript/javascript.js'
import CodeMirrorCSS from 'codemirror/lib/codemirror.css'
import CodeMirrorTheme from 'codemirror/theme/base16-light.css'

import Database from '@/components/environments/Database'
import Presentation from '@/components/environments/Presentation'
import SpreadsheetView from '@/components/Environments/SpreadsheetView'

export default {
  name: 'Environments',

  components: {
    Database,
    Presentation,
    SpreadsheetView
  },
  data () {
    return {
      linkedCanvas: false,
      mousex: 0,
      mousey: 0,
      timelineOffsetX: '',
      showPreview: false,
      showRightDraw: false,
      mode: this.$route.query.mode || 'graphics',
      // Database
      view: 'db-info',
      subTab: 'schema',
      // charist
      chartData: {
        labels: ["A", "B", "C"],
        series:[[1, 3, 2], [4, 6, 5]]
      },
      chartOptions: {
        lineSmooth: false
      }
    }
  },
  computed: {
    sidebarWidth () {
      if (this.mode === 'presentation') {
        return 54.7
      } if (this.mode === 'database') {
        return 18.6
      } if (this.mode === 'code') {
        return 20
      } 
        return 0
      
    }
  },
  watch: {
    '$route.query.mode': function() {
      this.mode = this.$route.query.mode
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
        const {scrollLeft} = e.target
        this.$refs.header.style.marginLeft = `${scrollLeft * -1}px`
      })

      this.$refs.spreadsheet.addEventListener('click', (e) => {
        if (e.target.className.match('cell')) {
          e.target.classList.add('active')
        }
      })
    }
    // Code Mirror
    const codeSection = document.getElementById('editor')
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
    // ThreeJS

    // var camera, scene, renderer, geometry, material, mesh;

    // init();
    // animate();
    
    // function init() {
    
    //     camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    //     camera.position.z = 1;
    
    //     scene = new THREE.Scene();
    
    //     geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    //     material = new THREE.MeshNormalMaterial();
    
    //     mesh = new THREE.Mesh( geometry, material );
    //     scene.add( mesh );
    
    //     renderer = new THREE.WebGLRenderer( { antialias: true } );
    //     renderer.setSize( window.innerWidth, window.innerHeight );
    //     document.getElementById('three').appendChild( renderer.domElement );
    
    // }
 
    // function animate() {
    
    //     requestAnimationFrame( animate );
    
    //     mesh.rotation.x += 0.01;
    //     mesh.rotation.y += 0.02;
    
    //     renderer.render( scene, camera );
    
    // }
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
  display: none;
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
// Sidebar
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
  text-align: center;

  &.on {
    right: 0;
  }

  .blur {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 15px;
    overflow-y: auto;
    border-left: .5px solid rgba(90,90,90,0.3);
    backdrop-filter: blur(25px);
    overflow-x: hidden;
    overflow-y: auto;
  }

  hr {
    max-width: 100%;
    margin: 15px 0;
    position: relative;
    left: -15px;
    right: -15px;
  }
	.label-art {
		margin-top: 0;
		margin-bottom: 10px !important;
		~ * {
			margin-top: 15px;
		}
	}
	.charts {
		display: flex;
		justify-content: space-between;
		margin-bottom: -15px;
	}
	.half {
		width: 48%;
		height: 158px;
		background: rgba(255,255,255,0.45);
    border-radius: 3px;
		border: 0.5px solid #e8e8e8;
		overflow: hidden;
		margin-bottom: 15px;
	}
	.box {
		border: 0.5px solid #ddd;
		background: rgba(255,255,255,0.35);
		border-radius:6px;
	
		div {
			border-bottom: 1px solid #ddd;
			padding: 0 13px;
			white-space: nowrap;
			text-overflow: ellipsis;
			border-bottom: 1px solid #ddd;
			align-items: center;
			flex-direction: row;
			display: flex;
			height: 30px;

			.label-art {
				margin-left: -8px;
				border-radius: 3px !important;
				margin-bottom: 0 !important;
				margin-right: 5px;
			}
	
			&:last-child {
				border-bottom: 0;
			}
		}
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
  display: none;
  height: 100%;
  width: 100%;
  background: rgba(220,220,220,0.45);
  box-sizing: border-box;
  padding: 15px;
}
#editor {
  height: 150px;
}
</style>
