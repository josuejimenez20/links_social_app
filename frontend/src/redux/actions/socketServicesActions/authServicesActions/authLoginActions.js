import {
    fetchAuthLogin,
    fetchAuthLoginSuccess,
    fetchAuthLoginFailure
} from "../../../slices/auth/authLoginSlice";

export const authLoginAction = (response) => async (dispatch) => {

    // For request We call the actions and when We recive 
    // an socket event, in the services We call the aciton 
    // for update the data

    try {

        dispatch(fetchAuthLogin());

        dispatch(fetchAuthLoginSuccess(response));

    } catch (error) {

        dispatch(fetchAuthLoginFailure("ERROR TO VERIFY LOGIN, PLEASE INTENT AGAIN"));
    }
}