import { Dispatch, ReactNode, SetStateAction } from 'react';
import { BodyKeyTypes } from './body';
import { BottomTabNavigationParam } from './navigator';
import { PaletteKeyTypes } from './palette';

export interface StyleProps {
  backgroundColor?: PaletteKeyTypes | string;
}

export interface TextStyle {
  fontNumber?: number;
  fontColor?: PaletteKeyTypes;
  fontWeight?: string;
  width?: string;
}

export interface TextProps extends TextStyle {
  children?: ReactNode;
  className?: string;
}

export interface ButtonStyle {
  text?: string;
  width?: string;
  height?: string;
  buttonColor?: PaletteKeyTypes;
  selectedColor?: PaletteKeyTypes;
  hasBorder?: boolean;
  borderColor?: PaletteKeyTypes;
  borderRadius?: string;
  isSelected?: boolean;
  fontNumber?: number;
  hasShadow?: boolean;
  onPress?: () => void;
}

export interface ButtonProps extends ButtonStyle {
  children?: ReactNode;
  className?: string;
}

export interface InputProps extends ButtonProps {
  placeHolder?: string;
  keyword: string;
  onChangeText: Dispatch<SetStateAction<string>>;
}

export interface BlankStyle {
  width?: string;
  height?: string;
}

export interface BlankProps extends BlankStyle {
  className?: string;
}

export interface CardStyle {
  width?: string;
  height?: string;
  backgroundColor?: PaletteKeyTypes;
  selectedColor?: PaletteKeyTypes;
  isSelected?: boolean;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  hasShadow?: boolean;
  onPress?: () => void | void;
}

export interface CardProps extends CardStyle, NoteProps {
  children?: ReactNode;
}

export interface ImageStyle {
  width?: string;
  height?: string;
  isSelected?: boolean;
}

export interface DotStyle {
  isSelected: boolean;
}

export interface ContainerStyle {
  width?: string;
  height?: string;
}

export interface ContainerProps extends ContainerStyle {
  className?: string;
}

export interface FilterBarProps {
  children?: ReactNode;
  barTitle?: string;
}

export interface NoteSelectBarProps {
  screenIdx: number;
  setIdx: Dispatch<SetStateAction<number>>;
}

export interface HeaderProps {
  goBack: () => void;
  isInput?: boolean;
  submit?: () => void;
  setTitle?: Dispatch<SetStateAction<string>>;
  title?: string;
}

export interface ModalStyle {
  location?: number[];
  width?: string;
  height?: string;
}

export interface ModalProps<T = undefined> extends ModalStyle {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  state?: T;
  setFunc?: Dispatch<SetStateAction<T>>;
  goBack?: () => void;
  questionText?: string;
  yesText?: string;
  noText?: string;
}

export interface DeleteModalProps extends ModalProps {
  nodeIdx: number;
}

export interface MemoInputModalProps extends ModalProps, NoteProps {
  body?: BodyKeyTypes;
  visible?: boolean;
  text?: string;
  inputType?: number;
}

export interface EditModalProps extends ModalProps, MemoData {
  location: number[];
}

export interface SetBodyProps {
  body: BodyKeyTypes;
  setBody: Dispatch<SetStateAction<BodyKeyTypes>>;
}

export interface BodyFilterProps extends SetBodyProps {
  visible?: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface machineProps {
  engMachineName: string;
  krMachineName: string;
  machineIdx: number;
  targetArea?: string;
  url?: string;
  userFavoriteIdx?: number;
}

export interface NoteProps extends machineProps {
  noteIdx?: number;
  nodeIdx?: number;
  imageUrl1?: string;
  imageUrl2?: string;
  videoUrl1?: string;
}

export interface NoteNavigatorProps extends NoteProps {
  goBackKey: keyof BottomTabNavigationParam;
}

export interface NoteData {
  noteIdx: number;
  machineDto: NoteProps;
  nodeDtos: {
    [key: BodyKeyTypes]: MemoData[];
  };
}

export interface MemoData {
  machineIdx?: number;
  nodeIdx: number;
  type: { engName: string; krName: string };
  color: string;
  text: string;
  x_location?: number;
  y_location?: number;
  pictureUrl: string;
  body: BodyKeyTypes;
}

export interface MemoStyle {
  tagColor: PaletteKeyTypes;
}

export interface MemoTitleProps {
  body: string;
  tagColor: PaletteKeyTypes;
  index: BodyKeyTypes;
}

export interface IdxType {
  machineIdx: number;
}

export interface IdxTypeProps extends IdxType, tokenProps {
  [key: string]: string | number;
}

export interface tokenProps {
  [key: string]: string | number;
  accessToken: string;
}

export interface userProps {
  [key: string]: boolean | string | undefined;
  success?: boolean;
  accessToken: string;
}

export interface loginProps {
  [key: string]: string;
  code: string;
}

export interface appProps {
  language: number;
}

export interface colorTagProps {
  tagColor: PaletteKeyTypes;
  width?: string;
  height?: string;
}

export interface DayProps {
  day: Date | string;
  isFull: boolean;
  isSelected: boolean;
  isToday: boolean;
  onDateClick: (day: Date | string) => void;
}

export interface DayColorProps {
  backgroundColor: PaletteKeyTypes;
  fontColor: PaletteKeyTypes;
}

export interface dateProps {
  [key: string]: Date;
  selectedDay: Date;
}
