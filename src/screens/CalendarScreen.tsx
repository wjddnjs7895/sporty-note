import { isSameDay } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import Blank from '../components/Blank';
import Calendar from '../components/Calendar';
import MyRoutineHeaderContainer from '../components/Container/MyRoutineHeaderContainer';
import RecordListContainer from '../components/Container/RecordListContainer';
import RoutineListContainer from '../components/Container/RoutineListContainer';
import { dateState, routineRefreshState } from '../store/atoms/routineAtom';
import { getAsyncData, storeData } from '../utils';
import { getHeightPixel } from '../utils/responsive';

const CalendarScreen = () => {
  const [short, setShort] = useState(false);
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
    storeData('workoutData', JSON.stringify({ day: new Date(), workoutList: [] }));
  }, [refresh]);
  return (
    <FlexStyled>
      <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'position' : 'height'}>
        <ScreenStyled>
          <MyRoutineHeaderContainer />
          <Calendar short={short} setShort={setShort} />
          {isSameDay(today, day.selectedDay) ? (
            routineData && isSameDay(today, new Date(routineData.day)) && routineData.workoutList.length !== 0 ? (
              <RecordListContainer short={short} workoutList={routineData.workoutList} />
            ) : (
              <>
                <Blank height={getHeightPixel(26)} />
                <RoutineListContainer />
              </>
            )
          ) : null}
        </ScreenStyled>
      </KeyboardAvoidingView>
    </FlexStyled>
  );
};

export default CalendarScreen;

const FlexStyled = styled.View`
  height: 100%;
`;

const ScreenStyled = styled.View`
  align-items: center;
  height: 100%;
  width: 100%;
`;
