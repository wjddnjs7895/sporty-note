import React from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import RightArrowIcon from '../../assets/icons/button/forward_arrow.svg';
import LeftArrowIcon from '../../assets/icons/button/back_arrow.svg';
import SubHeadText from '../Text/SubHeadText';

export default function RecordArrowContainer() {
  return (
    <ContainerStyled>
      <LeftContainerStyled>
        <LeftArrowIconStyled />
        <SubHeadText fontNumber={4}>이전 운동</SubHeadText>
      </LeftContainerStyled>
      <RightContainerStyled>
        <SubHeadText fontNumber={4}>다음 운동</SubHeadText>
        <RightArrowIconStyled />
      </RightContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(350)};
  height: ${getHeightPixel(30)};
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const LeftArrowIconStyled = styled(LeftArrowIcon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

const RightArrowIconStyled = styled(RightArrowIcon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;

const LeftContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RightContainerStyled = styled.View`
  flex-direction: row;
  align-items: center;
`;
