<template>
  <div>
    <main @click="change" id="graphics">
      <div id="target"/>

      <span/>
      <div :class="['document', { 'last-canvas': linkedCanvas }]">
        <a href="#/audio" class="audio"/>
        <a href="#/database" class="database"/>
        <a href="#/excel" class="excel"/>
        <a href="#/video" class="video"/>
        <a href="#/codeeditor" class="code"/>
        <div class="linked-canvas" @click="linkedCanvas = true"/>
        <div id="mainCanvas">
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
      <span/>

    </main>
  </div>
</template>

<script>
export default {
  name: 'Graphics',
  data () {
    return {
      linkedCanvas: false
    }
  },
  // mounted () {
  //   var container, stats, controls
  //   var camera, scene, renderer, light
  //   var clock = new window.THREE.Clock()
  //   var mixers = []
  //   init()
  //   animate()
  //   function init () {
  //     container = document.getElementById('webglCanvas')
  //     camera = new window.THREE.PerspectiveCamera(45, 900 / 500, 1, 2000)
  //     camera.position.set(100, 200, 300)
  //     controls = new window.THREE.OrbitControls(camera)
  //     controls.target.set(0, 100, 0)
  //     controls.update()
  //     scene = new window.THREE.Scene()
  //     scene.background = new window.THREE.Color(0xa0a0a0)
  //     scene.fog = new window.THREE.Fog(0xa0a0a0, 200, 1000)
  //     light = new window.THREE.HemisphereLight(0xffffff, 0x444444)
  //     light.position.set(0, 200, 0)
  //     scene.add(light)
  //     light = new window.THREE.DirectionalLight(0xffffff)
  //     light.position.set(0, 200, 100)
  //     light.castShadow = true
  //     light.shadow.camera.top = 180
  //     light.shadow.camera.bottom = -100
  //     light.shadow.camera.left = -120
  //     light.shadow.camera.right = 120
  //     scene.add(light)
  //     // scene.add( new window.THREE.CameraHelper( light.shadow.camera ) );
  //     // ground
  //     var mesh = new window.THREE.Mesh(new window.THREE.PlaneBufferGeometry(2000, 2000), new window.THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }))
  //     mesh.rotation.x = -Math.PI / 2
  //     mesh.receiveShadow = true
  //     scene.add(mesh)
  //     var grid = new window.THREE.GridHelper(2000, 20, 0x000000, 0x000000)
  //     grid.material.opacity = 0.2
  //     grid.material.transparent = true
  //     scene.add(grid)
  //     // model
  //     var loader = new window.THREE.FBXLoader()
  //     loader.load('/static/models/fbx/Samba Dancing.fbx', function (object) {
  //       object.mixer = new window.THREE.AnimationMixer(object)
  //       mixers.push(object.mixer)
  //       var action = object.mixer.clipAction(object.animations[ 0 ])
  //       action.play()
  //       object.traverse(function (child) {
  //         if (child.isMesh) {
  //           child.castShadow = true
  //           child.receiveShadow = true
  //         }
  //       })
  //       scene.add(object)
  //     })
  //     renderer = new window.THREE.WebGLRenderer({ antialias: true })
  //     renderer.setPixelRatio(window.devicePixelRatio)
  //     renderer.setSize(900, 500)
  //     renderer.shadowMap.enabled = true
  //     container.appendChild(renderer.domElement)
  //     // window.addEventListener('resize', onWindowResize, false)
  //     // stats
  //     // stats = new window.Stats()
  //     // container.appendChild(stats.dom)
  //   }
  //   // function onWindowResize () {
  //   //   camera.aspect = window.innerWidth / window.innerHeight
  //   //   camera.updateProjectionMatrix()
  //   //   renderer.setSize(window.innerWidth, window.innerHeight)
  //   // }
  //   //
  //   function animate () {
  //     requestAnimationFrame(animate)
  //     if (mixers.length > 0) {
  //       for (var i = 0; i < mixers.length; i++) {
  //         mixers[ i ].update(clock.getDelta())
  //       }
  //     }
  //     renderer.render(scene, camera)
  //     stats.update()
  //   }
  // },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Graphics'
    }
  }
}
</script>

<style lang="scss" scoped>
#graphics {
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
.animate-timeline {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 35vh;
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(5px);
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
</style>
