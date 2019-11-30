<template>
  <div id="app">
    <aside>
      <h1>{{pkg.title}} {{pkg.version}}</h1>
      <b>{{pkg.author}}</b>
      <small>{{pkg.license}}</small>
      <div class="row" v-for="(process,index) in notifications" :key="index">
        <img src="./loader.svg" alt="loading">
        <p>{{ process }}</p>
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
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      feathersReady: false,
      webInterfaceReady: false,
      execShPromise: require('exec-sh').promise,
      notifications: [],
      privateIP: this.$store.state.privateIP
    }
  },
  methods: {
    startFeathers() {
      this.execShPromise('cd ./static/blankcanvas-feathers && yarn dev', true)
      // Test for feathers
      let loadTest = setInterval(function() {
        axios
        .get(`http://${this.privateIP}:3030`)
        .then(function(response) {
          if (response.status === 200) {
            this.feathersReady = true
            this.notifications.push('Launched realtime database')
            this.startNUXT()
            clearInterval(loadTest)
          }
        }.bind(this))
      }.bind(this), 300)
      // Put in a fail safe and notify user feathers has failed to boot
    },
    startNUXT() {
      const connect = require('connect')
      const serveStatic = require('serve-static')
      connect()
      .use(serveStatic('./static/web-interface/'))
      .listen(3031, this.privateIP, () => {
        this.notifications.push('Launched web interface')
        console.log(`Web interface running on http://${this.privateIP}:3031`)
      })
    }
  },
  computed: {
    pkg() {return pkg},
    os() {return this.$store.state.os.platform()}
  },
  mounted() {
    if (this.privateIP) {
      this.notifications.push('Obtained private IP')
    }
    // Increase GNU system file watchers
    if (this.os === 'linux')
    {
      this.execShPromise(`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`)
    }
    // Kill PID processes on port :3030 or :3031
    let findAllProcessIDs = this.os === 'win32' ? 'netstat -a -n -o' : 'ps -eF'
    this.execShPromise(findAllProcessIDs, true)
    .then(response => {
      let io = response
      .stdout
      .match(/.*\:3030.*|.*\:3031.*/gm)

      if (io)
      {
        io = io.map(el => {
          return el.replace(/\s+/gmi, ' ').split(' ')
        })
        .filter(el => {
          // Find listening process
          return el.indexOf('LISTENING') !== -1
        })
        if (this.os === 'win32') {
          io.forEach(function(service) {this.execShPromise(`taskkill /F /PID ${service.pop()}`) }.bind(this))
        }
        else if (this.os.match(/linux|mac/gmi))
        {
          io.forEach(function(service) { this.execShPromise(`kill ${service[1]}`) }.bind(this))
        }
      }
      this.notifications.push('Opened ports :3030 and :3031')
    })
    // Launch FeathersJS
    this.startFeathers()
  },
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
  pointer-events: none;
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