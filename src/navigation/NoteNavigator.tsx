import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoteScreen from '../screens/NoteScreen';
import NoteListScreen from '../screens/NoteListScreen';
import { NoteNavigationParam } from '../constants/navigator';

const NoteStack = createNativeStackNavigator<NoteNavigationParam>();

export default function NoteNavigator() {
  return (
    <NoteStack.Navigator initialRouteName="NoteListScreen">
      <NoteStack.Screen name="NoteListScreen" component={NoteListScreen} options={{ headerShown: false }} />
      <NoteStack.Screen name="NoteScreen" component={NoteScreen} options={{ headerShown: false }} />
    </NoteStack.Navigator>
  );
}
