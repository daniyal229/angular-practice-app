import { GET_RATES } from "../actions/get-rates.action";

export const ExchangeRatesReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_RATES:
            return action.payload
        default:
            return state;
   }
}