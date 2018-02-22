import {
    SHOW_HOTLINES
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case SHOW_HOTLINES:
            return action.payload;
        default:
            return state;
    }
};
