import { Dimensions, PixelRatio } from 'react-native';

export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;
export const FIGMA__WINDOW__WIDTH = 390;
export const FIGMA__WINDOW__HEIGHT = 829;

export function getPixelToPixel(size: number) {
  const scale = WIDTH / FIGMA__WINDOW__WIDTH;

  const newSize = size * scale;
  let result = 0;
  result = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return result.toString() + 'px';
}

export function getPixelToNumber(size: number) {
  const scale = WIDTH / FIGMA__WINDOW__WIDTH;

  const newSize = size * scale;
  let result = 0;
  result = Math.round(PixelRatio.roundToNearestPixel(newSize));
  return result;
}

export const getWidthPercentage = (width: number) => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * 100);
  return result.toString() + '%';
};

export const getWidthPixel = (width: number) => {
  const result = Math.round((width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return result.toString() + 'px';
};

export const getHeightPercentage = (height: number) => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * 100);
  return result.toString() + '%';
};

export const getHeightPixel = (height: number) => {
  const result = Math.round((height / FIGMA__WINDOW__HEIGHT) * HEIGHT);
  return result.toString() + 'px';
};

export const getHeightPixelByWidth = (width: number, height: number) => {
  const result = Math.round((height / width) * (width / FIGMA__WINDOW__WIDTH) * WIDTH);
  return result.toString() + 'px';
};
