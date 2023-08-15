const jwt = require('jsonwebtoken');

const { authLoginValidateDataModels,
    uploadUserIdWithSocketIdModels
} = require('../../models/authModels/authLoginModels/authLoginModels');

async function authLoginValidateDataService(userData) {

    const JWTKEY = process.env.JWTKEY;

    try {

        const response = await authLoginValidateDataModels(userData);

        if (response.length === 0) {
            return "User don't found";
        }

        const { user_id, password, user_or_email } = response[0];


        const objectToken = {
            user_id, password, user_or_email
        }

        // Create a web token and return it
        const loginToken = jwt.sign(objectToken, JWTKEY);

        return { token: loginToken };

    } catch (error) {
        console.log(error);
        return "Error to validate login user data";
    }
}

async function uploadUserIdWithSocketIdService(userData) {

    try {
        
        const responseUploadUserSocketId = await uploadUserIdWithSocketIdModels(userData);

        return true;

    } catch (error) {
        return "Error to login/register user";
    }

}

module.exports = {
    authLoginValidateDataService,
    uploadUserIdWithSocketIdService
}