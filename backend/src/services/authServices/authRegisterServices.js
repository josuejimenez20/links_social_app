const { v4 } = require('uuid');
const { createUserLoginToken } = require('../../helpers/jwt/authJwt/createUserLoginTokenJwt');
const { registerNewUserModel, registerNewUserInformationModel
} = require('../../models/authModels/authRegisterModels/authRegisterModels');

async function registerNewUserService(userData) {

    try {

        // Create and add the unique userId
        const userId = v4();

        userData.user_id = userId;

        await registerNewUserModel(userData);
        await registerNewUserInformationModel(userData);

        const tokenUserRegister = createUserLoginToken(userData);

        return { token: tokenUserRegister };

    } catch (error) {
        return error;
    }
}

module.exports = { registerNewUserService }