import axios from 'axios';

const API_KEY = '7201e1f6aac71c8418f521979f2fe1b7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export  function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pk`;
    const request = axios.get(url);
    console.log(request)
    return (
        {
            type: FETCH_WEATHER,
            payload: request
        }
    )
}