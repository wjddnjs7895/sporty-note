import React, { Dispatch, SetStateAction, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { dateState } from '../../store/atoms/routineAtom';
import CalendarHeader from './CalendarHeader';
import DayBoxContainer from './DayBoxContainer';
import DayList from './DayList';
import WeekContainer from './WeekContainer';

function Calendar({ short, setShort }: { short: boolean; setShort: Dispatch<SetStateAction<boolean>> }) {
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
      {short ? (
        <>
          <CalendarHeader date={date} setDate={setDate} short={short} setShort={setShort} />
          <DayList />
          <WeekContainer date={date} onDateClick={onDateClick} />
        </>
      ) : (
        <>
          <CalendarHeader date={date} setDate={setDate} short={short} setShort={setShort} />
          <DayList />
          <DayBoxContainer date={date} onDateClick={onDateClick} />
        </>
      )}
    </>
  );
}

export default Calendar;
