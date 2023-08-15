import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { AppRouter } from './routes/AppRouter';
import { socketConnection } from './webSocketLinks/socketConfing/socketConnection';
import { getAuthToken } from './helpers/authToken/authTokenHelper';
import { authVerifyTokenService } from './webSocketLinks/socketServices/authServices/authLoginService';

export default function InitialApp() {

    const navigate = useNavigate();

    const { authTokenAccess }
        = useSelector((state) => state.auth.token);

    useEffect(() => {


        // TODO: SOLVED

        // We can find a solution for 
        // the component don't upload 
        // 2 times.
        // That do because first the authTokenAccess 
        // us false and the web socket give us 
        // the true if the token is validate

        if (authTokenAccess === true) {
            return navigate('/home/posts');
        }

    }, [authTokenAccess]);


    useEffect(() => {

        socketConnection();

        const authToken = getAuthToken();

        if (!authToken) {
            return navigate('/auth/login');
        } else {
            authVerifyTokenService(authToken);
        }

    }, []);



    return (
        <AppRouter />
    )
}
