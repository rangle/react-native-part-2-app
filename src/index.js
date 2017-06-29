import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AppWithNavigationState } from './app-navigator';
import { rootReducer } from './store';

const store = createStore(rootReducer);


export const Root = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
);


AppRegistry.registerComponent('ReactNativeWorkshop', () => Root);

export default Root;
