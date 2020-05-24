// Initializes the `git` service on path `/git`
const { Git } = require('./git.class');
const hooks = require('./git.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/git', new Git(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('git');

  service.hooks(hooks);
};
