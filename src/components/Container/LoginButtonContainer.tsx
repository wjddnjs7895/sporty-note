import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Platform, View } from 'react-native';
import styled from 'styled-components/native';
import { NavigationProps } from '../../constants/navigator';
import { getHeightPixel } from '../../utils/responsive';
import Blank from '../Blank';
import AppleLoginButton from '../Login/AppleLoginButton';
import GoogleLoginButton from '../Login/GoogleLoginButton';
import KakaoLoginButton from '../Login/KakaoLoginButton';

function LoginButtonContainer() {
  const navigation = useNavigation<NavigationProps['navigation']>();
  return (
    <ContainerStyled>
      {/* <GoogleLoginButton onPress={() => navigation.navigate('GoogleLoginWebScreen')} /> */}
      <Blank height={getHeightPixel(15)} />
      <KakaoLoginButton onPress={() => navigation.navigate('KakaoLoginWebScreen')} />
      {Platform.OS === 'ios' ? (
        <View>
          <Blank height={getHeightPixel(15)} />
          <AppleLoginButton />
        </View>
      ) : null}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

export default LoginButtonContainer;
