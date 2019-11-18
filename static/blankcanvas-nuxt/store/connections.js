export const state = () => ({
  privateIP: Object.values(require('os').networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address,
  connections: [
    // Each object is a person connected
    {
      name: 'John',
      // The document creator can allow people to connect to the document
      privileges: {
        read: true,
        write: false,
        artboards: {
          1: {write: true}
        }
      },
      // Flatmap value referencing current file being edited by this user
      currentlyEditing: ''
    }
  ]
})

export const actions = {
}

export const mutations = {
}