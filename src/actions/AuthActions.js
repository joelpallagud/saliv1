import {
    REGISTER_USER,
    CHOOSE_LANGUAGE,
    SIGNUP,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL


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
    dispatch({ type: LOGIN_USER_FAIL,
	payload: error
    });
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user,
    });
    dispatch(NavigationActions.navigate({ routeName: 'Home' }));
};

export const signUp = (email, password) => {
    return (dispatch) => {
        dispatch({ type: SIGNUP});
	console.log("Signing in");
	firebase.auth().createUserWithEmailAndPassword(email, password)
		.then(() => signupSuccess(dispatch, email, password))
		.catch((err) => signupFail(dispatch, err))
    
    }
}

const signupFail= (dispatch, error) => {
    console.log("Signup failed");
    console.log(error);
    dispatch({ type: SIGNUP_FAIL });
}

const signupSuccess = (dispatch, email,password) => {
    console.log("SignUp success");
    dispatch({ type: SIGNUP_SUCCESS });
    dispatch(loginUser(email,password))

}

export const logout = () => {
    return (dispatch) => {
	dispatch ({ type: LOGOUT});
	firebase.auth().signOut()
	    .then(() =>  logoutSuccess(dispatch))
	    .catch((err) => logoutFail(dispatch, error))
    }
}

const logoutSuccess = (dispatch) => {
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch(NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home'})
            ]})
);
}

const logoutFail = (dispatch, error) => {
    console.log("Logout failed");
    console.log(error);
    dispatch({ type: LOGOUT_FAIL, payload: error});
}
