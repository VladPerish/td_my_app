import React from 'react';
import logo from './logo.svg';
import './App.css';



function Clock() {
    const element = (
      <div>
        <h1>Lesson 3</h1>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  
    return element
  // ReactDOM.render(element, document.getElementById('root'));
  }
  

  
  

export default Clock;