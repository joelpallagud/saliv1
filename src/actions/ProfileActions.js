import firebase from "../firebase";
import {
    USER_CREATE,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAILURE,
    USER_FETCH,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE,
} from './types';
import { NavigationActions } from 'react-navigation';

export const userCreate = (name, birthday, phone, address) => (dispatch) => {
    if(name && birthday && phone && address){ 
	var uid = firebase.auth().currentUser.uid;
	var path = '/users/' + uid;
	dispatch({ type:USER_CREATE })
	firebase.database().ref(path)
	    .set({name, birthday, phone, address})
	    .then(() => {
		dispatch({ type: USER_CREATE_SUCCESS });
	    })
	    .catch((err) => {
		userCreateFailure(dispatch, err);
	    })
    } else {
	userCreateFailure(dispatch, "You must fill out all the fields");
    }

};

const userCreateFailure = (dispatch, error) => {
    console.log("User create fail");
    console.log(error);
    dispatch({
	type: USER_CREATE_FAILURE,
	payload: error
    });
}
export const userFetch = () => {
    var uid = firebase.auth().currentUser.uid;
    var path = '/users/' + uid;

    return (dispatch) => {
	dispatch({type: USER_FETCH})
	firebase.database().ref(path)
	    .on('value', snapshot => {
		dispatch({ type: USER_FETCH_SUCCESS, 
		    payload: snapshot.val() });
		console.log(snapshot.val());
	    })
	    .catch((err) => {
		dispatch({ type: USER_FETCH_FAILURE, payload: err })
	    } )
    }
}

export const setDefaultDetails = () => {
    userCreate("", "", "", "")
}

