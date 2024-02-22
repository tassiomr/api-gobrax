const jsonServer = require('json-server');
const server = jsonServer.create();

const router = jsonServer.router('db.json');

const middlewares = jsonServer.defaults();

server.use(router);

server.use(jsonServer.rewriter({
  "/*": "/$1",
}));

server.use(router);

server.listen(3000, () => {
  console.log('Running')
});

module.exports = server;