import React from 'react';
import { View } from 'react-native';
import HeadText from '../Text/HeadText';
import DayBox from './DayBox';

function Calendar() {
  return (
    <View>
      <HeadText fontNumber={2}>July</HeadText>
      <DayBox day={1} isFull={true} />
    </View>
  );
}

export default Calendar;
