
(function () {

  var Component = require('./modules/component');

  module.exports = function (app) {

    var Router = Backbone.Router.extend({

      routes: {
        '': 'index',
        ':user/:repo': 'details'
      },

      index: function index () {
        // On first page load, query the components from the service
        // and cache them on the app object.
        if (!app.components) {
          app.components = new Component.Collection({
            url: app.api + 'components'
          });
          return app.components.fetch({ success: index });
        }
        // Should do a check here to remove and unbind activeView if previously
        // defined.

        // Display a list of all components.
        app.activeView = new Component.Views.List({
          collection: app.components
        });
        $('#content').append(app.activeView.render().$el);
      },

      details: function (user, repo) {
        if (app.activeView) {
          app.activeView.remove();
        }
        var component = app.components.findWhere({
          name: repo,
          repo: user + '/' + repo
        });
        app.activeView = new Component.Views.Detail({
          model: component
        });
        app.activeView.render();
      }

    });

    return new Router();

  };

})();
