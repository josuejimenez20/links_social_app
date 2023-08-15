const {messageGetAllContacts} = require('./messagesRoutes');

const indexMessagesRoutes = (socket) => {

    // Config routes for messageGetAllContacts
    messageGetAllContacts(socket);

};

// Export the all routes from indexMessagesRoutes
module.exports = indexMessagesRoutes;
