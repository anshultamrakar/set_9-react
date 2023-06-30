import React from 'react'
import Navbar from './Navbar'
import { Outlet} from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <header>
      <h1>My mail box </h1>
      </header>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default LandingPage
