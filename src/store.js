import { combineReducers } from 'redux';
import { AppNavigator } from './app-navigator';

/**
 * Generate Initial State
 */
const initialState = AppNavigator
  .router
  .getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Login')
  );



/**
 * Navigation Reducer
 * Controls the state of the AppNavigator
 */
export const navigationReducer = (state = initialState, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};



// Root Reducer
export const rootReducer = combineReducers({
  navigator: navigationReducer,
  // ...
});
