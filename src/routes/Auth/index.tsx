import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LOGIN_SCREEN} from '@constants';
import {Login} from '@screens';

const Stack = createNativeStackNavigator();

export const AuthRoutes = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={LOGIN_SCREEN}>
    <Stack.Screen name={LOGIN_SCREEN} component={Login} />
  </Stack.Navigator>
);
