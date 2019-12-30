
// export default CV;

import React from 'react';

//import Academic from './Academic'
//import Personal from './Personal'

import Academic from './Academic'
import Personal from './Personal'
import Skills from './Skills'

import './App.css';


function CV(props) {
    console.log(props)
  return (
    <div className="CV">
      <Personal name = {props.info.name}  age = {props.info.age} address = {props.info.address} />
      <Academic schoolName = {props.info.school}  college = {props.info.college} university = {props.info.university}/>
      <Skills skills = {props.info.skills} />
      
    </div>
  );
}

export default CV
