import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NoteNavigatorProps } from './types';

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
};

export type NoteNavigationParam = {
  NoteListScreen: undefined;
  NoteScreen: NoteNavigatorProps;
};

export type SearchNavigationParam = {
  SearchScreen: undefined;
  NoteScreen: NoteNavigatorProps;
};

export type NavigationProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<BottomTabNavigationParam, 'SearchNavigator'>,
      NativeStackNavigationProp<NoteNavigationParam>
    >
  >;
  route?: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    CompositeNavigationProp<
      BottomTabNavigationProp<BottomTabNavigationParam, 'SearchNavigator'>,
      NativeStackNavigationProp<NoteNavigationParam>
    >
  >;
};
