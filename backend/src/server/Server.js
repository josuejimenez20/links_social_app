const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/configLinksDB');
const setupSocketRoutes = require('../routes/indexRoutes');
const { Server } = require('socket.io');

class ServerWrapper {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.server = require('http').createServer(this.app);

    this.io = new Server(this.server, {
      cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
      },
    });
    
    // this.corsOptions = {
    //   origin: 'http://localhost:5173',
    //   optionsSuccessStatus: 200,
    // };

    this.connectDB();
    this.middlewares();
    this.routes();
    // this.sockets();
  }

  middlewares() {
    // CORS
    this.app.use(cors(this.corsOptions));

    // Directorio publico
    this.app.use(express.static('public'));

  }

  routes() {
    setupSocketRoutes(this.io);
  }

  async connectDB() {
    try {
      dbConnection();
    } catch (error) {
      throw new Error(error);
    }
  }

  listen() {
    this.server.listen(this.port, () => {
      console.log('Listening port', this.port);
    });
  }
}

module.exports = ServerWrapper;
