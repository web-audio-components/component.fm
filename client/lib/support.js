var allen = require('./allen');
var ua = require('./ua')(window.navigator.userAgent);
var browser = ua.browser;
var DELAY = 10000;

var PARTIAL_SUPPORT = 'Your browser ' + browser.name + ' ' + browser.major + ' may not support all Web Audio API capabilities';
var UNSUPPORTED = 'Your browser ' + browser.name + ' ' + browser.major + ' does not currently support the Web Audio API';

module.exports = function () {
  var ctx = allen.getAudioContext();
  if (!ctx) {
    setAlert(UNSUPPORTED, 'error');
  } else if (/firefox/i.test(browser.name)) {
    // Firefox support is not yet complete at the time of writing,
    // so while AudioContext exists, not all nodes in spec are yet implemented
    setAlert(PARTIAL_SUPPORT);
  }
};

function setAlert (text, type) {
  var $alert = $('.alert');
  if (type) $alert.addClass('alert-' + type);
  $alert.text(text).show();
  setTimeout(function () {
    $alert.fadeOut();
  }, DELAY);
}
