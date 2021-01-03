import React,{useState} from 'react';

const ContactRow =({contact})=>{
const [check, setCheck]=useState(false);

// Display row controls if the checkbox is selected
const handleChange=(e)=>{
  setCheck(!check)
}

// selection box for row controls
const select = <select>
                <option value="select">Email</option>
                <option value="First">Phone</option>
                <option value="Second">Name</option>
              </select>

  return(
    <tr>
      <td data-label='name'> <label className='checkbox-label'><input type='checkbox' value={check} onChange={handleChange} /> </label> {contact.firstName} {contact.lastName} </td>
      <td data-label='phone'>{contact.phone}</td>
      <td data-label='email'>{contact.email}
      <span className='select-span'>{check && select}</span>
      </td>
    </tr>
  )
}

export default ContactRow