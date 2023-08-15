import React, { useEffect } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField, Button, Divider } from '@mui/material';
import { authRegisterUserService } from '../../../webSocketLinks/socketServices/authServices/authRegisterService';

export default function AuthRegisterForm() {

    const initialValues = {
        user_or_email: '',
        password: '',
        name: '',
        lastname: '',
        phone: '',
    };

    const handleSubmit = (values, { resetForm }) => {

        // Call the service for login user
        authRegisterUserService(values);
        console.log(values);
        resetForm(); // Optionally reset the form after submission
    };

    const validateForm = (values) => {
        const errors = {};

        const { name, lastname, phone,
            password, user_or_email } = values;

        if (!user_or_email) {
            errors.user_or_email = 'User or email is required';
        }
        if (!password) {
            errors.name = 'Password is required';
        }

        if (!name) {
            errors.name = 'Name is required';
        }
        if (!lastname) {
            errors.lastname = 'Lastname is required';
        }

        if (!phone) {
            errors.phone = 'Phone is required';
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
                            id="user_or_email"
                            name="user_or_email"
                            label="User or Email"
                            error={Boolean(errors.user_or_email)}
                            helperText={<ErrorMessage name="user_or_email" />}
                            InputLabelProps={{
                                style: { color: 'white' },
                            }}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& input': {
                                    color: 'white',
                                    '&::placeholder': {
                                        color: 'white',
                                    },
                                },
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            color="primary"
                            as={TextField}
                            id="password"
                            name="password"
                            label="Password"
                            error={Boolean(errors.password)}
                            helperText={<ErrorMessage name="password" />}
                            InputLabelProps={{
                                style: { color: 'white' }, // Inline style to set the label color to white
                            }}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& input': {
                                    color: 'white',
                                    '&::placeholder': {
                                        color: 'white',
                                    },
                                },
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            color="primary"
                            as={TextField}
                            id="name"
                            name="name"
                            label="Name"
                            error={Boolean(errors.name)}
                            helperText={<ErrorMessage name="name" />}
                            InputLabelProps={{
                                style: { color: 'white' }, // Inline style to set the label color to white
                            }}
                            sx={{
                                width: '100%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& input': {
                                    color: 'white',
                                    '&::placeholder': {
                                        color: 'white',
                                    },
                                },
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            as={TextField}
                            type="lastname"
                            id="lastname"
                            name="lastname"
                            label="Lastname"
                            error={Boolean(errors.lastname)}
                            helperText={<ErrorMessage name="lastname" />}
                            InputLabelProps={{
                                style: { color: 'white' }, // Inline style to set the label color to white
                            }}
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

                    <div style={{ marginBottom: "30px" }}>
                        <Field
                            as={TextField}
                            type="phone"
                            id="phone"
                            name="phone"
                            label="Phone"
                            error={Boolean(errors.phone)}
                            helperText={<ErrorMessage name="phone" />}
                            InputLabelProps={{
                                style: { color: 'white' }, // Inline style to set the label color to white
                            }}
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

                    <Button type="submit" variant="contained" color="primary">
                        Continue
                    </Button>
                </form>
            )}
        </Formik>
    );
}
