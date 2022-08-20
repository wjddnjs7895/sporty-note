import React from 'react';
import styled, { css } from 'styled-components/native';

import { ContainerProps, ContainerStyle } from '../../constants/types';
import { getWidthPixel } from '../../utils/responsive';

const RoundProfile = ({ ...rest }: ContainerProps) => {
  return <ProfileStyled {...rest} />;
};

const ProfileStyled = styled.View<ContainerStyle>`
  background-color: white;
  ${({ width = getWidthPixel(80) }) => css`
    width: ${width};
    height: ${width};
    border-radius: ${width};
  `}
`;

export default RoundProfile;
