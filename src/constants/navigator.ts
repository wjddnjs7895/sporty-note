import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { CalendarNavigatorProps, NoteNavigatorProps, RecordSummaryNavigatorProps } from './types';

export type BottomTabNavigationParam = {
  CalendarScreen: undefined;
  MainScreen: undefined;
  SearchScreen: undefined;
  UserScreen: undefined;
  LoginScreen: undefined;
  KakaoLoginWebScreen: undefined;
  GoogleLoginWebScreen: undefined;
  Screen: undefined;
  NoteNavigator: NavigatorScreenParams<NoteNavigationParam>;
  SearchNavigator: NavigatorScreenParams<SearchNavigationParam>;
  NoteListScreen: undefined;
  NoteScreen: NoteNavigatorProps;
  CalendarNavigator: NavigatorScreenParams<CalendarNavigationParam>;
  RecordScreen: CalendarNavigatorProps;
  RecordSummaryScreen: RecordSummaryNavigatorProps;
};

export type NoteNavigationParam = {
  NoteListScreen: NavigationProps;
  NoteScreen: NoteNavigatorProps;
};

export type SearchNavigationParam = {
  SearchScreen: undefined;
  NoteScreen: NoteNavigatorProps;
};

export type CalendarNavigationParam = {
  CalendarScreen: undefined;
  RecordScreen: CalendarNavigatorProps;
  RecordSummaryScreen: RecordSummaryNavigatorProps;
};

export type NavigationProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<BottomTabNavigationParam, 'SearchNavigator'>,
      CompositeNavigationProp<
        BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
        BottomTabNavigationProp<BottomTabNavigationParam, 'CalendarNavigator'>
      >
    >
  >;
  route?: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<BottomTabNavigationParam, 'SearchNavigator'>,
      CompositeNavigationProp<
        BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
        BottomTabNavigationProp<BottomTabNavigationParam, 'CalendarNavigator'>
      >
    >
  >;
};
