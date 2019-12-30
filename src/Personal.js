import React from 'react'

function Personal (props) {
    return (
        <div>
        <h1> Personal information</h1>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Address: {props.address}</h3>
    </div>
    );
    
  }

export default Personal
