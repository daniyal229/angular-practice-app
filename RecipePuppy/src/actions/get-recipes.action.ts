import Axios from "axios";
import { GET_RECIPES } from "../reducers/recipes.reducer";
import { env } from "../shared/env";
import { Recipe } from "../models/recipe.model";
import _ from 'lodash';

export const getRecipes = (term: string = '', callback: Function = () => { return null }) => {
    let type = GET_RECIPES;
    let payload = Axios.get(env.endpoint,{
        params: {
            q: term
        },
        transformResponse: (data, headers) => {
            data = JSON.parse(data)
            let results = _.uniqBy(data.results, 'title');
            let recipes: Recipe[] = results.map(
                (result: any) => {
                    let ingredients: any = [];
                    result.ingredients.split(",").map(
                        (ingredient: string) => {
                            ingredients.push({title: ingredient})
                        }
                    )
                    result.ingredients = ingredients;
                    return new Recipe(result)
                }
            )
            return recipes;
        }
    })

    return (dispatch: Function, state: any) => {
        payload.then(
            (success) => {
                console.log(success.data)
                callback()
                dispatch({
                    type: type,
                    payload: success.data
                })
            },
            (error) => {
                console.log(error)
            }
        )
    }

    
}