const fs = require('fs'),
{ execSync } = require('child_process')

/* eslint-disable no-unused-vars */
exports.Interfaces = class Interfaces {
  constructor (options) {
    this.options = options || {}
    this.interfaces = {}
    // Get all validators

    const tsFiles = fs.readdirSync('./src/services/interfaces/ts/')

    tsFiles.forEach(file => {
      // Define interface name
      const interfaceName = file.split('.').shift()

      // Read each file and convert to string

      // Create interface
      this.interfaces[ interfaceName ] = `{ a: string; b: number[]; }`
    })
  }

  async find (params) {
    return [];
  }
};
