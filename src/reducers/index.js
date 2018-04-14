import { combineReducers } from 'redux';
import userReducer from './user-reducer';
import formReducer from './form-reducer';

export default combineReducers({
    user: userReducer,
    form: formReducer
});

