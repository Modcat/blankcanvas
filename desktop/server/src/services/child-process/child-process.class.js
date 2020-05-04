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

    console.log(terminal)
    
    let stdout = terminal
    .stdout
    .on('data', function(data) {
      // Send this information to the authenticated users channel
      this.patch(id, { test: `${data}` })
    }.bind(this));
    
    // terminal
    // .stderr
    // .on('data', (data) => {
    //   // Send this information to the authenticated users channel
    //   this
    //   .publish('updated', data => {
    //     return app.channel('authenticated').send({
    //       output: `${data}`
    //     });
    //   });
    // });

    return stdout
  }

  async patch(id, params) {
    return { id, params }
  }

  async remove (id, params) {
    this.terminals.splice( id, 1 )
    return { id: id };
  }
};
