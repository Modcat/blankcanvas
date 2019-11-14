<template>
  <div id="app">
    <aside>
      <h1>{{pkg.title}} {{pkg.version}}</h1>
      <p>{{pkg.author}}</p>
      <p>{{pkg.license}}</p>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Launching Realtime Database</p>
      </div>
      <div class="row">
        <img src="./loader.svg" alt="loading">
        <p>Launching Web Interface</p>
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
  mounted() {
    console.log(pkg)
    // netstat -a -n -o | find "3030"
    // taskkill /F /PID 14228
    this.startFeathers()
    this.startNUXT()
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
  .row {
    display: flex;
    align-items: center;

    img {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
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