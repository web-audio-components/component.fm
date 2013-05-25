var Router = require('./router');
module.exports = (function () {
  var app = {};
  app.router = new Router();
  Backbone.history.start({ pushState: true });
  return app;
})();
