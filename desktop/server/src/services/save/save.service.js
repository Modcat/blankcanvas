// Initializes the `save` service on path `/save`
const { Save } = require('./save.class');
const hooks = require('./save.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/save', new Save(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('save');

  service.hooks(hooks);
};
