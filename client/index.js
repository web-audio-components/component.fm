var Router = require('./router');
var config = require('./config');
var analytics = require('./lib/analytics');

module.exports = (function () {
  var app = {};
  app.router = new Router();
  analytics();
  return app;
})();
