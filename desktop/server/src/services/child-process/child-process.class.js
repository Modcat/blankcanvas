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

    return data;
  }

  async update (id, data, params) {

    let terminal = this.terminals[id]
    .spawn( data.cmd, { shell: true, cwd: data.cwd } )

    // let terminal = this.terminals[id].exec(data.cmd, { shell: true, cwd: data.cwd })

    // console.log(terminal)
    
    // terminal
    // .stdout
    // .on('data', (data) => {
    //   return `stdout: ${data}`
    // });
    
    // terminal
    // .stderr
    // .on('data', (data) => {
    //   return `stderr: ${data}`
    // });
    
    // terminal.on('close', (code) => {
    //   return `child process exited with code ${code}`
    // });

    return terminal
  }

  async remove (id, params) {
    this.terminals.splice( id, 1 )
    return { id };
  }
};
