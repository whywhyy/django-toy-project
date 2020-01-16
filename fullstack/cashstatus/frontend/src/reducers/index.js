import { combineReducers } from 'redux';
import cash from './cash';
import errors from './erros';
import messages from './messages';
import auth from './auth'

export default combineReducers({
    cash, 
    errors,
    messages,
    auth
});