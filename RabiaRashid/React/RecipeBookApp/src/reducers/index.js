import { combineReducers } from 'redux';
import RecipesReducer from './recipes-reducer';
import IngredientsReducer from './ingredients-reducer';
import SelectedIngredientsReducer from './selected-ingredient-reducer';
import AuthReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import Ingredient from "../models/ingredient-model";
import Recipe from "../models/recipe-model";

export const rootReducer = combineReducers({
    recipes: RecipesReducer,
    ingredients: IngredientsReducer,
    selectedIngredient: SelectedIngredientsReducer,
    auth: AuthReducer,
    form: formReducer
});

export const initialState = { 
    ingredients: [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ],
    recipes: [
        new Recipe('pizza',
        'A super-tasty pepperoni beef pizza',
        'https://www.cicis.com/media/1176/pizza_trad_pepperonibeef.png',
        [new Ingredient('pepperoni',8),
        new Ingredient('beef',2)])
        ,
        new Recipe('burger',
        'The best beef burger of town',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/impossible-burger-1523482169.jpg?crop=1.00xw:0.748xh;0,0.156xh&resize=768:*',
        [new Ingredient('buns',2),
        new Ingredient('beef',1)])
    ]
};
