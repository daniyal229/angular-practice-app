import React, { Component } from 'react';
import { reduxForm, Field, formValueSelector, FieldArray } from 'redux-form';
import { connect } from 'react-redux';
import { addRecipe, updateRecipe } from '../../actions';

class RecipeEdit extends Component {
    
    initializeFields() {
        if(this.props.match.params['id'] === undefined) {
            this.mode = 'new';
            this.props.initialize({ 
                name: '', 
                imgPath: '',
                desc: '',
                ings: ''
            });

        } else {
            const { match: { params : { id }}, recipe } = this.props;
            this.mode = 'edit';
            this.props.initialize({ 
                name: recipe.name, 
                imgPath: recipe.imgPath,
                desc: recipe.desc,
                ings: recipe.ings
            });
        }
    }
    
    componentDidMount() {
        this.initializeFields()
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.match.params.id !== prevProps.match.params.id) {
            this.initializeFields()
        }
      }

    onSubmit(values) {
        if(!values.ings)
            values.ings = []

        if(this.mode === 'new') 
            this.props.addRecipe(values);
        else {
            this.props.updateRecipe(this.props.match.params.id, values)
        }
        this.props.history.push(`/recipes/${this.props.match.params.id}`)
    }

    renderIngredientsSubFields(ingredient, index, fields) {
        return(
            <div className="form-group d-flex" key={index}>
                <Field
                    name={`${ingredient}.name`}
                    component="input"
                    type="text"
                    className="form-control mr-2"
                ></Field>
                <Field
                    name={`${ingredient}.amount`}
                    component="input"
                    type="number"
                    className="form-control mr-2"
                ></Field>
                <button className="btn btn-danger" type="button" onClick={() => fields.remove(index)}>X</button>
            </div>
        )
    }

    renderIngredients({ fields }) {
        return(
            <React.Fragment>
                <button className="btn btn-success mb-3" type="button" onClick={() => fields.push({})}>Add Ingredients</button>
                {fields.map(this.renderIngredientsSubFields)}
            </React.Fragment>
            );
    }

    render() {
        const { handleSubmit } = this.props;
        return(
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <div className="form-group">
                    <button className="btn btn-success mr-2" type="submit" disabled={this.props.invalid}>Save</button>
                    <button className="btn btn-danger" type="button" onClick={() => this.props.history.push(`/recipes/${this.props.match.params.id}`)}>Cancel</button>
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <Field
                        name="name"
                        id="name"
                        component="input"
                        className="form-control"
                    ></Field>
                 </div>
                <div className="form-group">
                    <label htmlFor="imgPath">Image Link</label>
                    <Field
                        name="imgPath"
                        id="image"
                        component="input"
                        className="form-control"
                    ></Field>
                </div>
                {this.props.imageSrc? <img src={ this.props.imageSrc } className="img-fluid"/>: null}
                
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <Field
                        name="desc"
                        id="desc"
                        component="textarea"
                        className="form-control"
                    ></Field>
                </div>
                <FieldArray name="ings" component={this.renderIngredients.bind(this)} ></FieldArray>
            </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const selector = formValueSelector('RecipeEdit');
    const { id } = ownProps.match.params;
    if(id)
        return {
            imageSrc: selector(state, 'imgPath'),
            recipe: state.recipes[id]
        };
    else 
        return {
            imageSrc: selector(state, 'imgPath')
        }
}

const validate = (values) => {

    const errors = {};
    const fields = ['name', 'imgPath', 'desc', 'ings']
 
    fields.map((field) => {
        if(!values[field])
            errors[field] = 'This field is required'
    })

    return errors
}

export default reduxForm({
    validate,
    form: "RecipeEdit"
})(connect(mapStateToProps, { addRecipe, updateRecipe })(RecipeEdit))