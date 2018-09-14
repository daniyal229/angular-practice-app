import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import { createStore, applyMiddleware } from 'redux';

import AppComponent from './components/app.component';
import { MainReducer } from './reducers/main.reducer';
import promiseMiddleware from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(MainReducer)}>
    <AppComponent />
  </Provider>
  , document.querySelector('.root'));
