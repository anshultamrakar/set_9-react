import React from 'react'
import ReactPlayer from 'react-player'

import {Link} from "react-router-dom"
import { useContext } from 'react'
import { VideoContext } from '../Context/VideoContext'

const VideoListing = () => {
    const {videos , isLoading , handleLike , handleWatchLater , watchLater , likedVideo} = useContext(VideoContext)
  return (
    <div className='App'>
      <h4>All Videos</h4>
      <ul style = {{listStyleType : "none" , display :"flex" , gap : "30px" }}>
        { isLoading ? <p>Loading......</p> : videos.map(video => (
          <li style = {{border : "2px solid black" , padding : "10px"}} key = {video.id}>
            <ReactPlayer url = {video.url} width = "540px" height= "340px" controls/>
             <h4>{video.title}</h4>
             <Link to = {`/videolisting/${video.id}`}>Watch here</Link> <br/>
            <button disabled = {likedVideo.some(like => like.id === video.id) ? true : false} onClick={() => handleLike(video)}>Like</button>
            <button disabled = {watchLater.some(watch => watch.id === video.id) ? true : false} onClick={() => handleWatchLater(video)}> Add to watch later</button>
          </li>
        ))}
      </ul>
    
    </div>
  )
}

export default VideoListing
