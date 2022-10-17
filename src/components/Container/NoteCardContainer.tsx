import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components/native';
import { NavigationProps } from '../../constants/navigator';
import { userState } from '../../store/atoms/userAtom';
import { getNoteListSelector } from '../../store/selectors/noteSelector';
import { getNoteListAPI } from '../../utils/api/note';
import { getWidthPixel } from '../../utils/responsive';
import Blank from '../Blank';

import NoteCard from '../Card/NoteCard';

function NoteCardContainer({ navigation }: NavigationProps) {
  const userData = useRecoilValue(userState);
  const [noteList, setList] = useState(useRecoilValue(getNoteListSelector({ ...userData })));
  const isFocused = useIsFocused();
  useEffect(() => {
    getNoteListAPI({ accessToken: userData.accessToken, setList: setList });
  }, [isFocused, userData.accessToken]);
  return (
    <ListStyled>
      {noteList.map(note => {
        return (
          <NoteCard
            key={note.machineIdx}
            {...note}
            onPress={() => navigation.push('NoteScreen', { goBackKey: 'NoteListScreen', ...note })}
          />
        );
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
