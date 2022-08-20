import React from 'react';
import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

import RoundNote from '../Note/RoundNote';
import SubHeadText from '../Text/SubHeadText';
import Blank from '../Blank';
import { getWidthPixel, getHeightPixel } from '../../utils/responsive';

const RoundNoteContainer = () => {
  return (
    <ContainerStyled>
      <InnerContainerStyled>
        <SubHeadText>노트가 필요하세요?</SubHeadText>
      </InnerContainerStyled>
      <Blank height={getHeightPixel(40)} />
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Blank width={getWidthPixel(15)} />
        <RoundNote userName="김종국" workoutName="벤치프레스" />
        <RoundNote userName="김계란" workoutName="벤치프레스" />
        <RoundNote userName="김종국" workoutName="벤치프레스" />
        <RoundNote userName="김계란" workoutName="벤치프레스" />
        <Blank width={getWidthPixel(15)} />
      </ScrollView>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`=
`;

const InnerContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(24)};
`;

export default RoundNoteContainer;
