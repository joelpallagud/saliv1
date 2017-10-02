import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import TextReducer from './TextReducer';
import NavReducer from './NavReducer';

export default combineReducers({
    auth: AuthReducer,
    text: TextReducer,
    nav: NavReducer,
});
