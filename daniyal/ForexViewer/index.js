/** @format */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import HomeComponent from './src/home.component';
import {name as appName} from './src/config.json';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  promiseMiddleware  from 'redux-promise';
import { MainReducer } from './src/main.reducer';
import { Router } from './src/router';

const store = createStore(MainReducer, applyMiddleware(promiseMiddleware));
class AppComponent extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => AppComponent);
