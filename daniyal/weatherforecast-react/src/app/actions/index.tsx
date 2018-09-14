import { environment } from "../../environments/environment";
import axios from 'axios';

export const FETCH_WEATHER: string = 'FETCH_WEATHER';

export const fetchWeather = (city: string) => {
    const url: string = `${environment.weather_api.baseUrl}&q=${city},us`
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}