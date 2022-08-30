import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { NavigationParam } from '../../constants/navigator';
import { getHeightPixel } from '../../utils/responsive';
import Blank from '../Blank';
import GoogleLoginButton from '../Login/GoogleLoginButton';
import KakaoLoginButton from '../Login/KakaoLoginButton';

function LoginButtonContainer({ navigation }: NativeStackScreenProps<NavigationParam, 'MainScreen'>) {
  return (
    <ContainerStyled>
      <GoogleLoginButton />
      <Blank height={getHeightPixel(15)} />
      <KakaoLoginButton onPress={() => navigation.push('KakaoLoginWebScreen')} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

export default LoginButtonContainer;
