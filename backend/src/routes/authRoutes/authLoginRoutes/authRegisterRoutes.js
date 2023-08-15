const { registerNewUserService } = require("../../../services/authServices/authRegisterServices");

const authRegisterRoutes = (socket) => {

    socket.on('request_auth_register_user', async (userData) => {

        // Create an user id

        try {

            const tokenNewUser = await registerNewUserService(userData);

            socket.emit('response_auth_register_user', tokenNewUser);

        } catch (error) {
            socket.emit('error_response_auth_register_user', 'Error to register the new user');
        }
    });

};

// Exportar la función de rutas de usuarios
module.exports = authRegisterRoutes; 