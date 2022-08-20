import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel, getPixelToPixel } from '../../utils/responsive';

import Kakao_Logo_Icon from '../../assets/icons/login/kakao_logo.svg';

const KakaoLoginButton = () => {
  return (
    <ContainerStyled>
      <LogoStyled />
      <InnerContainerStyled>
        <TextStyled>카카오 로그인</TextStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  width: ${getWidthPixel(219)};
  height: ${getHeightPixel(50)};
  background-color: #fee500;
`;

const InnerContainerStyled = styled.View`
  width: ${getWidthPixel(191.5)};
  align-items: center;
  justify-content: center;
`;

const TextStyled = styled.Text`
  color: #000000d9;
  font-size: ${getPixelToPixel(13)};
`;

const LogoStyled = styled(Kakao_Logo_Icon)`
  margin-left: ${getWidthPixel(10)};
  width: ${getHeightPixel(20)};
  height: ${getHeightPixel(18)};
`;

export default KakaoLoginButton;
