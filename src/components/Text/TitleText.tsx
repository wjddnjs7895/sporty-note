import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextProps, TextStyle } from '../../constants/types';
import { TitleTextInfo } from '../../constants/font';
import { getPixelToPixel } from '../../utils/responsive';

function TitleText({ children, ...rest }: TextProps) {
  return <TextStyled {...rest}>{children}</TextStyled>;
}

const TextStyled = styled.Text<TextStyle>`
  ${({ fontColor = 'black', fontNumber = 1 }) => css`
    font-family: ${TitleTextInfo[fontNumber].fontFamily};
    font-size: ${getPixelToPixel(TitleTextInfo[fontNumber].fontSize)}
    color: ${fontColor};
  `}
`;

export default TitleText;
