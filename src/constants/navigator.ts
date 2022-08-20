import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';

export type NoteNavigatorParam = {
  NoteListScreen: undefined;
  NoteScreen: { machineIdx: number };
};

export type NavigationParam = {
  MyRoutineScreen: undefined;
  MainScreen: undefined;
  NoteListScreen: undefined;
  NoteScreen: undefined;
  SearchScreen: undefined;
  UserScreen: undefined;
};

export type NavigationProps<T extends keyof NavigationParam> = {
  navigation: NativeStackNavigationProp<NavigationParam, T>;
  route?: RouteProp<NavigationParam, T>;
};

export type NoteScreenProps = NativeStackScreenProps<NoteNavigatorParam, 'NoteScreen'>;

export type NoteListScreenProps = NativeStackScreenProps<NoteNavigatorParam, 'NoteListScreen'>;
