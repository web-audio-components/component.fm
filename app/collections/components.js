var config = require('../config');

module.exports = Backbone.Collection.extend({
  model: require('../models/component'),
  url: config.apiURL + 'components',
  initialize: function () {
  }
});
