import { socket } from '../../socketConfing/socketConnection';
import { store } from '../../../redux/store/store';
import { authLoginAction } from '../../../redux/actions/socketServicesActions/authServicesActions/authLoginActions';


export function authRegisterUserService(userData) {
  socket.emit('request_auth_register_user', userData);
}

export function authRegisterUserServiceOn() {

  socket.on('response_auth_register_user', (payload) => {

    console.log(payload);
    
    store.dispatch(authLoginAction(payload));


    // if (payload) {
    //   store.dispatch(authLoginAction({token: payload}));
    //   store.dispatch(authTokenVerifyAction(true));
    // }

  });

}







