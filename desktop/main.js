/*
**  Feathers
*/
const pm2 = require('pm2')
pm2.start('./server/src/index.js', { name: 'blankcanvas' })

/*
**  Nuxt
*/
const http = require('http')
const { Nuxt, Builder } = require('nuxt')
let config = require('./nuxt.config.js')
config.rootDir = __dirname // for electron-builder
const nuxt = new Nuxt(config)
const builder = new Builder(nuxt)
const server = http.createServer(nuxt.render)
const privateIP = Object.values(require('os').networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address

// Build only in dev mode
if (config.dev) {
	builder.build().catch(err => {
		console.error(err)
		process.exit(1)
	})
}
process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true
// Listen the server
server.listen('1992')
const _NUXT_URL_ = `http://${privateIP}:${server.address().port}`
global.sharedWindows = {}
/*
** Electron
*/
let win = null
const electron = require('electron')
const path = require('path')
const app = electron.app
const newWin = () => {
	win = new electron.BrowserWindow({
		icon: path.join(__dirname, 'static/icon.png'),
		frame: false,
		transparent: false,
		width: 1020,
		height: 800,
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
			win.webContents.openDevTools()
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
app.on('ready', newWin)
app.on('window-all-closed', () => {
	app.quit()
})
app.on('activate', () => {
	win = newWin()
})