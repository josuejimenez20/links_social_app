const jwt = require('jsonwebtoken');

function createUserLoginToken(userData) {

    try {

        const JWTKEY = process.env.JWTKEY;

        const token = jwt.sign(userData, JWTKEY);

        return token;

    } catch (error) {
        return 'Error to create a user login token';
    }

}

module.exports = {
    createUserLoginToken
}