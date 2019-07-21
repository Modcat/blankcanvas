const state = {
  fs: require('fs'),
  zip: require('node-zip')()
}

const actions = {
  saveDocument(context) {

    // console.log('asdjaklsjd')

    // const { dialog } = require('electron').remote

    // // Show save dialog
    
    // dialog.showSaveDialog((filename) => {

    //   // JSON the data after remapping the object

    //   let dataToWrite = JSON.stringify(context.state.artboards)

    //   // Create a simple file system

    //   let fileSystem = context.state.fs.fs

    //   fileSystem.writeFile(
    //     `${filename}.json`,
    //     dataToWrite,
    //     () => { new Notification( 'Saved File', { body: filename })
    //   })
    
    // })

    context.commit('YUP')
  }
}

export const mutations = {
  YUP(state) {
    state.yup += 2
  }
}

export default { state, actions }
