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

  mainWindow.on('showUI', function (e, data) {
    const modalPath = process.env.NODE_ENV === 'development'
      ? 'http://localhost:9080/#/ui'
      : `file://${__dirname}/index.html#ui`
    let win = new BrowserWindow({ width: 400, height: 320, webPreferences: {webSecurity: false} })
    win.on('close', function () { win = null })
    win.loadURL(modalPath)
  })

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
