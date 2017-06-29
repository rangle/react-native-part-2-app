import React from 'react';
import { Text } from 'react-native';
import { addNavigationHelpers, StackNavigator, TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { LoginScreen, MainScreen, ProfileScreen } from './screens';

LoginScreen.navigationOptions = { title: 'Login' };
MainScreen.navigationOptions = { title: 'Main' };
ProfileScreen.navigationOptions = { title: 'Profile' };


/**
 * AppNavigator
 */
export const ProfileTab = StackNavigator({
  Login: { screen: LoginScreen },
  Profile: { screen: ProfileScreen },
});

export const AppNavigator = TabNavigator({
  ProfileTab: {
    screen: ProfileTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor, focused }) => <Text>🤷🏽‍♂️</Text>,
    },
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => <Text>🏠</Text>,
    },
  },
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
