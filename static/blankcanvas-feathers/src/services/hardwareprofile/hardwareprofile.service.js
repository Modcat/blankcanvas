// Initializes the `hardwareprofile` service on path `/hardwareprofile`
const { Hardwareprofile } = require('./hardwareprofile.class');
const createModel = require('../../models/hardwareprofile.model');
const hooks = require('./hardwareprofile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/hardwareprofile', new Hardwareprofile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('hardwareprofile');

  service.hooks(hooks);
};
