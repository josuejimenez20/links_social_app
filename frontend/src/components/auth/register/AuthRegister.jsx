import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container, Grid, Link } from '@mui/material';
import AuthRegisterForm from './AuthRegisterForm';
import { saveAuthToken } from '../../../helpers/authToken/authTokenHelper';
import { authVerifyTokenService } from '../../../webSocketLinks/socketServices/authServices/authLoginService';


export default function AuthRegiser() {

    const navigate = useNavigate();

    const { authDataLogin }
        = useSelector((state) => state.auth.login);

    // Save the token 
    // and call verify token function

    useEffect(() => {
        if (authDataLogin) {
            if (authDataLogin.token) {
                console.log(authDataLogin.token);
                saveAuthToken(authDataLogin.token);
                authVerifyTokenService(authDataLogin.token);
            }
        }
    }, [authDataLogin])


    return (<>

        <Container sx={{ width: '100%', height: '100vh' }}>
            <Grid container justifyContent="center" alignItems="center" height="100%">
                <Grid item width={500}>
                    <Typography
                        mb={5}
                        variant='h1'
                        component="h2"
                        color="primary">
                        Register
                    </Typography>
                    <Grid item xs={6} mb={3}>
                        <Link
                            onClick={() => {
                                navigate('/auth/login')
                            }}
                            color="primary"
                            underline="none"
                            variant="h6"
                        >
                            I have an account
                        </Link>
                    </Grid>
                    <AuthRegisterForm />
                </Grid>
            </Grid>
        </Container>
    </>
    )
}
