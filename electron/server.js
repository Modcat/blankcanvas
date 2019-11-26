var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('./static/blankcanvas-nuxt/dist/')).listen(8080, '192.168.0.28', function(){
    console.log('Server running on 8080...');
});