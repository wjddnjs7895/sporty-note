import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { getAsyncData, isUserLogin } from '../utils';

import { palette } from '../constants/palette';
import { useSetRecoilState } from 'recoil';
import { userState } from '../store/atoms/userAtom';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.gray_06,
  },
};

export default function Navigation() {
  const setUserData = useSetRecoilState(userState);
  useEffect(() => {
    async function getData() {
      const userData = await getAsyncData('userData');
      if (userData) {
        setUserData(userData);
      }
    }
    getData();
  }, [setUserData]);
  return (
    <NavigationContainer theme={AppTheme}>
      {isUserLogin() === true ? <BottomTabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
