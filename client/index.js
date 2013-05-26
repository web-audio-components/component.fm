var Router = require('./router');
var config = require('./config');

module.exports = (function () {
  var app = {};
  app.router = new Router();
  Backbone.history.start({ root: config.root });

  return app;
})();
