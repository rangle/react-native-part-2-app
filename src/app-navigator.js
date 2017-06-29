import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { routeConfig } from './route-config';


/**
 * AppNavigator
 */
export const AppNavigator = StackNavigator(routeConfig);


// Connect AppNavigator to redux
const App = ({ dispatch, navigator }) => (
  <AppNavigator
    navigation={
      addNavigationHelpers({
        dispatch: dispatch,
        state: navigator,
      })
    }
  />
);


// Get the navigator state
const mapStateToProps = (state) => ({ navigator: state.navigator });

export const AppWithNavigationState = connect(mapStateToProps)(App);
