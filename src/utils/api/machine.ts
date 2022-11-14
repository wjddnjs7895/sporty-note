import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../../constants';

export async function getMachineDataAPI({
  machineIdx,
  accessToken,
  setData,
}: {
  machineIdx: number;
  accessToken: string;
  setData: Dispatch<SetStateAction<{ name: string; imageUrl: string }>>;
}) {
  if (!machineIdx || machineIdx === -1) {
    return '';
  }
  const { data } = await axios.get(`${BASE__URL}machines/${machineIdx}`, {
    params: {
      machineId: machineIdx,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  setData({ name: data.krMachineName, imageUrl: data.imageUrl1 });
  return data;
}
