const { messagessGetContactsService } = require('../../services/messagesServices/messagesContactsServices');
const {getDataToken} = require('../../helpers/jwt/authJwt/getDataToken')

const messageGetAllContacts = (socket) => {

    socket.on('request_messages_get_contacts', async (payload) => {
        try {

            const userTokenDecrypted = getDataToken(payload)

            const contactsServiceReponse = await messagessGetContactsService(userTokenDecrypted.user_id);

            console.log(contactsServiceReponse);

            socket.emit('response_messages_get_contacts', contactsServiceReponse);

        } catch (error) {
            const messageError = 'Error to get the contacs';
            socket.emit('error_request_messages_get_contacts', messageError);
        }
    })
}

module.exports = {
    messageGetAllContacts
}