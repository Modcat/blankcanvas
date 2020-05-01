const ChildProcessCLI = require('child_process')

exports.ChildProcess = class ChildProcess {
  constructor (options, app) {
    this.options = options || {};
    this.terminals = [];
    this.app = app
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    this.terminals.push(ChildProcessCLI)

    // Send action to authenticated users channel
    this
    .publish('created', data => {
      return app
        .channel('authenticated')
        .send(`Terminal ${this.terminals.length}: ${data.spawnfile}`);
    });

    return data;
  }

  async update (id, data, params) {

    let terminal = this.terminals[id]
    .spawn( data.cmd, { shell: true, cwd: data.cwd } )
    
    terminal
    .stdout
    .on('data', (data) => {
      // Send this information to the authenticated users channel
      this
      .publish('updated', data => {
        return app.channel('authenticated').send({
          output: `${data}`
        });
      });
    });
    
    terminal
    .stderr
    .on('data', (data) => {
      // Send this information to the authenticated users channel
      this
      .publish('updated', data => {
        return app.channel('authenticated').send({
          output: `${data}`
        });
      });
    });

    return terminal
  }

  async remove (id, params) {
    this.terminals.splice( id, 1 )
    return { id };
  }
};
