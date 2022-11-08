import axios from 'axios';
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
