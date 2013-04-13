
(function () {

  var Component = require('./modules/component');

  module.exports = function (app) {

    var Router = Backbone.Router.extend({

      routes: {
        '': 'index'
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
        // Display a list of all components.
        app.activeView = new Component.Views.List({
          collection: app.components
        });
        // $(document).append(app.activeView.render().$el);
        $('#content').append(app.activeView.render().$el);
      }

    });

    return new Router();

  };

})();
