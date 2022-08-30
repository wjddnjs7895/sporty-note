type PaletteType = {
  [index: string]: string;
};

export const palette: PaletteType = {
  red: '#FF0000',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#008000',
  blue: '#0000FF',
  indigo: '#4B0082',
  violet: '#EE82EE',
  white: '#FFFFFF',
  black: '#000000',
  black_01: '#000000',
  black_02: '#222222',
  gray_03: '#949498',
  gray_04: '#767676',
  gray_05: '#434343',
  gray_06: '#C1C1CA',
  gray_07: '#E9EAEF',
  gray_08: '#F2F4F5',
  gray_12: '#949498',
  gray_13: '#E3E4E5',
  gray_18: '#FFFFFF',
  neon_green: '#80EB55',
  lime_01: '#E8FE54',
  lime_02: '#DDF824',
  tag_01: '#BD9CFF',
  tag_02: '#FABBD1',
  tag_03: '#F67A7A',
  tag_04: '#8DE3D9',
  tag_05: '#82BBFF',
  tag_06: '#FFFA82',
};

export type PaletteKeyTypes = keyof typeof palette;

export const COLOR__STRING: PaletteType = {
  Orange: palette.orange,
  Blue: palette.blue,
  Red: palette.red,
};
