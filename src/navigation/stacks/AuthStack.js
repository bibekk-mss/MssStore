import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '@screen/Register/index.js';
import Login from '@screen/Login/index.js';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen component={Login} name="Login" options={{
                headerShown: false,
            }} />
            <Stack.Screen component={Register} name="Register" options={{
                headerShown: false,
            }} />
        </Stack.Navigator>
    );
};

export default AuthStack;
