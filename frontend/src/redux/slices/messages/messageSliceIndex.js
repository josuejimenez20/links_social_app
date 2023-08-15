import { combineReducers } from "redux";
import { messagesGetContactsSlice } from "./messagesGetContactsSlice";

export * from './messagesGetContactsSlice';

export const MessagesReducer = combineReducers({
    contacts: messagesGetContactsSlice.reducer
});