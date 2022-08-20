import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { getHeightPixel, getWidthPixel } from '../../utils/responsive';

import BackButton from '../Button/BackButton';
import FavoriteButton from '../Button/FavoriteButton';
import HeadText from '../Text/HeadText';
import SelectBar from '../Button/SelectBar';

function NoteHeaderContainer() {
  return (
    <View>
      <ContainerStyled>
        <ButtonStyled>
          <BackButton />
        </ButtonStyled>
        <HeadText fontNumber={2}>바벨 플랫 벤치 프레스</HeadText>
        <FavoriteStyled>
          <FavoriteButton isSelected={false} buttonColor="white" />
        </FavoriteStyled>
      </ContainerStyled>
      <BarStyled>
        <SelectBar fontNumber={3} width={getWidthPixel(89)} isSelected={true}>
          기본
        </SelectBar>
        <SelectBar fontNumber={3} width={getWidthPixel(89)}>
          추천
        </SelectBar>
        <SelectBar fontNumber={3} width={getWidthPixel(89)}>
          친구
        </SelectBar>
        <SelectBar fontNumber={3} width={getWidthPixel(89)}>
          마이
        </SelectBar>
      </BarStyled>
    </View>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  height: ${getHeightPixel(60)};
  align-items: center;
  justify-content: center;
`;

const BarStyled = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: ${getHeightPixel(10)};
`;

const ButtonStyled = styled.View`
  position: absolute;
  left: ${getWidthPixel(11)};
`;

const FavoriteStyled = styled.View`
  position: absolute;
  right: ${getWidthPixel(11)};
  top: ${getHeightPixel(8)};
`;

export default NoteHeaderContainer;
