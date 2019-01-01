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
    height: 563,
    useContentSize: true,
    width: 1000,
    frame: false,
    transparent: true,
    resizable: true,
    fullscreenable: true,
    vibrancy: 'light',
    webPreferences: {
      nativeWindowOpen: true,
      experimentalFeatures: true
    }
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  mainWindow.webContents.on('new-window', (event, url, frameName, disposition, options, additionalFeatures, modal = false, width = 377, height = 350) => {
    console.log(frameName)
    if (frameName === 'modal') {
      // open window as modal
      event.preventDefault()
      Object.assign(options, {
        modal: modal,
        parent: mainWindow,
        width,
        height,
        frame: false,
        transparent: true,
        resizable: true,
        fullscreenable: true,
        vibrancy: 'light'
      })
      event.newGuest = new BrowserWindow(options)
    }
  })
}

app.on('ready', createWindow)

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
