import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { getHeightPixel, getHeightPixelByWidth, getWidthPixel } from '../../utils/responsive';
import SubHeadText from '../Text/SubHeadText';

import EditRoutineButton from './EditRoutineButton';
import AsyncStorage from '@react-native-community/async-storage';
import { getRoutineMachinesByNumber } from '../../utils/api/routine';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../store/atoms/userAtom';
import { routineRefreshState } from '../../store/atoms/routineAtom';
import ReadyModal from '../Modal/ReadyModal';

function RoutineButton({ routineName }: { routineName: string }) {
  const userData = useRecoilValue(userState);
  const [routineList, setList] = useState<number[]>([]);
  const [refresh, setRefresh] = useRecoilState(routineRefreshState);
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    getRoutineMachinesByNumber({ accessToken: userData.accessToken, routineName: routineName, setList: setList });
  }, [routineName, userData.accessToken]);
  return (
    // <ContainerStyled
    //   onPress={() => {
    //     const dataObject = { day: new Date(), workoutList: routineList };
    //     AsyncStorage.setItem('workoutData', JSON.stringify(dataObject));
    //     setRefresh({ refresh: !refresh });
    //   }}
    // >
    <ContainerStyled onPress={() => setVisible(true)}>
      <SubHeadText fontNumber={3}>{routineName}</SubHeadText>
      <EditRoutineButton routineName={routineName} />
      {isVisible ? <ReadyModal isVisible={isVisible} setVisible={setVisible} /> : null}
    </ContainerStyled>
  );
}

export default RoutineButton;

const ContainerStyled = styled.TouchableOpacity`
  width: ${getWidthPixel(358)};
  height: ${getHeightPixelByWidth(358, 51)};
  flex-direction: row;
  justify-content: space-between;
  border-radius: ${getWidthPixel(10)};
  align-items: center;
  padding-left: ${getWidthPixel(27)};
  padding-right: ${getWidthPixel(10)};
  background-color: white;
  margin-top: ${getHeightPixel(4)};
  margin-bottom: ${getHeightPixel(4)};
`;
