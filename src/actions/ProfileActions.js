import firebase from "../firebase";
import {
    USER_CREATE,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE
} from './types';

export const userCreate = (name, birthday, phone, address) => {
    var uid = firebase.auth().currentUser.uid;
    var path = '/users/' + uid;
    return (dispatch) => {
	firebase.database().ref(path)
	    .push({name, birthday, phone, address})
	    .then(() => {
		dispatch({ type: USER_CREATE });
	    })
	    .catch((err) => {
		createFail(dispatch);
	    })
    };
};

export const userFetch = () => {
    var uid = firebase.auth().currentUser.uid;
    var path = '/users/' + uid;

    return (dispatch) => {
	firebase.database().ref(path)
	    .on('value', snapshot => {
		dispatch({ type: USER_FETCH_SUCCESS, 
		    payload: snapshot.val() });
	    })
	    .catch((err) => {
		dispatch({ type: USER_FETCH_FAILURE  })
	    } )
    }
}

const createFail = (dispatch) => {
}
