import { environment } from "../../environments/environment";
import axios from 'axios';
import { WeatherMap } from "../models/weather-map.model";

export const FETCH_WEATHER: string = 'FETCH_WEATHER';

export const fetchWeather = (city: string) => {
    const url: string = `${environment.weather_api.baseUrl}&q=${city},us`
    const request = axios.get(url, {
        transformResponse: (data, headers) => {
            return new WeatherMap(JSON.parse(data))
        }
    });
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}