// Initializes the `profile` service on path `/profile`
const { Profile } = require('./profile.class');
const createModel = require('../../models/profile.model');
const hooks = require('./profile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/profile', new Profile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('profile');

  service.hooks(hooks);
};
