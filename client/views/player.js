var View = require('./view');
var allen = require('../lib/allen');
var Rack = require('../lib/rack');
var when = require('../lib/when');
var context = allen.getAudioContext();
var EXT = allen.canPlayType('mp3') ? '.mp3' : '.ogg';

module.exports = View.extend({
  name : 'player',
  events: {
  },

  initialize: function () {
  },

  setupModule: function () {
    return this.model.injectBuild().then(function () {
      var Node = window.require(this.model.get('name'));
      this.node = new Node(context);
      this.initializeRack();
      this.hideLoading();
      return this.node;
    }.bind(this));
  },

  afterRender: function () {
    this.$play = this.$('.play-button');
  },

  getRenderData: function () {
    return this.model.toJSON();
  },

  destroy: function () {
    this.disconnect();
    this.remove();
  },

  initializeRack: function () {
    this.rack = new Rack(this.node);
    this.$('.module').html(this.rack.el);
  },

  // Loading GUI

  showLoading: function () {
    this.$('.player-loading').show().end()
      .find('.player').hide();
  },

  hideLoading: function () {
    this.$('.player-loading').hide().end()
      .find('.player').show();
  },

  // Loading samples
  
  disableControls: function () {
    this.$('.controls button').addClass('disabled');
    this.$('.controls .loading-small').show();
  },
  
  enableControls: function () {
    this.$('.controls button').removeClass('disabled');
    this.$('.controls .loading-small').hide();
  },

  // Event handlers

  handlePlayPause: function (e) {
    e.preventDefault();

    // Abort if button has class disabled
    if (this.$play.hasClass('disabled')) return;

    this.$play.data('playing') ? this.stop() : this.play();
  },

  handleError: function (reason) {
    this.trigger('error', reason);
  }
});
