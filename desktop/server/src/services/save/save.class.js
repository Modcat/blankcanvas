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

  // Create eill opening existing files or creating a new file

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    // Save each directory currently opened

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
    }
    else
    {
      // Create files in app directory

      // Zip directory and save at URL location

      // Return JSON data
    }

    return data;
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
    return { id };
  }
};
