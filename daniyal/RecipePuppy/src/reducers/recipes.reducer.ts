export const GET_RECIPES = 'GET_RECIPES';

export const RecipesReducer = (state: any = null, action: any) => {
    switch (action.type) {
        case GET_RECIPES:
            return action.payload
        default:
            return state
    }
}