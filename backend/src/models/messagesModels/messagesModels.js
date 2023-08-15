const { connection } = require('../../database/configLinksDB');

const messagessGetContactsModels = async (userId) => {


    try {

        const query = `SELECT ui.user_id_information, name, last_name FROM user_information ui 
        WHERE ui.fk_user_id IN (
          SELECT uc.user_contact_id FROM users_contacts uc
         WHERE uc.user_owner_id = '${userId}'
        );        `;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        return 'Error to get the posts';
    }
}

module.exports = {
    messagessGetContactsModels
}