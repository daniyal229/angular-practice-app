import * as React from 'react';
import { connect } from 'react-redux';
import { Post } from '../models/post.model';
import { bindActionCreators } from 'redux';
import { getPosts } from '../actions/get_posts.action';
import { Link } from 'react-router-dom';


class PostsContainer extends React.Component<{posts?: Post[], getPosts?: any}> {
    
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
                return <li className="collection-item">{this.props.posts[key].title}</li>
            }
        )
        return (
            <div className="row animated slideInRight">
                <h3>Posts</h3>
                <Link className="btn btn-primary right" to="/posts/new" style={{position: "relative", top: "10px"}}>
                    Add a Post
                </Link>
                <div className="col m12 s12 l12" style={{padding: "0px", margin: "0px"}}>
                    <ul className="collection">{posts}</ul>
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
    return bindActionCreators({getPosts: getPosts}, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(PostsContainer)