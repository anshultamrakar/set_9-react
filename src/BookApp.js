import React from 'react'
import "./App.css"
import Home from './BookAppPages/Home'
import Favourite from './BookAppPages/Favourite'
import Read from './BookAppPages/Read'
import Profile from './BookAppPages/Profile'
import {Routes , Route} from "react-router-dom"
import BookProvider from './Context/BookContext'

const BookApp = () => {
  return (
    <div className='App'>
        <BookProvider>
        <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/fav" element = {<Favourite/>}/>
            <Route path = "/read" element = {<Read/>}/>
            <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
        </BookProvider>
        
    </div>
  )
}

export default BookApp
