;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
module.exports = (function () {
  var app = {};
  app.views = {};
  app.collections = {};

  var Components = require('./collections/components');
  var ListView = require('./views/list');

//  app.router = require('./router');
  
  app.collections.components = new Components();
  app.views.list = new ListView({
    components: app.collections.components
  });

  // Initialize
  app.collections.components.fetch({
    success: function () {
               console.log('success!');
                app.views.list.render(); 
             }//app.views.list.render.bind(app.views.list)
  });

  Backbone.history.start({ pushState: true });
  
  return app;
})();

},{"./collections/components":2,"./views/list":3}],2:[function(require,module,exports){
var config = require('../config');

module.exports = Backbone.Collection.extend({
  model: require('../models/component'),
  url: config.apiURL + 'components',
  initialize: function () {
  }
});

},{"../config":4,"../models/component":5}],3:[function(require,module,exports){
var View = require('./view');

module.exports = View.extend({
  name: 'list',
  template: templates.list,

  initialize: function (options) {
    this.components = options.components;
  },

  getRenderData: function () {
    return { components: this.components.toJSON() };
  }
});

},{"./view":6}],4:[function(require,module,exports){
var config = {

}

var development = {
  // TODO set up mocks for this
  apiURL: 'http://api.component.fm/'
}

var production = {
  apiURL: 'http://api.component.fm/'
}

module.exports = _.extend(config, ENV === 'development' ? development : production);

},{}],6:[function(require,module,exports){
module.exports = Backbone.View.extend({
  render: function () {
            console.log('render');
    // Generate template based off of name if does not yet exist
    this.template = this.template ||
      Handlebars.template(templates[this.name]);

    var data = this.getRenderData ? this.getRenderData() : {};
    $('#' + this.name).html(this.$el.html(this.template(data)));
  }
});

},{}],5:[function(require,module,exports){
var config = require('../config');

module.exports = Backbone.Model.extend({
  initialize: function () {},
  matches: function (query) {
    var
      params = query.split(' '),
      valid = false,
      pkg = this;

    params = _.map(params, function (param) {
      return new RegExp(param, 'gi');
    });

    _.each(params, function (param) {
      if (
        pkg.get('description').match(param) ||
        pkg.get('name').match(param) ||
        _.any(pkg.get('keywords') || [], function (keyword) {
          return keyword.match(param);
        })
      ) {
        valid = true;
      }
    });

    return valid;
  },

  injectBuild : function (callback) {
    var
      url = config.apiURL + 'components/' + this.get('repo') + '/build.js',
      scriptEl = document.createElement('script');
    scriptEl.src = url;
    scriptEl.type = 'text/javascript';
    scriptEl.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(scriptEl);
  }
});

},{"../config":4}]},{},[1])
;