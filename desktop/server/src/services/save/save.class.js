/* eslint-disable no-unused-vars */
exports.Save = class Save {
  constructor (options, app) {
    this.options = options || {};
    this.savedfiles = [],
    this.app = app
    // Define app directory foreach OS
    this.appDirectory = false
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
      os = require('process').platform,
      fstream = require('fstream'),
      tar = require('tar'),
      zlib = require('zlib'),
      fileIndex = this.savedfiles.length - 1

    // Define app directory

    if (!this.appDirectory)
    {
      switch(os) {
        case 'win32':
          this.appDirectory = '/blankcanvas/'
          break
        case 'linux':
          this.appDirectory = '/var/tmp/blankcanvas/'
          break
        case 'darwin':
          this.appDirectory = '~/Library/blankcanvas/'
          break
      }
    }

    // Create app directory if it doesn't exist

    if (fs.existsSync(this.appDirectory))
    {
      fs.mkdirSync(this.appDirectory)
    }

    // If file exists extract file else create file

    if ( fs.existsSync(data.url) )
    {
      // Extract file to app directory {namespaced by index}

      // return JSON data to app

      return {}
    }
    else
    {
      // Create files and directories in app directory
      fs.mkdirSync(`${this.appDirectory}/${fileIndex}/files`)

      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/artboards.js`)
      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/artflow.js`)
      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/director.js`)
      fs.writeFileSync(`${this.appDirectory}/${fileIndex}/attchedfiles.js`)

      // Zip directory and save at URL location
      fstream.Reader({ 'path': `${this.appDirectory}/${fileIndex}/`, 'type': 'Directory' })
        .pipe(tar.Pack())
        .pipe(zlib.Gzip())
        .pipe(fstream.Writer({ 'path': data.url }));

      // Return created message

      return { created: `${this.appDirectory}/${fileIndex}/` }
    }
  }

  async find (params) {
    return this.savedfiles;
  }

  async get (id, params) {
    return this.savedfiles[id] || { error: "Sorry no document found" }
  }

  // Update will save when a document is already opened
    // Optionally if bcg file it will push to the git repo

  async update (id, data, params) {
    // Save new data to files

    // Zip data and save to URL

    // Optional: push to git if .git directory exists
    return data;
  }

  // Remove is called when one closes the document or application

  async remove (id, params) {
    
    // Delete the directory specified

    // Set saved index to false
    this.savedfiles[id] = false

    return { id };
  }
};
