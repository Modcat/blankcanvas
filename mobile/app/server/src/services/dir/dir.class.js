/* eslint-disable no-unused-vars */
exports.Dir = class Dir {
  constructor (options) {
    this.options = options || {}
    this.fs = require('fs')
    this.existsSync = require('child_process').existsSync
    this.os = require('process').platform,
    this.watch = require('chokidar').watch,
    this.watchingDirectories = []
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    if (params.watch)
    {
      // Setup watcher
      const watcher = this.watch(
        data.url,
        { ignored: /^\./, persistent: true, awaitWriteFinish: true }
      )

      const watcherIndex = this.watchingDirectories.length

      this.watchingDirectories.push(watcher)

      // Events
      watcher
        .on('add',    function(path) {
          this.patch(watcherIndex, { action: 'add', watcher })
        }.bind(this))
        .on('change', function(path) {
          this.patch(watcherIndex, { action: 'change', watcher })
        }.bind(this))
        .on('unlink', function(path) {
          this.patch(watcherIndex, { action: 'unlink', watcher })
        }.bind(this))
        .on('error',  function(error) {
          this.patch(watcherIndex, { action: 'error', watcher })
        }.bind(this))
      
      return this.openDirectories.push(watcher)
    }
    else
    {
      return this.existsSync(`mkdir ${data.url}`)
    }
  }

  async find (params) {
    if ( this.fs.existsSync(params.url) )
    {
      return this.fs.readdirSync( params.url )
    }
    return { error: 404 }
  }

  // Rename a directory
  async update (id, data, params) {
    if (this.os === 'win32')
    {
      return this.existsSync(
        `rename ${data.oldDirectory.split('/').pop()} ${data.newDirectory.split('/').pop()}`,
        { cwd: data.oldDirectory.split('/'.pop().join('/')) }
      )
    }
    else
    {
      return this.existsSync(`mv -R ${data.oldDirectory} ${data.newDirectory}`)
    }
  }

  // Tiggered when directories content's is changed
  async patch (id, data, params) {
    return data;
  }

  // Delete a directory
  async remove (id, params) {
    return this.existsSync(`rm -RF ${params.url}`)
  }
};
