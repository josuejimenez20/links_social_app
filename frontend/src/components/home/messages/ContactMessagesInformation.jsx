import React from 'react';
import { Avatar, Grid, Typography, Divider, Button } from '@mui/material';
import { deepOrange } from '@mui/material/colors';


export default function ContactMessagesInformation({
    setUserInformation,
    name,
    user_id_information,
    last_name }) {

    return (
        <>
            <Grid container spacing={2}>

                <Grid item >
                    <Grid container direction='row'>
                        <Button
                            onClick={() => {
                                setUserInformation(user_id_information)
                            }}>

                            <Avatar style={{ bgcolor: deepOrange[500], marginBottom: '5%' }}>OP</Avatar>
                            <Typography variant='body1' color='white' ml={5}>{name} {last_name}</Typography>
                        </Button>
                    </Grid>
                </Grid>
                <Divider style={{ backgroundColor: '#878383', width: '98%', marginBottom: '2%' }} />

            </Grid>
        </>
    )
}
