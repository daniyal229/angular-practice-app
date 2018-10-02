import * as React from 'react';
import { connect } from 'react-redux';
import { Post } from '../models/post.model';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/get_posts.action';
import { Link } from 'react-router-dom';
import MarkedPostsContainer from './marked_posts.container';
import { markPost } from '../actions/mark_post.action';


class PostsContainer extends React.Component<{posts?: Post[], getPosts?: any, markPost?: any}> {
    
    state: { posts: any }
    
    constructor(props: any) {
        super(props)
        this.state = { posts: {} }
    }

    componentDidMount(){
        this.props.getPosts()
    }

    render() {
        let keys = Object.keys(this.props.posts || {})
        let posts = keys.map(
            (key: any) => {
                return (
                    <li className="collection-item">
                        <label>
                            <input type="checkbox" onChange={(event: any) => {
                            this.props.markPost(this.props.posts[key])
                        }} />
                            <span>{this.props.posts[key].title}</span>
                        </label>
                        <Link className="btn btn-primary right" to={`/posts/${key}`}>Show</Link>
                    </li>   
                );
            }
        )
        return (
            <div>
                <div className="row">
                    <h3 style={{display: "inline"}}>Posts</h3>
                    <Link className="btn btn-primary right" to="/posts/new" style={{position: "relative", top: "10px", right: "16px"}}>
                        Add a Post
                    </Link>
                </div>
                <div className="row posts">
                    <div className="col m8 l8 s8">    
                        <div className="row">
                            <div className="col m12 s12 l12" style={{padding: "0px", margin: "0px"}}>
                                <ul className="collection  animated slideInRight">{posts}</ul>
                            </div>
                        </div>
                    </div>
                    <div className="col m4 l4 s4">
                        <MarkedPostsContainer />
                    </div>
                </div>
            </div>
        );
    }
    
}

let mapStateToProps = (state: any) => {
    return {
        posts: state.posts
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators({getPosts: getPosts, markPost: markPost}, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(PostsContainer)