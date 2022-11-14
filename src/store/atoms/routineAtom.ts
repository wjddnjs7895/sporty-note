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

export const routineRefreshState = atom<{ refresh: boolean }>({
  key: 'routineRefreshState',
  default: {
    refresh: false,
  },
});

export const recordRefreshState = atom<{ refresh: boolean }>({
  key: 'recordRefreshState',
  default: {
    refresh: false,
  },
});
