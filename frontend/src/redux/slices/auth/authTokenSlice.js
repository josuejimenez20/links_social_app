import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    authTokenAccess: {},
    token: {}
};

export const authTokenVerifySlice = createSlice({
    name: 'authTokenVerify',
    initialState,
    reducers: {
        fetchAuthTokenVerify: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchAuthTokenVerifySuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.authTokenAccess = action.payload;
        },
        fetchTokenVerifyFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchAuthTokenVerify,
    fetchAuthTokenVerifySuccess,
    fetchTokenVerifyFailure
} = authTokenVerifySlice.actions;