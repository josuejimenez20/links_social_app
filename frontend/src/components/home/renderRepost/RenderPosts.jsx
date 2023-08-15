import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Posts from './Posts';

export default function RenderPosts() {

  const { posts }
    = useSelector((state) => state.posts.get);

  useEffect(() => {
    console.log(posts);
  }, [posts])

  return (
    <>
      {
        posts ?

        posts.map((post, index) => {
            return (
              <Grid container key={index}>
                <Posts 
                owner_post_name={post.name}
                date={post.date}
                text={post.text}
                number_likes={post.likes}
                number_messages={post.messages}
                number_shares={post.shares}
                />
              </Grid>
            )
          })
          : <></>}
    </>
  )
}
