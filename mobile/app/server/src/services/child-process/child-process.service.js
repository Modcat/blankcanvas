// Initializes the `child_process` service on path `/child-process`
const { ChildProcess } = require('./child-process.class');
const hooks = require('./child-process.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/child-process', new ChildProcess(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('child-process');

  service.hooks(hooks);
};
