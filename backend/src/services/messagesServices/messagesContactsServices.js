const { messagessGetContactsModels } = require ("../../models/messagesModels/messagesModels");


async function messagessGetContactsService(userId) {

    try {

        const constactsList = await messagessGetContactsModels(userId);

        console.log(constactsList);

        return constactsList;

    } catch (error) {
        return error;
    }
}

module.exports = { messagessGetContactsService }