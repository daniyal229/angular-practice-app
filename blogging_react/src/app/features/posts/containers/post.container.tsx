import * as React from 'react';
import { connect } from 'react-redux';
import { Post } from '../models/post.model';
import { getPost } from '../actions/get_post.action';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/delete_post.action';

class PostContainer extends React.Component<{post: Post, history?: any, getPost: any, deletePost: any, match?: { params: {id: number }}}> {

    componentDidMount(){
        this.props.getPost(this.props.match.params.id);
    }

    constructor(props: any) {
        super(props)
        this.removePost = this.removePost.bind(this);
    }

    removePost(id: number) {
        this.props.deletePost(id, (success: any) => {
            this.props.history.push("/")
        })
    }

    render() {
        if(!!this.props.post)
            return (
                <div className="row">
                    <div className="col s12">
                        <h4>Title:</h4>
                        <h5>{this.props.post.title}</h5>
                        <h4>Categories:</h4>
                        <h5>{this.props.post.categories}</h5>
                        <h4>Content:</h4>
                        <p>{this.props.post.content}</p>
                        <button onClick={() => this.removePost(this.props.post.id)} className="btn btn-red left">Delete Post</button>
                        <Link className="btn btn-primary right" to = "/">Back</Link>
                    </div>
                </div>
            )
        else 
            return <div className="row">Loading ... </div>
    }
}

export default connect((state: any) => {
    return {
        post: state.selectedPost
    }
}, { getPost, deletePost })(PostContainer)