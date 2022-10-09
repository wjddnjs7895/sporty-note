import React from 'react';
import styled from 'styled-components/native';

import TitleText from '../Text/TitleText';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

function MyRoutineHeaderContainer() {
  return (
    <ContainerStyled>
      <TitleText>마이 루틴</TitleText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  padding-left: ${getWidthPixel(24)};
  height: ${getHeightPixel(73)};
  width: ${getWidthPixel(390)};
  align-items: center;
`;

export default MyRoutineHeaderContainer;
