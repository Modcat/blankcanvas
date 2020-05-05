// Initializes the `images` service on path `/images`
const { Files } = require('./files.class');
const createModel = require('../../models/files.model');
const hooks = require('./files.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/files', new Files(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('files');

  service.hooks(hooks);
};
