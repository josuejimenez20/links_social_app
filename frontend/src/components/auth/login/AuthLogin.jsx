import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Container, Grid, Link } from '@mui/material';
import AuthLoginForm from './AuthLoginForm';
import { authVerifyTokenService } from '../../../webSocketLinks/socketServices/authServices/authLoginService';
import { saveAuthToken } from '../../../helpers/authToken/authTokenHelper';

export default function AuthLogin() {

  const navigate = useNavigate();

  const { authDataLogin }
    = useSelector((state) => state.auth.login);

  // Save the token 
  // and call verify token function

  useEffect(() => {
    if (authDataLogin) {
      if (authDataLogin.token) {
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
            Login
          </Typography>
          <Grid item xs={6} mb={3}>
            <Link
              onClick={() => {
                navigate('/auth/register')
              }}
              color="primary"
              underline="none"
              variant="h6"
            >
              I don't have an account
            </Link>
          </Grid>
          <AuthLoginForm />
        </Grid>
      </Grid>
    </Container>
  </>
  )
}
