import React from 'react'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'


const Inbox = () => {
  const {emails , isLoading , handleMarkRead  } = useContext(DataContext)
 
  return (
    <div>
      <h2>Inbox page</h2>
      {isLoading ? <p>Loading......</p> :
      <>
       <h4>Unread Emails : {emails.filter(email => !email.read).length} </h4>
       <h4>Read Emails :  {emails.filter(email => email.read).length} </h4>
      </> 
       }
     
      <hr/>
      <ul>
         {isLoading ? <p>Loading ......</p> : emails.map(email => (
        <li key = {email.id}>
          <Link>{email.subject}</Link>
          {!email.read ?  <button onClick = {() => handleMarkRead(email.id)}>Mark as read</button> : "" }
        </li>

         ))}
      </ul>
     
    </div>
  )
}

export default Inbox
