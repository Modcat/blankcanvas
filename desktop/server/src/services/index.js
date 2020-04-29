const users = require('./users/users.service.js')
const childProcess = require('./child-process/child-process.service.js');
const git = require('./git/git.service.js');
const fonts = require('./fonts/fonts.service.js');
const fs = require('./fs/fs.service.js');
const profile = require('./profile/profile.service.js');
const messages = require('./messages/messages.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(childProcess);
  app.configure(git);
  app.configure(fonts);
  app.configure(fs);
  app.configure(profile);
  app.configure(messages);
}
