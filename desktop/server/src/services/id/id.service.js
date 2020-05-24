// Initializes the `permissions` service on path `/permissions`
const { Permissions } = require('./id');
const createModel = require('../../models/id.model');
const hooks = require('./id.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/id', new Id(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('id');

  service.hooks(hooks);
};
