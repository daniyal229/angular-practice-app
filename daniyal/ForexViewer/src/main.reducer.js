import { combineReducers } from "redux";
import { ExchangeRatesReducer } from "./features/foreign_exchange/reducers/exchange-rates.reducer";
import { CryptocurrencyRatesReducer } from "./features/cryptocurrency_exchange_rates/reducers/cryptocurrency-rates.reducer";
import { StockTrendsReducer } from "./features/stock_trends/reducers/stock-trends.reducer";

export const MainReducer = combineReducers({
    exchange_rates: ExchangeRatesReducer,
    crypto_exchange_rates: CryptocurrencyRatesReducer,
    stock_trends: StockTrendsReducer
})