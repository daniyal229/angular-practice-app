import { combineReducers } from 'redux';
import { WeatherReducer } from './weather.reducer';

export const MainReducer = combineReducers({
    weather: WeatherReducer
});
