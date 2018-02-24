import {
    SHOW_SUBTILES
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
	case SHOW_SUBTITILES:
	    return action.payload
	default:
	    return state;
    }
}
