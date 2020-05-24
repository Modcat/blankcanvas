/* eslint-disable no-unused-vars */
exports.Files = class Files {
  constructor (options, app) {
    this.options = options || {}
    this.fs = require('fs')
    this.execSync = require('child_process').execSync,
    this.app = app
  }

  async get (id, params) {
    if (this.fs.existsSync(data.url))
    {
      return { url: data.url }
    }
    else
    {
      return 'start download here'
    }
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    // Define accepted formats
    const acceptedFormats = [
      // Image formats
      'png', 'jpg', 'gif', 'webp', 'svg',
      // Video formats
      'webm', 'webp', 'avi', 'mp4',
      // Audio formats
      'mp3', 'ogg', 'wav'
    ]

    const appDirectory = await this.app.service('save').find({ appDirectory: true })

    // Check if existing project file (ensuring no overwritten files)
    if (!this.fs.existsSync(`${appDirectory}/${data.id}/files/${data.filename}`))
    {
      // Check to see if file exists (this means we can copy the file instead of uploading)
      if (data.url && this.fs.existsSync(data.url))
      {
        // Then copy the image, video or audio
        if ( acceptedFormats.indexOf(data.url.split('.').pop()) )
        {
          return this.execSync( `mv -R ${data.url} ${appDirectory}/${data.id}/files/${data.filename}` )
        }
      }
      else
      {
        // Write file process
        const appDirectory = 
          await this
          .app
          .service('save')
          .find({ appDirectory: true })

        // Return successfully written file
        return this
          .fs
          .writeFileSync(
            `${appDirectory}/${data.blankcanvasID}/files/${data.filename}`,
            data.uri,
            'binary'
          )
      }
    }
    else
    {
      throw error('Sorry file already exists')
    }
  }

  // Update is used to replace an old file
  async update (id, data) {
    // Get app directory
    const appDirectory = await this.app.service('save').find({ appDirectory: true })
    
    // Make sure the file exists first
    if (this.fs.existsSync(`${appDirectory}/${id}/files/${data.filename}`))
    {
      return this
        .fs
        .writeFileSync(
          `${appDirectory}/${id}/files/${data.filename}`,
          data.uri,
          'binary'
        )
    }
    throw error(`File doesn't exist, cannot update`)
  }

  async remove (id, params) {
    if (this.fs.existsSync(params.url))
    {
      const appDirectory = await this.app.service('save').find({ appDirectory: true })
      
      this.execSync(`rm ${appDirectory}/${id}/files/${params.filename}`)
      
      return { deleted: params.filename };
    }
    
    throw error('None existant file, cannot delete')
    
  }
};
