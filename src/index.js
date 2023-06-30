import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import BookApp from './BookApp';
 import FoodApp from './FoodApp';
//  import VideoApp from './VideoApp';

import {BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        {/* <App/> */}
        {/* <BookApp/> */}
         {/* <VideoApp/>  */}
         <FoodApp/> 
    </Router>
  </React.StrictMode>
);


