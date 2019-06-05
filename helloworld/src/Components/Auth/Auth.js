import React, {Component} from 'react';
import axios from 'axios';
import store, {UPDATE_NAME, UPDATE_PASSWORD} from './../../reducer';

class Auth extends Component{
    constructor(props){
        super(props);
        const reduxState = store.getState();
        this.state={
            username: reduxState.username,
            userpassword: reduxState.userpassword
        }
    }

    // eventHandler = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value
    //     })
    // };

    eventHandler = (e) => {
        if (e.target.name === "username"){
            store.dispatch({
                type: UPDATE_NAME,
                payload: e.target.value
            })
        }else if(e.target.name === "userpassword"){
            store.dispatch({
                type: UPDATE_PASSWORD,
                payload: e.target.value
            })
        }
    }

    loginUser = () => {
    
    }
 
    registerUser = () => {
        const newUser = {
            username: this.state.username,
            userpassword: this.state.userpassword
        }
        axios.post('/auth/register', newUser)
        .then(res => {
            alert(res.data);
            console.log("Successful Register")
        }).catch(err => {
            alert(`Whoops: ${err}`)
        })
        this.setState({
            username: "",
            userpassword: "",
            imageurl: ""
        })
      }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
                <input type="text" name="username" 
                value={this.state.username} placeholder="username"
                onChange={this.eventHandler} />

                <input type="password" name="userpassword" 
                value={this.state.userpassword} placeholder="password" 
                onChange={this.eventHandler}/>

                <button onClick={() => {this.loginUser(this.state)}}>Login</button>
                <button onClick={() => {this.registerUser()}}>Register</button>
            </div>
        )
    }
}

export default Auth;