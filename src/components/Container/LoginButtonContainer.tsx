import React from 'react';
import styled from 'styled-components/native';
import { getHeightPixel } from '../../utils/responsive';
import Blank from '../Blank';
import GoogleLoginButton from '../Login/GoogleLoginButton';
import KakaoLoginButton from '../Login/KakaoLoginButton';

function LoginButtonContainer() {
  return (
    <ContainerStyled>
      <GoogleLoginButton />
      <Blank height={getHeightPixel(15)} />
      <KakaoLoginButton />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: 100%;
  align-items: center;
`;

export default LoginButtonContainer;
