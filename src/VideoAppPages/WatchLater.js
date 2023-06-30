import React from 'react'
import { useContext } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'
import { VideoContext } from '../Context/VideoContext'

const WatchLater = () => {
    const {watchLater} = useContext(VideoContext)
  return (
    <div className='App'>
       <h4>Watch Later</h4>
        <ul style = {{listStyleType : "none" , display :"flex" , gap : "30px" }}>
            {watchLater.map(video => (
                <li style = {{border : "2px solid black" , padding : "10px"}} key = {video.id}>
                 <ReactPlayer url = {video.url} width = "540px" height= "340px" controls/>
                  <h4>{video.title}</h4>
                  <Link to = {`/watchlater/${video.id}`}>Watch here</Link> <br/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default WatchLater
