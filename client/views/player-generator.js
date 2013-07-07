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

    this.setupModule()
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
    this.node.connect(context.destination);
  },

  disconnect: function () {
    if (this.node.disconnect) {
      this.node.disconnect();
    }
  },

  play: function () {
    this.stop();
    this.connect();
    this.node.start(0);
    this.$play.data('playing', true)
      .find('i')
      .removeClass('icon-play')
      .addClass('icon-pause');
  },

  stop: function () {
    this.$play.data('playing', false)
      .find('i')
      .addClass('icon-play')
      .removeClass('icon-pause');
    this.disconnect();
  }
});
