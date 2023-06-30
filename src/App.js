import React from 'react'
import "./App.css"
import {Route , Routes} from "react-router-dom"
import LandingPage from './pages/LandingPage'
import Inbox from './pages/Inbox'
import Sent from './pages/Sent'
import IndividualEmail from './pages/IndividualEmail'
import DataProvider from './Context/DataContext'

const App = () => {
  return (
    <div className='App'>
      <DataProvider>
      <Routes>
        <Route path = "/" element = {<LandingPage/>}/>
        <Route path="/landingpage" element={<LandingPage />}>
            <Route path="inbox" element={<Inbox />} />
            <Route path="sent" element={<Sent/>}/>
            <Route path="/landingpage/sent/:id" element={<IndividualEmail/>}/>
          </Route>
      </Routes>
      </DataProvider>
      
    </div>
  )
}

export default App

