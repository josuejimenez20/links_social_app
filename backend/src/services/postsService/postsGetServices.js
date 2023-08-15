const { postsGetPageModels } = require("../../models/authModels/postModels/postGetModels");

async function postsGetPage(OFFSET) {

    try {
        
        const response = await postsGetPageModels(OFFSET);

        return response;

    } catch (error) {
        return error;
    }
}

module.exports = { postsGetPage }