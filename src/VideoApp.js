import React from 'react'
import "./App.css"
import {Routes , Route} from "react-router-dom"
import Home from "./VideoAppPages/Home"
import VideoListing from './VideoAppPages/VideoListing'
import LikedVideo from './VideoAppPages/LikedVideo'
import Navbar from './VideoAppPages/Navbar'
import WatchLater from './VideoAppPages/WatchLater'
import IndividualVideo from './VideoAppPages/IndividualVideo'
import VideoProvider from './Context/VideoContext'


const VideoApp = () => {
  return (
    <div className = "App">
        <VideoProvider>
            <Navbar/>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/videolisting" element = {<VideoListing/>}/>
                <Route path = "/likedvideo" element = {<LikedVideo/>}/>
                <Route path = "/watchlater" element = {<WatchLater/>}/>
                <Route path = "/watchlater/:id" element = {<IndividualVideo/>}/>
                <Route path = "/likedvideo/:id" element = {<IndividualVideo/>}/>
                <Route path = "/videolisting/:id" element = {<IndividualVideo/>}/>
            </Routes>
        </VideoProvider>
       
    </div>
  )
}

export default VideoApp
