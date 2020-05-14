// Initializes the `documents` service on path `/users`
const { E2E } = require('./e2e.class')
const createModel = require('../../models/e2e.model')
const hooks = require('./e2e.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/e2e', new E2E(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('e2e')

  service.hooks(hooks)
}
