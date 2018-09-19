import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';

import AppComponent from './app.component';
import { MainReducer } from './main.reducer';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware,thunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(MainReducer)}>
    <AppComponent />
  </Provider>
  , document.querySelector('.root'));
