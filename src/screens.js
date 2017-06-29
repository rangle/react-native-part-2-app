import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

/**
 * Screens
 */
export const LoginScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Login Screen</Text>
    <Button
      onPress={() => navigation.navigate('Main')}
      title="Go to Main"
    />
    <Button
      onPress={() => navigation.goBack()}
      title="Go Back"
    />
  </View>
);



export const MainScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Main Screen</Text>
    <Button
      onPress={() => navigation.navigate('Profile')}
      title="Go to Profile"
    />
    <Button
      onPress={() => navigation.goBack()}
      title="Go Back"
    />
  </View>
);



export const ProfileScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Profile Screen</Text>
    <Button
      onPress={() => navigation.navigate('Login')}
      title="Go to Login"
    />
    <Button
      onPress={() => navigation.goBack()}
      title="Go Back"
    />
  </View>
);
