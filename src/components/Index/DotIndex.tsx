import React from 'react';
import styled, { css } from 'styled-components/native';

import { getPixelToPixel } from '../../utils/responsive';
import { DotStyle } from '../../constants/types';
import { palette } from '../../constants/palette';

function DotIndex({ length, selectedIdx }: { length: number; selectedIdx: number }) {
  let dotArr = [];
  for (let i = 0; i < length; i++) {
    dotArr.push(<DotStyled key={'dots' + i} isSelected={i === selectedIdx} />);
  }
  return <ContainerStyled>{dotArr}</ContainerStyled>;
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
