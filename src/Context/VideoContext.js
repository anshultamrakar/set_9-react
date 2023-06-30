import { createContext } from "react";
import {useState, useEffect} from "react"
import 'react-toastify/dist/ReactToastify.css';
import { fakeFetch } from "../api/fakefetch3";
 
export const VideoContext = createContext() 

const VideoProvider = ({children}) =>  {
    const [videos , setVideos] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    const [likedVideo , setLikeVideo] = useState([])
    const [watchLater , setWatchLater] = useState([])
         

     const getVideoData = async() => {
       try{
         const {status , data} = await fakeFetch("https://example.com/api/videos")
         if(status === 200){
            setVideos(data.videos)
            setIsLoading(false)
         }
       }catch(err){
        console.error(err)
       } 
     }

     useEffect(() => {
        getVideoData()
     },[])

 

     const handleLike = (video) => {
        if(likedVideo.some(like => like.id === video.id)){
          setLikeVideo(likedVideo.filter(like => like.id !== video.id))
        } else {
          setLikeVideo([...likedVideo , video ])
        }
        
     }

     const handleWatchLater = (video) => {
        if(watchLater.some(like => like.id === video.id)){
          setWatchLater(watchLater.filter(like => like.id !== video.id))
        } else {
          setWatchLater([...watchLater , video ])
        }
     }


   return(
        <VideoContext.Provider value = {{videos , isLoading , handleLike , handleWatchLater , likedVideo , watchLater }}>
         {children}
        
        </VideoContext.Provider>
   )
}

export default VideoProvider