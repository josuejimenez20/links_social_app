import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    success: false,
    authDataLogin: {}
};

export const AuthLoginSlice = createSlice({
    name: 'authDataLogin',
    initialState,
    reducers: {
        fetchAuthLogin: (state, action) => {
            state.loading = true;
            state.error = null;
            state.success = null;
        },
        fetchAuthLoginSuccess: (state, action) => {
            state.loading = false,
                state.error = false,
                state.success = true;
            state.authDataLogin = action.payload;
        },
        fetchLoginFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
            state.success = false;
        }
    }
});

export const {
    fetchAuthLogin,
    fetchAuthLoginSuccess,
    fetchAuthLoginFailure
} = AuthLoginSlice.actions;