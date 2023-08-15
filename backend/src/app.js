const dotenv = require('dotenv').config();

const ServerWrapper = require('./server/Server');

const server = new ServerWrapper();

server.listen();