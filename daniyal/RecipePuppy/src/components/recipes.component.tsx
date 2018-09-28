/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { State } from '../models/state.model';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/get-recipes.action';
import { Recipe } from '../models/recipe.model';
import { Text, View, Button } from 'react-native';

class RecipesComponent extends React.Component<{getRecipes: Function, recipes: Recipe[]}> {
    render(){
        return (
            <View style={{
                flex: 1,
                margin: 10
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Recipes</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                </View>
            </View>
        );
    }
}

let mapStateToProps = (state: State) =>     {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, {getRecipes: getRecipes})(RecipesComponent)


