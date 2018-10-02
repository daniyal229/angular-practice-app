/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import _ from 'lodash';
import { State } from '../models/state.model';
import { connect } from 'react-redux';
import { getRecipes } from '../actions/get-recipes.action';
import { Recipe } from '../models/recipe.model';
import { Text, View, Button, TextInput, ListView, FlatList, TouchableOpacity, Keyboard } from 'react-native';
import { saveRecipe } from '../actions/save-recipe.action';

const borders = {
    borderWidth: 0.5,
    borderColor: '#000000'
}

class RecipesComponent extends React.Component<{getRecipes: Function, recipes: Recipe[], saveRecipe: Function, savedRecipes: Recipe[]}> {

    state: { term: string }
    recipesDataSource: any;
    constructor(props: {getRecipes: Function, recipes: Recipe[], saveRecipe: Function, savedRecipes: Recipe[]}){
        super(props)
        this.state = {
            term: ''
        }
        this.filterRecipes = this.filterRecipes.bind(this);
    }

    filterRecipes() {
        Keyboard.dismiss()
        if(!!this.state.term) {
            this.props.getRecipes(this.state.term)
        }
    }

    componentDidMount(){
        this.props.getRecipes(this.state.term)
    }

    renderRecipeList() {
        console.log(this.props.savedRecipes);
        if(!!this.props.recipes && this.props.recipes.length > 0) {
            return (<FlatList
                    data={this.props.recipes}
                    keyExtractor={(item: Recipe,index: number) => {
                        return item.title
                    }}
                    renderItem={
                        (listItem: {item: Recipe}) => {

                            if(!!!_.find(this.props.savedRecipes,(recipe: Recipe) => {
                                return recipe.title.toLowerCase() == recipe.title.toLowerCase()
                            })) {
                                return <TouchableOpacity style={{
                                    backgroundColor: '#DDDDDD',
                                    borderWidth: 0.5,
                                    borderColor: 'transparent',
                                    margin: 3,
                                    padding: 10,
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ flex: 8, alignSelf: 'flex-start' }}>{listItem.item.title}</Text>
                                    <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                                        <Button title="Save" onPress={() => {
                                            this.props.saveRecipe(listItem.item)
                                        }}/>
                                    </View>
                                </TouchableOpacity>
                            } else {
                                return <TouchableOpacity style={{
                                    backgroundColor: '#DDDDDD',
                                    borderWidth: 0.5,
                                    borderColor: 'transparent',
                                    margin: 3,
                                    padding: 10,
                                    flexDirection: 'row'
                                }}>
                                    <Text style={{ flex: 8, alignSelf: 'flex-start' }}>{listItem.item.title}</Text>
                                    <View style={{ flex: 3, justifyContent: 'flex-end' }}>
                                        <Button title="Remove" onPress={() => {
                                            console.log("Saving Recipe")
                                        }}/>
                                    </View>
                                </TouchableOpacity>
                            }
                        } 
                    }
                />)
        } else {
            return <Text>Loading ...</Text>
        }
    }

    render(){
        return (
            <View style={{
                flex: 1,
                margin: 10
            }}>
                <Text style={{flex: 1, fontSize: 24, fontWeight: 'bold'}}>Recipes</Text>
                <TextInput style={{flex: 1 , ...borders}} placeholder="Search" onChangeText={(text) => {
                    this.setState({term: text})
                }} />
                <View style={{flex: 1, flexDirection: 'row', marginTop: 3, marginBottom: 3}}>
                    <View style={{flex: 1, marginRight: 5}}>
                        <Button title="Filter Recipes" onPress={this.filterRecipes} />
                    </View>
                    <View style={{flex: 1}}>
                        <Button title="View Saved Recipes" onPress={() => {console.log("")}} />
                    </View>
                </View>
                <View style={{flex: 10}}>
                    { this.renderRecipeList() }
                </View>
            </View>
        );
    }
}

let mapStateToProps = (state: State) =>     {
    return {
        recipes: state.recipes,
        savedRecipes: state.savedRecipes
    }
}

export default connect(mapStateToProps, {getRecipes: getRecipes, saveRecipe: saveRecipe})(RecipesComponent)


