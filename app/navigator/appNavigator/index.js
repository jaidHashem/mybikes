import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TAB_NAVIGATOR, TAB_HOME} from '../../constants/navigationConstants';

import {HomeStack} from '../homeStackNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name={TAB_HOME} component={HomeStack} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
  </Stack.Navigator>
);
