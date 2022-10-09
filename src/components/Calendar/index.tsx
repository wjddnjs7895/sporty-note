import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { dateState } from '../../store/atoms/routineAtom';
import CalendarHeader from './CalendarHeader';
import DayBoxContainer from './DayBoxContainer';
import DayList from './DayList';

function Calendar() {
  const [date, setDate] = useState(new Date());
  const setSelectedDate = useSetRecoilState(dateState);

  function onDateClick(day: Date | string) {
    if (typeof day !== 'string') {
      setSelectedDate({
        selectedDay: day,
      });
    }
  }

  return (
    <>
      <CalendarHeader date={date} setDate={setDate} />
      <DayList />
      <DayBoxContainer date={date} onDateClick={onDateClick} />
    </>
  );
}

export default Calendar;
