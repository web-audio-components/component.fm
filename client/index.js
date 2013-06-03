var Router = require('./router');
var config = require('./config');

// Set up history integration with GA
require('./lib/analytics');

module.exports = (function () {
  var app = {};
  app.router = new Router();
  return app;
})();
