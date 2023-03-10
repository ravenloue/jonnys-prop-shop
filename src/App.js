import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//
import './style.css';
import Home from "./Components/home/home";
import About from './Components/about/about';


function App() {
  return (
    <div>
      <Router>
          <Routes>
               <Route path='/' element={<Home />} />
               <Route path="about" element={<About />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
