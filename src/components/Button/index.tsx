import React from 'react';
import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

import { ButtonStyle, ButtonProps } from '../../constants/types';
import { palette } from '../../constants/palette';

function Button({ children, ...rest }: ButtonProps) {
  return <MainButtonStyled {...rest}>{children}</MainButtonStyled>;
}

const MainButtonStyled = styled.TouchableOpacity<ButtonStyle>`
  ${({
    width = '54%',
    height = '103px',
    buttonColor = 'white',
    hasBorder = false,
    borderColor = 'white',
    borderRadius = '10px',
    hasShadow = true,
  }) => css`
    ${hasShadow
      ? Platform.select({
          ios: css`
        shadow-color: '#ffffff'; 
        shadow-offset: {width: 1, height: 1};
        shadow-opacity: 0.15;
        shadow-radius:10px;
      `,
          android: css`
            elevation: 10;
          `,
        })
      : null}
    width: ${width};
    height: ${height};
    background-color: ${palette[buttonColor]};
    border: ${hasBorder ? `1px solid ${palette[borderColor]}` : 'none'};
    border-radius: ${borderRadius};
  `}
`;

export default Button;
