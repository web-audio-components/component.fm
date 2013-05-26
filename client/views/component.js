var View = require('./view');

module.exports = View.extend({
  name: 'component',
  template: templates.component,

  initialize: function (options) {
    this.component = options.component;
  },

  getRenderData: function () {
                   console.log(this.component.toJSON());
    return this.component.toJSON();
  }
});
