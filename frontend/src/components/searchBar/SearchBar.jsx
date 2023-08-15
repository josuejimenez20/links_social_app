import React from 'react';
import { TextField, Grid } from '@mui/material';

export default function SearchBar() {
    return (

        <Grid
            container
            direction='row'
            spacing={2}
            height={90}
            pt={2.4}>
            <Grid item xs={8} width='100%'>
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                        style: { color: 'white' }, // Inline style to set the label color to white
                    }}
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'white', // Sets the border color to white
                            },
                        },
                        '& input': {
                            color: 'white', // Sets the text color to white
                            '&::placeholder': {
                                color: 'white', // Sets the placeholder color to white
                            },
                        },
                    }}
                />
            </Grid>            
            
            <Grid item xs={4} width='100%'>
                <TextField
                    id="outlined-basic"
                    label="Search"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                        style: { color: 'white' }, // Inline style to set the label color to white
                    }}
                    sx={{
                        width: '100%',
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': {
                                borderColor: 'primary', // Sets the border color to white
                            },
                        },
                        '& input': {
                            color: 'white', // Sets the text color to white
                            '&::placeholder': {
                                color: 'white', // Sets the placeholder color to white
                            },
                        },
                    }}
                />
            </Grid>            
        </Grid>
    );
}
