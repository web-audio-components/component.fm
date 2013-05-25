var Components = require('./collections/components');
var ListView = require('./views/list');

module.exports = Backbone.Router.extend({
  
  routes: {
    '': 'home',
    'component/:owner/:module': 'component'
  },

  initialize: function () {
    this.components = new Components();

    this.components.fetch({
      success: function () {
      }
    });
  },

  clearView: function () {
    if (this.view && this.view.destroy) {
      this.view.destroy();
    }
  },

  setView: function (view) {
    this.clearView();
    $('#main').html(view.render().el);
    this.view = view;
  }

});

function home () {
  if (!this.listView) {
    this.listView = new ListView({
      components: this.components
    });
  }
  this.setView(this.listView);
}

function component (owner, module) {
  console.log(owner, module);

}
