// Initializes the `public` service on path `/public`
const { Public } = require('./public.class');
const hooks = require('./public.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/public', new Public(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('public');

  service.hooks(hooks);
};
