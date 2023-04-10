import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screen/Home/index.js';
import DetailsScreen from '@screen/Details/index.js';
import CartScreen from '@screen/Cart/index.js';
import ProfileScreen from '@screen/Profile/index.js';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (


      <Stack.Navigator>
        <Stack.Screen component={HomeScreen} name="Home" options={{
          headerShown: false,
        }} />
        <Stack.Screen component={DetailsScreen} name="DetailsScreen" options={{
          headerShown: false,
        }} />
        <Stack.Screen component={CartScreen} name="CartPage" options={{
          headerShown: false,
        }} />
        <Stack.Screen component={ProfileScreen} name="ProfilePage" options={{
          headerShown: false,
        }} />
      </Stack.Navigator>

  );
};

export default AppStack;
