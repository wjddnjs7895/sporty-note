import axios from 'axios';
import { selectorFamily } from 'recoil';

import { BASE__URL } from '../../constants';
import { IdxTypeProps, NoteDataProps } from '../../constants/types';

export const getNoteSelector = selectorFamily<NoteDataProps, IdxTypeProps>({
  key: 'notes/get',
  get:
    ({ userIdx, machineIdx }: IdxTypeProps) =>
    async () => {
      if (!userIdx || !machineIdx) {
        return '';
      }
      const { data } = await axios.get(`${BASE__URL}notes`, {
        params: {
          machineId: machineIdx,
          userId: userIdx,
        },
      });
      return data;
    },
});
