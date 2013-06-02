var View = require('./view');

module.exports = View.extend({
  name: 'modal',

  events: {
    'click .modal-backdrop': 'handleDestroy',
    'click .close': 'handleDestroy'
  },

  initialize: function (options) {
    this.title = options.title;
    this.content = options.content;
  },

  getRenderData: function () {
    return {
      title: this.title,
      content: this.content
    };
  },

  handleDestroy: function () {
    this.destroy();
  }

});
