import axios from 'axios';
import { Dispatch, SetStateAction } from 'react';
import { SetterOrUpdater } from 'recoil';
import { BASE__URL } from '../../constants';

export async function deleteRoutineAPI({ routineName, accessToken }: { routineName: string; accessToken: string }) {
  const { data } = await axios.delete(`${BASE__URL}routines/${routineName}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return data;
}

export async function modifyRoutineAPI({
  accessToken,
  selectedList,
  routineName,
  setRefresh,
  refresh,
  newRoutineName,
}: {
  accessToken: string;
  selectedList: number[];
  routineName: string;
  setRefresh: SetterOrUpdater<{ refresh: boolean }>;
  refresh: { refresh: boolean };
  newRoutineName: string;
}) {
  const { data } = await axios.put(
    `${BASE__URL}routines/modify-routines`,
    {
      machines: selectedList,
      routineName: routineName,
      newRoutineName: newRoutineName,
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

export async function getRoutineMachinesAPI({
  accessToken,
  routineName,
  setData,
}: {
  accessToken: string;
  routineName: string;
  setData: Dispatch<SetStateAction<any[]>>;
}) {
  const { data } = await axios.get(`${BASE__URL}routines/${routineName}`, {
    params: {
      routineName: routineName,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  setData(data);
}

export async function getRoutineMachinesByNumber({
  routineName,
  accessToken,
  setList,
}: {
  routineName: string;
  accessToken: string;
  setList: Dispatch<SetStateAction<number[]>>;
}) {
  const { data } = await axios.get(`${BASE__URL}routines/${routineName}`, {
    params: {
      routineName: routineName,
    },
    headers: {
      Authorization: accessToken,
    },
  });
  let list: number[] = [];
  data.forEach((machine: { machineIdx: any }) => {
    list = list.concat(machine.machineIdx);
  });
  setList(list);
}
