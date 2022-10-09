import { atom } from 'recoil';

import { userProps } from '../../constants/types';

export const userState = atom<userProps>({
  key: 'userState/' + Math.random(),
  default: {
    accessToken: '',
    success: false,
  },
});
