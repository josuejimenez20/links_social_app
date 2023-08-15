const jwt = require('jsonwebtoken');

function authTokenVerify(auth_token_to_verify) {

    try {

        const JWTKEY = process.env.JWTKEY;

        const response = jwt.verify(auth_token_to_verify, JWTKEY);

        if (response.user_id) return true;

        return false;

    } catch (error) {
        return false;
    }

}

module.exports = {
    authTokenVerify
}