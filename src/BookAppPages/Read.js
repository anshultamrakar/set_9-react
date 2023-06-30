import React from 'react'
import {useContext} from "react"
import { BookContext } from '../Context/BookContext'

const Read = () => {
    const {readBooks} = useContext(BookContext)
  return (
    <div>
      <h2>Read Books</h2>
      <ul className='bookList'>
      { readBooks.map(book => (
        <li className='book' key = {book.id}>
          <img src = {book.image} alt = "bookimage" width = "150" height = "250" />
          <p>{book.title}</p>
          <p>By : {book.author}</p>
        </li>
      ))}
      </ul>
   
    </div>
  )
}

export default Read
