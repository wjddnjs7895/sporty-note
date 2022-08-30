import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type NavigationParam = {
  MyRoutineScreen: undefined;
  MainScreen: undefined;
  SearchScreen: undefined;
  UserScreen: undefined;
  NoteListScreen: undefined;
  NoteScreen: { machineIdx: number };
  LoginScreen: undefined;
  KakaoLoginWebScreen: undefined;
  Screen: undefined;
};

export type NavigationProps<T extends keyof NavigationParam> = {
  navigation?: NativeStackNavigationProp<NavigationParam, T>;
  route?: RouteProp<NavigationParam, T>;
};
