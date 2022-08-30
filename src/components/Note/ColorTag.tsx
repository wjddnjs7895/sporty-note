import React from 'react';
import styled, { css } from 'styled-components/native';

import { palette } from '../../constants/palette';
import { colorTagProps } from '../../constants/types';
import { getPixelToPixel } from '../../utils/responsive';

function ColorTag({ tagColor }: colorTagProps) {
  return <TagStyled tagColor={tagColor} />;
}

const TagStyled = styled.View<colorTagProps>`
  ${({ tagColor = palette.tag_01, width = getPixelToPixel(10), height = getPixelToPixel(10) }) => css`
    background-color: ${tagColor};
    width: ${width};
    height: ${height};
    border-radius: ${width};
  `}
`;

export default ColorTag;
