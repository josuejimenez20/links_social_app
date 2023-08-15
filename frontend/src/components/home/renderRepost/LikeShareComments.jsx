import React from 'react';
import { Grid, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export default function LikeShareComments({
    number_likes = '0',
    number_shares = '0',
    number_messages = '0'
}) {
    return (
        <>
            <Grid container direction='row' mb={3}>
                <Grid item xs={4}>
                    <Grid container direction='row'>
                        <FavoriteIcon color='third' />
                        <Typography color='primary' ml={2}>{number_likes}</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction='row'>
                        <ChangeCircleIcon color='third' />
                        <Typography color='primary' ml={2}>{number_shares}</Typography>
                    </Grid>
                </Grid>

                <Grid item xs={4}>
                    <Grid container direction='row'>
                        <ChatBubbleOutlineIcon color='third' />
                        <Typography color='primary' ml={2}>{number_messages}</Typography>
                    </Grid>
                </Grid>


            </Grid>




        </>
    )
}
