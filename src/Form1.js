import React from 'react'
import './App.css';
import CV from './CV';


/////////////////////////////////Form update///////////////////////////////////////

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        
          name: "Mahmuda Akhter",
          sex: "Female",
          age: "24",
          address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
          school: "Scholars School",
          college: "BISC",
          university: "IUB",
          skills: "ghg , hfhj",
          terms: true,
          notify : false
           
        }
    }
    handleChange = (event , field) => {
        
        console.log([field]);
        // const target = event.target;
        event.target.value = field === 'checkbox' ? event.target.checked : event.target.value;
        // const terms = target.terms;
        // console.log(terms)

        this.setState({
            [field]: event.target.value,
            notify: false
        })
    }

    handleForm = () => {
        this.setState({
          notify: true
        })
        // event.preventDefault();
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
            <label>Name
            <input type="text" value={this.state.name} onChange={ (event)=>{this.handleChange(event, 'name') }} placeholder="Name"/>
            </label>
              <br></br>
              <label>
                Sex
                <select value = {this.state.sex} onChange= { (event)=>{this.handleChange(event, 'sex') }} placeholder =  "Sex">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  {/* <option value="1995">1995</option>
                  <option value="1996">1996</option>
                  <option value="1997">1997</option>
                  <option value="1998">1998</option>
                  <option value="1999">1999</option>
                  <option value="2000">2000</option> */}

                </select>
              </label>
              <br/>
              <label>
                Age
                <input type="text" value={this.state.age} onChange={ (event)=>{this.handleChange(event, 'age') }} placeholder="Age"/>
              </label>
              <br></br>
              <label> Address
                 <input type="text" value={this.state.address} onChange={ (event)=>{this.handleChange(event, 'address') }} placeholder="Address"/>
              </label>
              <br></br>
              <label>
                School
                <input type="text" value={this.state.school} onChange={ (event)=>{this.handleChange(event, 'school') }} placeholder="school"/>
              </label>
              <br></br>
              <label> 
                Collage 
                <input type="text" value={this.state.college} onChange={ (event)=>{this.handleChange(event, 'college') }} placeholder="College"/>
              </label>
              <br></br>
              <label>
                University
                <input type="text" value={this.state.university} onChange={ (event)=>{this.handleChange(event, 'university') }} placeholder="University"/>
              </label>
              <br/>
              <label>skills
                <input type="text" value={this.state.skills} onChange={ (event)=>{this.handleChange(event,'skills')}} placeholder="skills"/>
              </label>
              <br/>
              <label></label>
              <input name="terms" type="checkbox" checked={this.state.terms} onChange={ (event)=>{this.handleChange(event,'terms')}}/>
              <label> I have read and agree to the Terms of Service</label>
              <br/>
              <div><button onClick={this.handleForm}>Submit</button></div>
              {this.state.notify && <CV info={this.state} /> }
          </div>
           
        )
    }
}


// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('Your favorite flavor is: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }