var Router = require('./router');
var config = require('./config');
var analytics = require('./lib/analytics');
var support = require('./lib/support');

module.exports = (function () {
  var app = {};
  app.router = new Router();
  analytics();
  support();
  return app;
})();
