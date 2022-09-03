import React from 'react';
import Avatar from "./Avatar";
export default class Post extends React.Component
{
    constructor(props) {
        super(props);
    }
    render() {
        let post = this.props.post;
        let profile = post.profile;
        return(
            <div>
                {post.text}
                <Avatar profile={profile}/>
                <div> Comment</div>
            </div>
        );

    }
}