import React from 'react';
import styled from 'styled-components/native';
import { getWidthPixel } from '../../utils/responsive';
import BodyText from '../Text/BodyText';

const DayList = () => {
  const days = [];
  const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

  for (let i = 0; i < 7; i++) {
    days.push(
      <InnerContainerStyled key={date[i]}>
        <BodyText fontNumber={7} fontColor={'white'}>
          {date[i]}
        </BodyText>
      </InnerContainerStyled>
    );
  }

  return <ContainerStyled>{days}</ContainerStyled>;
};

export default DayList;

const ContainerStyled = styled.View`
  flex-direction: row;
`;

const InnerContainerStyled = styled.View`
  width: ${getWidthPixel(50)};
  align-items: center;
`;
