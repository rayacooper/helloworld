import React, {Component} from 'react';
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

  render(){
    return (
      <div>
          <Router>
            <Nav />
            {routes}
          </Router>           
      </div>
    )
  }
}

export default App;
