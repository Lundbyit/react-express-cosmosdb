import { combineReducers } from 'redux';
import app from '../App/reducer';
import companies from '../Companies/reducer';
import people from '../People/reducer';

const rootReducer = combineReducers({
    app,
    companies,
    people
});

export default rootReducer;
