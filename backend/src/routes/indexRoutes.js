const indexAuthRoutes = require('./authRoutes/indexAuthRoutes');
const indexPostsRoutes = require('./postsRoutes/indexPostsRoutes');
const indexMessagesRoutes = require('./messagesRoutes/indexMessagesRoutes');

const setupSocketRoutes = (io) => {

    io.on('connection', (socket) => {

        // Definir los eventos de Socket.io para los usuarios
        console.log('USER CONNECTED');
        console.log(socket.id);

        // Config routes for indexAuthRoutes
        indexAuthRoutes(socket);

        // Config routes for indexPostsRoutes
        indexPostsRoutes(socket);

        // Config routes for indexMessagesRoutes
        indexMessagesRoutes(socket);
    });




};

// Export the all functions of all index routes 
module.exports = setupSocketRoutes;
