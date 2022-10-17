import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { SetterOrUpdater } from 'recoil';
import { BASE__URL } from '../constants';

export async function postRoutineAPI({
  accessToken,
  selectedList,
  routineName,
  setRefresh,
  refresh,
}: {
  accessToken: string;
  selectedList: number[];
  routineName: string;
  setRefresh: SetterOrUpdater<{ refresh: boolean }>;
  refresh: { refresh: boolean };
}) {
  const { data } = await axios.post(
    `${BASE__URL}routines`,
    {
      machines: selectedList,
      routineName: routineName,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  if (data) {
    setRefresh({ refresh: !refresh });
  }
  return data;
}

export async function getRoutineAPI({
  accessToken,
  setList,
}: {
  accessToken: string;
  setList: Dispatch<SetStateAction<string[]>>;
}) {
  const { data } = await axios.get(`${BASE__URL}routines`, {
    headers: {
      Authorization: accessToken,
    },
  });
  setList(data);
}

export async function postMemoAPI({
  machineIdx,
  noteIdx,
  type,
  color,
  text,
  x_location,
  y_location,
  pictureUrl,
  accessToken,
  refresh,
  setRefresh,
}: {
  machineIdx: number;
  noteIdx: number | undefined;
  type: { engName: string; krName: string };
  color: string;
  text: string;
  x_location: number;
  y_location: number;
  pictureUrl: string;
  accessToken: string;
  refresh: { refresh: boolean };
  setRefresh: SetterOrUpdater<{ refresh: boolean }>;
}) {
  const { data } = await axios.post(
    `${BASE__URL}nodes`,
    {
      color: color,
      noteIdx: noteIdx,
      pictureUrl: pictureUrl,
      text: text,
      type: type,
      x_location: x_location,
      y_location: y_location,
      machineIdx: machineIdx,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  if (data) {
    setRefresh({ refresh: !refresh });
  }
  return data;
}

export async function setNoteAPI({
  machineIdx,
  accessToken,
  setNote,
}: {
  machineIdx: number;
  accessToken: string;
  setNote: Dispatch<SetStateAction<any>>;
}) {
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
  setNote(data);
}

export async function deleteMemoAPI({ note_node_idx, accessToken }: { note_node_idx: number; accessToken: string }) {
  const { data } = await axios.delete(`${BASE__URL}nodes`, {
    params: {
      note_node_idx: note_node_idx,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}
