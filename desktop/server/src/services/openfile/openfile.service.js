// Initializes the `openfile` service on path `/openfile`
const { Openfile } = require('./openfile.class');
const hooks = require('./openfile.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/openfile', new Openfile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('openfile');

  service.hooks(hooks);
};
