import React from 'react'
import {useContext} from "react"
import { BookContext } from '../Context/BookContext'
import Navbar from './Navbar'

const Home = () => {
    const{bookItems , isLoading , handleAddToFav , handleMarkRead , favBooks , readBooks} = useContext(BookContext)
    
  return (
    <div className='App'>
        <Navbar/>
        <h1>All Books</h1>
        <ul  className='bookList'>
        { isLoading ? <p>Loading.......</p> : bookItems.map(book => (
          <li className='book' key = {book.id}>
          <img src = {book.image} alt = "bookimage" width = "150" height = "250"/>
          <p>{book.title}</p>
          <p>By : {book.author}</p>
          <button disabled = {readBooks.some(read => read.id === book.id) ? true : false}  onClick = {() => handleMarkRead(book)}> {readBooks.some(read => read.id === book.id) ? "Already Read" : "Mark as read"}</button>
          <br/>
          <button disabled = { favBooks.some(fav => fav.id === book.id) ? true : false} onClick={() => handleAddToFav(book)}>{favBooks.some(fav => fav.id === book.id) ? 'Go to Fav' : 'Add to Favorites'}</button>
          </li>
         ))}
        </ul>
    </div>
  )
}

export default Home
