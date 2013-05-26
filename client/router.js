var when = require('./lib/when');
var Components = require('./collections/components');
var ListView = require('./views/list');
var ComponentView = require('./views/component');

module.exports = Backbone.Router.extend({

  routes: {
    '': 'home',
    'components/:owner/:module': 'component'
  },

  initialize: function () {
    var router = this;
    var deferred = when.defer();
    this.initialized = deferred.promise;
    this.components = new Components();

    this.components.fetch({
      success: deferred.resolve,
      error: deferred.reject
    });
  },

  clearView: function () {
    if (this.view && this.view.destroy) {
      this.view.destroy();
    }
  },

  setView: function (view) {
    this.clearView();
    this.initialized.then(function () {
      console.log(view);
      $('#main').html(view.render().el);
    });
    this.view = view;
  },

  home: function () {
    if (!this.listView) {
      this.listView = new ListView({
        components: this.components
      });
    }
    this.setView(this.listView);
  },

  component: function (owner, module) {
    var router = this;
    this.initialized.then(function () {
      var component = router.components.where({ repo: owner + '/' + module })[0];
      var view = new ComponentView({
        component: component,
        components: router.components
      });
      router.setView(view);
    });
  }
});
