import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { BASE__URL } from '../../constants';

export async function getGeneralNoteAPI({ machineIdx, accessToken }: { machineIdx: number; accessToken: string }) {
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
}

export async function getGeneralNoteListAPI({
  accessToken,
  idxList,
  setList,
}: {
  accessToken: string;
  idxList: number[];
  setList: Dispatch<SetStateAction<any>>;
}) {
  let tempList: any[] = [];
  await Promise.all(
    idxList.map(async idx => {
      const { data } = await axios.get(`${BASE__URL}notes/general`, {
        params: {
          machineId: idx,
        },
        headers: {
          Authorization: accessToken,
        },
      });
      tempList.push(data);
    })
  );
  setList(tempList);
}
