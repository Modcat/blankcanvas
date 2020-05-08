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

    // Check to see if file exists (this means we can copy the file instead of uploading)
    if (data.url && this.fs.existsSync(data.url))
    {
      // Then copy the image, video or audio
      if ( acceptedFormats.indexOf(data.url.split('.').pop()) )
      {
        return this.execSync( `mv -R ${data.url} ${app.service('save').appDirectory}/${data.id}/files/${data.url.split('/').pop()}` )
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
      this.fs.writeFile(
        `${appDirectory}/${data.blankcanvasID}/files/${data.filename}`,
        data.uri,
        'binary',
        function(error) {
          // Throw error if exists
          if (error) throw error
          // Else send patch update
          this
          .update(0, { status: 200, filename: data.filename })
        }.bind(this)
      )

      // Return writing file sucess
      return this.fs.writeFile
    }
  }

  // Update is used to replace an old file
  async update (id, data, params) {
    return data;
  }

  // Patch is used to send success messages
  async patch (id, data, params) {
    return data;
  }

  async remove (id, params) {
    if (this.fs.existsSync(params.url))
    {
      this.execSync(`rm -RF ${params.url}`)
    }
    return { deleted: params.url };
  }
};
