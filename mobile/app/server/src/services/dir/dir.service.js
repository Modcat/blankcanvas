// Initializes the `dir` service on path `/dir`
const { Dir } = require('./dir.class');
const hooks = require('./dir.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/dir', new Dir(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dir');

  service.hooks(hooks);
};
