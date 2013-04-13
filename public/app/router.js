
(function () {

  var Component = require('./modules/component');

  module.exports = function (app) {

    var Router = Backbone.Router.extend({

      initialize: function (options) {
        this.route('', _.wrap(this.index, this.middleware));
        this.route(':user/:repo', _.wrap(this.details, this.middleware));
      },

      middleware: function (route) {
        // Remove and unbind the active view from the DOM.
        if (app.activeView) {
          app.activeView.remove();
        }
        // Make sure the app is initialized with the component database
        if (!app.components) {
          app.components = new Component.Collection({
            url: app.api + 'components'
          });
          return app.components.fetch({
            success: route.bind(this)
          });
        }
        // Forward to the appropriate route
        return route.call(this);
      },

      index: function index () {
        app.activeView = new Component.Views.List({
          collection: app.components
        });
        $('#content').append(app.activeView.render().$el);
      },

      details: function (user, repo) {
        app.activeView = new Component.Views.Detail({
          model: app.components.findWhere({
            name: repo,
            repo: user + '/' + repo
          })
        });
        app.activeView.render();
      }

    });

    return new Router();

  };

})();
