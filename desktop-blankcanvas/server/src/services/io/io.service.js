// Initializes the `io` service on path `/io`
const { Io } = require('./io.class');
const createModel = require('../../models/io.model');
const hooks = require('./io.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/io', new Io(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('io');

  service.hooks(hooks);
};
