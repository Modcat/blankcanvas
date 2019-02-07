'use strict'

import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    useContentSize: true,
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    transparent: true,
    resizable: true,
    fullscreenable: true,
    vibrancy: 'light',
    webPreferences: {
      // nativeWindowOpen: true,
      experimentalFeatures: true
    }
  })

  mainWindow.maximize()

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  // New properties window
  let properties = new BrowserWindow({
    width: 300,
    height: 400,
    minWidth: 250,
    minHeight: 250,
    parent: mainWindow,
    frame: false,
    transparent: true,
    resizable: true,
    fullscreenable: false,
    // vibrancy: 'light',
    webPreferences: {webSecurity: false}
  })
  properties.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/properties' : `file://${__dirname}/index.html#ui`)


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
    vibrancy: 'light',
    webPreferences: {webSecurity: false}
  })
  tools.loadURL(process.env.NODE_ENV === 'development' ? 'http://localhost:9080/#/tools' : `file://${__dirname}/index.html#tools`)

  // Allow access globally all windows

  global.windowAccess = {tools, properties, mainWindow}

  // New window creation
  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures, modal = false, width = 377, height = 350) => {
    if (frameName === 'modal') {
      // open window as modal
      event.preventDefault()
      Object.assign(options, {
        minWidth: 250,
        minHeight: 250,
        modal: modal,
        parent: mainWindow,
        width,
        height,
        frame: false,
        transparent: true,
        resizable: true,
        fullscreenable: true,
        vibrancy: 'light',
        webPreferences: {webSecurity: false}
      })
      event.newGuest = new BrowserWindow(options)
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    win = null
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
    // win.hide()
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
