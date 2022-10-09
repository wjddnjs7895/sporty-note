import React, { useState } from 'react';
import styled, { css } from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';

import { getHeightPixel, getHeightPixelByWidth, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';
import { MemoData, MemoStyle, ImageStyle } from '../../constants/types';

import { COLOR__STRING, palette } from '../../constants/palette';
import Show_All_Icon from '../../assets/icons/button/show_all.svg';
import MemoContent from './MemoContent';
import Blank from '../Blank';

function Memo(memo: MemoData[]) {
  const [isSelected, setSelected] = useState(false);
  return (
    <ContainerStyled>
      <InnerContainerStyled onPress={() => setSelected(!isSelected)}>
        <TagStyled tagColor={COLOR__STRING[memo[0].color]} />
        <TextStyled fontNumber={3}>{memo[0].type.krName}</TextStyled>
        <ImageStyled isSelected={isSelected} />
      </InnerContainerStyled>
      {isSelected ? (
        <View>
          <Blank height={getHeightPixel(30)} />
          <MemoContent {...memo} />
          <Blank height={getHeightPixel(10)} />
        </View>
      ) : null}
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  padding-left: ${getWidthPixel(27)}};
  padding-right: ${getWidthPixel(27)};
`;

const TextStyled = styled(SubHeadText)`
  position: absolute;
  left: ${getWidthPixel(30)};
`;

const InnerContainerStyled = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  height: ${getHeightPixelByWidth(303, 23)};
`;

const TagStyled = styled.View<MemoStyle>`
  position: absolute;
  left: 0;
  width: ${getPixelToPixel(10)};
  height: ${getPixelToPixel(10)};
  border-radius: ${getPixelToPixel(10)};
  ${({ tagColor = palette.tag_01 }) => css`
    background-color: ${tagColor};
  `}
`;

const ImageStyled = styled(Show_All_Icon)<ImageStyle>`
  position: absolute;
  width: ${getPixelToPixel(23)};
  height: ${getPixelToPixel(23)};
  right: 0;
  ${({ isSelected = false }) =>
    css`
      transform: rotate(${isSelected ? '180deg' : '0deg'});
    `}
`;

export default Memo;
