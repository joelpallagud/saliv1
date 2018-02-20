import {
    REGISTER_USER,
    CHOOSE_LANGUAGE
    SIGNUP
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    birthday: '',
    phone: '',
    email: '',
    address: '',
    language: '',
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case REGISTER_USER:
            return { ...state, [action.payload.prop]: action.payload.value };
        case CHOOSE_LANGUAGE:
            return { ...state, language: action.payload };
        default:
            return state;
    }
};
