import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { LoginScreen, MainScreen, ProfileScreen } from './screens';


LoginScreen.navigationOptions = { title: 'Login' };
MainScreen.navigationOptions = { title: 'Main' };
ProfileScreen.navigationOptions = { title: 'Profile' };

/**
 * AppNavigator
 */
export const AppNavigator = StackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});


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
