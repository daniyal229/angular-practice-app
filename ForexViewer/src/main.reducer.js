import { combineReducers } from "redux";
import { ExchangeRatesReducer } from "./features/foreign_exchange/reducers/exchange-rates.reducer";
import { StockTrendsReducer } from "./features/stock_trends/reducers/stock-trends.reducer";

export const MainReducer = combineReducers({
    exchange_rates: ExchangeRatesReducer,
    stock_trends: StockTrendsReducer
})