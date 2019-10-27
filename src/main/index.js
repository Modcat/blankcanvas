/* eslint-disable */
import { app, BrowserWindow } from 'electron'
/* eslint-enable */
const pkg = require('../../package.json')
const { productName } = pkg.build

app.hello = 'hello to you global'

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true

const isDev = process.env.NODE_ENV === 'development'

let mainWindow

if (isDev) {
  // eslint-disable-next-line
  require('electron-debug')()
}

async function installDevTools() {
  try {
    // eslint-disable-next-line
    require('devtron').install()
    // eslint-disable-next-line
    require('vue-devtools').install()
  } catch (err) {
    // eslint-disable-next-line
    console.error(err)
  }
}

function createWindow() {
  /**
   * Initial window options
   */
  const mainWindow = new BrowserWindow({
    // useContentSize: true,
    width: 960,
    height: 640,
    frame: false,
    backgroundColor: '#FFF',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      webSecurity: false,
      experimentalFeatures: true
    },
    show: false,
  })

  app.mainWindow = mainWindow

  mainWindow.maximize()

  // New properties window
  const properties = new BrowserWindow({
    width: 300,
    height: 400,
    minWidth: 250,
    minHeight: 250,
    parent: mainWindow,
    frame: false,
    transparent: true,
    resizable: true,
    fullscreenable: false,
    devTools: false,
    backgroundColor: '#FFF',
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      webSecurity: false,
    },
    // vibrancy: 'light',
  })
  app.properties = properties
  properties.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/properties' : `file://${__dirname}/index.html#ui`)
  properties.hide()

  // New tools window
  let tools = null
  tools = new BrowserWindow({
    width: 300,
    height: 35,
    parent: mainWindow,
    frame: false,
    transparent: true,
    resizable: false,
    fullscreenable: false,
    // vibrancy: 'light',
    backgroundColor: '#00000000',
    devTools: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: false,
      webSecurity: false,
    },
  })
  app.tools = tools
  tools.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/tools' : `file://${__dirname}/index.html#tools`)
  
  tools.hide()

  if (isDev) {
    mainWindow.loadURL('http://localhost:9080')
  } else {
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    global.__static = require('path')
      .join(__dirname, '/static')
      .replace(/\\/g, '\\\\')
  }

  // Show when loaded
  mainWindow.on('ready-to-show', () => {
    mainWindow.setTitle(productName)
    mainWindow.show()
    mainWindow.focus()

    if (isDev || process.argv.indexOf('--debug') !== -1) {
      mainWindow.webContents.openDevTools()
    }
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  app.setName(productName)
  createWindow()

  if (isDev) {
    installDevTools()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
