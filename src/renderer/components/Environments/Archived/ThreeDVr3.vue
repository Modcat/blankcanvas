<template>
  <div>
    <main
      id="graphics"
      @click="change"
    >
      <div id="target" />

      <span />
      <div class="document">
        <div id="mainCanvas">
          <div id="container" />
        </div>
        <!-- <canvas id="mainCanvas"/> -->
      </div>
      <span />
    </main>
  </div>
</template>

<script>
export default {
  name: 'ThreeDVr',
  mounted () {
    let container; let stats; let controls
    let camera; let scene; let renderer; let light
    const clock = new window.THREE.Clock()
    const mixers = []
    init()
    animate()
    function init () {
      container = document.getElementById('mainCanvas')
      camera = new window.THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
      camera.position.set(100, 200, 300)
      controls = new window.THREE.OrbitControls(camera)
      controls.target.set(0, 100, 0)
      controls.update()
      scene = new window.THREE.Scene()
      scene.background = new window.THREE.Color(0xa0a0a0)
      scene.fog = new window.THREE.Fog(0xa0a0a0, 200, 1000)
      light = new window.THREE.HemisphereLight(0xffffff, 0x444444)
      light.position.set(0, 200, 0)
      scene.add(light)
      light = new window.THREE.DirectionalLight(0xffffff)
      light.position.set(0, 200, 100)
      light.castShadow = true
      light.shadow.camera.top = 180
      light.shadow.camera.bottom = -100
      light.shadow.camera.left = -120
      light.shadow.camera.right = 120
      scene.add(light)
      // scene.add( new window.THREE.CameraHelper( light.shadow.camera ) );
      // ground
      const mesh = new window.THREE.Mesh(new window.THREE.PlaneBufferGeometry(2000, 2000), new window.THREE.MeshPhongMaterial({ color: 0x999999, depthWrite: false }))
      mesh.rotation.x = -Math.PI / 2
      mesh.receiveShadow = true
      scene.add(mesh)
      const grid = new window.THREE.GridHelper(2000, 20, 0x000000, 0x000000)
      grid.material.opacity = 0.2
      grid.material.transparent = true
      scene.add(grid)
      // model
      const loader = new window.THREE.FBXLoader()
      loader.load('/static/models/fbx/Samba Dancing.fbx', function (object) {
        object.mixer = new window.THREE.AnimationMixer(object)
        mixers.push(object.mixer)
        const action = object.mixer.clipAction(object.animations[ 0 ])
        action.play()
        object.traverse(function (child) {
          if (child.isMesh) {
            child.castShadow = true
            child.receiveShadow = true
          }
        })
        scene.add(object)
      })
      renderer = new window.THREE.WebGLRenderer({ antialias: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(900, 500)
      renderer.shadowMap.enabled = true
      container.appendChild(renderer.domElement)
      // window.addEventListener('resize', onWindowResize, false)
      // stats
      // stats = new window.Stats()
      // container.appendChild(stats.dom)
    }
    // function onWindowResize () {
    //   camera.aspect = window.innerWidth / window.innerHeight
    //   camera.updateProjectionMatrix()
    //   renderer.setSize(window.innerWidth, window.innerHeight)
    // }
    //
    function animate () {
      requestAnimationFrame(animate)
      if (mixers.length > 0) {
        for (let i = 0; i < mixers.length; i++) {
          mixers[ i ].update(clock.getDelta())
        }
      }
      renderer.render(scene, camera)
      stats.update()
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Three JS + VR'
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
.document {
  position: relative;
  margin: 0 auto;
  padding: 45px;

  #mainCanvas {
    width: 900px;
    height: 500px;
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
  bottom: 45px;
}
</style>
