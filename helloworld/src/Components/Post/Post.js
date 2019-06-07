import React, {Component} from 'react';

class Post extends Component{
    render(){
        return(
            <div>Post title, author name, author pic
                <h2>{this.props.postTitle}</h2>
                <img src={this.props.authorPic} alt="Author's Profile Image"/>
                <p>{this.props.authorName}</p>
            </div>
        )
    }
}

export default Post;