const {postsGetPage} = require('../../services/postsService/postsGetServices');

const postsGetAllRoutes = (socket) => {

    socket.on('request_posts_get_page', async (payload) => {
        try {

            const posts = [1, 2, 3, 4];

            const responsePostGet = await postsGetPage(payload.OFFSET);

            socket.emit('response_posts_get_page', responsePostGet);

        } catch (error) {
            const messageError = 'Error to get the posts';
            socket.emit('error_response_posts_get_all', messageError);
        }
    })
}

module.exports = {
    postsGetAllRoutes
}