// Director mode
const state = {
  // Mapped environment
  environment: {
    // A Mapped environment allows VR, AR, Drones and more devices to be mapped to one space
    gridSize: [],
    gridHeight: [],
    gridSegments: []
  },
  // All devices for direction will be listed in this object
  devices: {
    UUID: {
      // Key is the UUID or name of the device
      type: ['drone', 'Screen', 'Holographic', 'lightArray', '3DCamera', 'Phone or table AR device cameras IP address'],
      // For drones, screens and holographics you can attach an art board, audio visualizer or video file
      // This will be under attached files and linked to an audio project that has an associated graphic
      attachedFile: ['Audio', 'ArtBoard', 'video'],
      // Camera only
      cameras: [ // Array of cameras
        {
          // Camera UUID to identify camera (drone, DSLR, video camcorda, VR headset, AR device etc...)
          id: 'Camera UUID',
          // Different name to identify the camera
          alias: 'Alias'
          // Paths for camera to follow in the mapped environment
        }
      ],
      // For drones and cameras
      flightPaths: [
        {
          // Each object is a path
          path: [112, 203, 30],
          rotationCords: [
            ['x', 'y', 'z', 'duration']
          ],
          startTime: '1:22',
          activeDuration: 200
        }
      ],
      // Light array only
      lightPatterns: [ // This array is a collection of light patterns
        [ // This array is one pattern
          { /* This object will define the lazer light pattern or array of normal light patterns including the start and duration of the light pattern */ }
        ],
        [ // Light pattern
          { /* Light object */ },
          { /* Light object */ },
          { /* Light object */ }
        ]
      ]
    }
  },
  // All assets exported from each media device
  exportAssets: {
    // Exported assets or video recording of all the cameras, screens, holograms and more
    assets: [],
    // Streamed cut
    postProduction: {
      // This will be a video project object
    },
    // This object will contain the final directors cut or post production
    // The assets can be used in this final cut to make the video direction perfect
    finalCut: {
      // This will be a video project object
    }
  }
}

const actions = {
}

const mutations = {
}

export default {
  state,
  actions,
  mutations
}