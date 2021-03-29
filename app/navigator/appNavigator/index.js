import React from 'react';

import {Icon} from 'react-native-elements';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  TAB_NAVIGATOR,
  TAB_HOME,
  BIKES_SCREEN,
} from '../../constants/navigationConstants';

import {HomeStack} from '../homeStackNavigator';
import {BikesScreen} from '../../screens/bikesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    screenOptions={() => ({
      tabBarIcon: () => (
        <Icon name="location" type="entypo" color="#00aced" size={30} />
      ),
    })}>
    <Tab.Screen name={TAB_HOME} component={HomeStack} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name={TAB_NAVIGATOR} component={TabNavigator} />
    <Stack.Screen name={BIKES_SCREEN} component={BikesScreen} />
  </Stack.Navigator>
);
