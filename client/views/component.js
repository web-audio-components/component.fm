var View = require('./view');
var config = require('../config');

module.exports = View.extend({
  name: 'component',
  template: templates.component,

  events: {
    'click .activate-player': 'activatePlayer'
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
    return data;
  }
});

function formatDep (dep) {
  console.log('format', dep, this.components.where({repo:dep}));
  return {
    name: dep,
    isAudio: !!this.components.where({ repo: dep }).length
  };
}
