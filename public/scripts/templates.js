this["templates"] = this["templates"] || {};

this["templates"]["list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <tr>\n      <td class=\"name\">\n        <h4>\n          <a href=\"#component/";
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

  buffer += "<table class=\"table components\">\n  ";
  stack1 = helpers.each.call(depth0, depth0.components, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</table>\n";
  return buffer;
  });