import React from 'react';

import DayBox from './DayBox';
import styled from 'styled-components/native';
import { getCalendar } from '../../utils';
import { isSameDay } from 'date-fns';
import { useRecoilValue } from 'recoil';
import { dateState } from '../../store/atoms/routineAtom';

function DayBoxContainer({ date, onDateClick }: { date: Date; onDateClick: (day: Date | string) => void }) {
  const dayBoxList = getCalendar(date);
  const today = new Date();
  const selectedDate = useRecoilValue(dateState);
  return (
    <>
      {dayBoxList.map((week, index) => {
        return (
          <WeekStyled key={'week' + index}>
            {week.map((day, dayIndex) => {
              return (
                <DayBox
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

export default DayBoxContainer;

const WeekStyled = styled.View`
  flex-direction: row;
`;
