import React from 'react';
import logo from './logo.svg';
import './App.css';
import request from 'superagent'



export default class App extends React.Component {




 constructor(props){
   super(props);
   this.state = {
     serverResponseText: 'Not found',
     serverResponseCode: 404,
     currentItem: 'Enter text',
    };
   this.handleChange = this.handleChange.bind(this);

 }

 handleSubmit = event => {
   event.preventDefault()
   console.log('event')
   console.log(event)

   var currentContext = this

   request
   .post('http://localhost:5000/data')
   .set('Content-Type', 'application/json')
   .send({ username: this.state.currentItem  })
   .end(function(err, res){
     if (res) {
        console.log(res);
        currentContext.setState({
          serverResponseText: res.text,
          serverResponseCode: res.statusCode

        })
     } else {
          console.log("error")
          console.log(err)
     }
   });
 };

 handleChange = e => {
   e.preventDefault()
   console.log("E value is")
   console.log(e)
   this.setState({
     currentItem: e.target.value,
   })
 }



 render() {
   return (
     <div align="center" top-padding="50px" >
       <form>
         <label htmlFor="username">username</label>
         <input
           type="text"
           name="username"
           value={this.state.currentItem}
           onChange={this.handleChange}
         />

         <button onClick={this.handleSubmit} type="submit">Submit</button>
       </form>

       <h3>Response message from server is: {this.state.serverResponseText}</h3>
       <h3>Response code from server is: {this.state.serverResponseCode}</h3>
     </div>
   );
 }
}
