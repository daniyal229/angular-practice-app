import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Post } from '../models/post.model';
import { createPost } from '../actions/create_post.action';
import { connect } from 'react-redux';

class CreatePostContainer extends React.Component<{createPost: any, history: any} & InjectedFormProps<Post>>{


    onSubmit(values: Post) {
        this.props.createPost(new Post(values), () => {
            this.props.history.push("/")
        })
    }
    
    render() {
        return (
            <div className="row remove-margins">
                <form  className="col s12" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="row remove-margins">
                        <div className="input-field col s12">
                            <h6>Title</h6>
                            <Field 
                                name="title"
                                id="title"
                                component={(field) => {
                                    return (
                                    <div>
                                        <input {...field.input} name="title" id="title" type="text" className="validate" />
                                        <span className="helper-text" data-error="wrong" data-success="right">{field.meta.touched? field.meta.error : ''}</span>
                                    </div>)
                                }}
                                type="text"
                                className="validate"
                            />
                        </div>
                    </div>
                    <div className="row remove-margins">
                        <div className="input-field col s12">
                            <h6>Categories</h6>
                            <Field 
                                name="categories"
                                id="categories"
                                component={(field: any) => {
                                    return (
                                    <div>
                                        <input {...field.input} name="categories" id="categories" type="text" className="validate" />
                                        <span className="helper-text" data-error="wrong" data-success="right">{field.meta.touched? field.meta.error : ''}</span>
                                    </div>
                                    )
                                }}
                                type="text"
                                className="validate"
                            />
                        </div>
                    </div>
                    <div className="row remove-margins">
                        <div className="input-field col s12">
                            <Field 
                                name="content"
                                id="content"
                                component={(field: any) => {
                                    return (
                                        <div>
                                        <textarea placeholder="Please enter some content here ..." {...field.input} id="content" name="content" style={{margin: "0px", height: "183px"}} className="validate w-100"></textarea>
                                        <span className="helper-text" data-error="wrong" data-success="right">{field.meta.touched? field.meta.error : ''}</span>
                                        </div>
                                    )
                                }}
                                className="validate"
                            />
                            
                        </div>
                    </div>
                    <div className="row remove-margins">
                        <div className="input-field col s12">
                            <input type="submit" className="btn btn-primary left" value="Create Post" />
                            <Link className="btn red right" to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

let validate = (values: Post) => {
    let post = new Post(values);
    return post.getErrors()
}

let createPostsForm = reduxForm({ 
    form: 'CreatePostsForm',
    validate: validate 
})(
    connect(null, { createPost })(CreatePostContainer)
);


export { createPostsForm as CreatePostContainer}