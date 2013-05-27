var View = require('./view');
var allen = require('../lib/allen');
var Rack = require('../lib/rack');
var when = require('../lib/when');
var context = allen.getAudioContext();

module.exports = View.extend({
  name : 'player',
  template: templates.player,
  events: {
    'change .samples' : 'handleSampleChange',
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
      return this.node;
    }.bind(this))
      .then(this.getBuffer.bind(this))
      .then(this.connect.bind(this));
  },

  afterRender: function () {
    this.$play = this.$('.play-button');
    this.$samples = this.$('.samples');
  },

  initializeRack: function () {
    this.rack = new Rack(this.node);
    this.$('.module').html(this.rack.el);
  },

  getBuffer: function () {
    var deferred = when.defer();
    this.showLoading();
    allen.getBuffer('samples/' + this.sample + '.mp3', function (xhr) {
      this.hideLoading();
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
      this.source.noteOff(0);
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
    this.$el
      .find('.player-loading').show().end()
      .find('select, a').prop('disabled', true)
      .addClass('disabled');
  },

  hideLoading: function () {
    this.$el
      .find('.player-loading').hide().end()
      .find('select, a').prop('disabled', false)
      .removeClass('disabled');
  },

  // Event handlers

  handlePlayPause: function ( e ) {
    e.preventDefault();

    // Abort if button has class disabled
    if (this.$play.hasClass('disabled')) return;

    this.$play.data('playing') ? this.stopSample() : this.playSample();
  },

  handleSampleChange: function () {
    this.stopSample();
    this.sample = this.$samples.find(':selected').val();
    this.getBuffer()
      .then(this.connect.bind(this));
  }

});
