import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { NoteNavigatorProps } from './types';

export type BottomTabNavigationParam = {
  MyRoutineScreen: undefined;
  MainScreen: undefined;
  SearchScreen: undefined;
  UserScreen: undefined;
  LoginScreen: undefined;
  KakaoLoginWebScreen: undefined;
  Screen: undefined;
  NoteNavigator: NavigatorScreenParams<NoteNavigationParam>;
  NoteListScreen: undefined;
  NoteScreen: NoteNavigatorProps;
};

export type NoteNavigationParam = {
  NoteListScreen: undefined;
  NoteScreen: NoteNavigatorProps;
};

export type NavigationProps = {
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    NativeStackNavigationProp<NoteNavigationParam>
  >;
  route?: CompositeNavigationProp<
    BottomTabNavigationProp<BottomTabNavigationParam, 'NoteNavigator'>,
    NativeStackNavigationProp<NoteNavigationParam>
  >;
};
