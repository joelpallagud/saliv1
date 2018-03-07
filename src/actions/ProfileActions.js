import firebase from "../firebase";
import {
    USER_CREATE,
    USER_FETCH_SUCCESS,
    USER_FETCH_FAILURE
} from './types';

export const userCreate = ({name, birthday, phone, address}) => {
    return (dispatch) => {
	firebase.database().ref('/users/$(currentUser.uid)')
	    .push({name, birthday, phone, address})
	    .then(() => {
		dispatch({ type: USER_CREATE });
	    })
    };
};

export const userFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
	firebase.database().ref('/users/$(currentUser.uid)')
	    .on('value', snapshot => {
		dispatch({ type: USER_FETCH_SUCCESS, 
		    payload: snapshot.val() });
	    })
	    .catch((err) => {
		dispatch({ type: USER_FETCH_FAILURE  })
	    } )
    }
}
