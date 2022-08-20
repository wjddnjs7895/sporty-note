import React from 'react';
import styled, { css } from 'styled-components/native';

import SubHeadText from '../Text/SubHeadText';
import { palette } from '../../constants/palette';
import { ButtonProps, ButtonStyle } from '../../constants/types';
import { getWidthPixel, getHeightPixel, getPixelToPixel } from '../../utils/responsive';

const SelectBar = ({ children, ...rest }: ButtonProps) => {
  return (
    <NoteListButtonStyled {...rest}>
      <SubHeadText fontNumber={rest.fontNumber} fontColor={rest.isSelected ? 'black' : 'white'}>
        {children}
      </SubHeadText>
    </NoteListButtonStyled>
  );
};

const NoteListButtonStyled = styled.View<ButtonStyle>`
  align-items: center;
  padding-bottom: ${getPixelToPixel(7)};
  ${({ isSelected = false, width = getWidthPixel(179) }) => css`
    width: ${width};
    border-bottom-width: ${isSelected ? getHeightPixel(3) : getHeightPixel(1)};
    border-bottom-color: ${isSelected ? palette.black : palette.white};
  `}
`;

export default SelectBar;
