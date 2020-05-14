// Initializes the `documents` service on path `/users`
const { Connections } = require('./connections.class')
const createModel = require('../../models/connections.model')
const hooks = require('./connections.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/connections', new Connections(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('connections')

  service.hooks(hooks)
}
