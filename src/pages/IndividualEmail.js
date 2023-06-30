import React from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../Context/DataContext'
import { useContext } from 'react'
 
const IndividualEmail = () => {
  const {sentEmails} = useContext(DataContext)
  let {id} = useParams()
 
  return (
    <div>
        {sentEmails.map(email => email.id === Number(id) ? 
        <div key = {email.id}>
        <h2>{email.subject} !</h2>
        <h4>From : {email.to}</h4>
        <h4>Message : {email.message}</h4>
        </div> 
        : "")}
    </div>
  )
}

export default IndividualEmail