import { atom } from 'recoil';
import { appProps } from '../../constants/types';

export const appState = atom<appProps>({
  key: 'appState',
  default: {
    language: 0,
  },
});
