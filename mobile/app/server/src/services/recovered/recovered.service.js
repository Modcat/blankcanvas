// Initializes the `recovered` service on path `/recovered`
const { Recovered } = require('./recovered.class');
const hooks = require('./recovered.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/recovered', new Recovered(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('recovered');

  service.hooks(hooks);
};
