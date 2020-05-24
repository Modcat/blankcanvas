// Initializes the `permissions` service on path `/permissions`
const { Permissions } = require('./permissions.class');
const createModel = require('../../models/permissions.model');
const hooks = require('./permissions.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/permissions', new Permissions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('permissions');

  service.hooks(hooks);
};
