import React from 'react';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { routeConfig } from './route-config';

import { LoginScreen } from './screens';


/**
 * AppNavigator
 */
// export const AppNavigator = // ¯\_(ツ)_/¯


// Connect AppNavigator to redux
// const App = // ¯\_(ツ)_/¯


// Get the navigator state
export const AppWithNavigationState = () => <LoginScreen />;
