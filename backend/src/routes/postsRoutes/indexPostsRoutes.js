const {postsGetAllRoutes} = require('./postsGetRoutes');

const indexPostsRoutes = (socket) => {

    // Config routes for postsGetAllRoutes
    postsGetAllRoutes(socket);

};

// Export the all routes from indexAuthRoutes
module.exports = indexPostsRoutes;
