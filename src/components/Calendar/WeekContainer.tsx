import React from 'react';

import styled from 'styled-components/native';
import { getWeekCalendar } from '../../utils';
import { isSameDay } from 'date-fns';
import { useRecoilValue } from 'recoil';
import { dateState } from '../../store/atoms/routineAtom';
import WeekDayBox from './WeekDayBox';

function WeekContainer({ date, onDateClick }: { date: Date; onDateClick: (day: Date | string) => void }) {
  const dayBoxList = getWeekCalendar(date);
  const today = new Date();
  const selectedDate = useRecoilValue(dateState);
  return (
    <>
      {dayBoxList.map((week, index) => {
        return (
          <WeekStyled key={'week' + index}>
            {week.map((day, dayIndex) => {
              return (
                <WeekDayBox
                  key={dayIndex}
                  day={day}
                  isFull={false}
                  isSelected={typeof day !== 'string' && isSameDay(day, selectedDate.selectedDay)}
                  isToday={typeof day !== 'string' && isSameDay(today, day)}
                  onDateClick={onDateClick}
                />
              );
            })}
          </WeekStyled>
        );
      })}
    </>
  );
}

export default WeekContainer;

const WeekStyled = styled.View`
  flex-direction: row;
`;
