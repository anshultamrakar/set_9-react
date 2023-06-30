import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Navbar = () => {
  const {readBooks , favBooks} = useContext(BookContext)
    
  
    
  return (
    <div style = {{textAlign : "center" , margin : "40px"}}>
     <Link to = "/">Home</Link>  ||
     <Link to = "/fav">Favourite ({favBooks.length})</Link> ||
     <Link to = "/read">Read ({readBooks.length})</Link> ||
     <Link to = "/profile">Profile</Link> ||
    </div>
  )
}

export default Navbar
