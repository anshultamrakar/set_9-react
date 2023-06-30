import React from 'react'
import { useContext } from 'react'
import { VideoContext } from '../Context/VideoContext'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

const LikedVideo = () => {
    const { likedVideo } = useContext(VideoContext)
 
  return (
    <div className='App'>
       <h4>Liked Videos</h4>
        <ul style = {{listStyleType : "none" , display :"flex" , gap : "30px" }}>
            {likedVideo.map(video => (
                <li style = {{border : "2px solid black" , padding : "10px"}} key = {video.id}>
                  <ReactPlayer  url = {video.url}  width = "540px" height= "340px" controls/>
                  <h4>{video.title}</h4>
                  <Link to = {`/likedvideo/${video.id}`}>Watch here</Link> <br/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default LikedVideo
