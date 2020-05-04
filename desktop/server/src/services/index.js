const users = require('./users/users.service.js')
const childProcess = require('./child-process/child-process.service.js');
const git = require('./git/git.service.js');
const fonts = require('./fonts/fonts.service.js');
const profile = require('./profile/profile.service.js');
const messages = require('./messages/messages.service.js');
const images = require('./images/images.service.js');
const permissions = require('./permissions/permissions.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(childProcess);
  app.configure(git);
  app.configure(fonts);
  app.configure(profile);
  app.configure(messages);
  app.configure(images);
  app.configure(permissions);
}
