import {
    SHOW_SUBTITLES
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action)
    switch(action.type){
	case SHOW_SUBTITLES:
	    return action.payload;
	default:
	    return state;
    }
}
