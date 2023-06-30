import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

const Favourite = () => {
    const {favBooks} = useContext(BookContext)
   
  return (
    <div>
      <h4>Favourite books</h4>
      <ul className='bookList'>
      {favBooks.map(book => (
        <li className='book' key = {book.id}>
         <img src = {book.image} alt = "bookimage" width = "150" height = "250"/>
          <p>{book.title}</p>
          <p>By : {book.author}</p>
        </li>
      ))}  
      </ul>
     
    </div>
  )
}

export default Favourite
