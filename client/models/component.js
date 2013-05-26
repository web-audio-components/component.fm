var config = require('../config');
var when = require('../lib/when');

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

  injectBuild : function () {
    var
      deferred = when.defer(),
      url = config.apiURL + 'components/' + this.get('repo') + '/build.js',
      el = document.createElement('script');
    el.src = url;
    el.type = 'text/javascript';
    el.onload = deferred.resolve;
    document.getElementsByTagName('head')[0].appendChild(el);
    return deferred.promise;
  }
});
