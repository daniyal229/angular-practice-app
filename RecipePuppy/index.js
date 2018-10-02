import * as React from 'react';
import {AppRegistry, AsyncStorage} from 'react-native';
import thunk from 'redux-thunk';
import config from './src/config';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  promiseMiddleware  from 'redux-promise';
import { MainReducer } from './src/reducers/main.reducer';
import { Router } from './src/router';

class AppComponent extends React.Component {
    render() {
        AsyncStorage.getItem('recipes').then(
            (result) => {
                const store = createStore(MainReducer, {recipes: [], savedRecipes: result} ,applyMiddleware(thunk, promiseMiddleware));
                return (
                    <Provider store={store}>
                        <Router />
                    </Provider>
                );
            }
        )
       
    }
}

AppRegistry.registerComponent(config.name, () => AppComponent);
