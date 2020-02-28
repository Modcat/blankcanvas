/* eslint-disable no-console */
const app = require('./app');
const hostname = Object.values(require('os').networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address;
const port = app.get('port');
const server = app.listen(port, hostname);