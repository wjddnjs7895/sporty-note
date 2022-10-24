import React, { useEffect, useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import LoginNavigator from './LoginNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import { getAsyncData, isUserLogin } from '../utils';

import { palette } from '../constants/palette';
import { useRecoilState } from 'recoil';
import { userState } from '../store/atoms/userAtom';
import { isLoginAPI } from '../utils/api/user';

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: palette.gray_06,
  },
};

export default function Navigation() {
  const [userData, setUserData] = useRecoilState(userState);
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    async function getData() {
      const data = await getAsyncData('userData');
      if (data) {
        setUserData(data);
      }
    }
    getData();
  }, [setUserData]);
  useEffect(() => {
    isLoginAPI({ accessToken: userData.accessToken, setLogin: setFlag });
  }, [userData.accessToken]);
  return (
    <NavigationContainer theme={AppTheme}>
      {isUserLogin() && flag ? <BottomTabNavigator /> : <LoginNavigator />}
    </NavigationContainer>
  );
}
