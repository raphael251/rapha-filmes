const app = require('./app');
const server = require('http').createServer(app.server);
server.listen(process.env.PORT || '3000');