import axios from 'axios';
import { selector, selectorFamily } from 'recoil';

import { BASE__URL } from '../../constants';
import { IdxTypeProps, NoteDataProps, NoteProps, MemoDataProps } from '../../constants/types';

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

export const getNoteListSelector = selector<NoteProps[]>({
  key: 'notes_list/get',
  get: async () => {
    const { data } = await axios.get(`${BASE__URL}notes/machines`, {
      params: {
        userId: '12312312',
      },
    });
    return data;
  },
});

export const postMemoSelector = selectorFamily<
  number,
  {
    userIdx: string;
    machineIdx: number;
    noteIdx: number;
    type: { engName: string; krName: string };
    color: string;
    text: string;
    x_location: number;
    y_location: number;
    pictureUrl: string;
  }
>({
  key: 'nodes/post',
  get:
    ({ color, machineIdx, noteIdx, pictureUrl, text, type, userIdx, x_location, y_location }: MemoDataProps) =>
    async () => {
      const { data } = await axios.post(`${BASE__URL}nodes`, {
        params: {
          color: color,
          noteIdx: noteIdx,
          pictureUrl: pictureUrl,
          text: text,
          type: type,
          x_location: x_location,
          y_location: y_location,
          machineIdx: machineIdx,
          userIdx: userIdx,
        },
      });
      return data;
    },
});
