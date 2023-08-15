import React, { useEffect } from 'react';
import FormConsoleMessage from './FormConsoleMessage';
import { Divider, Grid } from '@mui/material';


export default function ConsoleMessage({ userInformation }) {

  useEffect(() => {
    console.log(userInformation);
  }, [userInformation])

  return (
    <>

      <Grid item>

        <Grid item height={500}> </Grid>


        <Divider style={{ backgroundColor: '#2196f3', marginBottom: '30px' }} />
        <FormConsoleMessage userInformation={userInformation} />
      </Grid>
    </>
  )
}
