var when = require('./lib/when');
var Components = require('./collections/components');
var ListView = require('./views/list');
var ComponentView = require('./views/component');
var ContentView = require('./views/content');

module.exports = Backbone.Router.extend({

  routes: {
    '': 'home',
    'search/:query': 'query',
    'components/:owner/:module': 'component',
    'about': 'about',
    'creating': 'creating'
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

    this.initialized.then(null, function (err) {
      console.error('Could not fetch components');
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
      $('#main').html(view.render().el);
    });
    this.view = view;
  },

  home: function () {
    this.setView(new ListView({
      components: this.components
    }));
  },

  query: function (query) {
    if (this.view && this.view.name === 'list')
      this.view.setQuery(query);
    else {
      this.home();
      this.initialized.then(function () {
        this.view.setQuery(query);
      }.bind(this));
    }
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
  },

  about: function () {
    this.setView(new ContentView ({
      template: 'about'
    }));
  },

  creating: function () {
    this.setView(new ContentView ({
      template: 'creating'
    }));
  }
});
