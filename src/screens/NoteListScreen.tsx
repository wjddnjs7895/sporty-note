import React from 'react';
import styled from 'styled-components/native';
import NoteCardContainer from '../components/Container/NoteCardContainer';

import NoteListHeaderContainer from '../components/Container/NoteListHeaderContainer';
import { NoteListScreenProps } from '../constants/navigator';

const NoteListScreen = ({ navigation }: NoteListScreenProps) => {
  return (
    <ScreenStyled>
      <NoteListHeaderContainer />
      <NoteCardContainer navigation={navigation} />
    </ScreenStyled>
  );
};

const ScreenStyled = styled.View`
  width: 100%;
`;

export default NoteListScreen;
