import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav  className='App' >
        <ul style = {{listStyleType : "none"}}>
          <li><Link to = "/landingpage/inbox">Inbox</Link></li>
          <li><Link to = "/landingpage/sent">Sent</Link></li>
        </ul>
    
      <br/>
      
    </nav>
  )
}

export default Navbar
