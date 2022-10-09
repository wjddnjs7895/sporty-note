import axios from 'axios';
import { selectorFamily } from 'recoil';

import { BASE__URL } from '../../constants';
import { tokenProps } from '../../constants/types';
import { routineState } from '../atoms/routineAtom';

export const getRoutineListSelector = selectorFamily<string[], tokenProps>({
  key: 'routines/get',
  get:
    ({ accessToken }) =>
    async () => {
      const { data } = await axios.get(`${BASE__URL}routines`, {
        headers: {
          Authorization: accessToken,
        },
      });
      return data;
    },
  set:
    () =>
    ({ set }, newValue) => {
      set(routineState, newValue);
    },
});
