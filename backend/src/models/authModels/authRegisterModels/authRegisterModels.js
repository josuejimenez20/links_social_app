const { connection } = require('../../../database/configLinksDB');

const registerNewUserModel = async (userData) => {

    const { user_or_email, password,
        user_id } = userData;

    try {

        const query = `INSERT INTO public.users(
            user_id, user_or_email, user_socket_id, password)
            VALUES ('${user_id}', '${user_or_email}', 
                    '${user_id}', '${password}')
        `;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        return 'Error to register the new user';
    }
}

const registerNewUserInformationModel = async (userData) => {

    const { name, lastname,
        phone, user_id, } = userData;

    try {

        const query = `INSERT INTO public.user_information(
            user_id_information, phone, name, last_name, fk_user_id)
            VALUES ('${user_id}', '${phone}', 
                    '${name}', '${lastname}', '${userId}');
        `;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        return 'Error to register the new user information';
    }
}

module.exports = {
    registerNewUserModel,
    registerNewUserInformationModel
}