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
        const newUser = {
            username: this.state.username,
            user_password: this.state.user_password
        }
        axios.post('/auth/register', newUser)
        .then(res => {
            console.log(res.data)
            console.log("Successful Register")
        }).catch(err => {
            console.log(`Whoops: ${err}`)
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