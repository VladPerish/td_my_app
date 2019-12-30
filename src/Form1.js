import React from 'react'
import './App.css';
import CV from './CV';


/////////////////////////////////Form update///////////////////////////////////////

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
          name: "Mahmuda Akhter",
          age: "24",
          address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
          school: "Scholars School",
          college: "BISC",
          university: "IUB",
          skills: ["c","f"],
          notify : false
           
        }
    }
    handleChange = (event , field) => {
        
        console.log([field]);
        this.setState({
            [field]: event.target.value,
            notify: false
        })
    }

    handleForm = () => {
        this.setState({
          notify: true
        })
      }
    // injectSkills =() => {
    //   this.setState({
    //     skills
    //   })
    // }
    

    render()
    {
        return(
          <div>
              <input type="text" value={this.state.name} onChange={ (event)=>{this.handleChange(event, 'name') }} placeholder="Name"/>
              <br></br>
              <input type="text" value={this.state.age} onChange={ (event)=>{this.handleChange(event, 'age') }} placeholder="Age"/>
              <br></br>
              <input type="text" value={this.state.address} onChange={ (event)=>{this.handleChange(event, 'address') }} placeholder="Address"/>
              <br></br>
              <input type="text" value={this.state.school} onChange={ (event)=>{this.handleChange(event, 'school') }} placeholder="school"/>
              <br></br>
              <input type="text" value={this.state.college} onChange={ (event)=>{this.handleChange(event, 'college') }} placeholder="College"/>
              <br></br>
              <input type="text" value={this.state.university} onChange={ (event)=>{this.handleChange(event, 'university') }} placeholder="University"/>
              <br/>
              <input type="text" value={this.state.skills} onChange={ (event)=>{this.handleChange(event,'skills')}} placeholder="skills"/>
              <div><button onClick={this.handleForm}>Submit</button></div>
              {this.state.notify && <CV info={this.state} /> }
          </div>
           
        )
    }
}
