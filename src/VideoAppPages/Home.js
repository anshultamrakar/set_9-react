import React from 'react'
import { useContext } from 'react'
import { VideoContext } from '../Context/VideoContext'
import { Link } from 'react-router-dom'

const Home = () => {
    const {videos} = useContext(VideoContext)
  
  return (
    <div className='App'>
      <h2>Welcome to Video Library </h2>
      <h4>To browse all videos , click the below button or go to the videos page !! </h4>
       <Link to ="/videolisting"><button>Explore videos</button></Link>
    </div>
  )
}

export default Home
