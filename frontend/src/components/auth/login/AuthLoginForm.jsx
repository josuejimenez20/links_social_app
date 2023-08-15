import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField, Button, Divider, Grid } from '@mui/material';
import { authLoginService } from '../../../webSocketLinks/socketServices/authServices/authLoginService';

export default function AuthLoginForm() {

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {

        // Call the service for login user
        authLoginService(values);
        resetForm(); // Optionally reset the form after submission
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.password) {
            errors.password = 'Password is required';
        }

        return errors;
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validate={validateForm}
        >
            {({ errors, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            color="primary"
                            as={TextField}
                            id="email"
                            name="email"
                            label="Email"
                            error={Boolean(errors.email)}
                            helperText={<ErrorMessage name="email" />}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white', // Cambia el color del borde
                                    },
                                },
                                '& input': {
                                    color: 'white', // Cambia el color del texto
                                    '&::placeholder': {
                                        color: 'white', // Cambia el color del marcador de posición
                                    },
                                },
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            as={TextField}
                            type="password"
                            id="password"
                            name="password"
                            label="Password"
                            error={Boolean(errors.password)}
                            helperText={<ErrorMessage name="password" />}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& input': {
                                    color: 'white',
                                },
                            }}
                        />
                    </div>

                    <Divider style={{ backgroundColor: '#2196f3', marginBottom: '30px' }} />


                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Button type="submit" variant="contained" color="primary">
                                Continue
                            </Button>
                        </Grid>                        
                    </Grid>
                </form>
            )}
        </Formik>
    );
}
