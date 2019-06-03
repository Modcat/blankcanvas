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
          <span class="label-art label-art--large"><a href="#/codeeditor">Source Code</a></span>
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
                src="/static/images/Ubuntu.png"
                style="width:50px; margin: 0 auto;"
                alt=""
              >
              <span class="label-art">Jamie</span>
            </div>
          </div>
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
    let camera; let scene; let renderer; let mesh; let parent
    const meshes = []
    const clonemeshes = []
    let composer; let effectFocus
    const clock = new window.THREE.Clock()
    init()
    animate()
    function init () {
      const container = document.querySelector('#container')
      camera = new window.THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 50000)
      camera.position.set(0, 700, 7000)
      scene = new window.THREE.Scene()
      scene.background = new window.THREE.Color(0x000104)
      scene.fog = new window.THREE.FogExp2(0x000104, 0.0000675)
      camera.lookAt(scene.position)
      const loader = new window.THREE.OBJLoader()
      loader.load('/static/models/obj/male02/male02.obj', function (object) {
        const positions = combineBuffer(object, 'position')
        createMesh(positions, scene, 4.05, -500, -350, 600, 0xff7744)
        createMesh(positions, scene, 4.05, 500, -350, 0, 0xff5522)
        createMesh(positions, scene, 4.05, -250, -350, 1500, 0xff9922)
        createMesh(positions, scene, 4.05, -250, -350, -1500, 0xff99ff)
      })
      loader.load('/static/models/obj/female02/female02.obj', function (object) {
        const positions = combineBuffer(object, 'position')
        createMesh(positions, scene, 4.05, -1000, -350, 0, 0xffdd44)
        createMesh(positions, scene, 4.05, 0, -350, 0, 0xffffff)
        createMesh(positions, scene, 4.05, 1000, -350, 400, 0xff4422)
        createMesh(positions, scene, 4.05, 250, -350, 1500, 0xff9955)
        createMesh(positions, scene, 4.05, 250, -350, 2500, 0xff77dd)
      })
      renderer = new window.THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(900, 500)
      // renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.autoClear = false
      container.appendChild(renderer.domElement)
      parent = new window.THREE.Object3D()
      scene.add(parent)
      const grid = new window.THREE.Points(new window.THREE.PlaneBufferGeometry(15000, 15000, 64, 64), new window.THREE.PointsMaterial({ color: 0xff0000, size: 10 }))
      grid.position.y = -400
      grid.rotation.x = -Math.PI / 2
      parent.add(grid)
      // postprocessing
      const renderModel = new window.THREE.RenderPass(scene, camera)
      const effectBloom = new window.THREE.BloomPass(0.75)
      const effectFilm = new window.THREE.FilmPass(0.5, 0.5, 1448, false)
      effectFocus = new window.THREE.ShaderPass(window.THREE.FocusShader)
      effectFocus.uniforms.screenWidth.value = window.innerWidth
      effectFocus.uniforms.screenHeight.value = window.innerHeight
      effectFocus.renderToScreen = true
      composer = new window.THREE.EffectComposer(renderer)
      composer.addPass(renderModel)
      composer.addPass(effectBloom)
      composer.addPass(effectFilm)
      composer.addPass(effectFocus)
    }
    /* eslint-disable-next-line */
    function onWindowResize () {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      camera.lookAt(scene.position)
      composer.reset()
      effectFocus.uniforms.screenWidth.value = window.innerWidth
      effectFocus.uniforms.screenHeight.value = window.innerHeight
    }
    function combineBuffer (model, bufferName) {
      let count = 0
      model.traverse(function (child) {
        if (child.isMesh) {
          const buffer = child.geometry.attributes[ bufferName ]
          count += buffer.array.length
        }
      })
      const combined = new Float32Array(count)
      let offset = 0
      model.traverse(function (child) {
        if (child.isMesh) {
          const buffer = child.geometry.attributes[ bufferName ]
          combined.set(buffer.array, offset)
          offset += buffer.array.length
        }
      })
      return new window.THREE.BufferAttribute(combined, 3)
    }
    function createMesh (positions, scene, scale, x, y, z, color) {
      const geometry = new window.THREE.BufferGeometry()
      geometry.addAttribute('position', positions.clone())
      geometry.addAttribute('initialPosition', positions.clone())
      geometry.attributes.position.setDynamic(true)
      const clones = [
        [ 6000, 0, -4000 ],
        [ 5000, 0, 0 ],
        [ 1000, 0, 5000 ],
        [ 1000, 0, -5000 ],
        [ 4000, 0, 2000 ],
        [ -4000, 0, 1000 ],
        [ -5000, 0, -5000 ],
        [ 0, 0, 0 ]
      ]
      for (let i = 0; i < clones.length; i++) {
        const c = (i < clones.length - 1) ? 0x252525 : color
        mesh = new window.THREE.Points(geometry, new window.THREE.PointsMaterial({ size: 30, color: c }))
        mesh.scale.x = mesh.scale.y = mesh.scale.z = scale
        mesh.position.x = x + clones[ i ][ 0 ]
        mesh.position.y = y + clones[ i ][ 1 ]
        mesh.position.z = z + clones[ i ][ 2 ]
        parent.add(mesh)
        clonemeshes.push({ mesh, speed: 0.5 + Math.random() })
      }
      meshes.push({
        mesh,
        verticesDown: 0,
        verticesUp: 0,
        direction: 0,
        speed: 15,
        delay: Math.floor(200 + 200 * Math.random()),
        start: Math.floor(100 + 200 * Math.random())
      })
    }
    function animate () {
      requestAnimationFrame(animate)
      render()
    }
    function render () {
      let delta = 10 * clock.getDelta()
      delta = delta < 2 ? delta : 2
      parent.rotation.y += -0.02 * delta
      /* eslint-disable-next-line */
      for (var j = 0; j < clonemeshes.length; j++) {
        const cm = clonemeshes[ j ]
        cm.mesh.rotation.y += -0.1 * delta * cm.speed
      }
      /* eslint-disable-next-line */
      for (var j = 0; j < meshes.length; j++) {
        const data = meshes[ j ]
        const positions = data.mesh.geometry.attributes.position
        const initialPositions = data.mesh.geometry.attributes.initialPosition
        const {count} = positions
        if (data.start > 0) {
          data.start -= 1
        } else if (data.direction === 0) {
            data.direction = -1
          }
        for (let i = 0; i < count; i++) {
          const px = positions.getX(i)
          const py = positions.getY(i)
          const pz = positions.getZ(i)
          // falling down
          if (data.direction < 0) {
            if (py > 0) {
              positions.setXYZ(
                i,
                px + 1.5 * (0.50 - Math.random()) * data.speed * delta,
                py + 3.0 * (0.25 - Math.random()) * data.speed * delta,
                pz + 1.5 * (0.50 - Math.random()) * data.speed * delta
              )
            } else {
              data.verticesDown += 1
            }
          }
          // rising up
          if (data.direction > 0) {
            const ix = initialPositions.getX(i)
            const iy = initialPositions.getY(i)
            const iz = initialPositions.getZ(i)
            const dx = Math.abs(px - ix)
            const dy = Math.abs(py - iy)
            const dz = Math.abs(pz - iz)
            const d = dx + dy + dx
            if (d > 1) {
              positions.setXYZ(
                i,
                px - (px - ix) / dx * data.speed * delta * (0.85 - Math.random()),
                py - (py - iy) / dy * data.speed * delta * (1 + Math.random()),
                pz - (pz - iz) / dz * data.speed * delta * (0.85 - Math.random())
              )
            } else {
              data.verticesUp += 1
            }
          }
        }
        // all vertices down
        if (data.verticesDown >= count) {
          if (data.delay <= 0) {
            data.direction = 1
            data.speed = 5
            data.verticesDown = 0
            data.delay = 320
          } else {
            data.delay -= 1
          }
        }
        // all vertices up
        if (data.verticesUp >= count) {
          if (data.delay <= 0) {
            data.direction = -1
            data.speed = 15
            data.verticesUp = 0
            data.delay = 120
          } else {
            data.delay -= 1
          }
        }
        positions.needsUpdate = true
      }
      composer.render(0.01)
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
    padding-top: 25px;
    display: flex;
    flex-direction: column;
    width: 900px;
    min-height: 500px;
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
/deep/ canvas {
  float: left;
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
