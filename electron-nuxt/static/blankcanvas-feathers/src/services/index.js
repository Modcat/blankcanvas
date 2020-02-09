const users = require('./users/users.service.js.js');
const permissions = require('./permissions/permissions.service.js.js');
const io = require('./io/io.service.js.js');
const hardwareprofile = require('./hardwareprofile/hardwareprofile.service.js.js');
const public = require('./public/public.service.js.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(permissions);
  app.configure(io);
  app.configure(hardwareprofile);
  app.configure(public);
};
