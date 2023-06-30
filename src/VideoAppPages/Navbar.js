import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { VideoContext } from '../Context/VideoContext'

const Navbar = () => {
    const {likedVideo , watchLater} = useContext(VideoContext)
  return (
    <div className='navbar'>
      <Link to = "/">Home</Link>
      <Link to = "/videolisting">Video listing</Link>
      <Link to = "/likedvideo">Liked Videos ({likedVideo.length})</Link>
      <Link to = "/watchlater">Watch Later ({watchLater.length})</Link>
    </div>
  )
}

export default Navbar
