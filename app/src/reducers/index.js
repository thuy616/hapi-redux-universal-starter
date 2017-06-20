import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as actions from '../actions/types';
import dynamicContentReducer from './dynamicContentReducer';

// top lever reducer
const appReducer = combineReducers({
  routing: routerReducer,
  dynamicContent: dynamicContentReducer
});

export default appReducer;
