module.exports = (function () {
  var app = {};
  app.views = {};
  app.collections = {};

  var Components = require('./collections/components');
  var ListView = require('./views/list');

//  app.router = require('./router');
  
  app.collections.components = new Components();
  app.views.list = new ListView({
    components: app.collections.components
  });

  // Initialize
  app.collections.components.fetch({
    success: function () {
               console.log('success!');
                app.views.list.render(); 
             }//app.views.list.render.bind(app.views.list)
  });

  Backbone.history.start({ pushState: true });
  
  return app;
})();
