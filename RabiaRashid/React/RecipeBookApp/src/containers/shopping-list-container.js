import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingEdit from './shopping-edit-container'
import { selectIngredient } from '../actions';

class ShoppingList extends Component {

    onIngredientClick(index) {
        this.props.selectIngredient(index)
    }

    listIngredients() {
        // const { ingredients } = this.props;
        return this.props.ingredients.map((ingredient, index) => {
            return (
                <a className="list-group-item" key={index} style={{cursor: 'pointer'}} onClick={()=>this.onIngredientClick(index)}>
                    { `${ingredient.name} ${ingredient.amount}`}
                </a>
            )
        });
    }

    render() {
        
        if(!this.props.ingredients)
            return <div>No ingredients</div>

        return (
            <div className="row">
                <div className="col-5">
                    <ShoppingEdit />
                    <br />
                    <ul className="list-group">
                        {this.listIngredients()}
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = ({ ingredients }) => {
    return {ingredients}
}

export default connect(mapStateToProps, { selectIngredient })(ShoppingList)