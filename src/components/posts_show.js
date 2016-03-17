import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {fetchPost, deletePost} from '../actions/index';


class PostsShow extends Component {
    componentWillMount() {
        this.props.fetchPost(this.props.params.id);
    }

    render() {
        const {post} = this.props;
        if (!post || post.id != this.props.params.id){
            return (<div>Loading....</div>)
        }
        return (
            <div>
                <Link to="/" >Back To Posts</Link>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }
}
function mapStateToProps(state)
{
    return {post: state.posts.post};
}
export default connect( mapStateToProps, {deletePost, fetchPost})(PostsShow);
