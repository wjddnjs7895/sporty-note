import { atom } from 'recoil';

export const workoutState = atom<{
  engMachineName: string;
  krMachineName: string;
  targetArea: string;
  url: string;
  machineIdx: number;
}>({
  key: 'workoutState',
  default: {
    engMachineName: '',
    krMachineName: '',
    targetArea: '',
    url: '',
    machineIdx: 0,
  },
});
