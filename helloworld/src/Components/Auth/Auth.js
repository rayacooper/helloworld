import React, {Component} from 'react';
import axios from 'axios';

class Auth extends Component{
    constructor(props){
        super(props);

        this.state={
            username: "",
            user_password: ""
        }
    }

    eventHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    registerUser = () => {
        debugger
        axios.post('/auth/register', this.state)
        .then(res => {
            console.log(JSON.stringify(res.data))
            console.log("Successful Register")
        })
      }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <input type="text" name="username" 
                value={this.state.username} placeholder="username"
                onChange={this.eventHandler} />

                <input type="password" name="user_password" 
                value={this.state.user_password} placeholder="password" 
                onChange={this.eventHandler}/>

                <button onClick={() => {this.props.loginUser(this.state)}}>Login</button>
                <button onClick={() => {this.registerUser()}}>Register</button>
            </div>
        )
    }
}

export default Auth;