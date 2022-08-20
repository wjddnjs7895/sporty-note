import React from 'react';
import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Platform } from 'react-native';

import { ButtonProps } from '../../constants/types';

import { getPixelToPixel, getWidthPixel, getHeightPixelByWidth } from '../../utils/responsive';

const MainLongButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <MainLongButtonStyled {...rest} colors={['#7FEB55', '#F0FB33']} start={{ x: 0.0, y: 0.5 }} end={{ x: 1, y: 0.5 }}>
      {children}
    </MainLongButtonStyled>
  );
};

const MainLongButtonStyled = styled(LinearGradient)`
  ${Platform.select({
    ios: css`
      shadow-color: '#ffffff'; 
      shadow-offset: {width: 1, height: 1};
      shadow-opacity: 0.15;
      shadow-radius:10;
    `,
    android: css`
      elevation: 10;
    `,
  })}
  padding-left: ${getWidthPixel(14)};
  justify-content: center;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 63)};
  border-radius: ${getPixelToPixel(10)};
`;

export default MainLongButton;
