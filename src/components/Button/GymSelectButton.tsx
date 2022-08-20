import React from 'react';
import styled from 'styled-components/native';

import TitleText from '../Text/TitleText';
import { ButtonStyle, ButtonProps } from '../../constants/types';

import Show_All_Icon from '../../assets/icons/button/show_all.svg';

const GymSelectButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <GymSelectButtonStyled {...rest}>
      <TitleText>{children}</TitleText>
      <ImageStyled />
    </GymSelectButtonStyled>
  );
};

const GymSelectButtonStyled = styled.TouchableOpacity<ButtonStyle>`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageStyled = styled(Show_All_Icon)`
  width: 30px;
  height: 30px;
`;

export default GymSelectButton;
