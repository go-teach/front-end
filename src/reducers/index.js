import { combineReducers } from 'redux';
import auth from './AuthReducer.js';
import nav from './NavigatorReducer.js';

const AppReducer = combineReducers({
  nav,
  auth,
});

export default AppReducer;