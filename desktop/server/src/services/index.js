const users = require('./users/users.service.js')
const childProcess = require('./child-process/child-process.service.js');
const git = require('./git/git.service.js');
const fonts = require('./fonts/fonts.service.js');
const profile = require('./profile/profile.service.js');
const messages = require('./messages/messages.service.js');
const files = require('./files/files.service.js');
const permissions = require('./permissions/permissions.service.js');
const save = require('./save/save.service.js');
const recent = require('./recent/recent.service.js');
const recovered = require('./recovered/recovered.service.js');
const openfile = require('./openfile/openfile.service.js');
const opendir = require('./opendir/opendir.service.js');
const files = require('./files/files.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(childProcess);
  app.configure(git);
  app.configure(fonts);
  app.configure(profile);
  app.configure(messages);
  app.configure(files);
  app.configure(permissions);
  app.configure(save);
  app.configure(recent);
  app.configure(recovered);
  app.configure(openfile);
  app.configure(opendir);
  app.configure(files);
}
