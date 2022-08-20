import React from 'react';
import styled, { css } from 'styled-components/native';

import { BlankProps, BlankStyle } from '../../constants/types';

function Blank({ ...rest }: BlankProps) {
  return <BlankStyled {...rest} />;
}

const BlankStyled = styled.View<BlankStyle>`
  ${({ width = '100%', height = '10px' }) => css`
    width: ${width};
    height: ${height};
  `}
`;

export default Blank;
