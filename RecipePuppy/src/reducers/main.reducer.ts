import { combineReducers } from "redux";
import { RecipesReducer } from "./recipes.reducer";
import { SavedRecipesReducer } from "./saved-recipes.reducer";

export const MainReducer = combineReducers({
    recipes: RecipesReducer,
    savedRecipes: SavedRecipesReducer
})