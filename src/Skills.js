import React from 'react'

function Skills (props) {
   // alert (props.skills)
    let skills = props.skills
    if (skills.length === 0){
        skills = ""
        return null
    }
    // else if (ski){}
    
    console.log("test",skills)
    let skillset = skills.split(',')

    let Skills = skillset.map((skill) =>
    <li key={skill}>
      {skill}
    </li>
    );
    return (
        <ul>{Skills}</ul>
    );
    
  }

export default Skills