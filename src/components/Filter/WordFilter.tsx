import React from 'react';
import styled, { css } from 'styled-components/native';

import { ButtonStyle, ButtonProps } from '../../constants/types';
import { getHeightPixel, getPixelToNumber, getPixelToPixel, getWidthPixel } from '../../utils/responsive';
import { palette } from '../../constants/palette';
import BodyText from '../Text/BodyText';

const WordFilter = ({ ...rest }: ButtonProps) => {
  return (
    <WordFilterStyled {...rest}>
      <BodyText fontNumber={7}>{rest.text}</BodyText>
    </WordFilterStyled>
  );
};

const WordFilterStyled = styled.TouchableOpacity<ButtonStyle>`
  margin-left: ${getWidthPixel(3)};
  margin-right: ${getWidthPixel(3)};
  justify-content: center;
  align-items: center;
  ${({
    text = 'none',
    height = getHeightPixel(33),
    hasBorder = true,
    buttonColor = 'white',
    borderColor = 'gray_06',
    borderRadius = getPixelToPixel(30),
  }) => css`
    width: ${text.length * 17 > getPixelToNumber(49) ? getWidthPixel(text.length * 17) : getPixelToPixel(49)};
    height: ${height};
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : 'none'};
    border-radius: ${borderRadius};
  `}
`;

export default WordFilter;
