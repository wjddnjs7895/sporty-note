import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextProps, TextStyle } from '../../constants/types';
import { palette } from '../../constants/palette';
import { SubHeadTextInfo } from '../../constants/font';
import { getPixelToPixel } from '../../utils/responsive';

function SubHeadText({ children, ...rest }: TextProps) {
  return <TextStyled {...rest}>{children}</TextStyled>;
}

const TextStyled = styled.Text<TextStyle>`
  ${({ fontColor = 'black', fontNumber = 1 }) => css`
    font-family: ${SubHeadTextInfo[fontNumber].fontFamily};
    font-size: ${getPixelToPixel(SubHeadTextInfo[fontNumber].fontSize)}
    color: ${palette[fontColor]};
  `}
`;

export default SubHeadText;
