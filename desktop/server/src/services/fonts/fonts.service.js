// Initializes the `fonts` service on path `/fonts`
const { Fonts } = require('./fonts.class');
const hooks = require('./fonts.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/fonts', new Fonts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('fonts');

  service.hooks(hooks);
};
