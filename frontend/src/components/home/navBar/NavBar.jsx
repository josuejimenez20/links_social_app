import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Grid, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PublicIcon from '@mui/icons-material/Public';
import MessageIcon from '@mui/icons-material/Message';

export default function NavBar() {

    const navigate = useNavigate();

    return (
        <>
            <Grid container item direction='column' mt={3} paddingLeft={40}>
                <Grid item>
                    <HomeIcon color='third' />
                    <Button 
                    variant="text" 
                    color="third"
                    onClick={() => {
                        navigate('/home/posts')
                    }}
                    >
                        <Typography variant='subtitle1' mb={1}>Home</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <PublicIcon color='third' />
                    <Button variant="text" color="third">
                        <Typography variant='subtitle1' mb={1}>Explore</Typography>
                    </Button>
                </Grid>
                <Grid item>
                    <MessageIcon color='third' />
                    <Button 
                    variant="text" 
                    color="third"
                    onClick={() => {
                        navigate('/messages')
                    }}
                    >
                        <Typography variant='subtitle1' mb={1}>Messages</Typography>
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
