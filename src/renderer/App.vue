<template>
  <div id="app">
    <aside>
      <h1>{{pkg.title}} {{pkg.version}}</h1>
      <b>{{pkg.author}}</b>
      <small>{{pkg.license}}</small>
      <div class="row row-db">
        <img src="./loader.svg" alt="loading">
        <p>Private IP {{$store.state.privateIP}}</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Establishing github repositories</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Launching Realtime Database</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Launching Web Interface</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Establishing OpenFL</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Establishing Nativescript</p>
      </div>
      <footer>
        <p>© 2019 {{pkg.license}} by author {{pkg.author}}. Wolf in snow landscape photography is respectfully provided by Comfreak and pixabay.</p>
      </footer>
    </aside>
    <img id="splash" src="./wolf.jpg" alt="Blankcanvas Alpha 0.0.1">
  </div>
</template>

<script>
import pkg from '../../package.json'

export default {
  name: 'App',
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    console.log(pkg)
    // Fistly kill any process on port :3030 or :3031
    // netstat -a -n -o | find "3030"
    // taskkill /F /PID 14228
    // Launch FeathersJS and NUXT
    this.startFeathers()
    this.startNUXT()
    // Subroutine to test for both interfaces
      // Test for feathers
      // Test for nuxt
      // Launch web interface by setting loaded to true when both services are available
  },
  watch: {
    loaded(newValue) {
      if (newValue)
        document.location.href = `http://${this.privateIP}:3031`
    }
  },
  methods: {
    startFeathers() {
      var execShPromise = require("exec-sh").promise

      // run interactive bash shell

      // Increase GNU system file watchers
      // 

      console.log('booting up')

      const run = async () => {
      
          let out
          
          try {
              out = await execShPromise('cd ./static/blankcanvas-feathers && yarn dev', true)
          } catch (e) {
              console.log('Error: ', e)
              console.log('Stderr: ', e.stderr)
              console.log('Stdout: ', e.stdout)
              
              return e
          }
          console.log('out: ', out.stdout, out.stderr)
      }

      console.log(run().then((response) => { console.log('FEATHERS', response) }))
    },
    startNUXT() {
      var execShPromise = require("exec-sh").promise

      // run interactive bash shell

      // Increase GNU system file watchers
      // 

      const run = async () => {
      
          let out
          
          try {
              out = await execShPromise('cd ./static/blankcanvas-nuxt && yarn dev', true)
          } catch (e) {
              console.log('Error: ', e)
              console.log('Stderr: ', e.stderr)
              console.log('Stdout: ', e.stdout)
              
              return e
          }
          console.log('out: ', out.stdout, out.stderr)
      }
      
      console.log(run().then((response) => { console.log('NUXT', response) }))
    }
  },
  computed: {
    pkg() {return pkg}
  }
}
</script>

<style lang="scss">
html,
body {
  position: relative;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  // background: rgba(255, 255, 255, 0.45);
  background: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 10px;
  color: #666;
  overflow: hidden;
  user-select: none;
}
aside {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 0;
  height: 100vh;
  box-sizing: border-box;
  padding: 35px;
  min-width: 30vw;
  max-width: 30vw;
  z-index: 2;
  background: #d5d9dc;
  color: #444;

  * {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: 20px;
  }
  b {
    font-style: normal;
    margin: 3px 0 5px 0;
  }
  small {
    font-style: normal;
  }
  .row {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
  }
  .row-db {
    margin-top: 25px;
  }
  footer {
    margin-top: auto;
  }
}
#splash {
  position: absolute;
  min-height: 100vh;
  min-width: 100vw;
  width: auto;
  height: auto;
  right: 0;
}
</style>