const { connection } = require('../../../database/configLinksDB');

const postsGetPageModels = async (OFFSET) => {


    try {

        const query = `SELECT * FROM posts pt
        INNER JOIN body_post bp 
        ON pt.post_id = bp.fk_post_id
        INNER JOIN users us 
        ON us.user_id = pt.fk_owner_user_id
		INNER JOIN user_information usi
		ON us.user_id = usi.fk_user_id;
        `;

        const result = await connection.query(query);

        return result.rows;

    } catch (error) {
        return 'Error to get the posts';
    }
}

module.exports = {
    postsGetPageModels
}