import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import ContactMessagesInformation from './ContactMessagesInformation';

export default function ContactMessages({ setUserInformation }) {

  const { contacts, success }
    = useSelector((state) => state.messages.contacts);

  return (

    <>
      {
        success &&
          contacts.map((contact, index) => {
            return (
              <Grid container key={index}>
                <ContactMessagesInformation 
                name={contact.name}
                last_name={contact.last_name}
                user_id_information={contact.user_id_information}
                setUserInformation={setUserInformation} />
              </Grid>
            )
          })}
    </>
  )
}
