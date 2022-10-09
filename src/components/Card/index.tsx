import React from 'react';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

import { CardProps, CardStyle, ImageStyle } from '../../constants/types';
import { getWidthPixel, getHeightPixelByWidth, getPixelToPixel, getHeightPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import SubHeadText from '../Text/SubHeadText';
import { RESOURCE_PREFIX } from '../../constants';

function Card({ children, onPress, ...rest }: CardProps) {
  return (
    <CardStyled {...rest} onPress={onPress}>
      <ImageStyled source={{ uri: RESOURCE_PREFIX + rest.imageUrl1 }} />
      <SubHeadText fontNumber={4}>{rest.krMachineName}</SubHeadText>
      {children}
    </CardStyled>
  );
}

const CardStyled = styled.TouchableOpacity<CardStyle>`
  align-items: center;
  justify-content: center;
  border-radius: ${getPixelToPixel(10)};
  ${({
    width = getWidthPixel(150),
    height = getHeightPixelByWidth(150, 150),
    isSelected = false,
    backgroundColor = 'gray_06',
    marginTop = '0px',
    marginBottom = '0px',
    marginLeft = '0px',
    marginRight = '0px',
    hasShadow = false,
  }) => css`
    width: ${width};
    height: ${height};
    margin-top: ${marginTop};
    margin-bottom: ${marginBottom};
    margin-left: ${marginLeft};
    margin-right: ${marginRight};
    background-color: ${isSelected ? '#0000004d' : palette[backgroundColor]};
    border: ${isSelected ? '2px' : '0px'} solid ${isSelected ? palette.lime_02 : null};
    ${hasShadow
      ? Platform.select({
          ios: css`
            shadow-color: '#ffffff'; 
            shadow-offset: {width: 1, height: 1};
            shadow-opacity: 0.15;
            shadow-radius:10;
      `,
          android: css`
            elevation: 10;
          `,
        })
      : 'none'}
  `}
`;

const ImageStyled = styled.Image<ImageStyle>`
  resize-mode: contain;
  margin-bottom: ${getHeightPixel(17)};
  ${({ width = getWidthPixel(90) }) => css`
    width: ${width};
    height: ${width};
  `}
`;

export default Card;
