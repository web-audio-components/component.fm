;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){

(function () {

  var app = {
    root: '/',
    api: 'http://api.component.fm/'
  };

  app.router = require('./router')(app);
  Backbone.history.start({ pushState: true, root: app.root });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a[href]:not([data-bypass])", function(evt) {
    // Get the absolute anchor href.
    var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
    // Get the absolute root.
    var root = location.protocol + "//" + location.host + app.root;

    // Ensure the root is part of the anchor href, meaning it's relative.
    if (href.prop.slice(0, root.length) === root) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.  The fragment is sliced from the root.
      Backbone.history.navigate(href.attr, true);
    }
  });

})();

},{"./router":2}],2:[function(require,module,exports){

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
        app.activeView.render();
      }

    });

    return new Router();

  };

})();

},{"./modules/component":3}],3:[function(require,module,exports){

(function () {

  var Component = {};

  Component.Views = {};
  Component.Model = Backbone.Model.extend({});
  Component.Collection = Backbone.Collection.extend({
    model: Component.Model,
    url: 'http://api.component.fm/components'
  });

  Component.Views.List = Backbone.View.extend({

    render: function () {
      this.collection.each(function (model) {
        console.log(model);
      });
    }

  });

  module.exports = Component;

})();

},{}]},{},[1])
;