import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'
import { deletePost } from '../actions'
import { Link } from 'react-router-dom'

class ShowPost extends Component {

	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.fetchPost(id)
	}

	onDeletePost(){
		const { id } = this.props.match.params;
		this.props.deletePost(id, ()=>this.props.history.push('/'));
	}

	render(){

		const { post } = this.props;

		if(!post)
			return <div>Loading...</div>

		return(
				<div className="mt-2">
					<button className="btn btn-danger" onClick={this.onDeletePost.bind(this)}>
						DeletePost
					</button>
					<Link to="/" className="btn btn-primary float-right">Back To Index</Link>
					<h3>{ post.title }</h3>
					<h6>Category: { post.categories}</h6>
					<p>{ post.content }</p>
				</div>
			);

	}
}

function mapStateToProps({ posts }, ownProps) {
	console.log('xxxxxx',posts)
	return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ShowPost);