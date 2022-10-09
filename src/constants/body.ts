type BodyType = {
  [index: string]: { engName: string; krName: string; color: string };
};

export const BODY__LIST: BodyType = {
  BACK: {
    engName: 'Back',
    krName: '등/허리',
    color: '#FF9999',
  },
  CHEST: {
    engName: 'Chest',
    krName: '가슴',
    color: '#FFCC66',
  },
  LEG: {
    engName: 'Leg',
    krName: '다리',
    color: '#FFFF66',
  },
  SHOULDER: {
    engName: 'Shoulder',
    krName: '어깨',
    color: '#99FF99',
  },
  GRIP: {
    engName: 'Grip',
    krName: '그립',
    color: '#0000FF',
  },
  ELBOW: {
    engName: 'Elbow',
    krName: '팔꿈치',
    color: '#CCFFFF',
  },
  GAZE: {
    engName: 'Gaze',
    krName: '시선',
    color: '#9933FF',
  },
  HIP: {
    engName: 'Hip',
    krName: '힙',
    color: '#FF6699',
  },
  GITA: {
    engName: 'Etc',
    krName: '기타',
    color: '#CCCCCC',
  },
};

export type BodyKeyTypes = keyof typeof BODY__LIST;
