import { LoginScreen, MainScreen, ProfileScreen } from './screens';

LoginScreen.navigationOptions = { title: 'Login' };
MainScreen.navigationOptions = { title: 'Main' };
ProfileScreen.navigationOptions = { title: 'Profile' };


/**
 * Define the various routes
 */
export const routeConfig = {
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
};
