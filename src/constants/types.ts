import { ReactNode } from 'react';
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
  paddingTop?: string;
  paddingLeft?: string;
}

export interface ButtonProps extends ButtonStyle {
  children?: ReactNode;
  className?: string;
  onPress?: () => void;
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
  onPress?: () => void;
}

export interface CardProps extends CardStyle {
  children?: ReactNode;
  workoutName: string;
  className?: string;
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

export interface NoteProps extends NoteStyle {
  children?: ReactNode;
  userName?: string;
  workoutName: string;
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
  noteIdx: string;
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
  userIdx: string;
  machineIdx: number;
  nodeIdx: number;
  type: { engName: string; krName: string };
  color: string;
  text: string;
  x_location: number;
  y_location: number;
  pictureUrl: string;
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
  userIdx?: string;
  machineIdx?: number;
}

export interface IdxTypeProps extends IdxType {
  [key: string]: string | number | undefined;
}

export interface userProps {
  userIdx: number;
}
