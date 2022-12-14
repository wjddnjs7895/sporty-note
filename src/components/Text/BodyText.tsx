import React from 'react';
import styled, { css } from 'styled-components/native';

import { TextProps, TextStyle } from '../../constants/types';
import { BodyTextInfo } from '../../constants/font';
import { getPixelToPixel } from '../../utils/responsive';

function BodyText({ children, ...rest }: TextProps) {
  return <TextStyled {...rest}>{children}</TextStyled>;
}

const TextStyled = styled.Text<TextStyle>`
  ${({ fontColor = 'black', fontNumber = 1 }) => css`
    font-family: ${BodyTextInfo[fontNumber].fontFamily};
    font-size: ${getPixelToPixel(BodyTextInfo[fontNumber].fontSize)}
    color: ${fontColor};
  `}
`;

export default BodyText;
