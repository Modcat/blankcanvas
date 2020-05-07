/* eslint-disable no-unused-vars */
exports.Save = class Save {
  constructor (options, app) {
    this.options = options || {};
    this.savedfiles = [],
    this.app = app
    // Define app directory foreach OS
    this.appDirectory = false,
    this.os = require('process').platform
  }

  // Create will open existing files or creating a new file
  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    // Push file to savedfiles array / open documents
    if (this.savedfiles.indexOf(data))
    {
      this.savedfiles.push(data.url)
    }

    // Update recent documents
    this
    .app
    .service('recent')
    .create({ url: data.url })

    // Modules
    const fs = require('fs'),
      zip = require('zip-dir'),
      unzipper = require('unzipper'),
      { execSync } = require('child_process'),
      fileIndex = this.savedfiles.length - 1

    // Define app directory
    if (!this.appDirectory)
    {
      switch(this.os) {
        case 'win32':
          this.appDirectory = 'C:\\blankcanvas'
          break
        case 'linux':
          this.appDirectory = '/var/tmp/blankcanvas'
          break
        case 'darwin':
          this.appDirectory = '~/Library/blankcanvas'
          break
      }
    }

    // Create app directory if it doesn't exist
    if (!fs.existsSync(this.appDirectory))
    {
      fs.mkdirSync(this.appDirectory)
      // Create a global notes app
      fs.writeFileSync(`${this.appDirectory}/notes.json`)
    }

    // If file exists extract file else create file
    if ( fs.existsSync(`${data.url}/${data.fileName}`) )
    {
      // Extract file to app directory {namespaced by index}
      fs
      .createReadStream(`${data.url}/${data.fileName}`, { emitClose: true })
      .pipe( unzipper.Extract({ path: `${this.appDirectory}/${fileIndex}` }) )
      
      return {
        created: `${this.appDirectory}/${fileIndex}/`,
        fileIndex: `${fileIndex}`
      }
    }
    else
    {
      // Create files and directories in app directory
      fs.mkdirSync(`${this.appDirectory}/${fileIndex}`)
      fs.mkdirSync(`${this.appDirectory}/${fileIndex}/files`)

      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/document.json`)
      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/notes.json`)

      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/files/test.json`)

      // Zip directory and save at URL location
      zip(
        `${this.appDirectory}/${fileIndex}`,
        { saveTo: `${data.url}${data.fileName}` },
        function (err, buffer) {
          this.patch(fileIndex, { wroteTo: `${data.url}${data.fileName}` })
      }.bind(this));

      // Return created message
      return {
        created: `${this.appDirectory}/${fileIndex}/`,
        fileIndex: `${fileIndex}`
      }
    }
  }

  async find (params) {
    return this.savedfiles;
  }

  async get (id, params) {
    const fs = require('fs'),
     json = fs.readFileSync(`${this.appDirectory}/${id}/document.json`, 'utf8')
    
    return json || { error: "Sorry no document found" }
  }

  // Update will save when a document is already opened
    // Optionally if bcg file it will push to the git repo
  async update (id, data, params) {
    // Save new data (nuxt store) to document.json
    fs.writeFile(
      `${this.appDirectory}/${id}/document.json`,
      data.document,
      { encoding: 'utf8'},
      function() {
        this
        .patch(id, `${this.appDirectory}/${id}/document.json` )
      }.bind(this)
    )

    // Zip data and save to URL
    const fs = require('fs'),
    zip = require('zip-dir')

    zip(
      `${this.appDirectory}/${id}`,
      { saveTo: `${data.url}${data.fileName}` },
      function (err, buffer) {
        this.patch(id, { wroteTo: `${data.url}${data.fileName}` })
    }.bind(this));
    
    // Optional: push to git if .git directory exists
    return data;
  }

  // Patch is used to send message upon successful writing of files
  async patch (id, data, params) {
    return { id, data }
  }

  // Remove is called when one closes the document or application
  async remove (id, params) {
    
    // Delete the directory specified
    if (os === 'win32')
    {
      execSync(`del -RF ${this.appDirectory}/${id}`)
    }
    else
    {
      execSync(`rm -RF ${this.appDirectory}/${id}`)
    }

    // Set saved index to false
    this.savedfiles[id] = false

    return { id };
  }
};
