/*
**  Nuxt
*/
const http = require('http')
const { Nuxt, Builder } = require('nuxt')
let config = require('./nuxt.config.js')
config.rootDir = __dirname // for electron-builder
// Init Nuxt.js
const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
const server = http.createServer(nuxt.render)
// Build only in dev mode
if (config.dev) {
	builder.build().catch(err => {
		console.error(err)
		process.exit(1)
	})
}
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true
// Listen the server
server.listen()
const _NUXT_URL_ = `http://localhost:${server.address().port}`
global.sharedWindows = {}
/*
** Electron
*/
let win = null // Current window
let webIFWin = null
const electron = require('electron')
const path = require('path')
const app = electron.app
const newWin = () => {
	win = new electron.BrowserWindow({
		icon: path.join(__dirname, 'static/icon.png'),
		frame: false,
		transparent: true,
		width: 800,
		height: 480,
		alwaysOnTop: true,
		webPreferences: {
			nodeIntegration: true,
			nodeIntegrationInWorker: false,
			webSecurity: false,
			experimentalFeatures: true
		},
	})
	global.sharedWindows.win = win
	win.on('closed', () => win = null)
	if (config.dev) {
		// Install vue dev tool and open chrome dev tools
		const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
		installExtension(VUEJS_DEVTOOLS.id).then(name => {
			// win.webContents.openDevTools()
		}).catch(err => console.log('An error occurred: ', err))
		// Wait for nuxt to build
		const pollServer = () => {
			http.get(_NUXT_URL_, (res) => {
				if (res.statusCode === 200) { win.loadURL(_NUXT_URL_) } else { setTimeout(pollServer, 300) }
			}).on('error', pollServer)
		}
		pollServer()
	} else { return win.loadURL(_NUXT_URL_) }
}
const webInterfaceWin = () => {
	webIFWin = new electron.BrowserWindow({
		icon: path.join(__dirname, 'static/icon.png'),
		// transparent: true,
		width: 0,
		height: 0,
		frame: false,
		show: false
	})
	global.sharedWindows.webIFWin = webIFWin
	webIFWin.hide()
	// webIFWin.maximize()
	webIFWin.on('closed', () => webIFWin = null)
	if (config.dev) {
		// Install vue dev tool and open chrome dev tools
		const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer')
		installExtension(VUEJS_DEVTOOLS.id).then(name => {
			// webIFWin.webContents.openDevTools()
		}).catch(err => console.log('An error occurred: ', err))
	}
	webIFWin.loadURL('http://192.168.0.28:3031/index/')
}
app.on('ready', newWin)
app.on('ready', webInterfaceWin)
app.on('window-all-closed', () => app.quit())
app.on('activate', () => {
	win = newWin()
	webIFWin = webInterfaceWin()
})