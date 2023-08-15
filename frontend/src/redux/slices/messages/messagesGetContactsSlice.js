import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    contacts: {}
};

export const messagesGetContactsSlice = createSlice({
    name: 'messagesGetContactsSlice',
    initialState,
    reducers: {
        fetchMessagesGetContacts: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchMessagesGetContactsSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.contacts = action.payload;
        },
        fetchMessagesGetContactsFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchMessagesGetContacts,
    fetchMessagesGetContactsSuccess,
    fetchMessagesGetContactsFailure
} = messagesGetContactsSlice.actions;