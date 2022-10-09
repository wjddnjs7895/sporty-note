import { atom } from 'recoil';

import { dateProps } from '../../constants/types';

export const dateState = atom<dateProps>({
  key: 'dateState',
  default: {
    selectedDay: new Date(),
  },
});

export const routineState = atom<string[]>({
  key: 'routineState',
});
