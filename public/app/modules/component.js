
(function () {

  var Component = {};

  Component.Views = {};
  Component.Model = Backbone.Model.extend({});
  Component.Collection = Backbone.Collection.extend({
    model: Component.Model
  });

  Component.Views.List = Backbone.View.extend({

    render: function () {
      this.collection.each(function (model) {
        console.log(model);
      });
    }

  });

  module.exports = Component;

})();
