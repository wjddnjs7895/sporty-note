import React from 'react';
import styled from 'styled-components/native';
import { NavigationProps } from '../../constants/navigator';
import { getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';

import NoteCard from '../Card/NoteCard';

function NoteCardContainer({ navigation }: NavigationProps<'NoteListScreen'>) {
  return (
    <ListStyled>
      <NoteCard workoutName="벤치프레스" onPress={() => navigation.push('NoteScreen', { machineIdx: 1 })} />
      <NoteCard workoutName="벤치프레스" />
      <NoteCard workoutName="벤치프레스" />
      <Blank width={getWidthPixel(170)} height={getWidthPixel(170)} />
    </ListStyled>
  );
}

const ListStyled = styled.View`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 100%;
`;

export default NoteCardContainer;
