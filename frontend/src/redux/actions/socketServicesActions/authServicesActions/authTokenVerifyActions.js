import {
    fetchAuthTokenVerify,
    fetchAuthTokenVerifySuccess,
    fetchTokenVerifyFailure
} from "../../../slices/auth/authTokenSlice.js";

export const authTokenVerifyAction = (response) => async (dispatch) => {

    // For request We call the actions and when We recive 
    // an socket event, in the services We call the aciton 
    // for update the data

    try {

        dispatch(fetchAuthTokenVerify());

        dispatch(fetchAuthTokenVerifySuccess(response));

    } catch (error) {

        dispatch(fetchTokenVerifyFailure("ERROR TO VERIFY TOKEN, PLEASE INTENT AGAIN"));
    }
}