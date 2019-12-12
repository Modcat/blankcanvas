<template>
  <div id="app">
    <aside>
      <h1>Blankcanvas {{pkg.version}}</h1>
      <b>{{pkg.currentRelease}}</b>
      <small>{{pkg.license}}</small>
      <div class="row" v-for="(process,index) in notifications" :key="index">
        <img src="../assets/img/loader.svg" alt="loading">
        <p>{{ process }}</p>
      </div>
      <footer>
        <p>© 2019 {{pkg.license}} by author {{pkg.author}}. Wolf in snow landscape photography is respectfully provided by Comfreak and pixabay.</p>
      </footer>
    </aside>
    <img id="splash" src="../assets/img/wolf.jpg" alt="Blankcanvas Alpha 0.0.1">
  </div>
</template>

<script>
import pkg from '../package.json'
import axios from 'axios'
import electron from 'electron'

export default {
  name: 'App',
  data() {
    return {
      execShPromise: require('exec-sh').promise,
      notifications: [],
      privateIP: this.$store.state.privateIP
    }
  },
  created() {
    let remote = require('electron').remote
    let sharedWindows = remote.getGlobal('sharedWindows')
  },
  methods: {
    addNotification(note) {
      if (this.notifications.indexOf(note) === -1) {
        this.notifications.push(note)
      }
    },
    startFeathers() {
      this.execShPromise('cd ./static/blankcanvas-feathers && yarn dev', true)
      // Test for Feathers
      let loadTest = setInterval(function() {
        axios
        .get(`http://${this.privateIP}:3030/`)
        .then(function(response) {
          if (response.status === 200) {
            this.addNotification('Launched realtime database')
            this.startNUXT()
            clearInterval(loadTest)
          }
        }.bind(this))
        .catch(error => { console.log(error) })
      }.bind(this), 300)
      // Put in a fail safe and notify user feathers has failed to boot
    },
    startNUXT() {
      const connect = require('connect')
      const serveStatic = require('serve-static')
      connect()
      .use(serveStatic('./static/web-interface/'))
      .listen(3031, this.privateIP, () => {
        this.addNotification('Launched web interface')
      })
      // Test for NUXT
      let loadTest = setInterval(function() {
        axios
        .get(`http://${this.privateIP}:3031/`)
        .then(function(response) {
          if (response.status === 200) {
            this.openWebInterface()
            clearInterval(loadTest)
          }
        }.bind(this))
        .catch(error => { console.log(error) })
      }.bind(this), 300)
    },
    closePorcesses() {
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
        this.addNotification('Opened ports :3030 and :3031')
      })
    },
    openWebInterface() {
      let wins = electron.remote.getGlobal('sharedWindows')
      // wins.win.hide()
      wins.webIFWin.reload()
      wins.webIFWin.maximize()
    }
  },
  computed: {
    pkg() {return pkg},
    os() {return this.$store.state.os.platform()}
  },
  mounted() {
    if (this.privateIP) {
      this.addNotification('Obtained private IP')
    }
    // Increase GNU system file watchers
    if (this.os === 'linux')
    {
      this.execShPromise(`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`)
    }
    this.closePorcesses()
    // Close all process when app closes
    electron.remote.app.on('window-all-closed', function() {
      this.closePorcesses()
    }.bind(this))
    // Launch FeathersJS
    this.startFeathers()
  }
}
</script>

<style>
html,
body {
  position: relative;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
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
  padding: 25px;
  min-width: 260px;
  max-width: 260px;
  z-index: 2;
  background: #d5d9dc;
  color: #444;
}
aside * {
	padding: 0;
	margin: 0;
}
aside h1 {
	font-size: 20px;
}
aside b {
	font-style: normal;
	margin: 3px 0 5px 0;
}
aside small {
	font-style: normal;
}
aside .row {
	display: flex;
	align-items: center;
  margin-left: -10px;
}
aside .row img {
	width: 30px;
	height: auto;
	margin-right: 5px;
}
aside .row-db {
	margin-top: 25px;
}
aside footer {
	margin-top: auto;
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