import React from 'react';
import { Grid, Typography, Avatar, Divider } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import LikeShareComments from './LikeShareComments';

export default function Posts({
  owner_post_name = '',
  photo_perfil_user = '',
  date = '',
  text = '',
  path_image = '',
  number_likes = '0',
  number_shares = '0',
  number_messages = '0'
}) {
  return (
    <>
      <Grid container direction='row' spacing={2} alignItems="center" mb={3}>
        <Divider style={{ backgroundColor: '#878383', width: '98%', marginLeft: '2%' }} />
        {/* Here put a horizontal line */}
        <Divider orientation="vertical" flexItem
          style={{ backgroundColor: '#878383', marginLeft: '2%', height: '110%' }} />
        <Grid item xs={1}>
          <Avatar style={{ bgcolor: deepOrange[500], marginBottom: '550%' }}>OP</Avatar>
        </Grid>
        <Grid item xs={10}>
          <Grid container direction='column'>
            <Grid container direction='row' alignItems="center" spacing={1}>
              <Grid item>
                <Typography color="primary"
                  style={{ fontWeight: 'bold' }}>
                  {owner_post_name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography color='primary'>{date}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Typography variant='body1' style={{ color: 'rgb(231, 233, 234)', marginBottom: '5%' }}>
                {text}
              </Typography>

              <LikeShareComments
                number_likes={number_likes}
                number_messages={number_messages}
                number_shares={number_shares}
              />
              {/* Here We put likes and comments */}
            </Grid>
          </Grid>
        </Grid>
        {/* Here put a horizontal line */}
        <Divider orientation="vertical" flexItem
          style={{ backgroundColor: '#878383', marginLeft: '6%' }} />
      </Grid>
    </>
  );
}