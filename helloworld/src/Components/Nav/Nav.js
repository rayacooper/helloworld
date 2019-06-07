import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './Nav.css'

class Nav extends Component{
    render(){
        return(
            <div className="Main Body">
                <div className="links">
                    <Link to="/dashboard">Home</Link>
                    <Link to="/new">New Post</Link>
                    <Link to="/">Logout</Link>
                </div>
                <div className="Photo"><img src = {this.props.user.imageurl} alt="User Profile Pic"/>></div>
                <h1>{this.props.user.username}</h1>
            </div>
        )
    }
}

export default connect(state => state)(Nav);