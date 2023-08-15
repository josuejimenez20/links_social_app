const authLoginRoutes = require('./authLoginRoutes/authLoginRoutes');
const authRegisterRoutes = require('./authLoginRoutes/authRegisterRoutes');

const indexAuthRoutes = (socket) => {

    // Config routes for authLoginRoutes
    authLoginRoutes(socket);

    // Config routes for authRegisterRoutes
    authRegisterRoutes(socket);
};

// Export the all routes from indexAuthRoutes
module.exports = indexAuthRoutes;
