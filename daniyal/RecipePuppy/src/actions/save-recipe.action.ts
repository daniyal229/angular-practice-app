import { Recipe } from "../models/recipe.model";
import { AsyncStorage } from "react-native";
import { State } from "../models/state.model";
import { SAVE_RECIPE } from "../reducers/saved-recipes.reducer";

export const saveRecipe = (recipe: Recipe) => {

    return (dispatch: any, state: State, callback = () => { return null; }) => {
        AsyncStorage.getItem('recipes').then(
            (value) => {
                let result: Recipe[] = []
                if(!!value) {
                    result = JSON.parse(value)
                }
                
                result.push(new Recipe(recipe))
                AsyncStorage.setItem('recipes', JSON.stringify(result)).then(
                    (success) => {
                        callback()
                        console.log(success)
                        dispatch({
                            type: SAVE_RECIPE,
                            payload: result
                        })
                    },
                    (error) => {
                        console.log(error)
                    }
                )
            },
            (error) => {
                console.log(error)
            } 
        )   
    }

}