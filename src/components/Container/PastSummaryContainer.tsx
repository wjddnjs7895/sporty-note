import React from 'react';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import HeadText from '../Text/HeadText';
import SubHeadText from '../Text/SubHeadText';

export default function PastSummaryContainer({ maxkg, kg }: { maxkg: number; kg: number }) {
  return (
    <ContainerStyled>
      <InnerContainerStyled>
        <SubHeadText fontNumber={5}>최대 무게</SubHeadText>
        <HeadText fontNumber={2}>{maxkg} kg</HeadText>
      </InnerContainerStyled>
      <Blank width={getWidthPixel(70)} />
      <InnerContainerStyled>
        <SubHeadText fontNumber={5}>최근 무게</SubHeadText>
        <HeadText fontNumber={2}>{kg} kg</HeadText>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  width: ${getWidthPixel(322)};
  height: ${getHeightPixel(89)};
  background-color: #e9eaef;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: ${getWidthPixel(10)};
  margin-top: ${getWidthPixel(30)};
`;

const InnerContainerStyled = styled.View`
  justify-content: center;
  align-items: center;
  width: ${getWidthPixel(100)};
`;
