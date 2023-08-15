import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { TextField, Grid, Button } from '@mui/material';



export default function FormConsoleMessage({ userInformation }) {

    const initialValues = {
        message: '',
    };

    const handleSubmit = (values, { resetForm }) => {

        console.log(values.message);
        console.log(userInformation);
        resetForm(); // Optionally reset the form after submission
    };

    const validateForm = (values) => {
        const errors = {};

        if (!values.message) {
            errors.message = 'Message is required';
        }

        return errors;
    };


    return (
        <>
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
                                id="message"
                                name="message"
                                label="Message"
                                error={Boolean(errors.message)}
                                helperText={<ErrorMessage name="message" />}
                                disabled={userInformation ? false : true}
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

                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={userInformation ? false : true}>
                                    Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>

        </>
    )
}
