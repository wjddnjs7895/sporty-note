type BodyType = {
  [index: string]: { engName: string; krName: string };
};

export const BODY__LIST: BodyType = {
  BACK: {
    engName: 'Back',
    krName: '등/허리',
  },
  CHEST: {
    engName: 'Chest',
    krName: '가슴',
  },
  LEG: {
    engName: 'Leg',
    krName: '다리',
  },
  SHOULDER: {
    engName: 'Shoulder',
    krName: '어깨',
  },
  GRIP: {
    engName: 'Grip',
    krName: 'Elbow',
  },
  ELBOW: {
    engName: 'Elbow',
    krName: '팔꿈치',
  },
  GAZE: {
    engName: 'Gaze',
    krName: '시선',
  },
  HIP: {
    engName: 'Hip',
    krName: '힙',
  },
  GITA: {
    engName: 'Etc',
    krName: '기타',
  },
};

export type BodyKeyTypes = keyof typeof BODY__LIST;
