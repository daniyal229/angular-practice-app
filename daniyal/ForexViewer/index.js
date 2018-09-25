import * as React from 'react';
import {AppRegistry} from 'react-native';
import thunk from 'redux-thunk';
import { Provider as MaterialDesignProvider } from 'react-native-paper';
import {name as appName} from './src/config.json';
import { Provider as StoreProvider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  promiseMiddleware  from 'redux-promise';
import { MainReducer } from './src/main.reducer';
import { Router } from './src/router';

const store = createStore(MainReducer, applyMiddleware(thunk, promiseMiddleware));
class AppComponent extends React.Component {
    render() {
        return (
            <StoreProvider store={store}>
                <MaterialDesignProvider>
                    <Router />
                </MaterialDesignProvider>
            </StoreProvider>
        );
    }
}

AppRegistry.registerComponent(appName, () => AppComponent);
