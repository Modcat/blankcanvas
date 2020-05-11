// Initializes the `interfaces` service on path `/interfaces`
const { Interfaces } = require('./interfaces.class');
const hooks = require('./interfaces.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/interfaces', new Interfaces(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('interfaces');

  service.hooks(hooks);
};
