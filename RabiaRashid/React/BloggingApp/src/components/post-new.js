import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions'

class NewPost extends Component {

    renderField(field){
        const { meta: { touched, error} } = field;
        const className =  `form-control ${touched && error ? 'is-invalid' : ''}`
        return(
            <div className="form-group ">
                <label htmlFor="title">{field.myLabel}</label>
                <input type="text" className={className} {...field.input} id="title"/>
                <p className="text-danger">{touched ? error : ''}</p>
            </div>
        );
    }

    onSubmit(values) {
        console.log(values);
        console.log(this.props)
        this.props.createPost(values, ()=>this.props.history.push('/'))
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))} className="mt-4">
                <Field
                    myLabel="Title of Post"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    myLabel="Category"
                    name="categories"
                    component={this.renderField}
                />
                <Field
                    myLabel="Post Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>   
            </form>
        );
    }
}

function validate(values) {
    let errors = {};

    if(!values.title)
        errors.title = 'Please enter a title'
    if(!values.categories)
        errors.categories = 'Please enter categories'
    return errors;
}

export default reduxForm({
    validate,
    form: 'NewPostForm'
})(
    connect(null, { createPost })(NewPost)
);