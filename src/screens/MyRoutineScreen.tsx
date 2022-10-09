import React from 'react';
import styled from 'styled-components/native';
import Blank from '../components/Blank';
import Calendar from '../components/Calendar';
import MyRoutineHeaderContainer from '../components/Container/MyRoutineHeaderContainer';
import RoutineListContainer from '../components/Container/RoutineListContainer';
import { getHeightPixel } from '../utils/responsive';

const CalendarScreen = () => {
  return (
    <ScreenStyled>
      <MyRoutineHeaderContainer />
      <Calendar />
      <Blank height={getHeightPixel(26)} />
      <RoutineListContainer />
    </ScreenStyled>
  );
};

export default CalendarScreen;

const ScreenStyled = styled.View`
  align-items: center;
`;
