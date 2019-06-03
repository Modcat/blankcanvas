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
  name: 'AR',
  mounted () {
    const params = {
      envMap: 'HDR',
      roughness: 0.0,
      metalness: 0.0,
      exposure: 1.0,
      debug: false
    }
    let container
    let camera; let scene; let renderer
    let torusMesh; let planeMesh
    let ldrCubeRenderTarget; let hdrCubeRenderTarget; let rgbmCubeRenderTarget
    let ldrCubeMap; let hdrCubeMap; let rgbmCubeMap
    init()
    animate()
    function init () {
      container = document.getElementById('container')
      camera = new window.THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000)
      camera.position.set(0, 0, 120)
      scene = new window.THREE.Scene()
      scene.background = new window.THREE.Color(0x000000)
      renderer = new window.THREE.WebGLRenderer()
      renderer.toneMapping = window.THREE.LinearToneMapping
      //
      var geometry = new window.THREE.TorusKnotBufferGeometry(18, 8, 150, 20)
      var material = new window.THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: params.metalness,
        roughness: params.roughness
      })
      torusMesh = new window.THREE.Mesh(geometry, material)
      scene.add(torusMesh)
      /* eslint-disable-next-line */
      var geometry = new window.THREE.PlaneBufferGeometry(200, 200)
      /* eslint-disable-next-line */
      var material = new window.THREE.MeshBasicMaterial()
      planeMesh = new window.THREE.Mesh(geometry, material)
      planeMesh.position.y = -50
      planeMesh.rotation.x = -Math.PI * 0.5
      scene.add(planeMesh)
      const hdrUrls = [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ]
      hdrCubeMap = new window.THREE.HDRCubeTextureLoader()
        .setPath('/static/textures/cube/pisaHDR/')
        .load(window.THREE.UnsignedByteType, hdrUrls, function () {
          const pmremGenerator = new window.THREE.PMREMGenerator(hdrCubeMap)
          pmremGenerator.update(renderer)
          const pmremCubeUVPacker = new window.THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods)
          pmremCubeUVPacker.update(renderer)
          hdrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget
          pmremGenerator.dispose()
          pmremCubeUVPacker.dispose()
        })
      const ldrUrls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ]
      ldrCubeMap = new window.THREE.CubeTextureLoader()
        .setPath('/static/textures/cube/pisa/')
        .load(ldrUrls, function () {
          ldrCubeMap.encoding = window.THREE.GammaEncoding
          const pmremGenerator = new window.THREE.PMREMGenerator(ldrCubeMap)
          pmremGenerator.update(renderer)
          const pmremCubeUVPacker = new window.THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods)
          pmremCubeUVPacker.update(renderer)
          ldrCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget
          pmremGenerator.dispose()
          pmremCubeUVPacker.dispose()
        })
      const rgbmUrls = [ 'px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png' ]
      rgbmCubeMap = new window.THREE.CubeTextureLoader()
        .setPath('/static/textures/cube/pisaRGBM16/')
        .load(rgbmUrls, function () {
          rgbmCubeMap.encoding = window.THREE.RGBM16Encoding
          const pmremGenerator = new window.THREE.PMREMGenerator(rgbmCubeMap)
          pmremGenerator.update(renderer)
          const pmremCubeUVPacker = new window.THREE.PMREMCubeUVPacker(pmremGenerator.cubeLods)
          pmremCubeUVPacker.update(renderer)
          rgbmCubeRenderTarget = pmremCubeUVPacker.CubeUVRenderTarget
          pmremGenerator.dispose()
          pmremCubeUVPacker.dispose()
        })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)
      renderer.toneMapping = window.THREE.ReinhardToneMapping
      renderer.gammaInput = true // ???
      renderer.gammaOutput = true
      // stats = new Stats()
      // container.appendChild(stats.dom)
      // controls = new window.THREE.OrbitControls(camera, renderer.domElement)
      // controls.minDistance = 50
      // controls.maxDistance = 300
      window.addEventListener('resize', onWindowResize, false)
      // var gui = new dat.GUI()
      // gui.add(params, 'envMap', [ 'LDR', 'HDR', 'RGBM16' ])
      // gui.add(params, 'roughness', 0, 1)
      // gui.add(params, 'metalness', 0, 1)
      // gui.add(params, 'exposure', 0, 2)
      // gui.add(params, 'debug', false)
      // gui.open()
    }
    function onWindowResize () {
      const width = window.innerWidth
      const height = window.innerHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    function animate () {
      requestAnimationFrame(animate)
      // stats.begin()
      render()
      // stats.end()
    }
    function render () {
      torusMesh.material.roughness = params.roughness
      torusMesh.material.metalness = params.metalness
      let renderTarget; let cubeMap
      switch (params.envMap) {
        case 'LDR':
          renderTarget = ldrCubeRenderTarget
          cubeMap = ldrCubeMap
          break
        case 'HDR':
          renderTarget = hdrCubeRenderTarget
          cubeMap = hdrCubeMap
          break
        case 'RGBM16':
          renderTarget = rgbmCubeRenderTarget
          cubeMap = rgbmCubeMap
          break
      }
      const newEnvMap = renderTarget ? renderTarget.texture : null
      if (newEnvMap && newEnvMap !== torusMesh.material.envMap) {
        torusMesh.material.envMap = newEnvMap
        torusMesh.material.needsUpdate = true
        planeMesh.material.map = newEnvMap
        planeMesh.material.needsUpdate = true
      }
      torusMesh.rotation.y += 0.005
      planeMesh.visible = params.debug
      scene.background = cubeMap
      renderer.toneMappingExposure = params.exposure
      renderer.render(scene, camera)
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'AR Technology'
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
    overflow: hidden;
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
