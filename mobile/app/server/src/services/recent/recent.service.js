// Initializes the `recent` service on path `/recent`
const { Recent } = require('./recent.class');
const createModel = require('../../models/recent.model');
const hooks = require('./recent.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/recent', new Recent(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recent');

  service.hooks(hooks);
};
