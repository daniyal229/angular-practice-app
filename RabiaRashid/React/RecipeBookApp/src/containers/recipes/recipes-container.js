import React, { Component } from 'react';
import RecipeList from './recipe-list-container';
import RecipeDetail from './recipe-detail-container';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecipeEdit from "./recipe-edit-container";
import { connect } from 'react-redux';

function Recipes(props) {
    const recipesProps = props
    return(
        <div className="row">
            <div className="col-lg-5">
                <RecipeList />
            </div>
            <div className="col-lg-7">
                <Switch>
                    <Route path="/recipes/new" render={(props) => (
                            recipesProps.auth.token
                            ? <RecipeEdit {...props}/>
                            : <Redirect to="/" />
                    )}/>
                    <Route path="/recipes/:id/edit" render={(props) => (
                            recipesProps.auth.token
                            ? <RecipeEdit {...props}/>
                            : <RecipeDetail {...props} />
                    )}/>
                    <Route path="/recipes/:id" component={RecipeDetail}/>
                    <Route path="" component={RecipeDetail}/>
                </Switch>
            </div>
        </div>
    );
}

const mapStateToProps = ({ auth }) => {
    return { auth }
}

export default connect(mapStateToProps)(Recipes)