var fs = require('fs');
var Mustache = require('./mustache');
var templates = {};

var pages = ['about', 'creating', 'list', 'component', 'player', 'modal'];

// Can't `forEach` this with Browserify's brfs transformation due to 
// an escodegen error [or something] when variables are used in 
// fs.readFileSync path, so we inline, ewwww
templates.about = fs.readFileSync(__dirname + '/../templates/about.mustache');
templates.creating = fs.readFileSync(__dirname + '/../templates/creating.mustache');
templates.list = fs.readFileSync(__dirname + '/../templates/list.mustache');
templates.component = fs.readFileSync(__dirname + '/../templates/component.mustache');
templates.player = fs.readFileSync(__dirname + '/../templates/player.mustache');
templates.modal = fs.readFileSync(__dirname + '/../templates/modal.mustache');

_.each(templates, function (val, key) {
  templates[key] = Mustache.compile(val);
});
module.exports = templates;
