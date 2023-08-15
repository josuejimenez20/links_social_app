import { socket } from "../../socketConfing/socketConnection";
import { store } from "../../../redux/store/store";
import { fetchMessagesGetContacts, fetchMessagesGetContactsSuccess } from "../../../redux/slices/messages/messagesGetContactsSlice";

export function messagesGetContactsServices(userId) {

    store.dispatch(fetchMessagesGetContacts());

    socket.emit('request_messages_get_contacts', userId);
}

export function messagesGetContactsServicesOn() {
    socket.on('response_messages_get_contacts', (payload) => {
        
        store.dispatch(fetchMessagesGetContactsSuccess(payload));
    })
}