import React from 'react';
import styled from 'styled-components/native';

import GymSelectButton from '../Button/GymSelectButton';
import SubHeadText from '../Text/SubHeadText';

import { getPixelToPixel } from '../../utils/responsive';

const MainHeaderContainer = () => {
  return (
    <ContainerStyled>
      <GymSelectButton>바디스페이스</GymSelectButton>
      <SubHeadText fontColor={'white'}>오늘의 운동을 시작해보세요!</SubHeadText>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  width: 100%;
  padding-left: ${getPixelToPixel(24)};
  padding-top: ${getPixelToPixel(34)};
`;

export default MainHeaderContainer;
