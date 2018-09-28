import { combineReducers } from "redux";
import { RecipesReducer } from "./recipes.reducer";

export const MainReducer = combineReducers({
    recipes: RecipesReducer,
    savedRecipes: RecipesReducer
})