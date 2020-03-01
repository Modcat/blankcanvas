import OS from 'os'

export const state = () => ({
  electron: {
    // These paths are OS dependant
    // We unzip our .bcd files and work with them in this directory
    // Only one bcd document can be opened at one time
    path: {
      darwin: `${OS.homedir()}/Library/Application Support/blankcanvas/`,
      linux: `${OS.homedir()}/.config/blankcanvas`,
      win32: `${OS.homedir()}\\AppData\\Local\\blankcanvas\\`
    }[OS.platform()]
  }
})

export const getters = {
  getOS() {
    return OS.platform()
  }
}

export const actions = {}

export const mutations = {}
