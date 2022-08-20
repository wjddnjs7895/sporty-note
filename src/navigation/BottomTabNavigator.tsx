import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import { getPixelToNumber, getWidthPixel } from '../utils/responsive';
import MyRoutineScreen from '../screens/MyRoutineScreen';
import SearchScreen from '../screens/SearchScreen';
import UserScreen from '../screens/UserScreen';
import MainScreen from '../screens/MainScreen';
import NoteNavigator from './NoteNavigator';

import { palette } from '../constants/palette';
import Home_Icon from '../assets/icons/gnb/home.svg';
import Home_Selected_Icon from '../assets/icons/gnb/home_selected.svg';
import Note_Icon from '../assets/icons/gnb/note.svg';
import Note_Selected_Icon from '../assets/icons/gnb/note_selected.svg';
import Record_Icon from '../assets/icons/gnb/record.svg';
import Record_Selected_Icon from '../assets/icons/gnb/record_selected.svg';
import Search_Icon from '../assets/icons/gnb/search.svg';
import Search_Selected_Icon from '../assets/icons/gnb/search_selected.svg';
import User_Icon from '../assets/icons/gnb/user.svg';
import User_Selected_Icon from '../assets/icons/gnb/user_selected.svg';

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="NoteListScreen"
      screenOptions={{
        tabBarActiveTintColor: '#000000',
        tabBarStyle: {
          height: getPixelToNumber(70),
          paddingTop: getPixelToNumber(8),
          paddingBottom: getPixelToNumber(8),
        },
        headerStyle: {
          backgroundColor: palette.gray_06,
          height: getPixelToNumber(73),
        },
        headerTitleStyle: {
          fontFamily: 'Pretendard-Bold',
          fontSize: getPixelToNumber(25),
        },
      }}
    >
      <BottomTab.Screen
        name="MyRoutineScreen"
        component={MyRoutineScreen}
        options={{
          title: '마이루틴',
          tabBarIcon: ({ focused }) => <IconStyled>{focused ? <Record_Selected_Icon /> : <Record_Icon />}</IconStyled>,
        }}
      />
      <BottomTab.Screen
        name="NoteNavigator"
        component={NoteNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <IconStyled>{focused ? <Note_Selected_Icon /> : <Note_Icon />}</IconStyled>,
        }}
      />
      <BottomTab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: '홈',
          headerShown: false,
          tabBarIcon: ({ focused }) => <IconStyled>{focused ? <Home_Selected_Icon /> : <Home_Icon />}</IconStyled>,
        }}
      />
      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          title: '검색',
          tabBarIcon: ({ focused }) => <IconStyled>{focused ? <Search_Selected_Icon /> : <Search_Icon />}</IconStyled>,
        }}
      />
      <BottomTab.Screen
        name="UserScreen"
        component={UserScreen}
        options={{
          title: '마이페이지',
          tabBarIcon: ({ focused }) => <IconStyled>{focused ? <User_Selected_Icon /> : <User_Icon />}</IconStyled>,
        }}
      />
    </BottomTab.Navigator>
  );
}

const IconStyled = styled.View`
  width: ${getWidthPixel(30)};
  height: ${getWidthPixel(30)};
`;
