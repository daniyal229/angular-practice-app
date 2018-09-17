import * as firebase from 'firebase';
import axios from 'axios';

export const ADD_ING = "ADD_INGREDIENT";
export const UPD_ING = "UPDATE_INGREDIENT";
export const DEL_ING = "DELETE_INGREDIENT";
export const SEL_ING = "SELECT_INGREDIENT";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILED = "SIGN_IN_FAILED";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const FETCH_RECIPES_FROM_SERVER = 'FETCH_RECIPES_FROM_SERVER';
export const ADD_RECIPE = "ADD_RECIPE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const UPDATE_RECIPE = "UPDATE_RECIPE";

export function addIngredient(name, amount) {
    return {
        type: ADD_ING,
        payload: {
            name: name,
            amount: amount
        }
    }
}
export function updateIngredient(index, name, amount) {
    return {
        type: UPD_ING,
        payload: {
            index: index,
            data: {
                name: name,
                amount: amount
            }
        }
    }
}
export function deleteIngredient(index) {
    return {
        type: DEL_ING,
        payload: index
    }
}
export function selectIngredient(index) {
    return {
        type: SEL_ING,
        payload: index
    }
}

export function signUpUser(email, password, callback) {
    const SignUpRequest = firebase.auth().createUserWithEmailAndPassword(email,password);
    return (dispatch) => {
        SignUpRequest.then((resp) => {
            dispatch({
                type: SIGN_UP_SUCCESS,
                payload: resp
            })
            callback();
        }).catch((error) => {
            dispatch({
                type: SIGN_UP_FAILED,
                payload: error
            })
        })
    }
}

export function signInUser(email, password, callback) {
    const signInRequest = firebase.auth().signInWithEmailAndPassword(email,password)
    

    return (dispatch) => {
        signInRequest.then((response) => {
            const tokenRequest = firebase.auth().currentUser.getIdToken();

            tokenRequest.then((resp)=>{
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: resp
                })
                callback();
            }).catch((err)=>{

                dispatch({
                    type: SIGN_IN_FAILED,
                    payload: error
                })
            });

        }).catch((error) => {

            dispatch({
                type: SIGN_IN_FAILED,
                payload: error
            })

        })
    }
}

export function logOut() {
    const logOutRequest = firebase.auth().signOut();
        return {
            type: LOG_OUT_SUCCESS,
            payload: ''
        };
}

export function saveRecipesToServer(recipes, token) {
    const request = axios.put(`https://ng-recipe-book-2345d.firebaseio.com/recipes.json?auth=${token}`,recipes)
    return {
        type: 'SAVE_RECIPES_TO_SERVER',
        payload: request
    }
}

export function fetchRecipesFromServer(token) {
    const request = axios.get(`https://ng-recipe-book-2345d.firebaseio.com/recipes.json?auth=${token}`)
    return (dispatch) => {
        request.then((response)=>{
            dispatch({
                type: FETCH_RECIPES_FROM_SERVER,
                payload: response
            })
        })
    }
}

export function addRecipe(recipe) {
    return {
        type: ADD_RECIPE,
        payload: recipe
    }
}

export function deleteRecipe(index) {
    return {
        type: DELETE_RECIPE,
        payload: index
    }
}

export function updateRecipe(index, recipe) {
    return {
        type: UPDATE_RECIPE,
        payload: {
            index: index,
            recipe: recipe
        }
    }
}


