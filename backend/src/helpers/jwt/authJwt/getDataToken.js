const jwt = require('jsonwebtoken');

function getDataToken(auth_token_to_get_data) {

    try {

        const JWTKEY = process.env.JWTKEY;

        const dataToken = jwt.verify(auth_token_to_get_data, JWTKEY);
       
        return dataToken;

    } catch (error) {
        return false;
    }

}

module.exports = {
    getDataToken
}