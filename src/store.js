import { combineReducers } from 'redux';
import { AppNavigator } from './app-navigator';

/**
 * Generate Initial State
 */
const initialState = {};

/**
 * Navigation Reducer
 * Controls the state of the AppNavigator
 */
export const navigationReducer = (state = initialState, action) => {
  return state;
};



// Root Reducer
export const rootReducer = combineReducers({
  navigator: navigationReducer,
  // ...
});
