var Router = require('./router');
module.exports = (function () {
  var app = {};
  app.router = new Router();
//  Backbone.history.start({ pushState: true });
  Backbone.history.start({ root: '/component.fm/public' });
  return app;
})();
