import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import SearchBar from '../../searchBar/SearchBar';
import NavBar from '../navBar/NavBar';
import StructureMessages from './StructureMessages';
import { messagesGetContactsServices } from '../../../webSocketLinks/socketServices/messages/messagesContactsSevices';
import { getAuthToken } from '../../../helpers/authToken/authTokenHelper';


export default function MessagesHome() {

    useEffect(() => {
        const userToken = getAuthToken();
        messagesGetContactsServices(userToken);
    }, [])


    return (
        <>
            <Grid container spacing={2}>
                <SearchBar />
                
                <Grid container item mt={3}>

                    <Grid item xs={4}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={8}>
                        <StructureMessages />
                    </Grid>

                    {/* Here We'll put on the rigth the nav bar, 
                    second the homeRoutes and third something
                    i think that's good like: news, or trends */}

                </Grid>
            </Grid>
        </>
    )
}
