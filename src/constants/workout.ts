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
  딥스: {
    url: require('../assets/workouts/dips.png'),
    index: 2,
  },
  랫풀다운: {
    url: require('../assets/workouts/dips.png'),
    index: 2,
  },
};
