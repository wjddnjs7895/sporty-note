import React from 'react';
import { ScrollView } from 'react-native';

import Blank from '../components/Blank';
import NoteHeaderContainer from '../components/Container/NoteHeaderContainer';
import Note from '../components/Note';
import RoundNoteContainer from '../components/Container/RoundNoteContainer';
import { getHeightPixel } from '../utils/responsive';
import { NoteScreenProps } from '../constants/navigator';

const NoteScreen = ({ route }: NoteScreenProps) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <NoteHeaderContainer />
      <Blank height={getHeightPixel(40)} />
      <Note workoutName="벤치프레스" />
    </ScrollView>
  );
};

export default NoteScreen;
