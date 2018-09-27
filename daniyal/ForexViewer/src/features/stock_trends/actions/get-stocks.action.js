import { env } from "../../../shared/env";
import { StockTrend } from "../models/stock-trend.model";
import Axios from "axios";

export const GET_STOCKS = 'GET_STOCKS'

export const getStocks = (company, callback = null) => {
    let type = GET_STOCKS;
    let payload = Axios.get(env.vantage.endpoint,{
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol: company,
            apikey: env.vantage.key
        },
        transformResponse: (data,headers) => {
            data = JSON.parse(data)
            return new StockTrend(data)
        }
    })
    return (dispatch, getState) => {
        payload.then(
            (success) => {
                
                if(!!callback) {
                    callback()
                }
                debugger;
                dispatch({
                    type: type,
                    payload: {
                        company: company,
                        trend: success.data
                    }
                })
            }
        )
    }
}