import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addIngredient, deleteIngredient, updateIngredient, selectIngredient } from '../actions';
import { Field, reduxForm } from 'redux-form';

class ShoppingEdit extends Component {

    componentDidUpdate(prevProps) {
        if (this.props.selectedIngredient !== null) {
            // Typical usage (don't forget to compare props):
            if (this.props.selectedIngredient !== prevProps.selectedIngredient) {
                // this.setState({editMode: true})
                const { ingredients, selectedIngredient} = this.props;
                this.props.initialize({ 
                    name: ingredients[selectedIngredient].name, 
                    amount: ingredients[selectedIngredient].amount });
            }
        }
      }

    onSubmit(values) {
        if(this.props.selectedIngredient !== null)
            this.props.updateIngredient(this.props.selectedIngredient, values.name, values.amount)
        else
            this.props.addIngredient(values.name, values.amount);

        this.onClear()
    }

    onDelete() {
        this.props.deleteIngredient(this.props.selectedIngredient);
        this.onClear();
    }

    onClear() {
        this.props.selectIngredient(null);
        this.props.initialize({
            name: '',
            amount: ''
        })       
    }

    renderField(field) {
        return(
            <div className={`${field.class} form-group`}>
                <label htmlFor={field.id}>{ field.myLabel }</label>
                <input type="text" id={field.id} className="form-control" {...field.input} required />
            </div>
        );

    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
                <div className="row">
                    <Field
                        myLabel="Name"
                        name="name"
                        id="name"
                        class="col-sm-6"
                        component={this.renderField}
                    />
                    <Field
                        myLabel="Amount"
                        name="amount"
                        id="amount"
                        class="col-sm-3"
                        component={this.renderField}
                    />
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <button className="btn btn-success mr-2" type="submit" disabled={this.props.invalid }> { this.props.selectedIngredient !== null ? 'Update' : 'Add' }</button>
                    {
                        this.props.selectedIngredient !== null?
                        <button className="btn btn-danger mr-2" type="button" onClick={ this.onDelete.bind(this) }>Delete</button>
                        : null
                    }
                    <button className="btn btn-primary mr-2" type="button" onClick={ this.onClear.bind(this) }>Clear</button>
                    </div>
                </div>
            </form>
        );
    }
}
const mapStateToProps = ({ ingredients, selectedIngredient }) => {
    return {ingredients, selectedIngredient}
}

const validate = (values) => {
    let errors = {};

    if(!values.name)
        errors.name = 'Please enter a name'
    if(!values.amount)
        errors.amount = 'Please enter the amount'
    // if(typeof(values.amount) !== "number")
    //     errors.amount = 'Invalid amount'
    return errors;
}

export default reduxForm({
    validate,
    form: 'AddIngredientForm'
})( connect(mapStateToProps, { addIngredient, deleteIngredient, updateIngredient, selectIngredient})(ShoppingEdit)  );