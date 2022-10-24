import AsyncStorage from '@react-native-community/async-storage';
import { isSameDay } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import Blank from '../components/Blank';
import Calendar from '../components/Calendar';
import MyRoutineHeaderContainer from '../components/Container/MyRoutineHeaderContainer';
import RoutineListContainer from '../components/Container/RoutineListContainer';
import SubHeadText from '../components/Text/SubHeadText';
import { dateState, routineRefreshState } from '../store/atoms/routineAtom';
import { getAsyncData } from '../utils';
import { getHeightPixel } from '../utils/responsive';

const CalendarScreen = () => {
  const day = useRecoilValue(dateState);
  const today = new Date();
  const [routineData, setData] = useState<any>();
  const refresh = useRecoilValue(routineRefreshState);
  useEffect(() => {
    async function getData() {
      const data = await getAsyncData('workoutData');
      if (data) {
        setData(data);
      }
    }
    getData();
    AsyncStorage.setItem('workoutData', JSON.stringify({ day: new Date(), workoutList: [] }));
  }, [refresh]);
  return (
    <ScreenStyled>
      <MyRoutineHeaderContainer />
      <Calendar />
      {isSameDay(today, day.selectedDay) ? (
        routineData && isSameDay(today, new Date(routineData.day)) && routineData.workoutList.length !== 0 ? (
          <SubHeadText>asdf</SubHeadText>
        ) : (
          <>
            <Blank height={getHeightPixel(26)} />
            <RoutineListContainer />
          </>
        )
      ) : null}
      <RoutineListContainer />
    </ScreenStyled>
  );
};

export default CalendarScreen;

const ScreenStyled = styled.View`
  align-items: center;
`;
