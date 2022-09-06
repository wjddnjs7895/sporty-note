import { Dispatch, ReactNode, SetStateAction } from 'react';
import { RecoilValueReadOnly } from 'recoil';
import { BodyKeyTypes } from './body';
import { PaletteKeyTypes } from './palette';

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

export interface CardProps extends CardStyle {
  children?: ReactNode;
  engMachineName: string;
  krMachineName: string;
  targetArea: string;
  url: string;
  userFavoriteIdx: number;
  machineIdx: number;
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

export interface MemoStyle {
  tagColor: PaletteKeyTypes;
}

export interface MemoProps extends MemoStyle {
  children?: ReactNode;
  memoTitle: BodyKeyTypes;
  momoContent?: MemoDataProps;
}

export interface FilterBarProps {
  children?: ReactNode;
  barTitle?: string;
}

export interface NoteStyle {
  width?: string;
  height?: string;
}

export interface NoteSelectBarProps {
  screenIdx: number;
  setIdx: Dispatch<SetStateAction<number>>;
}

export interface NoteScreenHeaderProps {
  goBack: () => void;
  isInput?: boolean;
  submit?: () => void;
}

export interface ModalStyle {
  location: number[];
}

export interface ModalProps extends ModalStyle {
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  goBack?: () => void;
}

export interface NoteModalProps extends NoteDataProps {
  isVisible: boolean;
  goBack: () => void;
  isInput?: boolean;
  submit?: RecoilValueReadOnly<number>;
}

export interface MemoInputModalProps {
  body: BodyKeyTypes;
  visible?: boolean;
  setBody: Dispatch<SetStateAction<BodyKeyTypes>>;
}

export interface BodyFilterProps extends MemoInputModalProps {
  setVisible: Dispatch<SetStateAction<boolean>>;
}

export interface NoteProps extends NoteStyle {
  children?: ReactNode;
  userIdx: string;
  noteIdx?: number;
  machineIdx: number;
  targetArea: string;
  url: string;
  krMachineName: string;
  engMachineName: string;
  userFavoriteIdx: number;
}

export interface workoutProps {
  machineIdx: number;
  krMachineName: string;
  engMachineName: string;
  targetArea: string;
  url: string;
  userFavoriteIdx?: number;
}

export interface NoteDataProps {
  noteIdx: number;
  machineDto: workoutProps;
  nodeDtos: {
    [key: BodyKeyTypes]:
      | string
      | workoutProps
      | {
          userIdx: string;
          machineIdx: number;
          nodeIdx: number;
          type: { engName: string; krName: string };
          color: string;
          text: string;
          x_location: number;
          y_location: number;
          pictureUrl: string;
        };
  };
}

export interface MemoListDataProps {
  [key: BodyKeyTypes]: MemoDataProps[];
}

export interface MemoDataProps {
  [key: string]: string | number | workoutNameType | undefined;
  userIdx: string;
  machineIdx: number;
  nodeIdx?: number;
  noteIdx?: number;
  type: { engName: string; krName: string };
  color: string;
  text: string;
  x_location: number;
  y_location: number;
  pictureUrl: string;
}

export interface workoutNameType {
  engName: string;
  krName: string;
}

export interface MemoTypeProps {
  engName: string;
  krName: string;
}

export interface MemoTitleProps {
  body: string;
  tagColor: PaletteKeyTypes;
  index: BodyKeyTypes;
}

export interface IdxType {
  userIdx: string;
  machineIdx: number;
}

export interface IdxTypeProps extends IdxType {
  [key: string]: string | number;
}

export interface userProps {
  userIdx: string;
  success: boolean;
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
  day: number;
  isFull: boolean;
}
