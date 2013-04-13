
(function () {

  var Component = {};

  Component.Views = {};
  Component.Model = Backbone.Model.extend({});
  Component.Collection = Backbone.Collection.extend({
    model: Component.Model,
    url: 'http://api.component.fm/components'
  });

  Component.Views.List = Backbone.View.extend({

    render: function () {
      var template = _.template($('#list-template').html());
      this.$el.html(template({ components: this.collection }));
      return this;
    }

  });

  Component.Views.Detail = Backbone.View.extend({

    render: function () {
      var template = _.template($('#detail-template').html());
      this.$el.html(template(this.model.attributes));
      return this;
    }

  });

  module.exports = Component;

})();
