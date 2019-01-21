<template>
  <div>
    <main @click="change" id="graphics">
      <div id="target"/>

      <span/>
      <div class="document">
        <div id="mainCanvas">
          <video id="video" autoplay loop crossOrigin="anonymous" webkit-playsinline style="display:none">
            <source src="/static/textures/sintel.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
          </video>
          <div id="container" />
        </div>
        <!-- <canvas id="mainCanvas"/> -->
      </div>
      <span/>

    </main>
  </div>
</template>

<script>
export default {
  name: 'ThreeDVr',
  mounted () {
    var container
    var camera, scene, renderer
    var video, texture, material, mesh
    var composer
    var mouseX = 0
    var mouseY = 0
    var windowHalfX = window.innerWidth / 2
    var windowHalfY = window.innerHeight / 2
    var cube_count,
      meshes = [],
      materials = [],
      xgrid = 20,
      ygrid = 10
    init()
    animate()
    function init () {
      container = document.getElementById('container')
      camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000)
      camera.position.z = 500
      scene = new THREE.Scene()
      var light = new THREE.DirectionalLight(0xffffff)
      light.position.set(0.5, 1, 1).normalize()
      scene.add(light)
      renderer = new THREE.WebGLRenderer()
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      container.appendChild(renderer.domElement)
      video = document.getElementById('video')
      texture = new THREE.VideoTexture(video)
      //
      var i, j, ux, uy, ox, oy,
        geometry,
        xsize, ysize
      ux = 1 / xgrid
      uy = 1 / ygrid
      xsize = 480 / xgrid
      ysize = 204 / ygrid
      var parameters = { color: 0xffffff, map: texture }
      cube_count = 0
      for (i = 0; i < xgrid; i++) {
        for (j = 0; j < ygrid; j++) {
          ox = i
          oy = j
          geometry = new THREE.BoxBufferGeometry(xsize, ysize, xsize)
          change_uvs(geometry, ux, uy, ox, oy)
          materials[ cube_count ] = new THREE.MeshLambertMaterial(parameters)
          material = materials[ cube_count ]
          material.hue = i / xgrid
          material.saturation = 1 - j / ygrid
          material.color.setHSL(material.hue, material.saturation, 0.5)
          mesh = new THREE.Mesh(geometry, material)
          mesh.position.x = (i - xgrid / 2) * xsize
          mesh.position.y = (j - ygrid / 2) * ysize
          mesh.position.z = 0
          mesh.scale.x = mesh.scale.y = mesh.scale.z = 1
          scene.add(mesh)
          mesh.dx = 0.001 * (0.5 - Math.random())
          mesh.dy = 0.001 * (0.5 - Math.random())
          meshes[ cube_count ] = mesh
          cube_count += 1
        }
      }
      renderer.autoClear = false
      document.addEventListener('mousemove', onDocumentMouseMove, false)
      // postprocessing
      var renderModel = new THREE.RenderPass(scene, camera)
      var effectBloom = new THREE.BloomPass(1.3)
      var effectCopy = new THREE.ShaderPass(THREE.CopyShader)
      effectCopy.renderToScreen = true
      composer = new THREE.EffectComposer(renderer)
      composer.addPass(renderModel)
      composer.addPass(effectBloom)
      composer.addPass(effectCopy)
      //
      window.addEventListener('resize', onWindowResize, false)
    }
    function onWindowResize () {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      composer.reset()
    }
    function change_uvs (geometry, unitx, unity, offsetx, offsety) {
      var uvs = geometry.attributes.uv.array
      for (var i = 0; i < uvs.length; i += 2) {
        uvs[ i ] = (uvs[ i ] + offsetx) * unitx
        uvs[ i + 1 ] = (uvs[ i + 1 ] + offsety) * unity
      }
    }
    function onDocumentMouseMove (event) {
      mouseX = (event.clientX - windowHalfX)
      mouseY = (event.clientY - windowHalfY) * 0.3
    }
    //
    function animate () {
      requestAnimationFrame(animate)
      render()
    }
    var h, counter = 1
    function render () {
      var time = Date.now() * 0.00005
      camera.position.x += (mouseX - camera.position.x) * 0.05
      camera.position.y += (-mouseY - camera.position.y) * 0.05
      camera.lookAt(scene.position)
      for (var i = 0; i < cube_count; i++) {
        material = materials[ i ]
        h = (360 * (material.hue + time) % 360) / 360
        material.color.setHSL(h, material.saturation, 0.5)
      }
      if (counter % 1000 > 200) {
        for (var i = 0; i < cube_count; i++) {
          mesh = meshes[ i ]
          mesh.rotation.x += 10 * mesh.dx
          mesh.rotation.y += 10 * mesh.dy
          mesh.position.x += 200 * mesh.dx
          mesh.position.y += 200 * mesh.dy
          mesh.position.z += 400 * mesh.dx
        }
      }
      if (counter % 1000 === 0) {
        for (var i = 0; i < cube_count; i++) {
          mesh = meshes[ i ]
          mesh.dx *= -1
          mesh.dy *= -1
        }
      }
      counter++
      renderer.clear()
      composer.render()
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
