import React, {Component} from 'react';
import axios from 'axios';
import Post from './../Post/Post'

class Dashboard extends Component{
    constructor(){
        super();
        this.state={
            searchin: "",
            posts: [],
            includeUserPosts: true
        }
    }

    componentDidMount(){
        this.getPosts();
    }

    getPosts = () => {
        axios.get(`/posts/${this.state.includeUserPosts}/${this.state.searchin}`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    eventHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 

    searchPosts = () => {
        axios.get()
    }

    render(){
        let posts = this.state.posts.map(e => {
            return <Post 
                        postTitle={e.postTitle} 
                        authorPic={e.authorPic} 
                        authorName={e.authorName}/>
        })
        return(
            <div>
                <div className="searchin">
                    <input type="text" name="searchin" value={this.state.searchin} placeholder="Search Posts" /> 
                <button>Search</button>
                <button>Reset</button>
                </div>                
                <div className="Posts">
                    <label>Include My Posts<input checked type="checkbox" /></label>
                    {posts}
                </div>
            </div>
        )
    }
}

export default Dashboard;