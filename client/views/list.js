var View = require('./view');

module.exports = View.extend({
  name: 'list',
  template: templates.list,
  events: {
    'keyup .search': 'handleQuery'
  },

  initialize: function (options) {
    this.components = options.components;
  },

  getRenderData: function () {
    return { components: this.components.toJSON() };
  },

  filter: function (query) {
    this.components.each(function (component) {
      this.$('tr[data-component="' + component.get('repo') + '"]')[
        component.matches(query) ? 'show' : 'hide'
      ]();
    }.bind(this));
  },

  handleQuery: function (e) {
    var query = $(e.target).val();
    this.filter(query);
  }

});
