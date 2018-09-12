import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropdown from '../../components/dropdown';
import { addIngredient, deleteRecipe } from '../../actions';
import { Link } from 'react-router-dom';

class RecipeDetail extends Component {

    componentDidMount() {
        this.dropdown = new Dropdown();
    }
    renderRecipeIngredients() {
        return(
            this.props.recipe.ings.map((ing) => {
                return(
                    <li className="list-group-item" key={ing.name}>
                        {ing.name}-{ing.amount}
                    </li>
                );
            })
        );
    }
    addIngsToShoppingList() {
        this.props.recipe.ings.map((ing) => {
            this.props.addIngredient(ing.name, ing.amount)
        });
        this.props.history.push('/shopping');
    }

    render() {
        if(Object.keys(this.props.match.params).length === 0 || !this.props.recipe)
        return <h4>Please select a recipe</h4>
    
        const { recipe, match:{params: {id}} } = this.props;
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <img className="img-fluid" alt="" src={recipe.imgPath} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <h1>{recipe.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <div className="btn-group">
                        <button className="dropdown-toggle btn btn-primary" onClick={(event)=>this.dropdown.toggleDropdown(event.target)}>Manage Recipe <span className="caret"></span> </button>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" style={{cursor:'pointer'}} onClick={this.addIngsToShoppingList.bind(this)} >To shopping list</a></li>
                        <li><Link className="dropdown-item" style={{cursor:'pointer'}} to={`/recipes/${id}/edit`}>Edit recipe</Link></li>
                        <li><a className="dropdown-item" style={{cursor:'pointer'}} onClick={() => this.props.deleteRecipe(id) }>Delete recipe</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 p-3">
                    {recipe.desc}
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                    <ul className="list-group">
                       {this.renderRecipeIngredients()}
                    </ul>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        recipe: state.recipes[ownProps.match.params.id]
    });
}

export default connect (mapStateToProps, { addIngredient, deleteRecipe } )(RecipeDetail)