import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HOME_SCREEN} from '../../constants/navigationConstants';

import {HomeScreen} from '../../screens/homeScreen';

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen
        name={HOME_SCREEN}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
