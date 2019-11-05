const users = require('./users/users.service.js');
const permissions = require('./permissions/permissions.service.js');
const io = require('./io/io.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(permissions);
  app.configure(io);
};
