import React from 'react';
import styled from 'styled-components/native';
import { getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';
import TitleText from '../Text/TitleText';

import SummaryIcon from '../../assets/icons/icon/summary.svg';
import Blank from '../Blank';
import BodyText from '../Text/BodyText';

export default function RecordSummaryHeader({ text }: { text: string }) {
  const day = new Date();
  return (
    <ContainerStyled>
      <SubHeadText fontNumber={5}>
        {day.getMonth()}월 {day.getDay()}일
      </SubHeadText>
      <InnerContainerStyled>
        <TitleText fontNumber={1}>132일째</TitleText>
        <IconStyled />
        <Blank width={getWidthPixel(20)} />
        <TextStyled fontNumber={4} fontColor={'#767676'}>
          {text}
        </TextStyled>
      </InnerContainerStyled>
    </ContainerStyled>
  );
}

const TextStyled = styled(BodyText)`
  width: ${getWidthPixel(168)};
`;

const ContainerStyled = styled.View`
  flex-direction: column;
  width: ${getWidthPixel(317)};
`;

const InnerContainerStyled = styled.View`
  flex-direction: row;
`;

const IconStyled = styled(SummaryIcon)`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;
