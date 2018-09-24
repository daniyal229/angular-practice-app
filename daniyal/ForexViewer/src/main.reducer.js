import { combineReducers } from "redux";
import { RatesReducer } from "./features/foreign_exchange/reducers/rates.reducer";

export const MainReducer = combineReducers({
    rates: RatesReducer
})