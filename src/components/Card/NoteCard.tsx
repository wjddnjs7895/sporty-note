/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';

import { CardProps, CardStyle, ImageStyle } from '../../constants/types';
import { getWidthPixel, getPixelToPixel, getHeightPixelByWidth, getHeightPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import SubHeadText from '../Text/SubHeadText';
import BodyText from '../Text/BodyText';
import FavoriteButton from '../Button/FavoriteButton';

import { WORKOUT__INFO } from '../../constants/workout';
import Blank from '../Blank';

function NoteCard({ children, onPress, ...rest }: CardProps) {
  return (
    <NoteCardStyled onPress={onPress}>
      <CardStyled
        {...rest}
        hasShadow={true}
        width={getWidthPixel(170)}
        height={getWidthPixel(170)}
        backgroundColor={'white'}
      >
        <FavoriteStyled>
          <FavoriteButton isSelected={false} buttonColor={'gray'} />
        </FavoriteStyled>
        <SubHeadText fontNumber={3}>{rest.krMachineName}</SubHeadText>
        <Blank height={getHeightPixel(5)} />
        <BodyText fontNumber={7}>3개 메모</BodyText>
        <ImageStyled source={WORKOUT__INFO[rest.machineIdx].url} />
      </CardStyled>
      <BoxStyled />
    </NoteCardStyled>
  );
}

const NoteCardStyled = styled.TouchableOpacity`
  align-items: center;
  position: relative;
  width: ${getWidthPixel(170)};
  height: ${getWidthPixel(200)};
`;

const FavoriteStyled = styled.View`
  position: absolute;
  right: ${getWidthPixel(10)};
  top: ${getWidthPixel(16)};
`;

const CardStyled = styled.View<CardStyle>`
  z-index: 2;
  padding-left: ${getWidthPixel(14)};
  padding-top: ${getWidthPixel(14)};
  border-radius: ${getPixelToPixel(10)};
  ${({
    width = getWidthPixel(150),
    height = getHeightPixelByWidth(150, 150),
    isSelected = false,
    backgroundColor = 'gray_07',
    selectedColor = 'lime_01',
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
    background-color: ${isSelected ? palette[selectedColor] : palette[backgroundColor]};
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

const BoxStyled = styled.View`
  position: absolute;
  z-index: 1;
  width: ${getWidthPixel(158)};
  height: ${getWidthPixel(158)};
  border-radius: ${getWidthPixel(10)};
  margin-top: ${getWidthPixel(23)};
  background-color: ${palette.gray_07};
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
`;

const ImageStyled = styled.Image<ImageStyle>`
  position: absolute;
  resize-mode: contain;
  right: ${getWidthPixel(10)};
  bottom: ${getWidthPixel(10)};
  ${({ width = getWidthPixel(110) }) => css`
    width: ${width};
    height: ${width};
  `}
`;

export default NoteCard;
