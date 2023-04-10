import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import AuthStack from './stacks/AuthStack';
import AppStack from './stacks/AppStack';

const RootStack = () => {
  const scheme = useColorScheme();
  const isLoggedIn = true;

  

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default RootStack;