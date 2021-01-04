import React from 'react';
import ContactRow from './ContactRow'


// Map through the contact list in the tableusing ContacRow component
const TableList = ({contacts})=>{
  const rows = contacts.map(contact => {
    return (
      <ContactRow key={contact.id} contact={contact}/>
    )
  })

  return (
    <table className='contact-table'>
      <thead >
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

export default TableList