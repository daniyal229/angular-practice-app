import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import { initialState, rootReducer} from './reducers';
import Recipes from "./containers/recipes/recipes-container";
import Header from './containers/header-container'
import ShoppingList from "./containers/shopping-list-container"
import SignUp from "./containers/auth/signup-container"
import SignIn from "./containers/auth/signin-container"
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import * as firebase from 'firebase';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
firebase.initializeApp({
    apiKey: "AIzaSyAjraaMuC2TzOdbOWo675MaNKmn6MkFZIM",
    authDomain: "ng-recipe-book-2345d.firebaseapp.com",
})
ReactDOM.render(

    <Provider store={createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>

        <BrowserRouter>
            <div>
                <Header />
                <div className="container mt-3">
                    <Switch>
                        <Route path="/recipes" component={Recipes}/>
                        <Route path="/shopping" component={ShoppingList}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/signin" component={SignIn}/>
                        <Route path="/" render={() => (<Redirect to="/recipes" />)}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    </Provider>
  , document.querySelector('#main-app-container'));
