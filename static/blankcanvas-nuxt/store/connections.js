export const state = () => ({
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