import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import ConsoleMessage from './ConsoleMessage';
import ContactMessages from './ContactMessages';

export default function StructureMessages() {

    const [userInformation, setUserInformation] = useState(null);

    return (
        <>
            <Typography color="primary" variant='h3'>Daniela's Messages</Typography>

            <Grid container direction='row'>

                <Grid item xs={6}>
                    <ConsoleMessage userInformation={userInformation} />
                </Grid>
                <Grid item xs={6}>
                    <ContactMessages setUserInformation={setUserInformation} />
                </Grid>

            </Grid>


        </>
    )
}
