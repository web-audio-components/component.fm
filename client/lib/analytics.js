var config = require('../config');

Backbone.history.loadUrl = _.wrap(
  Backbone.history.loadUrl, function (f) {
    var args = Array.prototype.slice.call(arguments, 1);
    var matched = f.apply(this, args);

    if (matched && _gaq) {
      _gaq.push([
        '_trackPageview',
        '/#' + this.fragment
      ]);
    }

    return matched;
  }
);

Backbone.history.start({ root: config.root });

module.exports = null;
