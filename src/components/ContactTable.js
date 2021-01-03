import React, { useEffect, useState } from 'react';
import TableList from './TableList';

const ContactTable = () => {

  // initialize state for contacts list
  const [ contacts, setContacts ] = useState([]);
  
// Get data from api and store in state
  useEffect(()=>{
    
    fetch("https://cors-anywhere.herokuapp.com/https://sahmed93846.api-us1.com/api/3/contacts?status=-1&orders%5Bemail%5D=ASC", {
      "method": "GET",
      "headers": {
        'Api-Token': process.env.REACT_APP_API_KEY,
        'Accept': 'json'
      }
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      setContacts(data.contacts)
    })
    .catch(err => {
      console.error(err);
    });
  }, [])

  return (
    <div className='table-container'>
      <div className='header'><h1>Contact List</h1></div>
      <TableList
        contacts={contacts}
      />
    </div>
  )
}

export default ContactTable