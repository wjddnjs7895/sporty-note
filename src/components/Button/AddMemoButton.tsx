import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixelByWidth, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

import Plus_Icon from '../../assets/icons/button/plus_small.svg';
import { ButtonProps } from '../../constants/types';

const AddMemoButton = ({ ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest}>
      <ImageStyled />
      <SubHeadText fontNumber={4}>노트 추가</SubHeadText>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 50)};
  border-radius: ${getPixelToPixel(10)};
  border: 1px solid white;
`;

const ImageStyled = styled(Plus_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
  margin: ${getPixelToPixel(5)};
`;

export default AddMemoButton;
