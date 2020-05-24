// Initializes the `documents` service on path `/users`
const { Documents } = require('./documents.class')
const createModel = require('../../models/documents.model')
const hooks = require('./documents.hooks')

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  }

  // Initialize our service with any options it requires
  app.use('/documents', new Documents(options, app))

  // Get our initialized service so that we can register hooks
  const service = app.service('documents')

  service.hooks(hooks)
}
