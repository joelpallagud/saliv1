import {
    REGISTER_USER,
    CHOOSE_LANGUAGE,
    SIGNUP
} from './types';

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

export const signUp = (username, password, confirmPassword) => {
    return {
	type: SIGNUP,
	payload: username, password, confirmPassword
    }
}
