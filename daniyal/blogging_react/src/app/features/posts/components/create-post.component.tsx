import * as React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import { Post } from '../models/post.model';

class CreatePostComponent extends React.Component<InjectedFormProps<Post>> {
    
    onSubmit(values: Post) {
        console.log(values);
    }
    
    render() {
        return (
            <div className="row">
                <form  className="col s12" onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))}>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6>Title</h6>
                            <Field 
                                name="title"
                                id="title"
                                component={(field: any) => {
                                    return (
                                    <div>
                                        {field.meta.error}
                                        <input {...field.input} name="title" id="title" type="text" className="validate" />
                                    </div>)
                                }}
                                type="text"
                                className="validate"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <h6>Categories</h6>
                            <Field 
                                name="categories"
                                id="categories"
                                component={(field: any) => {
                                    return (
                                    <div>
                                        {field.meta.error}
                                        <input {...field.input} name="categories" id="categories" type="text" className="validate" />
                                    </div>
                                    )
                                }}
                                type="text"
                                className="validate"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <Field 
                                name="content"
                                id="content"
                                component={(field: any) => {
                                    return (
                                        <div>
                                        {field.meta.error}
                                        <textarea placeholder="Please enter some content here ..." {...field.input} id="content" name="content" style={{margin: "0px", height: "183px", width: "919px"}} className="validate"></textarea>
                                        </div>
                                    )
                                }}
                                className="validate"
                            />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input type="submit" className="btn btn-primary" value="Create Post" />
                            <Link className="btn btn-primary" to="/">Cancel</Link>
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
})(CreatePostComponent);
export { createPostsForm as CreatePostComponent}