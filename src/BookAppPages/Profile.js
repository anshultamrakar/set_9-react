import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Profile = () => {
  const {user} = useContext(BookContext)
  const {name , bio , img } = user
  return (
    <div>
      <h4>Profile</h4>
       <img src = {img} alt = "profile" width = "450" height = "300"/>
       <h4>{name}</h4>
       <p>{bio}</p>
    </div>
  )
}

export default Profile
