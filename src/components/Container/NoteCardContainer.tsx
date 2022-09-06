import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { NavigationParam } from '../../constants/navigator';
import { getNoteListSelector } from '../../store/selectors/noteSelector';
import { getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';

import NoteCard from '../Card/NoteCard';

function NoteCardContainer({ navigation }: NativeStackScreenProps<NavigationParam, 'NoteListScreen'>) {
  const noteList = useRecoilValue(getNoteListSelector);
  return (
    <ListStyled>
      {noteList.map(note => {
        return <NoteCard key={note.machineIdx} {...note} onPress={() => navigation.push('NoteScreen', { ...note })} />;
      })}
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
