import { combineReducers } from 'redux';
import Counting from './Counting.js'

const rootReducer = combineReducers({
  counter: Counting
});

export default rootReducer;
