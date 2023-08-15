const { authTokenVerify } = require('../../../helpers/jwt/authJwt/authVerifyTokenJwt');
const { getDataToken } = require('../../../helpers/jwt/authJwt/getDataToken');

const { authLoginValidateDataService, uploadUserIdWithSocketIdService } = require('../../../services/authServices/authLoginServices');

const authLoginRoutes = (socket) => {

    socket.on('request_auth_login_verificate_user_data', async (userData) => {
        try {
            // We receive the user data, verify the user/email
            // and the password, do the validation,
            // create the login access token, and return it

            const response = await authLoginValidateDataService(userData);

            socket.emit('reponse_auth_login_verificate_user_data', response);

        } catch (error) {
            console.error('Error in authLoginRoutes:', error);

        }
    });;


    socket.on('request_auth_login_verify_token', async (token_to_verify) => {

        const response = authTokenVerify(token_to_verify);

        if (response) {

            // Get the user id from token and upload the socker.io

            const dataToken = getDataToken(token_to_verify);

            // Get the user data form models, add 
            // sessionUserId at socket like a property
            // and We can send a message thoungh the sessionUserId

            dataToken.socket_id = socket.id;

            const uploadUserSockerId = await uploadUserIdWithSocketIdService(dataToken);

        }

        // We emit the event for the user asked the request
        // the other other users won't recive the event.
        socket.emit('response_auth_login_verify_token', response);
    });

    socket.on('response_initial_app_verificate_token', async (token_to_verify) => {

        const response = authTokenVerify(token_to_verify);

        if (response) {

            // Get the user id from token and upload the socker.io

            const dataToken = getDataToken(token_to_verify);

            dataToken.socket_id = socket.id;

            const uploadUserSockerId = await uploadUserIdWithSocketIdService(dataToken);

        }

        socket.emit('request_initial_app_verificate_token', response);
    })
};

// Exportar la función de rutas de usuarios
module.exports = authLoginRoutes; 