import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { useContext } from 'react'
import { VideoContext } from '../Context/VideoContext'
const IndividualVideo = () => {
  const {videos} = useContext(VideoContext)

  let {id} = useParams()
  return (
    <div>
      {videos.map(video => video.id === Number(id) ?
         <>
          <ReactPlayer url = {video.url}  width = "540px" height= "340px" controls/>
          <h4> Title : {video.title}</h4>
          <p> Description : {video.description}</p>
          <p> Duration :{video.duration}</p>
         </> 
         
         : "")}
    </div>
  )
}

export default IndividualVideo
