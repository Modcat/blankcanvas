// Initializes the `opendir` service on path `/opendir`
const { Opendir } = require('./opendir.class');
const hooks = require('./opendir.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/opendir', new Opendir(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('opendir');

  service.hooks(hooks);
};
