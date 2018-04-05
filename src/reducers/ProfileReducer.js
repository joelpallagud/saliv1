import {
    USER_CREATE,
    USER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    birthday: '',
    phone: '',
    address: '',
    loading: false,
    error: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
	case USER_CREATE:
	    return INITIAL_STATE; 
	case USER_FETCH_SUCCESS:
	    return action.payload;
	
	default:
	    return state;
    }
}
