import React, {Component} from 'react';
import {connect} from 'react-redux'
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
        const thisUser = {
            username: this.state.username,
            user_password: this.state.user_password
        }
        axios.post('/auth/login', thisUser)
            .then((res) => {
                if(res.data.success){
                    this.props.store.dispatch({
                        type: 'user',
                        payload: res.data.user
                    })
                this.props.history.push('/dashboard')
                }else{
                    alert("Login error: Check your spelling")
                }
            })

    }
 
    registerUser = () => {
        const newUser = {
            username: this.state.username,
            user_password: this.state.user_password, 
        }
        axios.post('/auth/register', newUser)
        .then((res) => {
            alert("Successful Register")
            this.props.store.dispatch({
                type: "user",
                payload: newUser
            });
            this.setState({
                username: "",
                user_password: "",
            });
            this.props.history.push('/dashboard');
        }).catch(err => {
            alert(`Whoops: ${err}`)
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

                <button onClick={() => {this.loginUser()}}>Login</button>
                <button onClick={() => {this.registerUser()}}>Register</button>
            </div>
        )
    }
}

export default connect(state => state)(Auth)