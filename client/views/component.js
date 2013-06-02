var View = require('./view');
var PlayerView = require('./player');
var ModalView = require('./modal');
var config = require('../config');
var vagueDate = require('../lib/vagueDate');

module.exports = View.extend({
  name: 'component',

  events: {
    'click .activate-player a': 'activatePlayer'
  },

  initialize: function (options) {
    this.component = options.component;
    this.components = options.components;
  },

  getRenderData: function () {
    var data = this.component.toJSON();
    data.keywords = data.keywords.join(', ');
    data.twitter = (data.twitter || '').replace('@', '');
    data.github = (data.github || '').replace('@', '');
    data.dependencies = data.dependencies.map(formatDep.bind(this));
    data.dependents = (data.dependents || []).map(formatDep.bind(this));
    data.updated = vagueDate.get({ to: new Date(data.updated) });
    return data;
  },

  destroy: function () {
    if (this.player) {
      this.player.off('error', this.handleError, this);
      this.player.destroy();
    }
    this.remove();
  },

  activatePlayer: function (e) {
    e.preventDefault();
    this.player = new PlayerView({ model: this.component });
    this.player.on('error', this.handleError, this);
    this.$('.activate-player')
      .removeClass('activate-player')
      .addClass('player')
      .html(this.player.render().el);
  },

  // If an error is found in the player, just destroy all of the player
  // view and display an error modal
  handleError: function (e) {
    var modal = new ModalView({
      type: 'error',
      title: 'Could not connect ' + this.component.get('name') + ' to context',
      content: 
        'Your browser may not fully support the Web Audio API, or ' +
        'there may be an issue with this component.\n\n' +
        e
    });
    document.getElementsByTagName('body')[0]
      .appendChild(modal.render().el);

    this.player && this.player.destroy();
  }

});

function formatDep (dep) {
  dep = dep.name || dep;
  return {
    name: dep,
    isAudio: !!this.components.where({ repo: dep }).length
  };
}
