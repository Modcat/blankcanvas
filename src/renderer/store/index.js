/* eslint-disable no-dupe-keys */
import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

// import modules from './modules'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    // State
    state: {
      // When the user selects one or more element on the art board it will show here and update the interface depending on the users selection
      focus: [{}, {}, {}],
      // A document to the program is a zip file
      // Our program should work in the unzipped or even compressed space to help keep the user optimised
      // The document consists of artboards, artflow and attached files
      document: {
        // Documents can have multiple people connected
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
            }
          }
        ],
        // Each object is an artboard and a document can have multiple art boards
        artboards: [
          { // This is an artboard object
            id: 1,
            name: 'Label name',
            group: 'name of group',
            thumbnail: 'path/to/thumbnail',
            // Position of art board in the slide show
            slideShowPosition: 20,
            // History API
            // This is the history of the entire document that will be flat mapped to the layer in the document
            history: {
              0: [
                // Each object is a step in history
                {x: 20, y: 300}
              ],
              // Layer 1 has 3 steps in history adjustment
              1: [{}, {}, {}],
              2.0: [{}, {}],
              2.1: [{}, {}],
              2.2: [{}, {}],
              2.3: [{}, {}],
              2.4: [{}, {}],
              2.5: [{}, {}],
              2.6: [{}, {}],
              2.7: [{}, {}],
              2.8: [{}, {}],
              2.9: [{}, {}],
              2.10: [{}, {}]
            },
            // Full doc history which will be weakly mapped which will keep the cmd+z or ctrl+z history of the document with memory pointers
            documentHistory: [
              // Each one is a memory reference
              this.state.history[1][0],
              this.state.history[1][2],
              this.state.history[2.9][1]
            ],
            // Who is connected is in the array
            connected: [
              {
                // User object showing who is connected to the art board
              }
            ],
            // Art board layers
            // Layers are flat mapped by decimal points
            // Every '.0' decimal point there is a group
            // Sorting algorithim is in the docs
            layers: {
              0: {
                // The first zero object is used by the program to define repeatable dynamic data
              },
              1: {
                // This object could be either a text, 3d, Audio visualisation, Vector, Video, Image or Code Project, Database value, Database visualizer, Spreadsheet visualizer
              },
              2.0: {
                // This decimal ends in a zero therefor it is a group object
                groupName: 'Basic object types',
                // You can apply masks & filters to this layer
                masks: [],
                filters: {
                  // Filter type object
                  name: 'Blur',
                  value: 22,
                  masks: []
                }
              },
              2.1: {
                // First <text> element in the <basic object types>
                // Lets start with text
                text: 'Text info here',
                width: 500,
                height: 700,
                columns: 3,
                spacing: 40,
                lineHeight: 21,
                letterSpacing: 20,
                clippingMask: []
              },
              2.2: {
                // Second <3d> element in the <basic object types>
                // Name of 3D scene identifing the canvas
                scene: '',
                // All 3D type objects should ideally be in the open OBJ format or converted to
                objects: [
                  // Each object in the array is either an <Object, Audio Visulisation, Video Texture or Light>
                  {
                    vectorData: [1, 0, 2, 0, 30, 40, 20, 10, 20],
                    material: {},
                    position: { x: 0, y: 0, z: 0 }
                  },
                  // There can also be audio visualization in the 3D space
                  {
                    // Audio type object
                    // Third <Audio Visualisation> element in the <basic object types>
                    audioFile: 'path/to/audio/file',
                    // There will be some audio preset values that the user can choose from
                    preset: 'presetName',
                    // There will be an option for the user to create there own visualizer in code and also copy and edit the preset
                    customPreset: '<code to product visualizer>'
                  }
                ]
              },
              2.3: {
                // Third <Audio Visualisation> element in the <basic object types>
                audioFile: 'path/to/audio/file',
                // There will be some audio preset values that the user can choose from
                preset: 'presetName',
                // There will be an option for the user to create there own visualizer in code and also copy and edit the preset
                customPreset: '<code to product visualizer>',
                masks: [],
                filters: []
              },
              2.4: {
                // Fourth <Vector> element in the <basic object types>
                // Array of vector info for path that will be used in the threeJS API
                pathInfo: [],
                // Array of vecotrs for the actual exported SVG path
                svgPath: [],
                // Filters can be applied to all SVG elements as it already is in the document
                masks: [],
                filters: []
              },
              2.5: {
                // Fifth <Video> element in the <basic object types>
                // Keep the original video file
                originalVideo: 'path/to/original/video.vid',
                // Filters can be appiled on the art board level or in video editor, these are non descrutive filters because we always keep the original
                masks: [],
                filters: [],
                // Poser image is used for what frame is displayed at that time (1 minute 22 seconds) when embedded on an art board
                poserImage: '1:22'
              },
              2.6: {
                // Sixth <Image> element in the <basic object types>
                // We keep the original image to make sure we can always remove filters as we go
                // Webp offers the best compression
                originalImage: 'path/to/original/image.webp',
                // None distructive filters
                filters: []
              },
              2.7: {
                // Seventh <Code Project> element in the <basic object types>
                // The path will be read into the application and edited from there
                workspace: 'path/to/workspace',
                exportedCode: '<code for canvas, audio visualizer>'
              },
              2.8: {
                // Seventh <Database visulaizer> element in the <basic object types>
                // Data
                data: {},
                // The connection object defines the connection data and type for blank canvas
                connection: {
                  type: 'oracle',
                  host: 'localhost:3000',
                  socket: ':90'
                },
                // The schema holds all the tables and their relationships
                schema: [
                  // Each object is a schema
                  {
                    tableName: 'Table Name',
                    // Relationships defined as an array of strings or objects, I haven't decided just yet
                    relations: [
                      'TO `Table Users`'
                    ],
                    fields: [
                      // Each object is a field
                      {
                        fieldName: 'Field Name',
                        dataType: 'varchar255'
                      }
                    ]
                  }
                ]
              },
              2.9: {
                // Data is the data object refercening all the table information for a visual chart
                data: {},
                // There will be some database preset values that the user can choose from
                // This preset is defined code for visualisation
                preset: 'presetName',
                // There will be an option for the user to create there own visualizer in code and also copy and edit the preset
                customPreset: '<code to product visualizer>',
                // Seventh <Database Visualizer> element in the <basic object types>
                connection: {
                  type: 'oracle',
                  host: 'localhost:3000',
                  socket: ':90'
                },
                schema: [
                  // Each object is a schema
                  {
                    tableName: 'Table Name',
                    // Relationships defined as an array of strings or objects, I haven't decided just yet
                    relations: [
                      'TO `Table Users`'
                    ],
                    fields: [
                      // Each object is a field
                      {
                        fieldName: 'Field Name',
                        dataType: 'varchar255'
                      }
                    ]
                  }
                ]
              },
              // eslint-disable-next-line no-dupe-keys
              2.10: {
                // Seventh <Spreadsheet Visualizer> element in the <basic object types>
                spreadsheetPath: 'link/to/spreadsheet.csv',
                // Data is referencing the cellular data that the spreadsheet will represent
                data: {}
              },
              // Example of deeply nested objects
              '3': { /* A layer */ },
              '4.0': { /* A Group */ },
              '4.1': { /* A layer in group */ },
              '4.2.0': { /* Is a group */ },
              '4.2.1': { /* Is a layer in group 3.1.0 */ },
              '4.2.2': { /* Is a layer in group 3.1.0 */ },
              '4.2.3.0': { /* Is a group in group 3.1.0 */ },
              '4.2.3.1': { /* Is a layer in group 3.1.2.0 */ },
              '4.2.3.2': { /* Is a layer in group 3.1.2.0 */ },
              '4.2.3.3': { /* Is a layer in group 3.1.2.0 */ }
            }
          }
        ],
        // Art flow consists of art boards that are nested within a document
        // Each object is the flow
        artflow: [
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
        ],
        // Attached files
        // Attached files need to be in their own environment so we can allow connectivity
        // Files will be sorted by their constructor
        attachedFiles: [
          {
            // Video constructor
            // This is to the video project that conatains all JSON data relating to the timeline in the software
            path: 'path/to/file/video.vid',
            // Multiple users can be connected to the video space
            connected: [
              {
                // Each object is a user
              }
            ],
            // AFTER THIS LINE WILL BE THE DATA IN A JSON FILE
            assets: [
              // Each object is either an image, video, spreadsheet, database or audio visualization, Code canvas and all other types
              // A video project is an art board and therefore will be treated as one
              // All assets will have none distructive filters
              {
                // Audio, video, spreadsheet, database or audio visualization, Code canvas
                filters: []
              }
            ]
          },
          {
            // Audio constructor,
            connected: [
              {
                // Each object is a person that is connected
              }
            ],
            assets: [
              // Each object will be an audio
            ]
          },
          {
            // Spreadsheet constructor,
            connected: [
              {
                // Each object is a person that is connected
              }
            ],
            sheets: [
              {
                // Each object is a spreadsheet
                // Each spreadsheet has data data
                data: {}
              }
            ]
          },
          {
            // Database is the data object referncing all the table information for a visual chart
            // Connection info for database
            connection: {
              type: 'oracle',
              host: 'localhost:3000',
              socket: ':90'
            },
            // Design of database
            schema: [
              // Each object is a schema
              {
                tableName: 'Table Name',
                // Relationships defined as an array of strings or objects, I haven't decided just yet
                relations: [
                  'TO `Table Users`'
                ],
                fields: [
                  // Each object is a field
                  {
                    fieldName: 'Field Name',
                    dataType: 'varchar255'
                  }
                ]
              }
            ],
            // Data holds the current information of data for a selected table or query in the database
            // What ever data is focused on will be controlled by the space rendered
            data: {}
          }
        ]
      }
    },
    // Mutations
    mutations: {},
    // modules,
    plugins: [
      createPersistedState(),
      createSharedMutations()
    ],
    strict: process.env.NODE_ENV !== 'production'
  })
}
export default createStore
