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
          <h1>{{ dom.title }}</h1>
          <p>{{ dom.p }}</p>
        </div>
      </div>
      <span />
    </main>
  </div>
</template>

<script>
export default {
  name: 'Graphics',
  data () {
    return {
      dom: {
        title: 'Open Community Software',
        p: 'This software belongs to the open community of developers. Sharing is wealth.'
      }
    }
  },
  methods: {
    change () {
      window.modal.$shareStore.target = 'Web Target'
      window.modal.$shareStore.dom = this.dom
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
    padding-left: 150px;
    box-sizing: border-box;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 900px;
    min-height: 350px;
    // background: rgba(255, 255, 255, 0.6);
    background: url('/static/images/tree.svg') no-repeat #65D17B;
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
