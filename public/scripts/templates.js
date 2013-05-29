this["templates"] = this["templates"] || {};

this["templates"]["about"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<h1>About Web Audio Components</h1>\n";
  });

this["templates"]["component"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"http://twitter.com/";
  if (stack1 = helpers.twitter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.twitter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" on Twitter\"><i class=\"icon-twitter\"></i> @";
  if (stack1 = helpers.twitter) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.twitter; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"https://github.com/";
  if (stack1 = helpers.github) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.github; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"";
  if (stack1 = helpers.github) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.github; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" on GitHub\"><i class=\"icon-github\"></i> @";
  if (stack1 = helpers.github) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.github; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <a href=\"\n              ";
  stack1 = helpers['if'].call(depth0, depth0.isAudio, {hash:{},inverse:self.program(8, program8, data),fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            \" title=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n          ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                #components/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n              ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                http://github.com/";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n              ";
  return buffer;
  }

  buffer += "<div class=\"row\">\n  <h1>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  <div class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <table class=\"table table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <td class=\"attribute-label\">author</td>\n        <td>\n          ";
  if (stack1 = helpers.author) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.author; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          ";
  stack1 = helpers['if'].call(depth0, depth0.twitter, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n          ";
  stack1 = helpers['if'].call(depth0, depth0.github, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">repo</td>\n        <td><a href=\"https://github.com/";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" title=\"GitHub repository for ";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">version</td>\n        <td>";
  if (stack1 = helpers.version) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.version; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">keywords</td>\n        <td>";
  if (stack1 = helpers.keywords) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.keywords; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">updated</td>\n        <td>";
  if (stack1 = helpers.updated) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.updated; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">dependencies</td>\n        <td>\n          ";
  stack1 = helpers.each.call(depth0, depth0.dependencies, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">dependents</td>\n        <td>\n          ";
  stack1 = helpers.each.call(depth0, depth0.dependents, {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </td>\n      </tr>\n      <tr>\n        <td class=\"attribute-label\">watchers</td>\n        <td><i class=\"icon-star\"></i> ";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n    </tbody>\n  </table>\n  <div class=\"activate-player\">\n    <a href=\"#\">Demo this module</a>\n  </div>\n</div>\n";
  return buffer;
  });

this["templates"]["creating"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<h1>Creating your own web audio components</h1>\n";
  });

this["templates"]["list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <tr data-component=\"";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">\n      <td class=\"name\">\n        <h4>\n          <a href=\"#components/";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n        </h4>\n        <span class=\"github-link\"\n          <a href=\"http://github.com/";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"grey-link\">\n            ";
  if (stack1 = helpers.repo) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.repo; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n          </a>\n        </span>\n      </td>\n      <td class=\"description\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      <td class=\"stars\"><i class=\"icon-star\"></i>";
  if (stack1 = helpers.stars) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.stars; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n    </tr>\n  ";
  return buffer;
  }

  buffer += "<input class=\"search\" type=\"text\" placeholder=\"search...\" />\n<table class=\"table components\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });

this["templates"]["player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"player-loading\">\n  <div class=\"loading-display\"></div>\n</div>\n<div class=\"row\">\n  <div class=\"player\">\n    <div class=\"controls\">\n      <select class=\"samples\">\n        <option value=\"vox\">vocals</li>\n        <option value=\"lead\">acoustic guitar lead</li>\n        <option value=\"rhythm\">acoustic guitar rhythm</li>\n        <option value=\"solo-dry\">electric guitar lead</li>\n      </select>\n      <div class=\"btn-group\">\n        <a href=\"#\" class=\"btn play-button\" data-playing=\"false\"><i class=\"icon-play\"></i></a>\n      </div>\n      <div class=\"hide\">\n        <a href=\"#\" class=\"btn hide-button\"><i class=\"icon-close\"></i></a>\n      </div>\n    </div>\n      <h3>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n    <div class=\"module\">\n\n    </div>\n  </div>\n</div>\n\n";
  return buffer;
  });