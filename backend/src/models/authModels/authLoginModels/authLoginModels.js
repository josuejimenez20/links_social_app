const { connection } = require('../../../database/configLinksDB');

const authLoginValidateDataModels = async (userData) => {

    const { email, password } = userData;

    try {

        const query = `SELECT * FROM users AS us
        WHERE us.user_or_email = '${email}' 
        and us.password = '${password}'`;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        console.error('Error executing query:', error);
        return [];
    }
};

const uploadUserIdWithSocketIdModels = async (userData) => {

    const { user_id, user_or_email, password, socket_id } = userData;

    try {

        const query = `UPDATE users 
        SET user_socket_id = '${socket_id}'
        WHERE user_id = '${user_id}' 
        AND password = '${password}'`;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        // console.error('Error executing query:', error);
        // return [];
    }
};

module.exports = {
    authLoginValidateDataModels,
    uploadUserIdWithSocketIdModels
};
