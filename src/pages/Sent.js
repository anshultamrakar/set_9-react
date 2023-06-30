import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Sent = () => {
  const {sentEmails} = useContext(DataContext)
  
  return (
    <div>
      <h2>Sent Emails</h2>
      <ul>
      {sentEmails.map(email => (
       <li key = {email.id}>
        <Link to = {`${email.id}`}>{email.subject}</Link>
       </li>
       ))}
      </ul>
    
    </div>
  )
}

export default Sent
