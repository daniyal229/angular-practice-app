import { GET_STOCKS } from "../actions/get-stocks.action";

export const StockTrendsReducer = (state = {}, action) => {
    debugger;
    switch (action.type) {
        case GET_STOCKS:
            debugger
            return action.payload
        default:
            return state;
    }
}