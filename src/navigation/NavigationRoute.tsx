import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { isUserLogin } from '../utils';

import { palette } from '../constants/palette';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.gray_06,
  },
};

export default function Navigation() {
  return (
    <NavigationContainer theme={AppTheme}>
      {isUserLogin() === true ? <BottomTabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
