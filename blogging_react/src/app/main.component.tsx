import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'materialize-css/dist/css/materialize.min.css';
import 'animate.css';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import AppComponent from './app.component';
import { MainReducer } from './main.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
export const store = createStore(MainReducer, composeWithDevTools(
  applyMiddleware(promiseMiddleware),
  // other store enhancers if any
));

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>
  , document.querySelector('.root'));
