import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../constants';

export async function postRoutineAPI({
  accessToken,
  selectedList,
  routineName,
}: {
  accessToken: string;
  selectedList: number[];
  routineName: string;
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
  return data;
}
