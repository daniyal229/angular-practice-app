import { env } from "../../../shared/env";
import { FxRateList } from "../models/fx-rate-list.model";
import Axios from "axios";

export const GET_RATES= 'GET_RATES';

export const getRates = (from_currency, to_currency, callback = null) => {
    let type = GET_RATES;
    let payload = Axios.get(env.vantage.endpoint,{
        params: {
            function: 'FX_DAILY',
            from_symbol: from_currency,
            to_symbol: to_currency,
            apikey: env.vantage.key
        },
        transformResponse: (data,headers) => {
            data = JSON.parse(data)
            return new FxRateList(data)
        }
    })
    return (dispatch, getState) => {
        payload.then(
            (success) => {
                
                if(!!callback) {
                    callback()
                }

                dispatch({
                    type: type,
                    payload: {
                        rate_list: success.data,
                        from_currency: from_currency,
                        to_currency: to_currency
                    }
                })
            }
        )
    }
}