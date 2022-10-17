import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NoteScreen from '../screens/NoteScreen';
import { SearchNavigationParam } from '../constants/navigator';
import SearchScreen from '../screens/SearchScreen';

const SearchStack = createNativeStackNavigator<SearchNavigationParam>();

export default function SearchNavigator() {
  return (
    <SearchStack.Navigator initialRouteName="SearchScreen">
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
      <SearchStack.Screen name="NoteScreen" component={NoteScreen} options={{ headerShown: false }} />
    </SearchStack.Navigator>
  );
}
