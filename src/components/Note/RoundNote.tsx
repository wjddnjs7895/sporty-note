import React from 'react';
import styled from 'styled-components/native';

import { NoteProps } from '../../constants/types';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';
import RoundProfile from '../Profile/RoundProfile';
import BodyText from '../Text/BodyText';

const RoundNote = ({ ...rest }: NoteProps) => {
  return (
    <ContainerStyled>
      <RoundProfile />
      <Blank height={getHeightPixel(10)} />
      <BodyText>{rest.userIdx}</BodyText>
      <BodyText>분석노트</BodyText>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`
  align-items: center;
  margin-left: ${getWidthPixel(9)};
  margin-right: ${getWidthPixel(9)};
`;

export default RoundNote;
