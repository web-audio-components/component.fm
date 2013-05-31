var View = require('./view');
var templates = require('../lib/templates');

module.exports = View.extend({
  name: 'content',

  initialize: function (options) {
    this.template = templates[options.template];
  }
});
