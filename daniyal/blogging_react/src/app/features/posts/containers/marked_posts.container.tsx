import * as React from 'react';
import { connect } from 'react-redux';
import { Post } from '../models/post.model';

class MarkedPostsContainer extends React.Component<{posts: Post[]}> {

    constructor(props: any) {
        super(props);
    }
    
    renderMarkedPostsList() {
        return (this.props.posts || []).map(
            (post: Post) => {
                return (
                    <li className="collection-item animated slideInUp">{post.title}</li>
                );
            }
        )   
    }

    render() {
        return (
            <div>
                
                <ul className="collection  animated slideInRight">
                    <li className="collection-item"><h6 className="center-align">Selected Posts</h6></li>
                    {this.renderMarkedPostsList()}
                </ul>
            </div>
        )
    }
}

let mapStateToProps = (state: any) => {
    return {
        posts: state.markedPosts
    }
}

export default connect(mapStateToProps)(MarkedPostsContainer)

