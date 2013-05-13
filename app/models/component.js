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
