
(function () {

  var Component = {};

  Component.Views = {};
  Component.Model = Backbone.Model.extend({});
  Component.Collection = Backbone.Collection.extend({
    model: Component.Model,
    url: 'http://api.component.fm/components'
  });

  Component.Views.List = Backbone.View.extend({

    template: _.template($("#list-template").html()),

    render: function () {
      this.$el.html($('#list-template').html());
      return this;
    }

  });

  module.exports = Component;

})();
