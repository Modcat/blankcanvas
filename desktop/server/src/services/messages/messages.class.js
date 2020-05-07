/* eslint-disable no-unused-vars */
exports.Messages = class Messages {
  constructor (options) {
    this.options = options || { maxHistory: 30 };
    this.messages = []
  }
  
  async create (data, params) {
    
    this.messages.unshift(data)

    if (this.messages.length > this.options.maxHistory) {
      this.messages.pop()
    }

    return data;
  }

  async get (id, params) {
    return this.messages[id]
  } 
}
