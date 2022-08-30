import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextProps, TextStyle } from '../../constants/types';
import { palette } from '../../constants/palette';
import { HeadTextInfo } from '../../constants/font';
import { getPixelToPixel } from '../../utils/responsive';

function HeadText({ children, ...rest }: TextProps) {
  return <TextStyled {...rest}>{children}</TextStyled>;
}

const TextStyled = styled.Text<TextStyle>`
  ${({ fontColor = 'black', fontNumber = 1 }) => css`
    font-family: ${HeadTextInfo[fontNumber].fontFamily};
    font-size: ${getPixelToPixel(HeadTextInfo[fontNumber].fontSize)}
    color: ${palette[fontColor]};
  `}
`;

export default HeadText;
