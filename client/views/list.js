var View = require('./view');

module.exports = View.extend({
  name: 'list',
  template: templates.list,

  initialize: function (options) {
    this.components = options.components;
  },

  getRenderData: function () {
    return { components: this.components.toJSON() };
  },

  afterRender: function () {
    $('#main').html(this.$el);
  }
});
