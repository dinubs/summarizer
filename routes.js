var base = require('./controllers/base_controller');
var articles = require('./controllers/article_controller');

module.exports = function(server) {
  // Base routes
  server.route({method: 'GET', path: '/', handler: base.index});

  // Article routes
  server.route({method: 'GET', path: '/articles', handler: articles.index});
  server.route({method: 'POST', path: '/articles', handler: articles.create});
  server.route({method: 'GET', path: '/articles/{id}', handler: articles.get});

  // Static files
  server.route({
    method: 'GET',
    path: '/css/{file}.css',
    handler: function (request, reply) {
        reply.file("./css/"+request.params.file+".css");
    }
  });
  server.route({
      method: 'GET',
      path: '/js/{file}.js',
      handler: function (request, reply) {
          reply.file("./js/"+request.params.file+".js");
      }
  });
};