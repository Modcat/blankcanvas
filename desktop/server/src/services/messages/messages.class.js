/* eslint-disable no-unused-vars */
exports.Messages = class Messages {
  constructor (options) {
    this.options = options || { maxHistory: 30 }
    this.messages = []
  }
  
  async create (data, params) {

    // Check object interface
    
    this.messages.unshift(data)

    return data;
  }

  async remove(id, params) {
    // ID is not in use

    // Params saved date and time are more important
    return {  }
  }

  async get (id, params) {
    return this.messages[id]
  }
}
