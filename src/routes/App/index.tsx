import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HOME_SCREEN} from '@constants';
import {Home} from '@screens';
import {TabBar} from '@components';

const Tab = createBottomTabNavigator();

export const HomeRoutes = () => (
  <Tab.Navigator
    tabBar={props => <TabBar {...props} />}
    initialRouteName={HOME_SCREEN}>
    <Tab.Screen
      options={{headerShown: false}}
      name={HOME_SCREEN}
      component={Home}
    />
  </Tab.Navigator>
);
