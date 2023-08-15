import { socket } from '../../socketConfing/socketConnection';
import { store } from '../../../redux/store/store';
import { authTokenVerifyAction } from '../../../redux/actions/socketServicesActions/authServicesActions/authTokenVerifyActions';
import { authLoginAction } from '../../../redux/actions/socketServicesActions/authServicesActions/authLoginActions';

// Cuando recibamos un evento, debemos llamar a las acciones.
// Las acciones tendrán la tarea de actualizar los datos con slices.
// SOLO PODEMOS LLAMAR A LOS SLICES EN LAS ACCIONES DE REDUX.

export function authLoginService(userData) {

  socket.emit('request_auth_login_verificate_user_data', userData);
}

export function authLoginServiceOn() {

  socket.on('reponse_auth_login_verificate_user_data', (payload) => {

    // Call the actions to update the state app for the login data

    store.dispatch(authLoginAction(payload));

  });

}

export function authVerifyTokenService(token_to_verify) {
  socket.emit('request_auth_login_verify_token', token_to_verify);
}

export function authVerifyTokenServiceOn() {

  socket.on('response_auth_login_verify_token', (payload) => {

    // Call the actions to update the state app for the token

    store.dispatch(authTokenVerifyAction(payload));

  });
}






