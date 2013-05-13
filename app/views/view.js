module.exports = Backbone.View.extend({
  render: function () {
            console.log('render');
    // Generate template based off of name if does not yet exist
    this.template = this.template ||
      Handlebars.template(templates[this.name]);

    var data = this.getRenderData ? this.getRenderData() : {};
    $('#' + this.name).html(this.$el.html(this.template(data)));
  }
});
