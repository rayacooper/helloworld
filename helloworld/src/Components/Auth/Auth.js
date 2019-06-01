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

    loginUser = () => {
        axios.get('/auth/user', this.state)
        .then((res) => console.log(res.data))
    }

    render(){
        return(
            <div>
                <input type="text" name="username" 
                value={this.state.username} placeholder="username"
                onChange={this.eventHandler} />

                <input type="password" name="user_password" 
                value={this.state.user_password} placeholder="password" 
                onChange={this.eventHandler}/>
                <button onClick={() => {this.loginUser}}>Login</button>
            </div>
        )
    }
}

export default Auth;