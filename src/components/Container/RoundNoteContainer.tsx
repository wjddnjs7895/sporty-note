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
        <RoundNote
          userIdx="김종국"
          krMachineName="벤치프레스"
          machineIdx={0}
          targetArea="CHEST"
          url="url"
          engMachineName="benchpress"
          userFavoriteIdx={0}
        />
        <Blank width={getWidthPixel(15)} />
      </ScrollView>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.View`=
  width: ${getWidthPixel(390)};
`;

const InnerContainerStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(24)};
`;

export default RoundNoteContainer;
