module.exports = Backbone.View.extend({
  render: function () {
    this.beforeRender();

    var data = this.getRenderData ? this.getRenderData() : {};
    this.$el.html(this.template(data));

    this.afterRender();
    return this;
  },
  afterRender: function () {},
  beforeRender: function () {}
});
