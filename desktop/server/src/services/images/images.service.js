// Initializes the `images` service on path `/images`
const { Images } = require('./images.class');
const createModel = require('../../models/images.model');
const hooks = require('./images.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/images', new Images(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('images');

  service.hooks(hooks);
};
