import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { signInUser } from '../../actions';
import * as firebase from 'firebase';

class SignIn extends Component {

    // componentDidMount() {
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyAjraaMuC2TzOdbOWo675MaNKmn6MkFZIM",
    //         authDomain: "ng-recipe-book-2345d.firebaseapp.com",
    //       })
    // }
    onSubmit(values) {
        this.props.signInUser(values.email, values.password, ()=>{
            this.props.history.push('/');
        })
    }

    renderField(field) {
        const { meta: { touched, error} } = field;
        return(
            <div className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                <input type={field.type} id={field.id} {...field.input} className="form-control"/>
                {touched && error? <p className="alert alert-warning mt-2">{error}</p> : null}
            </div>
        );
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <div className="row">
                <div className="col-xs-12 col-sm-10 col-md-8 offset-sm-1 offset-md-2">
                <h4 className="text-center">Sign In</h4>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Email"
                        id="email"
                        name="email"
                        type="text"
                        component={this.renderField}
                    ></Field>
                    <Field
                        label="Password"
                        id="password"
                        name="password"
                        type="password"
                        component={this.renderField}
                    ></Field>
                    {this.props.auth.error? <p className="text-danger">{this.props.auth.error}</p> : null}
                    <button className="btn btn-primary" type="submit">Sign In</button>
                </form>
                </div>
            </div>
        );
    }

}


const mapStateToProps = ({ auth }) => {
    return { auth };
}

export default reduxForm({
    form: "SignInForm"
})( connect(mapStateToProps, { signInUser })(SignIn));