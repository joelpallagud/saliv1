import {
    REGISTER_USER,
    CHOOSE_LANGUAGE,
    SIGNUP,
    GET_HOTLINE,
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from './types';
import { NavigationActions } from 'react-navigation';
import firebase from '../firebase'

export const registerUser = ({ prop, value }) => {
    return {
        type: REGISTER_USER,
        payload: { prop, value }
    };
};

export const chooseLanguage = (language) => {
    return {
        type: CHOOSE_LANGUAGE,
        payload: language
    };
};

export const getHotline = (location) => {
    return {
	type: GET_HOTLINE,
	payload: location
    };

};

export const loginUser = ( email, password ) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch((err) => loginUserFail(dispatch,err));

    };
};

const loginUserFail = (dispatch,error) => {
    console.log("Login failed")
    console.log(error);
    dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
	NavigationActions.navigate({ routeName: 'Home' })
    });
};

