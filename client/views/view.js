var templates = require('../lib/templates');

module.exports = Backbone.View.extend({
  render: function () {
    this.beforeRender();

    if (!this.template)
      this.template = templates[this.name];

    var data = this.getRenderData ? this.getRenderData() : {};
    this.$el.html(this.template(data));

    console.log(this.template);
    this.afterRender();
    return this;
  },
  afterRender: function () {},
  beforeRender: function () {}
});
