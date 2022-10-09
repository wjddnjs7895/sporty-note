import axios from 'axios';
import { selector } from 'recoil';
import { BASE__URL } from '../../constants';

export const getAllWorkoutSelector = selector<
  {
    engMachineName: string;
    krMachineName: string;
    machineIdx: number;
    imageUrl1: string;
    imageUrl2: string;
    targetArea: string;
    userFavoriteIdx: number;
    videoUrl1: string;
  }[]
>({
  key: 'machines/get' + Math.random(),
  get: async () => {
    const { data } = await axios.get(`${BASE__URL}machines/`);
    return data;
  },
});
