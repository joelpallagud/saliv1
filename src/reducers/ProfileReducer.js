import {
    USER_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    birthday: '',
    phone: '',
    address: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
	case USER_CREATE:
	    return INITIAL_STATE; 
	default:
	    return state;
    }
}
