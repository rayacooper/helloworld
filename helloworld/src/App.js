import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import routes from './Components/Routes';

class App extends Component{
  constructor(){
    super();
    this.state={
      username: "",
      imageurl: "",
      password: ""
    }
  }
  
  loginUser = (obj) => {
    axios.get('/auth/user', obj)
    .then((res) => {
      console.log(res.data)
      alert('Successful Login')
    })
  }

  render(){
    
    return (
      <div>
        <Router>
          <Nav />
          {routes}
        </Router>   
      </div>
    );
  }
}

export default App;
