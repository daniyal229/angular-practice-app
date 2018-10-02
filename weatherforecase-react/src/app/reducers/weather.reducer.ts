import { FETCH_WEATHER } from "../actions";
import { WeatherMap } from "../models/weather-map.model";

export const WeatherReducer = (state: any = [], action: any) => {
    switch (action.type) {
        case FETCH_WEATHER:
            let retrievedWeatherMap = action.payload.data;
            if(!!retrievedWeatherMap) {
                let weatherMaps: WeatherMap[] = [retrievedWeatherMap];
                for(let map of state) {
                    if(map.getCity() != retrievedWeatherMap.getCity()) {
                        weatherMaps.push(map);
                    }
                }
                return weatherMaps;
            } else {
                return state;
            }
           
        default:
            return state;
    }
}