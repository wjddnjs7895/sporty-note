type WorkoutNameType = {
  [index: string]: {
    url: number;
    index: number;
  };
};

export const WORKOUT__INFO: WorkoutNameType = {
  벤치프레스: {
    url: require('../assets/workouts/barbell_flat_bench_press.png'),
    index: 1,
  },
};
