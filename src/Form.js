// import React from 'react'
//  import './App.css';
// // import React from 'react';

//  import CV from './CV';
// // //import logo from './logo.svg';
// // import './App.css';

// // let Mahmuda = {
// //   name: "Mahmuda Akhter",
// //   age: "24",
// //   address: "House#120, Road#12, Block#G, South Bonasree, Dhaka-1219",
// //   school: "Scholars School",
// //   college: "Bangladesh International School and college",
// //   university: "IUB"
// // }

// // let Mahua = {
// //   name: "Mahua Akhter",
// //   age: "18",
// //   address: "House#120, Road#12, Block#G, South Bonasree, Dhaka-1219",
// //   school: "Willes Little Flower School",
// //   college: "Academia",
// //   university: "IUB"
// // }




// // function App () {
// //   return (
// //     <div class name = "App" > 

// //       <CV info = {Mahmuda}/>
// //       <CV info = {Mahua}/>
// //     </div>
// //   );
// // }

// // export default App;

// // import React from 'react'


// // //import Props from './Props'
// // import CV from './CV'
// // import './App.css';


// // // function App() {
// // //   return (
// // //     <div className="App">
// // //       <h1>Hello there!!!</h1>
// // //       <Props name = {"Subarna"}/>
// // //       <Props name = {"Sara"}/>
// // //     </div>
// // //   );
// // // }
// //  let Mahmuda = {
// //   name: "Mahmuda Akhter",
// //   age: "24",
// //   address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
// //   school: "Scholars School",
// //   college: "BISC",
// //   university: "IUB"
// // }

// // // let Arpona = {
// // //   name: "Mahua Akhter",
// // //   age: "19",
// // //   address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
// // //   school: "Willes Little Flower School",
// // //   college: "Academia College",
// // //   university: "IUB"
// // // }

// // export default class App extends React.Component () {
// //   constructor(props){
// //     super(props);
// //   }
// //   render(){
// //     return (
// //       <div>
// //         <div>
// //         {/* <h3> Name: <input placeholder = 'Name' value = {this.state.name} onChange = {this.handleChange} ></input></h3> */}
// //       
// //         <CV info = {Mahmuda}/>
// //         </div>
        
// //       </div>
// //     )
// //   }
  
// // }

 

// ///////////////////////////////////

// // export default class App extends React.Component{
// //     constructor(props){
// //         super(props);
// //         this.state = {
// //         Profile:{
// //           name: "Mahmuda Akhter",
// //           age: "24",
// //           address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
// //           school: "Scholars School",
// //           college: "BISC",
// //           university: "IUB"
// //         }
           
// //         }
// //     }
// //     handleChange = (event) => {
// //         console.log(event.target.value);
// //         let prof= this.state.Profile
// //         prof.name=  event.target.value
// //         this.setState({
           
// //             Profile: prof

// //         })
// //     }

// //     ageChange = (event) => {
// //         console.log(event.target.value);
// //         let prof = this.state.Profile
// //         prof.age = event.target.value
// //         this.setState({
// //             Profile :prof

// //         })
// //     }

// //     addressChange = (event) => {
// //         console.log(event.target.value);
// //         let prof = this.state.Profile
// //         prof.address = event.target.value
// //         this.setState({
// //             Profile:prof

// //         })
// //     }

// //     schoolChange = (event) => {
// //       console.log(event.target.value);
// //       let prof = this.state.Profile
// //       prof.school = event.target.value
// //       this.setState({
// //           Profile:prof

// //       })
// //   }

// //   collegeChange = (event) => {
// //     console.log(event.target.value);
// //     let prof = this.state.Profile
// //     prof.college = event.target.value
// //     this.setState({
// //         Profile:prof

// //     })
// // }

// // universityChange = (event) => {
// //   console.log(event.target.value);
// //   let prof = this.state.Profile
// //   prof.university = event.target.value
// //   this.setState({
// //       Profile:prof

// //   })
// // }

// //     // buttonClicked = (event) => {
// //     //     this.setState({
// //     //         show : true
// //     //     })

// //     // }
// //     render()
// //     {
// //        // console.log("hi")
// //         return(
// //           <div>
// //               <h3> Name: <input placeholder = 'Name' value = {this.state.Profile.name} onChange = {this.handleChange}  ></input></h3>
// //               <h3> Age: <input placeholder = 'age' value = {this.state.Profile.age} onChange = {this.ageChange}  ></input></h3>
// //               <h3> Address: <input placeholder = 'address' value = {this.state.Profile.address} onChange = {this.addressChange}  ></input></h3>
// //               <h3> School: <input placeholder = 'school' value = {this.state.Profile.school} onChange = {this.schoolChange}  ></input></h3>
// //               <h3> College: <input placeholder = 'college' value = {this.state.Profile.college} onChange = {this.collegeChange}  ></input></h3>
// //               <h3> University: <input placeholder = 'university' value = {this.state.Profile.university} onChange = {this.universityChange}  ></input></h3>
// //               <CV info={this.state.Profile} />
// //           </div>
           
// //         )
// //     }
// // }



// // ///////////////////////////////////



// ///////////////////////////////////////////

// /////////////////////////////////Form update///////////////////////////////////////

// export default class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
        
//           name: "Mahmuda Akhter",
//           age: "24",
//           address: "House#140, Road#12, Block#G, South Bonasree, Dhaka-1219",
//           school: "Scholars School",
//           college: "BISC",
//           university: "IUB",
//           notify : false
           
//         }
//     }
//     handleChange = (event , field) => {
//         //console.log(event.target.value);
//         //let prof= this.state.Profile
//         //prof.name=  event.target.value
//         console.log([field]);
//         this.setState({
//             [field]: event.target.value,
//             notify: false
//             //Profile: prof

//         })
//     }

//     handleForm = () => {
//         this.setState({
//           notify: true
//         })
//       }
    

// //     ageChange = (event) => {
// //         console.log(event.target.value);
// //         let prof = this.state.Profile
// //         prof.age = event.target.value
// //         this.setState({
// //             Profile :prof

// //         })
// //     }

// //     addressChange = (event) => {
// //         console.log(event.target.value);
// //         let prof = this.state.Profile
// //         prof.address = event.target.value
// //         this.setState({
// //             Profile:prof

// //         })
// //     }

// //     schoolChange = (event) => {
// //       console.log(event.target.value);
// //       let prof = this.state.Profile
// //       prof.school = event.target.value
// //       this.setState({
// //           Profile:prof

// //       })
// //   }

// //   collegeChange = (event) => {
// //     console.log(event.target.value);
// //     let prof = this.state.Profile
// //     prof.college = event.target.value
// //     this.setState({
// //         Profile:prof

// //     })
// // }

// // universityChange = (event) => {
// //   console.log(event.target.value);
// //   let prof = this.state.Profile
// //   prof.university = event.target.value
// //   this.setState({
// //       Profile:prof

// //   })


//     // buttonClicked = (event) => {
//     //     this.setState({
//     //         show : true
//     //     })

//     // }
//     render()
//     {
//        // console.log("hi")
//         return(
//           <div>
//               {/* <h3> Name: <input placeholder = 'Name' value = {this.state.Profile.name} onChange = {this.handleChange}  ></input></h3> */}
//               <input type="text" value={this.state.name} onChange={ (event)=>{this.handleChange(event, 'name') }} placeholder="Name"/>
//               <br></br>
//               <input type="text" value={this.state.age} onChange={ (event)=>{this.handleChange(event, 'age') }} placeholder="Age"/>
//               <br></br>
//               <input type="text" value={this.state.address} onChange={ (event)=>{this.handleChange(event, 'address') }} placeholder="Address"/>
//               <br></br>
//               <input type="text" value={this.state.school} onChange={ (event)=>{this.handleChange(event, 'school') }} placeholder="school"/>
//               <br></br>
//               <input type="text" value={this.state.college} onChange={ (event)=>{this.handleChange(event, 'college') }} placeholder="College"/>
//               <br></br>
//               <input type="text" value={this.state.university} onChange={ (event)=>{this.handleChange(event, 'university') }} placeholder="University"/>
//               {/* <h3> Age: <input placeholder = 'age' value = {this.state.Profile.age} onChange = {this.ageChange}  ></input></h3>
//               <h3> Address: <input placeholder = 'address' value = {this.state.Profile.address} onChange = {this.addressChange}  ></input></h3>
//               <h3> School: <input placeholder = 'school' value = {this.state.Profile.school} onChange = {this.schoolChange}  ></input></h3>
//               <h3> College: <input placeholder = 'college' value = {this.state.Profile.college} onChange = {this.collegeChange}  ></input></h3>
//               <h3> University: <input placeholder = 'university' value = {this.state.Profile.university} onChange = {this.universityChange}  ></input></h3> */}
//               <div><button onClick={this.handleForm}>Submit</button></div>
//               {this.state.notify && <CV info={this.state} /> }
//           </div>
           
//         )
//     }
// }
