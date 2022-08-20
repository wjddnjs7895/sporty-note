import { atom } from 'recoil';
import { workoutProps } from '../../constants/types';

export const workoutState = atom<workoutProps>({
  key: 'workoutState',
  default: {
    engMachineName: '',
    krMachineName: '',
    targetArea: '',
    url: '',
    machineIdx: 0,
  },
});
