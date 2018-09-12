import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    if(Object.keys(this.props.posts).length === 0)
      return (
          <div className="mt-2">
            <span>No posts</span>
            <Link className="btn btn-primary float-right" to="/posts/new">
              Add a Post
            </Link>
          </div>);

    // console.log(this.props.posts)
    return (
      <div>
        <div className="text-right">
          <Link className="btn btn-primary mt-2" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
          <ul className="list-group">
            { _.map(this.props.posts, post => {
              return(
              <li className="list-group-item" key={post.id}>
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </li>);
            })}
          </ul>
      </div>
    );

  }
}
function mapStateToProps( { posts } ) {
  return { posts }
}
export default connect(mapStateToProps, { fetchPosts })(PostsIndex)