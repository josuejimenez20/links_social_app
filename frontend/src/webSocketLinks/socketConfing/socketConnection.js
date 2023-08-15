import { io } from "socket.io-client";
import { store } from "../../redux/store/store";
import { exports_services_index } from "../exports_services/exports_services_index";
import { getAuthToken } from "../../helpers/authToken/authTokenHelper";
import { fetchAuthTokenVerifySuccess } from "../../redux/slices/auth/authTokenSlice";

const socket = io('ws://localhost:3001');

function socketConnection() {

    socket.on('connect', () => {
        console.log('Socket connection established.');

        const token = getAuthToken();

        // Send the token and set the socket.io user in database
        if (token) {
            socket.emit('response_initial_app_verificate_token', token);
        }

        socket.on('request_initial_app_verificate_token', (payload) => {

            if (payload) return store.dispatch(fetchAuthTokenVerifySuccess(true));
        });

        // You can send initial messages or perform any other action after connection.
    });

    socket.on('disconnect', () => {
        console.log('Socket connection closed.');
        // Perform any necessary cleanup or reconnection logic here.
    });

    socket.on('error', (error) => {
        console.error('Socket error:', error);
        // Handle any error that occurs with the WebSocket connection.
    });

    // Export the all events "on" (services)
    exports_services_index();
};

export { socketConnection, socket }
