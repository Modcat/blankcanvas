/* eslint-disable no-unused-vars */
exports.Save = class Save {
  constructor (options, app) {
    this.options = options || {};
    this.savedfiles = [],
    this.app = app
  }

  async find (params) {
    return this.savedfiles;
  }

  async get (id, params) {
    return this.savedfiles[id] || { error: "Sorry no document found" }
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

    // Extract file / create file if it doesn't exist

    const fs = require('fs')
    const os = require('process').os

    if ( fs.existsSync(data.url) )
    {
      // Extract file to app directory {namespaced by index}

      // return JSON data to app

      return {}
    }
    else
    {
      // Create files in app directory

      // Zip directory and save at URL location

      // Return JSON data

      return {}
    }
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

    return { id };
  }
};
