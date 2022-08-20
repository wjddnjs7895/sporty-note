/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import Google_Logo_Icon from '../../assets/icons/login/google_logo.svg';

const GoogleLoginButton = () => {
  return (
    <ContainerStyled>
      <LogoStyled />
      <InnerContainerStyled>
        <TextStyled>Google 계정으로 로그인</TextStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  width: ${getWidthPixel(219)};
  height: ${getHeightPixel(50)};
  background-color: white;
`;

const InnerContainerStyled = styled.View`
  width: ${getWidthPixel(191.5)};
  align-items: center;
  justify-content: center;
`;

const TextStyled = styled.Text`
  color: #0000008a,
  font-size: ${getHeightPixel(17.5)};
  font-family: "Roboto-Medium";
`;

const LogoStyled = styled(Google_Logo_Icon)`
  margin-left: ${getWidthPixel(10)};
  width: ${getHeightPixel(22.5)};
  height: ${getHeightPixel(22.5)};
`;

export default GoogleLoginButton;
