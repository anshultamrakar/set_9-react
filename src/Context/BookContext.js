import { createContext } from "react";
import { fakeFetch } from "../api/fakefetch2";
import {useState , useEffect} from "react"

export const BookContext = createContext()

const BookProvider = ({children}) => {
  const [bookItems , setBookItems ] = useState([])
  const [readBooks , setReadBooks] = useState([])
  const [favBooks , setFavBooks] = useState([])
  const [user , setUser ] = useState([])
  const [isLoading , setIsLoading] = useState(true)

  const getData = async() => {
     try{
      const {data , status } = await fakeFetch("https://example.com/api/books")
      if(status === 200){
        setBookItems(data.books)
        setUser(data.user)
        setIsLoading(false)
      }
     }catch(err){
        console.error(err)
     }
  }

  const handleAddToFav = (book) => {
     if(favBooks.some(fav => fav.id === book.id)){
      setFavBooks(favBooks.filter(fav => fav.id !== book.id))
     }else{
      setFavBooks([...favBooks , book])
     }
  }

  const handleMarkRead = (book) => {
    if(readBooks.some(read => read.id === book.id)){
      setReadBooks(readBooks.filter(read => read.id !== book.id))
    }else {
      setReadBooks([...readBooks , book])
    }
  }

  useEffect(() => {
    getData()
  },[])

    return(
        <BookContext.Provider value = {{bookItems , isLoading , handleAddToFav , handleMarkRead , readBooks , favBooks , user }}>
         {children}
        </BookContext.Provider>
    )
}

export default BookProvider