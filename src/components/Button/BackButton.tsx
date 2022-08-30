import React from 'react';
import styled from 'styled-components/native';

import { getPixelToPixel, getWidthPixel } from '../../utils/responsive';

import Back_Icon from '../../assets/icons/button/back.svg';
import { ButtonProps } from '../../constants/types';

const BackButton = ({ ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest}>
      <ImageStyled />
    </ButtonStyled>
  );
};

const ButtonStyled = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageStyled = styled(Back_Icon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
  margin: ${getPixelToPixel(5)};
`;

export default BackButton;
