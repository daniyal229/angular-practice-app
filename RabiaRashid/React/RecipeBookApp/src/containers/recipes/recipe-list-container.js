import React, { Component } from 'react';
import RecipeItem from "../../components/recipe-item-component";
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class RecipeList extends Component {
    
    listRecipeItems(){
        return this.props.recipes.map((recipe, index)=>{
            return <RecipeItem recipe={recipe} key={recipe.name} index={index} withRouter/>
        })
    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-lg-12">
                        <Link className="btn btn-success" to="/recipes/new">New Recipe</Link>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-lg-12">
                        {
                           this.listRecipeItems()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return({
        recipes: state.recipes
    });
}

export default connect (mapStateToProps)(RecipeList)