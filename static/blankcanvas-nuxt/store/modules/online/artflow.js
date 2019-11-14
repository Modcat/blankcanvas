// Art flow consists of art boards that are nested within a document
// Each object is the flow
const state = [
  {
    // Id of artboard
    artboard: 1,
    // Position in diagram
    position: {x: 0, y: 0},
    // Position of link on next art board
    linkedline: {x: 0, y: 0},
    // Note object attached to art board
    Note: {}
  },
  // Artflow has parts of the diagram which are questions
  {
    // Id of artboard
    question: 'Admin User?',
    // Output values have nested art boards and continues to nest on this branch
    yes: [
      {
        // <Database> object type
      }
    ],
    no: [
      {
        // <Artboard> object type
      }
    ]
  }
]

const actions = {
}

const mutations = {
}

export default {
  state,
  actions,
  mutations
}