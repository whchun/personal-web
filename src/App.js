import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from './logo.svg';
import './App.css';

import About from './About';

import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div className="about-component">
      <About />
      <div className="next-component">
        {/* <FontAwesomeIcon icon={faAngleDown} /> */} 
      </div>
    </div>
  );
}

export default App;
