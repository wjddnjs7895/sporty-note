import axios from 'axios';
import { selectorFamily } from 'recoil';

import { BASE__URL } from '../../constants';
import { IdxTypeProps, NoteData, NoteProps, userProps } from '../../constants/types';

export const getGeneralNoteSelector = selectorFamily<NoteData, IdxTypeProps>({
  key: 'notes/general/get',
  get:
    ({ machineIdx, accessToken }: IdxTypeProps) =>
    async () => {
      if (!machineIdx) {
        return '';
      }
      const { data } = await axios.get(`${BASE__URL}notes/general`, {
        params: {
          machineId: machineIdx,
        },
        headers: {
          Authorization: accessToken,
        },
      });
      return data;
    },
});

export const getNoteSelector = selectorFamily<NoteData, IdxTypeProps>({
  key: 'notes/get',
  get:
    ({ machineIdx, accessToken }: IdxTypeProps) =>
    async () => {
      if (!machineIdx) {
        return '';
      }
      const { data } = await axios.get(`${BASE__URL}notes`, {
        params: {
          machineId: machineIdx,
        },
        headers: {
          Authorization: accessToken,
        },
      });
      return data;
    },
});

export const getNoteListSelector = selectorFamily<NoteProps[], userProps>({
  key: 'notes_list/get',
  get:
    ({ accessToken }) =>
    async () => {
      if (!accessToken) {
        return [];
      }
      const { data } = await axios.get(`${BASE__URL}notes/machines`, {
        headers: {
          Authorization: accessToken,
        },
      });
      return data;
    },
});

export const modifyMemoSelector = selectorFamily<
  number,
  {
    nodeIdx: number;
    type: { engName: string; krName: string };
    color: string;
    text: string;
    pictureUrl: string;
    accessToken: string;
  }
>({
  key: 'nodes/post',
  get:
    ({ color, nodeIdx, pictureUrl, text, type }) =>
    async () => {
      const { data } = await axios.put(`${BASE__URL}nodes`, {
        params: {
          color: color,
          nodeIdx: nodeIdx,
          pictureUrl: pictureUrl,
          text: text,
          type: type,
        },
      });
      return data;
    },
});

export const deleteMemoSelector = selectorFamily<number, { note_node_idx: number }>({
  key: 'memo/delete',
  get:
    ({ note_node_idx }) =>
    async () => {
      const { data } = await axios.delete(`${BASE__URL}nodes`, {
        params: {
          note_node_idx: note_node_idx,
        },
      });
      return data;
    },
});
