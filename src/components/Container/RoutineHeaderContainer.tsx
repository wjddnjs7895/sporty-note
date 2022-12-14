import React from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getWidthPixel } from '../../utils/responsive';
import HeadText from '../Text/HeadText';

import BackIcon from '../../assets/icons/button/back.svg';
import { getDateFormat, storeData } from '../../utils';
import { useRecoilState } from 'recoil';
import { recordRefreshState } from '../../store/atoms/routineAtom';
import BodyText from '../Text/BodyText';
import { NavigationProps } from '../../constants/navigator';
import { useNavigation } from '@react-navigation/native';

function RoutineHeaderContainer({ routineName }: { routineName: string }) {
  const [recordRefresh, setRefresh] = useRecoilState(recordRefreshState);
  const navigation = useNavigation<NavigationProps['navigation']>();
  const dataObject = { day: new Date(), routineName: '', workoutList: [] };
  return (
    <ContainerStyled>
      <BackButtonStyled
        onPress={() => {
          storeData('workoutData', JSON.stringify(dataObject));
          setRefresh({ refresh: !recordRefresh });
        }}
      >
        <BackIconStyled />
      </BackButtonStyled>
      <HeadText fontNumber={2}>{routineName}</HeadText>
      <ButtonStyled
        onPress={() =>
          navigation.navigate('CalendarNavigator', {
            screen: 'RecordSummaryScreen',
            params: {
              day: getDateFormat(new Date()),
              routineName: routineName,
            },
          })
        }
      >
        <BodyText fontNumber={5}>운동요약</BodyText>
      </ButtonStyled>
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

const ButtonStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(78)};
  height: ${getWidthPixel(30)};
  border: 1px solid;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: ${getWidthPixel(10)};
`;

export default RoutineHeaderContainer;
