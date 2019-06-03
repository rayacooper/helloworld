import React, {Component} from 'react';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Dashboard from './Components/Dashboard/Dashboard';
import Auth from './Components/Auth/Auth';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post'

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
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={Form} />
            <Route path="/post/:postid" component={Post}/>
            <Route path="/" component={Auth} />
           </Switch>
        </Router>   
      </div>
    );
  }
}

export default App;
