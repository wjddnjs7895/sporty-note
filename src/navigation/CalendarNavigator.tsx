import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CalendarScreen from '../screens/CalendarScreen';
import RecordScreen from '../screens/RecordScreen';
import { CalendarNavigationParam } from '../constants/navigator';
import RecordSummaryScreen from '../screens/RecordSummaryScreen';

const NoteStack = createNativeStackNavigator<CalendarNavigationParam>();

export default function CalendarNavigator() {
  return (
    <NoteStack.Navigator initialRouteName="CalendarScreen">
      <NoteStack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
      <NoteStack.Screen name="RecordScreen" component={RecordScreen} options={{ headerShown: false }} />
      <NoteStack.Screen name="RecordSummaryScreen" component={RecordSummaryScreen} options={{ headerShown: false }} />
    </NoteStack.Navigator>
  );
}
