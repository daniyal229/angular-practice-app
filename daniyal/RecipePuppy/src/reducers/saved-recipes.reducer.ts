export const SAVE_RECIPE = 'SAVE_RECIPE';
export const GET_SAVED_RECIPES = 'GET_SAVED_RECIPES';

export const SavedRecipesReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case GET_SAVED_RECIPES:
            return action.payload
        case SAVE_RECIPE:
            return action.payload
        default:
            return state
    }
}