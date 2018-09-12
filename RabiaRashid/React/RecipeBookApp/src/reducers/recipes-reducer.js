import { FETCH_RECIPES_FROM_SERVER, ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from '../actions';
import Recipe from "../models/recipe-model";

export default function(state=[], action) {

	switch(action.type) {
		case ADD_RECIPE:
			return [...state, action.payload]
		case UPDATE_RECIPE:
			let newState = state.slice();
			newState[action.payload.index] = action.payload.recipe;
			return newState;

		case DELETE_RECIPE:
			return [...state.slice(0, action.payload),
					...state.slice(action.payload+1)
				];

		case FETCH_RECIPES_FROM_SERVER: 
			action.payload.data.map((recipe) => {
				if(!recipe.ings)
					recipe.ings = [];
			})
			return [...action.payload.data];
		default:
			return state;
	}
}