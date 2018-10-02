import { AsyncStorage } from "react-native";
import { Recipe } from "../models/recipe.model";
import { State } from "../models/state.model";
import { GET_SAVED_RECIPES } from "../reducers/saved-recipes.reducer";

export const getSavedRecipes = () => {
    (dispatch: any, state: State) => {
        AsyncStorage.getItem('recipes').then(
            (data) => {
                let result: Recipe[] = [];
                if(!!data) {
                    result = JSON.parse(data).map(
                        (item: Recipe) => {
                            return new Recipe(item)
                        }
                    );
                    dispatch({
                        payload: result,
                        type: GET_SAVED_RECIPES
                    })
                }
                
            }
            , (error) => {
                console.log(error)
            }
        )
    }
   
}