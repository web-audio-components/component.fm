var fs = require('fs');
var Mustache = require('./mustache');
var templates = {};

// Can't `forEach` this with Browserify's brfs transformation
// so we inline??
templates.about = fs.readFileSync(__dirname + '/../templates/about.mustache');
templates.creating = fs.readFileSync(__dirname + '/../templates/creating.mustache');
templates.list = fs.readFileSync(__dirname + '/../templates/list.mustache');
templates.component = fs.readFileSync(__dirname + '/../templates/component.mustache');
templates.player = fs.readFileSync(__dirname + '/../templates/player.mustache');

_.each(templates, function (val, key) {
  templates[key] = Mustache.compile(val);
});
module.exports = templates;
