import { combineReducers } from "redux";

import { AuthLoginSlice } from "./authLoginSlice";
import { authTokenVerifySlice } from "./authTokenSlice";


export * from './authLoginSlice';
export * from './authTokenSlice';


export const AuthReducer = combineReducers({
    login: AuthLoginSlice.reducer,
    token: authTokenVerifySlice.reducer
});