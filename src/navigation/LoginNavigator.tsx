import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import UserRegisterScreen from '../screens/UserRegisterScreen';
import KakaoLoginWebScreen from '../screens/KakaoLoginWebScreen';

const LoginStack = createNativeStackNavigator();

export default function LoginNavigator() {
  return (
    <LoginStack.Navigator initialRouteName="LoginScreen">
      <LoginStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <LoginStack.Screen name="UserRegisterScreen" component={UserRegisterScreen} options={{ headerShown: false }} />
      <LoginStack.Screen name="KakaoLoginWebScreen" component={KakaoLoginWebScreen} options={{ headerShown: false }} />
    </LoginStack.Navigator>
  );
}
