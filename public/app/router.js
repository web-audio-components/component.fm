
(function () {

  var Router = Backbone.Router.extend({

    routes: {
      '': 'index'
    },

    index: function () {
      alert('yay');
    }

  });

  module.exports = Router;

})();
