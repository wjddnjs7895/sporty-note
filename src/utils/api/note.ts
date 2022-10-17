import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { SetterOrUpdater } from 'recoil';
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

export async function getNoteListAPI({
  accessToken,
  setList,
}: {
  accessToken: string;
  setList: Dispatch<SetStateAction<any>>;
}) {
  if (!accessToken) {
    return [];
  }
  const { data } = await axios.get(`${BASE__URL}notes/machines`, {
    headers: {
      Authorization: accessToken,
    },
  });
  setList(data);
}

export async function postModifyMemoAPI({
  color,
  nodeIdx,
  pictureUrl,
  text,
  type,
  accessToken,
  refresh,
  setRefresh,
}: {
  nodeIdx: number;
  type: { engName: string; krName: string };
  color: string;
  text: string;
  pictureUrl: string;
  accessToken: string;
  refresh: { refresh: boolean };
  setRefresh: SetterOrUpdater<{ refresh: boolean }>;
}) {
  const { data } = await axios.put(
    `${BASE__URL}nodes`,
    {
      color: color,
      nodeIdx: nodeIdx,
      pictureUrl: pictureUrl,
      text: text,
      type: type,
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
