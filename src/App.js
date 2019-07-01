import React from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'



export default class App extends React.Component {




 constructor(props){
   super(props);
   this.state = { username: '' };
   request
   .post('http://localhost:5000/data')
   .set('Content-Type', 'application/json')
   .send({ username: "username" })
   .end(function(err, res){
     if (res) {
       console.log(res.text);
     } else {
       console.log("Got error")
       console.log(err);
     }
   });
 }

 handleChange = event => {
   this.setState({ username: event.target.value });
 };

 render() {
   return (
     <div align="center" top-padding="50px">
       <form>
         <label htmlFor="username">username</label>
         <input
           type="text"
           name="username"
           value={this.state.username}
           onChange={this.handleChange}
         />
       </form>

       <h3>Your username is: {this.state.username}</h3>
     </div>
   );
 }
}
