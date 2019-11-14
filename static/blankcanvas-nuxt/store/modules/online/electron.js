import OS from 'os'
import PerfectScrollbar from 'perfect-scrollbar'

const state = {
  // These paths are OS dependant
  // We unzip our .bcd files and work with them in this directory
  // Only one bcd document can be opened at one time
  path: {
    darwin: `${OS.homedir()}/Library/Application Support/blankcanvas/`,
    linux: `${OS.homedir()}/.config/blankcanvas`,
    win32: `${OS.homedir()}\\AppData\\Local\\blankcanvas\\`
  }[OS.platform()],
  perfectScrollbar: PerfectScrollbar
}

const getters = {
  getOS() {
    return OS.platform()
  }
}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}
