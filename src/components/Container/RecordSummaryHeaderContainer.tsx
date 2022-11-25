import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import HeadText from '../Text/HeadText';

import BackIcon from '../../assets/icons/button/back.svg';
import { storeData } from '../../utils';
import { NavigationProps } from '../../constants/navigator';
import { useNavigation } from '@react-navigation/native';

export default function RecordSummaryHeaderContainer({ routineName }: { routineName: string }) {
  const navigation = useNavigation<NavigationProps['navigation']>();
  const dataObject = { day: new Date(), routineName: '', workoutList: [] };
  return (
    <ContainerStyled>
      <BackButtonStyled
        onPress={() => {
          storeData('workoutData', JSON.stringify(dataObject));
          navigation.goBack();
        }}
      >
        <BackIconStyled />
      </BackButtonStyled>
      <HeadText fontNumber={2}>{routineName}</HeadText>
    </ContainerStyled>
  );
}

const ContainerStyled = styled.View`
  flex-direction: row;
  padding-left: ${getWidthPixel(24)};
  height: ${getHeightPixel(73)};
  width: ${getWidthPixel(390)};
  align-items: center;
  justify-content: center;
`;

const BackIconStyled = styled(BackIcon)`
  width: ${getWidthPixel(30)};
  height: ${getHeightPixel(30)};
`;

const BackButtonStyled = styled.TouchableOpacity`
  position: absolute;
  left: ${getWidthPixel(16)};
`;
