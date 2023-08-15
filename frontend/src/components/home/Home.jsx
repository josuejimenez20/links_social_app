import React, { useEffect } from 'react';
import SearchBar from '../searchBar/SearchBar';
import { Grid } from '@mui/material';
import NavBar from './navBar/NavBar';
import SubHomeRouter from '../../routes/home/SubHomeRouter';
import { postsGetAllServices } from '../../webSocketLinks/socketServices/postsServices/postsGetServices';


export default function Home() {

    useEffect(() => {
        postsGetAllServices();
    }, []);

    // Call the service for get the posts

    return (
        <>
            <Grid container spacing={2}>
                <SearchBar />
                <Grid container item direction='row' mt={3}>

                    <Grid item xs={4}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={4}>
                        <SubHomeRouter />
                    </Grid>
                    <Grid item xs={3}>
                        {/* News */}
                    </Grid>

                    {/* Here We'll put on the rigth the nav bar, 
                    second the homeRoutes and third something
                    i think that's good like: news, or trends */}

                </Grid>
            </Grid>
        </>
    )
}
