const fontList = require('font-list');

exports.Fonts = class Fonts {
  constructor (options) {
    this.options = options || {};
  }

  async create (data, params) {

    // Upon creation list all fonts installed on the root node
    
    data = fontList
      .getFonts()
      .then(fonts => {
        return fonts
          .map(font => {
            return font.replace(/\/|\\|"/gi,'')
          })
        return fonts
      })
      .catch(err => {
        return err
      })

    return data;
  }
};
