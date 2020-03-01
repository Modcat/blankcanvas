// Attached files
// Attached files need to be in their own environment so we can allow connectivity
// Files will be sorted by their constructor
export const state = () => ({
  attachedFiles: [
    {
      // Video constructor
      // This is to the video project that conatains all JSON data relating to the timeline in the software
      path: 'path/to/file/video.vid',
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
      tracks: [
        {
          name: 'name of track',
          audioSnippets: [
            {
              name: 'name of snippet',
              soundBytes: [],
              mappedInstrument: 'piano',
              instumentMode: 'name of mode',
              audioMapping: [
                { position: '1:22', length: 200, pitchCurve: ['array of bezier curve'], instruemtPosition: '20%' },
                { position: '1:33', length: 200, pitchCurve: ['array of bezier curve'], instruemtPosition: '20%' }
              ],
              // visual interface
              waveVisulizer: 'image of wave data',
              audioVisulizer: '3D swerl',
              codeVisualizer: 'code project for visualizer overriding the default',
              instrument3D: '3d object for instrument'
            }
          ]
        }
      ],
      assets: [
        // Each object will be an audio
      ]
    },
    {
      // Spreadsheet constructor,
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
})

export const actions = {
}

export const mutations = {
}
