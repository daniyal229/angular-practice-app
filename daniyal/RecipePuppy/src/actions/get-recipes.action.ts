import Axios from "axios";
import { GET_RECIPES } from "../reducers/recipes.reducer";
import { env } from "../shared/env";
import { Recipe } from "../models/recipe.model";

export const getRecipes = (params = {}) => {
    let type = GET_RECIPES;
    let payload = Axios.get(env.endpoint,{
        params: params,
        transformResponse: (data, headers) => {
            let results = JSON.parse(data).results;
            let recipes: Recipe[] = results.map(
                (result) => {
                    let ingredients = [];
                    result.ingredients.map(
                        (ingredient) => {
                            ingredients.push({name: ingredient})
                        }
                    )
                    result.ingredients = ingredients;
                    return new Recipe(result)
                }
            )
            return recipes;
        }
    })

    return {
        type,
        payload
    }
}