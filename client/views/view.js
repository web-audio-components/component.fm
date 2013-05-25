module.exports = Backbone.View.extend({
  render: function () {
    this.beforeRender();
    // Generate template based off of name if does not yet exist
    this.template = this.template ||
      Handlebars.template(templates[this.name]);

    var data = this.getRenderData ? this.getRenderData() : {};
    this.$el.html(this.template(data));
    this.afterRender();
  },
  afterRender: function () {},
  beforeRender: function () {}
});
