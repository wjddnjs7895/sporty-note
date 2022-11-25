import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { getParseRecordList } from '..';
import { BASE__URL } from '../../constants';

export async function postRecordAPI({
  complete,
  count,
  kg,
  machineIdx,
  sett,
  accessToken,
}: {
  complete: boolean;
  count: number;
  kg: number;
  machineIdx: number;
  sett: number;
  accessToken: string;
}) {
  const { data } = await axios.post(
    `${BASE__URL}records/complete`,
    {
      complete: complete,
      count: count,
      kg: kg,
      machineIdx: machineIdx,
      sett: sett,
    },
    {
      headers: {
        Authorization: accessToken,
      },
    }
  );
  return data;
}

export async function deleteRecordAPI({
  complete,
  count,
  kg,
  machineIdx,
  sett,
  accessToken,
}: {
  complete: boolean;
  count: number;
  kg: number;
  machineIdx: number;
  sett: number;
  accessToken: string;
}) {
  const { data } = await axios.delete(`${BASE__URL}records/delete`, {
    data: {
      complete: complete,
      count: count,
      kg: kg,
      machineIdx: machineIdx,
      sett: sett,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}

export async function getDayRecordAPI({
  accessToken,
  recordDay,
  setData,
}: {
  accessToken: string;
  recordDay: string;
  setData: Dispatch<SetStateAction<string>>;
}) {
  const { data } = await axios.get(`${BASE__URL}records/day/${recordDay}`, {
    params: {
      recordDay: recordDay,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  setData(JSON.stringify(getParseRecordList(data)));
}

export async function getPastRecordAPI({
  accessToken,
  machineIdx,
  setData,
}: {
  accessToken: string;
  machineIdx: number;
  setData: Dispatch<SetStateAction<string>>;
}) {
  const { data } = await axios.get(`${BASE__URL}records/previous/${machineIdx}`, {
    params: {
      machineIdx: machineIdx,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  setData(JSON.stringify(getParseRecordList(data[0])));
}
