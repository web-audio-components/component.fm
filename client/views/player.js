var View = require('./view');
var allen = require('../lib/allen');
var Rack = require('../lib/rack');
var when = require('../lib/when');
var context = allen.getAudioContext();
var EXT = allen.canPlayType('mp3') ? '.mp3' : '.ogg';

module.exports = View.extend({
  name : 'player',
  events: {
    'click .samples a' : 'handleSampleChange',
    'click .play-button' : 'handlePlayPause',
    'click .hide-button' : 'handleHide'
  },

  initialize: function () {
    this.showLoading();
    this.sample = 'vox';

    this.model.injectBuild().then(function () {
      var Node = window.require(this.model.get('name'));
      this.node = new Node(context);
      this.initializeRack();
      this.hideLoading();
      return this.node;
    }.bind(this))
      .then(this.getBuffer.bind(this), this.handleError.bind(this))
      .then(this.connect.bind(this), this.handleError.bind(this));
  },

  afterRender: function () {
    this.$play = this.$('.play-button');
  },

  destroy: function () {
    this.disconnect();
    this.remove();
  },

  initializeRack: function () {
    this.rack = new Rack(this.node);
    this.$('.module').html(this.rack.el);
  },

  getBuffer: function () {
    var deferred = when.defer();
    this.disableControls();
    allen.getBuffer('samples/' + this.sample + EXT, function (xhr) {
      this.enableControls();
      deferred.resolve(xhr.target.response);
    }.bind(this));
    return deferred.promise;
  },

  connect: function (buffer) {
    this.source = context.createBufferSource();
    this.source.buffer = context.createBuffer(buffer, false);
    this.source.connect(this.node.input);
    return this.node.connect(context.destination);
  },

  disconnect: function () {
    if (this.source && this.source.disconnect) {
      this.source.disconnect();
      // In FF24, this throws an error if not yet playing
      try {
        this.source.noteOff(0);
      } catch (e) { console.error(e); }
    }
    if (this.node)
      this.node.disconnect();
  },

  playSample: function () {
    this.stopSample();
    this.getBuffer().then(function (buffer) {
      this.connect(buffer);
      this.source.noteOn(0);
      this.$play.data('playing', true)
        .find('i')
        .removeClass('icon-play')
        .addClass('icon-pause');
    }.bind(this));
  },

  stopSample : function () {
    this.$play.data('playing', false)
      .find('i')
      .addClass('icon-play')
      .removeClass('icon-pause');
    this.disconnect();
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

    this.$play.data('playing') ? this.stopSample() : this.playSample();
  },

  handleSampleChange: function (e) {
    e.preventDefault();
    var $target = $(e.target);
    this.$('.dropdown-toggle').html(
      $target.text() + '<span class="caret"></span>'
    );
    this.stopSample();
    this.sample = $target.data('sample');
    this.getBuffer()
      .then(this.connect.bind(this));
  },

  handleError: function (reason) {
    this.trigger('error', reason);
  }
});
