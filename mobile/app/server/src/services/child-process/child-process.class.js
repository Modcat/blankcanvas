const ChildProcessCLI = require('child_process')

exports.ChildProcess = class ChildProcess {
  constructor (options) {
    this.options = options || {};
    this.terminals = [];
  }

  async create (data, params) {
    if (Array.isArray(data)) {
      return Promise.all(data.map(current => this.create(current, params)));
    }

    this.terminals.push({ id: this.terminals.length, bashHistory: [], ChildProcessCLI })

    return { id: this.terminals.length, bashHistory: [] };
  }

  async update (id, data, params) {

    let terminal = this
      .terminals
      .find(terminal => terminal.id == id)
      .ChildProcessCLI
      .spawn( data.cmd, { shell: true, cwd: data.cwd } )
    
    terminal
    .stdout
    .on('data', function(data) {
      this.patch(id, { output: `${data}` })
    }.bind(this));
    
    terminal
    .stderr
    .on('data', function(data) {
      this.patch(id, { error: `${data}` })
    }.bind(this));

    return { id, input: data }
  }

  async patch(id, params) {
    return { id, params }
  }

  async remove (id, params) {
    this.terminals.splice( id, 1 )
    return { id: id };
  }
};
