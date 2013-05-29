var View = require('./view');
var PlayerView = require('./player');
var config = require('../config');
var vagueDate = require('../lib/vagueDate');

module.exports = View.extend({
  name: 'component',
  template: templates.component,

  events: {
    'click .activate-player a': 'activatePlayer'
  },

  initialize: function (options) {
    this.component = options.component;
    this.components = options.components;
  },

  getRenderData: function () {
    var data = this.component.toJSON();
    data.keywords = data.keywords.join(' ');
    data.dependencies = data.dependencies.map(formatDep.bind(this));
    data.dependents = data.dependents.map(formatDep.bind(this));
    data.updated = vagueDate.get({ to: new Date(data.updated) });
    return data;
  },

  activatePlayer: function (e) {
    e.preventDefault();
    this.player = new PlayerView({ model: this.component });
    this.$('.activate-player')
      .removeClass('activate-player')
      .addClass('player')
      .html(this.player.render().el);
  }

});

function formatDep (dep) {
  console.log('format', dep, this.components.where({repo:dep}));
  return {
    name: dep,
    isAudio: !!this.components.where({ repo: dep }).length
  };
}
