var Player = require('./player');
var allen = require('../lib/allen');
var Rack = require('../lib/rack');
var when = require('../lib/when');
var context = allen.getAudioContext();
var EXT = allen.canPlayType('mp3') ? '.mp3' : '.ogg';

module.exports = Player.extend({
  name : 'player',
  events: {
    'click .samples a' : 'handleSampleChange',
    'click .play-button' : 'handlePlayPause',
    'click .hide-button' : 'handleHide'
  },

  initialize: function () {
    this.showLoading();
    this.sample = 'vox';

    this.setupModule()
      .then(this.getBuffer.bind(this), this.handleError.bind(this))
      .then(this.connect.bind(this), this.handleError.bind(this));
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

  play: function () {
    this.stop();
    this.getBuffer().then(function (buffer) {
      this.connect(buffer);
      this.source.noteOn(0);
      this.$play.data('playing', true)
        .find('i')
        .removeClass('icon-play')
        .addClass('icon-pause');
    }.bind(this));
  },

  stop: function () {
    this.$play.data('playing', false)
      .find('i')
      .addClass('icon-play')
      .removeClass('icon-pause');
    this.disconnect();
  },

  handleSampleChange: function (e) {
    e.preventDefault();
    var $target = $(e.target);
    this.$('.dropdown-toggle').html(
      $target.text() + '<span class="caret"></span>'
    );
    this.stop();
    this.sample = $target.data('sample');
    this.getBuffer()
      .then(this.connect.bind(this));
  }
});
