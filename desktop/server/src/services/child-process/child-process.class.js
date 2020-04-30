const { spawn } = require('child_process')

exports.ChildProcess = class ChildProcess {
  constructor (options) {
    this.options = options || {}
  }

  async update (id, data, params) {
    return data;
  }
};
