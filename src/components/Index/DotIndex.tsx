import React from 'react';
import styled, { css } from 'styled-components/native';

import { getPixelToPixel } from '../../utils/responsive';
import { DotStyle } from '../../constants/types';
import { palette } from '../../constants/palette';

function DotIndex() {
  return (
    <ContainerStyled>
      <DotStyled isSelected={false} />
      <DotStyled isSelected={true} />
      <DotStyled isSelected={false} />
      <DotStyled isSelected={false} />
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
`;

const DotStyled = styled.View<DotStyle>`
  width: ${getPixelToPixel(5)};
  height: ${getPixelToPixel(5)};
  margin: ${getPixelToPixel(5)};
  border-radius: ${getPixelToPixel(5)};
  ${({ isSelected = false }) =>
    css`
      background-color: ${isSelected ? palette.black : palette.gray_07};
    `}
`;

export default DotIndex;
